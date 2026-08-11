# Countdown Block

Highlight upcoming events with a countdown timer, built for the WordPress block editor.

[![WordPress](https://img.shields.io/badge/WordPress-6.0%2B-blue.svg)](https://wordpress.org/plugins/countdown-block/)
[![PHP](https://img.shields.io/badge/PHP-7.4%2B-777bb4.svg)](https://www.php.net/)
[![License](https://img.shields.io/badge/license-GPL--3.0--or--later-green.svg)](https://www.gnu.org/licenses/gpl-3.0.html)

Using **Countdown**, you can notify visitors about upcoming events or big days. The plugin lets you create a countdown timer directly inside the Gutenberg block editor.

- **Completely customizable** — countdown dates, colors, typography and spacing.
- **Super lightweight** — no extra resources, optimized for fast loading and instant live editing.
- **Evergreen timers** — recurring, per-visitor countdowns backed by `localStorage`.

## Requirements

| | Minimum | Tested up to |
|---|---|---|
| WordPress | 6.0 | 7.0 |
| PHP | 7.4 | 8.5 |

## Installation

Install from the [WordPress plugin directory](https://wordpress.org/plugins/countdown-block/), or grab a release zip and upload it under **Plugins → Add New → Upload Plugin**.

## Development setup

This repository uses **git submodules** for the shared `controls` and `lib/style-handler` packages. Cloning without them will cause a fatal error on activation, because `countdown-block.php` requires `lib/style-handler/style-handler.php` at load time.

```bash
git clone --recursive git@github.com:EssentialBlocks/countdown-block.git
```

Already cloned without `--recursive`? Initialize them after the fact:

```bash
git submodule update --init --recursive
```

Then install dependencies and build:

```bash
npm install
npm run build     # production build (minified) — use this before committing dist/
npm start         # development build with watch
```

> **Note:** `dist/` is committed to this repository. Always commit the output of `npm run build`, never the unminified `npm start` output.

## Branches

| Branch | Purpose |
|---|---|
| `master` | Default branch |
| `latest` | Release integration |
| `dev` | Active development |

## Deployment

- `.github/workflows/deploy.yml` — deploys to WordPress.org on **tag** push.
- `.github/workflows/assets.yml` — deploys WordPress.org assets on push to `release/assets`.

WordPress.org banner and icon images live in `.wordpress-org/`.

## Contributors

- [@RahatSheikhLeon](https://github.com/RahatSheikhLeon)

Built and maintained by [WPDeveloper](https://wpdeveloper.com), the team behind [Essential Blocks](https://essential-blocks.com) and [Essential Addons for Elementor](https://wordpress.org/plugins/essential-addons-for-elementor-lite/).

## Documentation and support

- [Documentation](https://essential-blocks.com/docs/)
- [Issues and contributions](https://github.com/EssentialBlocks/countdown-block)
- [Support forum](https://wordpress.org/support/plugin/countdown-block)

## License

GPL-3.0-or-later. See [the license text](https://www.gnu.org/licenses/gpl-3.0.html).
