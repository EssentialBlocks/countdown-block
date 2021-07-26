/**
 * WordPress depencencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import { CountdownIcon } from "../util/icons";
import Edit from "./edit";
import Save from "./save";
import attributes from "./attributes";
import "./style.scss";

import example from "./example";

import metadata from "../block.json";

const { name, category } = metadata;

registerBlockType(name, {
	title: __("Countdown", "essential-blocks"),
	description: __("Highlight Upcoming Events With Countdown Timer", "block"),
	icon: CountdownIcon,
	category,
	attributes,
	keywords: [
		__("countdown", "essential-blocks"),
		__("eb counter", "essential-blocks"),
		__("eb countdown", "essential-blocks"),
	],
	edit: Edit,
	save: Save,
	example: example,
});
