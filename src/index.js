import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("essential-blocks/countdown", {
	title: __("Countdown", "essential-blocks"),
	description: __("", "essential-blocks"),
	category: "widgets",
	icon: "smiley",
	edit: Edit,
	save,
});
