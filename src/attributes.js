const attributes = {
	id: {
		type: "string",
	},
	date: {
		type: "string",
		source: "attribute",
		selector: ".eb-countdown-get-date",
		attribute: "data-date",
	},
	days: {
		type: "string",
		source: "text",
		selector: ".eb-countdown-digits-days",
		default: "0",
	},
	months: {
		type: "string",
		source: "text",
		selector: ".eb-countdown-digits-months",
		default: "0",
	},
	hours: {
		type: "string",
		source: "text",
		selector: ".eb-countdown-digits-hours",
		default: "0",
	},
	minutes: {
		type: "string",
		source: "text",
		selector: ".eb-countdown-digits-minutes",
		default: "0",
	},
	seconds: {
		type: "string",
		source: "text",
		selector: ".eb-countdown-digits-seconds",
		default: "0",
	},
	showDays: {
		type: "boolean",
		default: true,
	},
	showHours: {
		type: "boolean",
		default: true,
	},
	showMinutes: {
		type: "boolean",
		default: true,
	},
	showSeconds: {
		type: "boolean",
		default: true,
	},
	daysLabel: {
		type: "string",
		default: "Days",
	},
	hoursLabel: {
		type: "string",
		default: "Hours",
	},
	minutesLabel: {
		type: "string",
		default: "Minutes",
	},
	secondsLabel: {
		type: "string",
		default: "Seconds",
	},
	boxHeight: {
		type: "number",
	},
	boxWidth: {
		type: "number",
	},
	boxSpace: {
		type: "number",
	},
	justifyItems: {
		type: "string",
		default: "center",
	},
	linkedPadding: {
		type: "boolean",
		default: true,
	},
	paddingTop: {
		type: "number",
		default: 0,
	},
	paddingRight: {
		type: "number",
		default: 0,
	},
	paddingBottom: {
		type: "number",
		default: 0,
	},
	paddingLeft: {
		type: "number",
		default: 0,
	},
	radiusTopLeft: {
		type: "number",
		default: 5,
	},
	radiusTopRight: {
		type: "number",
		default: 5,
	},
	radiusBottomRight: {
		type: "number",
		default: 5,
	},
	radiusBottomLeft: {
		type: "number",
		default: 5,
	},
	showBorder: {
		type: "boolean",
		default: true,
	},
	borderColor: {
		type: "string",
	},
	borderSize: {
		type: "number",
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	showBoxShadow: {
		type: "boolean",
		default: true,
	},
	shadowColor: {
		type: "string",
	},
	hOffset: {
		type: "number",
	},
	vOffset: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	inlineItems: {
		type: "boolean",
		default: false,
	},
	digitFontSize: {
		type: "number",
	},
	digitFontWeight: {
		type: "number",
	},
	labelTransform: {
		type: "string",
		default: "none",
	},
	labelFontStyle: {
		type: "string",
		default: "normal",
	},
	labelFontDecoration: {
		type: "string",
		default: "initial",
	},
	labelLineHeight: {
		type: "number",
	},
	labelLeftPadding: {
		type: "number",
	},
	boxBackground: {
		type: "string",
	},
	digitColor: {
		type: "string",
	},
	labelColor: {
		type: "string",
	},
	daysBoxBackground: {
		type: "string",
	},
	linkedMargin: {
		type: "boolean",
		default: true,
	},
	marginTop: {
		type: "number",
		default: 0,
	},
	marginRight: {
		type: "number",
		default: 0,
	},
	marginBottom: {
		type: "number",
		default: 0,
	},
	marginLeft: {
		type: "number",
		default: 0,
	},
	boxTextAlign: {
		type: "string",
		default: "center",
	},
	labelFontSize: {
		type: "number",
	},
	wrapMarginTop: {
		type: "number",
	},
	wrapMarginRight: {
		type: "number",
	},
	wrapMarginBottom: {
		type: "number",
	},
	wrapMarginLeft: {
		type: "number",
	},
	wrapPaddingTop: {
		type: "number",
	},
	wrapPaddingRight: {
		type: "number",
	},
	wrapPaddingBottom: {
		type: "number",
	},
	wrapPaddingLeft: {
		type: "number",
	},
	wrapMarginUnit: {
		type: "string",
		default: "px",
	},
	wrapPaddingUnit: {
		type: "string",
		default: "px",
	},
	boxMarginUnit: {
		type: "string",
		default: "px",
	},
	boxPaddingUnit: {
		type: "string",
		default: "px",
	},
	radiusUnit: {
		type: "string",
		default: "%",
	},
	digitSizeUnit: {
		type: "string",
		default: "px",
	},
	labelSizeUnit: {
		type: "string",
		default: "px",
	},
	lineHeightUnit: {
		type: "string",
		default: "%",
	},
};

export default attributes;
