import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("block/countdown", {
	title: __("Countdown", "block"),
	description: __("", "block"),
	category: "widgets",
	attributes,
	icon,
	edit: Edit,
	save,
});
