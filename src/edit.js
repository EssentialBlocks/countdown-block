/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";

/**
 * Internal dependencies
 */
import Box from "./box";
import BoxContainer from "./box-container";
import Inspector from "./inspector";
import uuid from "../util/uuid";

class Edit extends Component {
	componentDidMount() {
		// Generate unique id
		let id = uuid().substr(0, 5);
		this.props.setAttributes({ id });
	}

	componentWillUnmount() {
		const { id } = this.props.attributes;

		// Remove interval from window object
		if (window[id]) {
			clearInterval(window[id]);
			delete window[id];
		}
	}

	render() {
		const { isSelected, attributes, setAttributes } = this.props;

		const {
			date,
			days,
			hours,
			minutes,
			seconds,
			showDays,
			showHours,
			showMinutes,
			showSeconds,
			daysLabel,
			hoursLabel,
			minutesLabel,
			secondsLabel,
			boxHeight,
			boxWidth,
			boxSpace,
			justifyItems,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			radiusTopLeft,
			radiusTopRight,
			radiusBottomRight,
			radiusBottomLeft,
			showBorder,
			borderSize,
			borderStyle,
			showBoxShadow,
			hOffset,
			vOffset,
			shadowBlur,
			shadowSpread,
			inlineItems,
			digitFontFamily,
			digitFontSize,
			digitFontWeight,
			digitLetterSpacing,
			digitLetterSpacingUnit,
			digitLineHeight,
			digitLineHeightUnit,
			labelTransform,
			labelFontStyle,
			labelFontDecoration,
			labelLineHeight,
			labelLeftPadding,
			boxBackground,
			digitColor,
			labelColor,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			boxTextAlign,
			borderColor,
			shadowColor,
			labelFontSize,
			wrapMarginTop,
			wrapMarginRight,
			wrapMarginBottom,
			wrapMarginLeft,
			wrapPaddingTop,
			wrapPaddingRight,
			wrapPaddingBottom,
			wrapPaddingLeft,
			wrapMarginUnit,
			wrapPaddingUnit,
			boxMarginUnit,
			boxPaddingUnit,
			radiusUnit,
			digitSizeUnit,
			labelSizeUnit,
			lineHeightUnit,
		} = attributes;

		const defaultBoxColor = "#7967ff";
		const defaultDigitColor = "#ffffff";
		const defaultLabelColor = "#ffffff";

		const wrapperStyle = {
			marginTop: `${wrapMarginTop || 0}${wrapMarginUnit}`,
			marginRight: `${wrapMarginRight || 0}${wrapMarginUnit}`,
			marginBottom: `${wrapMarginBottom || 0}${wrapMarginUnit}`,
			marginLeft: `${wrapMarginLeft || 0}${wrapMarginUnit}`,
			paddingTop: `${wrapPaddingTop || 0}${wrapPaddingUnit}`,
			paddingRight: `${wrapPaddingRight || 0}${wrapPaddingUnit}`,
			paddingBottom: `${wrapPaddingBottom || 0}${wrapPaddingUnit}`,
			paddingLeft: `${wrapPaddingLeft || 0}${wrapPaddingUnit}`,
		};

		const boxContainerStyle = {
			justifyContent: justifyItems,
		};

		const boxStyle = {
			height: `${boxHeight || 120}px`,
			width: `${boxWidth || 170}px`,
			margin: `0px ${boxSpace || 10}px`,
			padding: `${paddingTop}${boxPaddingUnit} ${paddingRight}${boxPaddingUnit} ${paddingBottom}${boxPaddingUnit} ${paddingLeft}${boxPaddingUnit}`,
			border: showBorder
				? `${borderSize || 0}px ${borderStyle} ${borderColor || "#000000"}`
				: "none",
			boxShadow: showBoxShadow
				? `${hOffset || 0}px ${vOffset || 0}px ${shadowBlur || 0}px ${
						shadowSpread || 0
				  }px ${shadowColor || "#000000"}`
				: "none",
			borderRadius: `${radiusTopLeft}${radiusUnit} ${radiusTopRight}${radiusUnit} ${radiusBottomRight}${radiusUnit} ${radiusBottomLeft}${radiusUnit}`,
			backgroundColor: boxBackground ? boxBackground : defaultBoxColor,
		};

		const boxItemStyle = {
			marginTop: `${marginTop}${boxMarginUnit}`,
			marginRight: `${marginRight}${boxMarginUnit}`,
			marginBottom: `${marginBottom}${boxMarginUnit}`,
			marginLeft: `${marginLeft}${boxMarginUnit}`,
			textAlign: boxTextAlign,
			display: inlineItems ? "flex" : undefined,
			justifyContent: inlineItems ? "center" : undefined,
			alignItems: inlineItems ? "center" : undefined,
		};

		const digitStyle = {
			fontFamily: digitFontFamily,
			fontSize: `${digitFontSize || 48}${digitSizeUnit}`,
			fontWeight: `${digitFontWeight || 400}`,
			letterSpacing: digitLetterSpacing
				? digitLetterSpacing + digitLetterSpacingUnit
				: undefined,
			lineHeight: digitLineHeight
				? digitLineHeight + digitLineHeightUnit
				: undefined,
			color: digitColor ? digitColor : defaultDigitColor,
			display: inlineItems ? "flex" : "block",
			flex: inlineItems ? 1 : undefined,
			justifyContent: inlineItems ? "center" : undefined,
		};

		const labelStyle = {
			fontSize: `${labelFontSize || 14}${labelSizeUnit}`,
			textTransform: labelTransform,
			fontStyle: labelFontStyle,
			textDecoration: labelFontDecoration,
			lineHeight: `${labelLineHeight || 100}${lineHeightUnit}`,
			paddingLeft: `${labelLeftPadding}px`,
			color: labelColor || defaultLabelColor,
			display: inlineItems ? "flex" : "block",
			flex: inlineItems ? 1 : undefined,
			justifyContent: inlineItems ? "flex-start" : undefined,
		};

		const displayDays = showDays ? "block" : "none";
		const displayHours = showHours ? "block" : "none";
		const displayMinutes = showMinutes ? "block" : "none";
		const displaySeconds = showSeconds ? "block" : "none";

		return [
			isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			),

			// Edit view here
			<BoxContainer
				boxContainerStyle={boxContainerStyle}
				wrapperStyle={wrapperStyle}
			>
				<Box
					boxName="days"
					boxStyle={{ ...boxStyle, display: displayDays }}
					boxItemStyle={boxItemStyle}
					label={daysLabel}
					digit={days}
					digitStyle={digitStyle}
					labelStyle={labelStyle}
				/>

				<Box
					boxName="hours"
					boxStyle={{ ...boxStyle, display: displayHours }}
					boxItemStyle={boxItemStyle}
					digit={hours}
					digitStyle={digitStyle}
					label={hoursLabel}
					labelStyle={labelStyle}
				/>

				<Box
					boxName="minutes"
					boxStyle={{ ...boxStyle, display: displayMinutes }}
					boxItemStyle={boxItemStyle}
					label={minutesLabel}
					digit={minutes}
					digitStyle={digitStyle}
					labelStyle={labelStyle}
				/>

				<Box
					boxName="seconds"
					boxStyle={{ ...boxStyle, display: displaySeconds }}
					boxItemStyle={boxItemStyle}
					label={secondsLabel}
					digit={seconds}
					digitStyle={digitStyle}
					labelStyle={labelStyle}
				/>
			</BoxContainer>,
		];
	}
}

export default Edit;
