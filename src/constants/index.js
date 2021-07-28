const { __ } = wp.i18n;
const { Dashicon } = wp.components;

export const STYLE_PRESETS = [
	{ label: __("Default"), value: "default" },
	{ label: __("Preset 1"), value: "preset1" },
	{ label: __("Preset 2"), value: "preset2" },
	{ label: __("Preset 3"), value: "preset3" },
	{ label: __("Preset 4"), value: "preset4" },
	{ label: __("Preset 5"), value: "preset5" },
	{ label: __("Preset 6"), value: "preset6" },
	{ label: __("Preset 7"), value: "preset7" },
];

export const SEPARATOR_TYPES = [
	{ label: __("Dotted"), value: ":" },
	{ label: __("Solid"), value: "|" },
];
export const LAYOUT_TYPES = [
	{ label: "Grid View", value: "row" },
	{ label: "List View", value: "column" },
];

// export const BG_TYPES = ["fill", "gradient"];
export const ALIGN_ITEMS = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" },
];

export const JUSTIFY_CONTENTS = [
	{ label: __("Start"), value: "flex-start" },
	{ label: __("Center"), value: "center" },
	{ label: __("End"), value: "flex-end" },
	{ label: __("Space-Between"), value: "space-between" },
	{ label: __("Space-around"), value: "space-around" },
	{ label: __("Space-Evenly"), value: "space-evenly" },
];

export const FLEX_DIRECTIONS = [
	{ label: "Row", value: "row" },
	{ label: "Row-Reverse", value: "row-reverse" },
	{ label: "Column", value: "column" },
	{ label: "Column-Reverse", value: "column-reverse" },
];
