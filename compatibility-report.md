# Countdown Block — PHP / WordPress Compatibility Report

- **Plugin:** Countdown Block (`countdown-block`)
- **Base branch:** `latest` @ `d23adee` (the branch that actually holds 1.2.8; `master` is stale at 1.2.6)
- **Work branch:** `countdown-block-dev`
- **Version:** 1.2.8 → **1.5.0** (minor)
- **Date audited:** 2026-08-09
- **Committed:** no. Working tree left dirty for review.

---

## 1. Detected original baseline (from code, not headers)

### PHP floor: **5.6**

| Evidence | File:line | Implies |
|---|---|---|
| `public static function get_instance( ...$args )` — variadics | `includes/font-loader.php:21` | PHP 5.6+ |
| `new static( ...$args )` — argument unpacking | `includes/font-loader.php:23` | PHP 5.6+ |
| `[]` short array syntax throughout | many | PHP 5.4+ |
| Closures (`function ( $attributes, $content ) { … }` as `render_callback`) | `countdown-block.php:96` | PHP 5.3+ |
| No `??`, no `<=>`, no return types, no typed properties, no arrow fns, no `match`, no enums | — | **not** 7.x-authored |

So the code was written against a **PHP 5.6-era** target — *except* one PHP 8.0-only call
(`str_contains`, added in 1.2.x by a later contributor) which contradicts that floor. That's
finding **P1** below.

### WordPress floor: **5.6**

| Evidence | File:line | Implies |
|---|---|---|
| `block.json` with `"apiVersion": 2` | `block.json:5` | WP 5.6+ (apiVersion 2 landed in 5.6) |
| `register_block_type( <path> )` path form | `countdown-block.php:93` | WP 5.8+ (see **P19**) |
| Explicit `(float) get_bloginfo('version') <= 5.6` fork | `includes/helpers.php:88` | author targeted 5.6 as floor |
| `WP_Block_Type_Registry::get_instance()` | `countdown-block.php:91` | WP 5.0+ |
| `rest_after_save_widget` hook (submodule) | `lib/style-handler/style-handler.php:30` | WP 5.8+ |
| `wp_is_block_theme()` (guarded by `function_exists`) | `lib/style-handler/style-handler.php:33` | WP 5.9+, safely gated |
| No `wp_interactivity_*`, no `apiVersion: 3` | — | not 6.3/6.5-authored |

### Declared vs. detected

| Field | Declared before | Detected reality | Agreed? |
|---|---|---|---|
| Plugin header `Requires at least` | *(absent)* | 5.6 | ✗ missing |
| Plugin header `Tested up to` | *(absent)* | — | ✗ missing |
| Plugin header `Requires PHP` | *(absent)* | 5.6 by syntax, **8.0 by `str_contains`** | ✗ missing + internally contradictory |
| `readme.txt` `Requires at least` | 5.6 | 5.6 | ✓ |
| `readme.txt` `Tested up to` | 6.5 | — | stale by ~4 majors |
| `readme.txt` `Requires PHP` | *(absent)* | — | ✗ missing |

---

## 2. Target range

Live version check performed **2026-08-09**:

- `https://www.php.net/releases/index.php?json&max=4` → latest **PHP 8.5.9**; `active.php` → actively supported **8.2, 8.3, 8.4, 8.5**
- `https://api.wordpress.org/core/version-check/1.7/` → current **WordPress 7.0.3** (core itself requires PHP ≥ 7.4)

**Target range audited:** PHP **5.6 → 8.5**, WordPress **5.6 → 7.0.3**.

Per-version checklist walked, nothing skipped:

- **PHP:** 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5
- **WordPress:** 5.6, 5.7, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0

Local toolchain used for verification: **PHP 8.5.8 (CLI)**.

**Submodules.** `lib/style-handler` and `controls` were registered but *not checked out* in this
working copy — `lib/style-handler/style-handler.php` is `require_once`d unconditionally by
`countdown-block.php:31`, so an uninitialised checkout is an instant fatal. I ran
`git submodule update --init --recursive` to make the code auditable. Both are now at their
pinned commits (`74863767` and `807ed39e`). This is a checkout-state change, not a code change.

---

## 3. Audit table

Severity: **Critical** = fatal / data loss · **High** = fatal or broken feature on a supported
version · **Medium** = notice/warning or silent misbehaviour · **Low** = hygiene.

### Plugin code (fixed on this branch unless marked FLAGGED)

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| P1 | `includes/helpers.php:46` | `str_contains()` called with no polyfill/guard. It's a PHP 8.0 function; WP core only polyfills it from **WP 5.9**. On WP 5.6–5.8 + PHP < 8.0 → `Call to undefined function str_contains()` fatal in wp-admin. | PHP < 8.0 **and** WP < 5.9 | **High** |
| P2 | `includes/helpers.php:88` | `(float) get_bloginfo('version') <= 5.6` — float-casting a version string. `"5.10"` → `5.1` → wrongly takes the legacy branch and registers the block by name instead of path, so the block silently fails to register. | any WP x.10+ | **High** |
| P3 | `includes/helpers.php:48` | `$controls_dependencies = include_once …/dist/modules.asset.php;` — `include_once` returns **`true`**, not the array, if that path was already included. Then `$controls_dependencies['dependencies']` is an array offset on `bool` (warning, PHP 7.4+) yielding `null`, and `array_merge(null)` is a **TypeError fatal** on PHP 8.0+. Also no `file_exists()` guard. | PHP 8.0+ (fatal), 7.4 (warning) | **High** |
| P4 | `includes/font-loader.php:97` | `trim( $font )` where `$font` comes straight from block attributes and may be `null`. Passing `null` to a non-nullable internal string param is deprecated in **PHP 8.1** and slated for removal. | PHP 8.1+ | **Medium** |
| P5 | `includes/font-loader.php:70` | `$googleFontFamily[$attributes[$key]] = $attributes[$key];` — a `null` attribute value becomes the empty-string array key `""`, which then flows into the Google Fonts URL as an empty `family` segment. Also warns on PHP 8.x when the value is an array. | PHP 8.0+ | **Medium** |
| P6 | `includes/font-loader.php:52` | `$block['blockName']` read without `isset()`. `render_block` is a public filter; third-party callers pass arrays without that key → "Undefined array key" warning. | PHP 8.0+ | **Medium** |
| P7 | `countdown-block.php:1` | No `if ( ! defined( 'ABSPATH' ) ) exit;` guard on the main plugin file (every other PHP file has one). Direct HTTP request to the file executes it outside WP. | all | **Medium** |
| P8 | `countdown-block.php:39-40` | `$script_asset['dependencies']` / `$script_asset['version']` used unvalidated after `require`. Malformed manifest → array-offset-on-bool warning then `array_merge()` TypeError. | PHP 8.0+ | **Medium** |
| P9 | `countdown-block.php` header | No `Requires PHP`, `Requires at least`, `Tested up to`. WP therefore can't block installation on an unsupported PHP, which is what makes P1 reachable in the wild. | all | **Medium** |
| P10 | `includes/helpers.php:46` | `$_SERVER['QUERY_STRING']` read without `wp_unslash()` / `sanitize_text_field()`. Not output, so not an XSS today, but it fails WPCS and is a footgun. | all | **Low** |
| P11 | `includes/post-meta.php:12` | `add_filter( 'init', … )` used to register an action callback. Works (WP shares one hook registry) but is wrong and silently drops any future return-value semantics. | all | **Low** |
| P12 | `readme.txt:5` | `Tested up to: 6.5` — four majors stale; wp.org shows the plugin as untested/abandoned. | all | **Low** |
| P13 | `countdown-block.php:36` | `throw new Error( 'You need to run npm run build…' )` — uncaught, so a missing `dist/index.asset.php` is a site-wide WSOD instead of an admin notice. Not version-dependent (pre-PHP-7 it fatals as "Class 'Error' not found" instead), so no regression across the range — but a poor failure mode. | all (equally) | **Medium** · FLAGGED |
| P14 | `includes/helpers.php:59` | `'eb_wp_version' => (float) get_bloginfo('version')` — same float cast as P2, but this value crosses into JS (`controls/src/helpers/index.js:218` does `eb_wp_version >= 5.8`). Changing the type would break that comparison. | WP x.10+ | **Medium** · FLAGGED |
| P15 | `block.json:7` | `"textdomain": "countdown"` but the plugin's text domain is `countdown-block`. The block's `title` and `description` therefore never resolve against the wp.org language packs. | all | **Medium** · FLAGGED |
| P16 | `block.json:5` | `"apiVersion": 2`. v3 (WP 6.3+) is what the iframed editor expects; v2 blocks still work but are rendered through a compatibility path. | WP 6.3+ (degraded, not broken) | **Low** · FLAGGED |
| P17 | `assets/js/eb-animation-load.js:26` | `window.addEventListener('DOMNodeInserted', …)` — Mutation Events were **removed in Chrome 127** (Jul 2024) and Firefox 130. The listener silently never fires, so the editor's live animation-preview refresh is already dead in every current browser. | Chrome 127+, Firefox 130+ | **Medium** · FLAGGED |
| P18 | `assets/js/eb-animation-load.js:1,41,59` | `isInViewport`, `replaceAnimationClasses`, `waitForElement` declared as unprefixed `window` globals. Essential Blocks core ships the same file, so whichever loads second wins. | all | **Low** · FLAGGED |
| P19 | `includes/helpers.php:88` | The WP fork switches to the `register_block_type( <path> )` form from **5.7** onward, but core only started accepting a directory path in **5.8**. On WP 5.7 the block therefore fails to register. Distinct from P2: P2 is the float cast, this is the threshold value itself being off by one minor. | WP 5.7 | **High** · FLAGGED |

No jQuery is used anywhere in the plugin, so the jQuery 3.x / Migrate removal checklist
(`.live()`, `.size()`, `.andSelf()`, `$.browser`, `$.parseJSON`, `$.trim`, `.load/.unload/.error`)
is **not applicable** — verified by grep over `src/` and `assets/js/`.

Also checked and **clean**: no `mysql_*`, `create_function()`, `each()`, `ereg*`, `split()`,
`money_format()`, `strftime()`, `utf8_encode/decode`, `FILTER_SANITIZE_STRING`, `${var}`
interpolation, curly-brace offsets, dynamic properties on non-`#[AllowDynamicProperties]`
classes, implicit-nullable params, optional-before-required params, `#[\ReturnTypeWillChange]`
candidates, or REST routes missing `permission_callback` (the plugin registers no REST routes).
Text domain is never loaded manually, so the WP 6.7+ "too early `_load_textdomain_just_in_time`"
notice does not apply.

### Submodule `lib/style-handler` — audited, NOT modified

This is a separate git repository (`EssentialBlocks/style-handler`) vendored via `.gitmodules`,
shared by every Essential Blocks sibling plugin. Editing it here would dirty a different repo and
push the change to every consumer, so I audited it and left it alone.

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| S1 | `includes/class-parse-css.php:193` | `str_contains()` with no guard — identical to **P1**. | PHP < 8.0 **and** WP < 5.9 | **High** |
| S2 | `includes/class-parse-css.php:33` | `$attributes = $item['attrs'];` without `isset()`. `parse_blocks()` output for a classic/freeform chunk has no `attrs`. | PHP 8.0+ | **Medium** |
| S3 | `includes/class-parse-css.php:53-54` | `get_post( $attributes['ref'] )` can return `null` for a deleted reusable block → `$reusable_block->post_content` warning → `parse_blocks( null )` deprecation. | PHP 8.0+ / 8.1+ | **Medium** |
| S4 | `style-handler.php:307, 324, 362` | Bare `mkdir()` with no `recursive` flag, no return check, and no `wp_mkdir_p()`. Fails silently if `wp-content/uploads/eb-style/` can't be created; the subsequent `file_put_contents()` then warns. | all | **Medium** |
| S5 | `style-handler.php:154, 163, 174, 182, 187` | Stylesheet version is `substr( md5( microtime( true ) ), 0, 10 )` — a fresh cache-buster on **every page load**, so the generated CSS is never browser-cached. | all | **Medium** |
| S6 | `style-handler.php:309, 326, 366, 375` | Direct `file_put_contents()` / `file_get_contents()` instead of `WP_Filesystem`. Breaks on hosts with restricted direct FS writes and fails wp.org plugin-review checks. | all | **Low** |
| S7 | `style-handler.php:385` | `"… FROM {$wpdb->prefix}posts …"` — should be `$wpdb->posts` (correct for multisite/custom table setups). The `prepare()` itself is correct. | multisite edge cases | **Low** |
| S8 | `style-handler.php:355-357` | `$seperateStyles` is built and never used — dead code. | — | **Low** |

The `controls` submodule contains **no PHP** (verified by `find controls -name '*.php'`), so it is
out of scope for this pass apart from **P14**'s JS consumer.

---

## 4. Fixes applied

Mapped 1:1 to the audit table. All are behaviour-identical on every version in the target range.

| # | Fix | File |
|---|---|---|
| P1 | `str_contains( $q, 'gutenberg-edit-site' )` → `strpos( $q, 'gutenberg-edit-site' ) !== false`. Identical semantics, available since PHP 4. Removes the only hard PHP-8-only dependency in the plugin. | `includes/helpers.php:46` |
| P2 | `(float) get_bloginfo('version') <= 5.6` → `version_compare( get_bloginfo('version'), '5.7', '<' )`. Verified equivalent for every real WP release — see §8. | `includes/helpers.php:88` |
| P3 | `include_once` → `file_exists()` guard + `require`, then `is_array()` validation and `isset()`-guarded reads into `$controls_deps` / `$controls_version`. Falls back to `COUNTDOWN_VERSION` if the manifest lacks a version. | `includes/helpers.php:48-62` |
| P4 | `trim( $font )` → `trim( (string) $font )`, with empty results skipped so no blank `family` segment reaches the Google Fonts URL. | `includes/font-loader.php:97` |
| P5 | `get_fonts_family()` now guards `is_array( $attributes )`, guards an empty `preg_grep` result, and skips any value that isn't a non-empty string. | `includes/font-loader.php:66-73` |
| P6 | `$block['blockName']` → `isset()`-guarded local `$block_name`, plus an `is_array( $block )` guard on the filter input. | `includes/font-loader.php:50-52` |
| P7 | Added `if ( ! defined( 'ABSPATH' ) ) { exit; }` after the header block. | `countdown-block.php:17-20` |
| P8 | `$script_asset` validated with `is_array()`; `dependencies` / `version` read through `isset()` into `$asset_dependencies` / `$asset_version`. | `countdown-block.php:38-44` |
| P9 | Added `Requires at least: 5.6`, `Tested up to: 7.0`, `Requires PHP: 7.0` to the plugin header. | `countdown-block.php:7-9` |
| P10 | `$_SERVER['QUERY_STRING']` → `sanitize_text_field( wp_unslash( … ) )` into `$query_string`, hoisted above the branch. The `gutenberg-edit-site` substring survives sanitisation, so matching is unchanged. | `includes/helpers.php:41` |
| P11 | `add_filter( 'init', … )` → `add_action( 'init', … )`. | `includes/post-meta.php:12` |
| P12 | `readme.txt`: `Tested up to: 6.5` → `7.0`, added `Requires PHP: 7.0`. | `readme.txt:5-6` |
| — | Version bumped 1.2.8 → 1.5.0 in all four places: plugin header, `COUNTDOWN_VERSION`, `readme.txt` `Stable tag`, `package.json`. Changelog entry added. No `composer.json` in this plugin. | 4 files |

### Why `Requires PHP: 7.0` and not `5.6`

The syntax floor is genuinely 5.6, but declaring 5.6 would be dishonest in both directions:
WordPress 7.0 itself refuses to run below PHP 7.4, and the plugin has never been exercised on
5.6 in CI. 7.0 is the lowest floor that is both syntactically true and defensible. Raising it to
**7.4** (matching WP core's own floor) is the cleaner call — see the decisions list.

---

## 5. Flagged, NOT auto-fixed — need your decision

Each of these changes something a user or another plugin can observe, so per the
compatibility-only scope I left them alone.

1. **P13 — `throw new Error()` on a missing build (`countdown-block.php:36`).**
   *Recommendation:* replace with an early `return` plus an `admin_notices` message. A missing
   `dist/` never happens in a wp.org zip, but when it does happen (a broken deploy, a partial
   FTP upload) the current code takes the entire site down, admin included, with no way back in.
   Not version-dependent, so nothing regresses if you leave it.

2. **P14 — `eb_wp_version` passed to JS as a float (`includes/helpers.php:59`).**
   `controls/src/helpers/index.js:218` does `if (eb_wp_version >= 5.8)`. Making it a string
   breaks that comparison. Today WP 7.0.3 → `7.0`, which still passes, and WP has never shipped
   an `x.10`, so this is latent rather than live.
   *Recommendation:* add a **second** key (`eb_wp_version_string`) alongside the float, migrate
   the `controls` submodule to it, then drop the float. That's a two-repo change and belongs in a
   coordinated Essential Blocks release, not here.

3. **P15 — `block.json` `textdomain` is `countdown`, should be `countdown-block`.**
   *Recommendation:* fix it. The block title and description currently never translate. English
   output is byte-identical either way; only non-English locales change — which is the whole
   point. I left it because it is, strictly, user-facing output.

4. **P16 — `block.json` `apiVersion: 2` → `3`.**
   *Recommendation:* defer. v3 is the right long-term target for the iframed editor, but it needs
   an editor smoke test across WP 6.3–7.0, which is more than a compatibility pass.

5. **P17 — `DOMNodeInserted` in `assets/js/eb-animation-load.js:26`.**
   *Recommendation:* port to `MutationObserver` (the same file already uses one at line 65, so
   the pattern is right there). This restores an editor-preview refresh that has been silently
   dead since Chrome 127 shipped in July 2024. It's a behaviour change only in the sense that a
   broken thing starts working again.

6. **P18 — unprefixed JS globals in `eb-animation-load.js`.**
   *Recommendation:* wrap in an IIFE. Deferred because Essential Blocks core ships a
   byte-identical file and they should be changed together.

7. **S1–S8 — the entire `lib/style-handler` submodule.**
   *Recommendation:* fix **S1** (the `str_contains` fatal) in the `style-handler` repo and bump
   the pointer here. S1 is the same High-severity bug as P1 and I've fixed only the plugin-side
   copy, so the exposure is halved but not closed. The rest can follow at your pace. Say the word
   and I'll do the submodule as its own branch in its own repo.

8. **P19 — WP 5.7 block registration.** Change the threshold in
   `get_block_register_path()` from `'5.7'` to `'5.8'` so WP 5.7 takes the legacy
   register-by-name branch instead of handing core a path it can't parse. One-word change, fixes
   a real break, but it alters behaviour on a shipped WP version so I want your sign-off. Moot if
   you raise the WP floor to 6.0 as suggested in §6.

9. **Uninitialised submodules.** I ran `git submodule update --init --recursive` to make the code
   readable. Worth deciding separately whether `countdown-block.php:31` should guard its
   `require_once` with `file_exists()` — right now a developer who clones without `--recursive`
   gets a fatal with no explanation. That's a one-line change I can make if you want it.

---

## 6. Old-vs-new conflicts

**One, and it's the declared PHP floor.** The code is syntactically valid on PHP 5.6, but:

- WordPress 7.0 requires PHP ≥ 7.4, so no user on a supported WP can be below 7.4 anyway;
- `readme.txt` claims `Requires at least: 5.6` for WordPress, and WP 5.6–5.8 lacks the
  `str_contains` polyfill — which is exactly what made P1 reachable.

I resolved it toward the safe side: fixed the code so it genuinely runs on the old floor
(P1 no longer needs PHP 8), and declared `Requires PHP: 7.0`, which is true and conservative.
The trade-off: declaring 7.0 rather than 7.4 keeps a window (PHP 7.0–7.3) that nobody tests and
that no supported WordPress can pair with.

**Recommendation — now APPLIED (follow-up pass, see §9).** Both floors were raised to
`Requires PHP: 7.4` and `Requires at least: 6.0`. That matches WP core's own minimum and drops
five untested PHP minors and four untested WP minors. The WP 5.6 fork in
`Countdown_Helper::get_block_register_path()` is now unreachable on any supported install but
was deliberately left in place — see §9.

Separately: `register_block_type( <path> )` only started accepting a directory in **WP 5.8**, but
the fork at `helpers.php:88` switches to the path form from **5.7** onward. So WP 5.7 is broken
today and stays broken after this pass — I preserved the exact original threshold rather than
silently changing behaviour on a live version. Changing `'5.7'` to `'5.8'` fixes it; that's
finding **P19** and it's yours to approve.

---

## 7. Declared compatibility after this pass

| Field | Before | After |
|---|---|---|
| Plugin header `Requires at least` | *(absent)* | **6.0** |
| Plugin header `Tested up to` | *(absent)* | **7.0** |
| Plugin header `Requires PHP` | *(absent)* | **7.4** |
| `readme.txt` `Requires at least` | 5.6 | **6.0** |
| `readme.txt` `Tested up to` | 6.5 | **7.0** |
| `readme.txt` `Requires PHP` | *(absent)* | **7.4** |
| `readme.txt` `Stable tag` | 1.2.8 | **1.5.0** |
| `package.json` `version` | 1.2.8 | **1.5.0** |
| `COUNTDOWN_VERSION` | 1.2.8 | **1.5.0** |

---

## 8. Verification performed

**Syntax — clean.**

```
find . -name '*.php' -not -path './node_modules/*' -print0 | xargs -0 -n1 php -l
```

7 files (4 plugin + 1 main + 2 submodule), PHP 8.5.8 CLI, zero errors.

**Runtime smoke test — clean.** Ran `includes/font-loader.php` under PHP 8.5.8 with
`error_reporting(E_ALL)` and a minimal WP function stub, exercising every input shape P4/P5/P6
describe:

- `get_fonts_family([ 'titleFontFamily' => null, 'xFontFamily' => 'Roboto', 'yFontFamily' => '', 'zFontFamily' => ['a'] ])` → `['Roboto' => 'Roboto']`, no notices
- `get_fonts_family([])` → `[]`, no notices
- `get_fonts_on_render_block( 'X', ['attrs' => ['aFontFamily' => null]] )` — block array with no `blockName` key → returns `'X'`, no notices
- `fonts_loader()` over `['Default' => 'Default', '' => null, 'Open Sans' => 'Open Sans']` → no deprecations

**P2 equivalence proof.** Old expression vs. new, across every WP version in range:

| WP | `(float)$v <= 5.6` | `version_compare($v,'5.7','<')` | same? |
|---|---|---|---|
| 5.6 | NAME | NAME | ✓ |
| 5.6.2 | NAME | NAME | ✓ |
| 5.7 | PATH | PATH | ✓ |
| 5.8 | PATH | PATH | ✓ |
| 5.9 | PATH | PATH | ✓ |
| 6.0 | PATH | PATH | ✓ |
| 6.5 | PATH | PATH | ✓ |
| 6.8 | PATH | PATH | ✓ |
| 6.10 | PATH *(via 6.1)* | PATH | ✓ |
| 7.0 | PATH | PATH | ✓ |
| 7.0.3 | PATH | PATH | ✓ |
| 7.10 | PATH *(via 7.1)* | PATH | ✓ |

Identical for every release WordPress has ever shipped. The two differ only on a hypothetical
`5.10`, which is precisely the bug being closed.

**phpcs:** not installed on this machine (`command -v phpcs` → not found). Skipped rather than
installing global tooling unasked.

**Not verified:** no live WP install was booted, so nothing here is confirmed against a running
site. The changes are defensive guards and a version-comparison swap, both proven equivalent
above, but a smoke test on WP 7.0 and on the oldest WP you intend to support is still worth
doing before release.

**Git state:** branch `countdown-block-dev`, cut from `latest` @ `d23adee`. Six files modified,
nothing committed, nothing pushed.

```
 M countdown-block.php      | 21 +++++++++++++++++----
 M includes/font-loader.php | 25 +++++++++++++++++++++----
 M includes/helpers.php     | 26 ++++++++++++++++++++------
 M includes/post-meta.php   |  2 +-
 M package.json             |  2 +-
 M readme.txt               | 12 ++++++++++--
```

---

## 9. Follow-up pass — support floors raised to WP 6.0 / PHP 7.4

Requested change: minimum WordPress **6.0**, minimum PHP **7.4**. This supersedes the `5.6 / 7.0`
values recorded in §4 rows P9 and P12.

| File | Line | Before | After |
|---|---|---|---|
| `countdown-block.php` | 8 | `Requires at least: 5.6` | `Requires at least: 6.0` |
| `countdown-block.php` | 10 | `Requires PHP:  7.0` | `Requires PHP:  7.4` |
| `readme.txt` | 4 | `Requires at least: 5.6` | `Requires at least: 6.0` |
| `readme.txt` | 6 | `Requires PHP: 7.0` | `Requires PHP: 7.4` |

`Tested up to: 7.0` unchanged in both files. `Stable tag`, `COUNTDOWN_VERSION`, and
`package.json` `version` are release identifiers, not compatibility floors — untouched.

**No other file declares a floor.** Checked and confirmed clean:

- no `composer.json` in this plugin, so there is no `require.php` constraint to raise;
- `block.json` carries no `requiresAtLeast` / `wpVersion` key (it is `apiVersion: 2` only);
- `.github/workflows/deploy.yml` and `assets.yml` pin only `node-version: '14'`; neither sets up
  PHP nor passes a WP version to the 10up deploy actions, so nothing in CI contradicts the new
  floors;
- no runtime `version_compare()` guard anywhere enforces a *minimum* — the only one present is the
  block-registration fork below.

### Consequence: dead branch in `get_block_register_path()`

`includes/helpers.php:102` still reads:

```php
if (version_compare(get_bloginfo('version'), '5.7', '<')) {
    return $blockname;
}
```

With a declared floor of WP 6.0 this branch is unreachable on any install WordPress will let the
plugin onto. It was **left in place on purpose**: `Requires at least` is enforced by WP on
install/update, but not on a plugin copied into `wp-content/plugins` by hand or shipped inside a
pre-built site, so the fork is still a live safety net for that path. Deleting it plus finding
**P19** (`'5.7'` → `'5.8'`) is now a pure cleanup with no behavioural risk on supported versions —
still your call, still not applied.

**Verification for this pass:** `php -l` clean on both edited PHP files. Header and `readme.txt`
values re-read after editing and confirmed. No code paths changed, so the §8 runtime smoke tests
remain valid as-is.
