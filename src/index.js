import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";

registerBlockType("essential-blocks/countdown", {
	title: __("Countdown", "essential-blocks"),
	description: __("", "essential-blocks"),
	category: "widgets",
	icon,
	edit: Edit,
	save,
});
