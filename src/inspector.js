/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	RangeControl,
	SelectControl,
	Button,
	ButtonGroup,
	BaseControl,
	Dropdown,
} from "@wordpress/components";
import moment from "moment";
import DateTime from "react-datetime";

/**
 * Internal dependencies
 */
import {
	BORDER_STYLES,
	BOX_JUSTIFY_CONTENT,
	DIGIT_FONT_WEIGHT,
	FONT_DECORATION,
	FONT_STYLES,
	LABEL_TRANSFORM,
	TEXT_ALIGN,
} from "./constants";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";
import FontPicker from "../util/typography-control/FontPicker";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		id,
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
		labelFontFamily,
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

	const onDateTimeChange = (momentObj) => {
		let date = momentObj._d;

		// ignore invalid date
		if (!date) return;

		let time = date.getTime();

		const counter = () => {
			let now = new Date().getTime();
			let currentUtcOffset = moment(date).utcOffset() * 60 * 1000;

			let timer = new Date(time - now - currentUtcOffset);

			if (time < now) {
				setAttributes({ days: "0", hours: "0", minutes: "0", seconds: "0" });
				return;
			}

			// Calculate days, hours, minutes and seconds
			let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * miliseconds
			let days = Math.floor((time - now) / oneDay).toString();
			let hours = timer.getHours().toString();
			let minutes = timer.getMinutes().toString();
			let seconds = timer.getSeconds().toString();

			setAttributes({ date, days, hours, minutes, seconds });
		};

		// Clear interval if countdown already exists
		if (window[id]) {
			clearInterval(window[id]);
		}

		if (id) {
			window[id] = setInterval(counter, 1000);
		}
	};

	const yesterday = moment().subtract(1, "day");

	const valid = (current) => current.isAfter(yesterday);

	const DIGIT_LINE_HEIGHT_MAX = digitLineHeightUnit === "em" ? 10 : 100;
	const DIGIT_LINE_HEIGHT_STEP = digitLineHeightUnit === "em" ? 0.1 : 1;

	const DIGIT_LETTER_SPACING_MAX = digitLetterSpacingUnit === "em" ? 10 : 100;
	const DIGIT_LETTER_SPACING_STEP = digitLetterSpacingUnit === "em" ? 0.1 : 1;

	return (
		<InspectorControls key="controls">
			<PanelBody title={__("Timer Setting")}>
				<BaseControl
					id="eb-countdown-due-date"
					label={__("Countdown Due Date")}
				>
					<DateTime
						value={date}
						dateFormat="YYYY-MM-DD-A"
						timeFormat="h:mm A"
						onChange={(momentObj) => onDateTimeChange(momentObj)}
						isValidDate={valid}
					/>
				</BaseControl>
			</PanelBody>

			<PanelBody title={__("Context Setting")}>
				<ToggleControl
					label={__("Display Days")}
					checked={showDays}
					onChange={() => setAttributes({ showDays: !showDays })}
				/>

				<ToggleControl
					label={__("Display Hours")}
					checked={showHours}
					onChange={() => setAttributes({ showHours: !showHours })}
				/>

				<ToggleControl
					label={__("Display Minutes")}
					checked={showMinutes}
					onChange={() => setAttributes({ showMinutes: !showMinutes })}
				/>

				<ToggleControl
					label={__("Display Seconds")}
					checked={showSeconds}
					onChange={() => setAttributes({ showSeconds: !showSeconds })}
				/>

				<TextControl
					label={__("Custom Label For Days")}
					value={daysLabel}
					onChange={(newValue) => setAttributes({ daysLabel: newValue })}
				/>
				<TextControl
					label={__("Custom Label For Hours")}
					value={hoursLabel}
					onChange={(newValue) => setAttributes({ hoursLabel: newValue })}
				/>
				<TextControl
					label={__("Custom Label For Minutes")}
					value={minutesLabel}
					onChange={(newValue) => setAttributes({ minutesLabel: newValue })}
				/>
				<TextControl
					label={__("Custom Label For Seconds")}
					value={secondsLabel}
					onChange={(newValue) => setAttributes({ secondsLabel: newValue })}
				/>
			</PanelBody>

			<PanelBody title={__("Container Margin & Padding")} initialOpen={false}>
				<UnitControl
					selectedUnit={wrapMarginUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "em", value: "em" },
						{ label: "%", value: "%" },
					]}
					onClick={(wrapMarginUnit) => setAttributes({ wrapMarginUnit })}
				/>

				<DimensionsControl
					label={__("Margin")}
					top={wrapMarginTop}
					right={wrapMarginRight}
					bottom={wrapMarginBottom}
					left={wrapMarginLeft}
					onChange={({ top, right, bottom, left }) =>
						setAttributes({
							wrapMarginTop: top,
							wrapMarginRight: right,
							wrapMarginBottom: bottom,
							wrapMarginLeft: left,
						})
					}
				/>

				<UnitControl
					selectedUnit={wrapPaddingUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "em", value: "em" },
						{ label: "%", value: "%" },
					]}
					onClick={(wrapPaddingUnit) => setAttributes({ wrapPaddingUnit })}
				/>

				<DimensionsControl
					label={__("Padding")}
					top={wrapPaddingTop}
					right={wrapPaddingRight}
					bottom={wrapPaddingBottom}
					left={wrapPaddingLeft}
					onChange={({ top, right, bottom, left }) =>
						setAttributes({
							wrapPaddingTop: top,
							wrapPaddingRight: right,
							wrapPaddingBottom: bottom,
							wrapPaddingLeft: left,
						})
					}
				/>
			</PanelBody>

			<PanelBody title={__("Box Style")} initialOpen={false}>
				<ToggleControl
					label={__("Display Inline")}
					checked={inlineItems}
					onChange={() => setAttributes({ inlineItems: !inlineItems })}
				/>

				<ToggleControl
					label={__("Display Border")}
					checked={showBorder}
					onChange={() => setAttributes({ showBorder: !showBorder })}
				/>

				<ToggleControl
					label={__("Display Shadow")}
					checked={showBoxShadow}
					onChange={() => setAttributes({ showBoxShadow: !showBoxShadow })}
				/>
				<SelectControl
					label={__("Box Positions")}
					value={justifyItems}
					options={BOX_JUSTIFY_CONTENT}
					onChange={(newValue) => setAttributes({ justifyItems: newValue })}
				/>

				<RangeControl
					label={__("Box Height")}
					allowReset
					value={boxHeight}
					onChange={(newValue) => setAttributes({ boxHeight: newValue })}
					min={10}
					max={200}
				/>

				<RangeControl
					label={__("Box Width")}
					value={boxWidth}
					allowReset
					onChange={(newValue) => setAttributes({ boxWidth: newValue })}
					min={10}
					max={200}
				/>

				<RangeControl
					label={__("Space Between Boxes")}
					value={boxSpace}
					allowReset
					onChange={(newValue) => setAttributes({ boxSpace: newValue })}
					min={0}
					max={100}
				/>

				<ColorControl
					label={__("Box Background Color")}
					color={boxBackground}
					onChange={(boxBackground) => setAttributes({ boxBackground })}
				/>

				{inlineItems && (
					<RangeControl
						label={__("Left Spacing For Labels")}
						value={labelLeftPadding}
						allowReset
						onChange={(newValue) =>
							setAttributes({ labelLeftPadding: newValue })
						}
						min={0}
						max={100}
					/>
				)}

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={boxMarginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(boxMarginUnit) => setAttributes({ boxMarginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={boxPaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(boxPaddingUnit) => setAttributes({ boxPaddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={paddingTop}
						right={paddingRight}
						bottom={paddingBottom}
						left={paddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							})
						}
					/>
				</PanelBody>

				<PanelBody title={__("Border Radius")} initialOpen={false}>
					<UnitControl
						selectedUnit={radiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(radiusUnit) => setAttributes({ radiusUnit })}
					/>

					<DimensionsControl
						label={__("Border Radius")}
						top={radiusTopLeft}
						right={radiusTopRight}
						bottom={radiusBottomRight}
						left={radiusBottomLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								radiusTopLeft: top,
								radiusTopRight: right,
								radiusBottomRight: bottom,
								radiusBottomLeft: left,
							})
						}
					/>
				</PanelBody>

				{showBorder && (
					<PanelBody title={__("Border Settings")} initialOpen={false}>
						<ColorControl
							label={__("Border Color")}
							color={borderColor}
							onChange={(borderColor) => setAttributes({ borderColor })}
						/>

						<RangeControl
							label={__("Border Size")}
							value={borderSize}
							onChange={(newValue) => setAttributes({ borderSize: newValue })}
							min={0}
							max={100}
						/>

						<SelectControl
							label={__("Border Style")}
							value={borderStyle}
							options={BORDER_STYLES}
							onChange={(newValue) => setAttributes({ borderStyle: newValue })}
						/>
					</PanelBody>
				)}

				{showBoxShadow && (
					<PanelBody title={__("Shadow Settings")} initialOpen={false}>
						<ColorControl
							label={__("Shadow Color")}
							color={shadowColor}
							onChange={(shadowColor) => setAttributes({ shadowColor })}
						/>

						<RangeControl
							label={__("Horizontal Offset")}
							value={hOffset}
							allowReset
							onChange={(newValue) => setAttributes({ hOffset: newValue })}
							min={0}
							max={100}
						/>

						<RangeControl
							label={__("Vertical Offset")}
							value={vOffset}
							allowReset
							onChange={(newValue) => setAttributes({ vOffset: newValue })}
							min={0}
							max={100}
						/>

						<RangeControl
							label={__("Blur")}
							value={shadowBlur}
							allowReset
							onChange={(newValue) => setAttributes({ shadowBlur: newValue })}
							min={0}
							max={100}
						/>

						<RangeControl
							label={__("Spread")}
							value={shadowSpread}
							allowReset
							onChange={(newValue) => setAttributes({ shadowSpread: newValue })}
							min={0}
							max={100}
						/>
					</PanelBody>
				)}
			</PanelBody>

			<PanelBody title={__("Text Settings")} initialOpen={false}>
				<BaseControl id="eb-countdown-box-text-align" label={__("Text Align")}>
					<ButtonGroup id="eb-countdown-box-text-align">
						{TEXT_ALIGN.map((item) => (
							<Button
								isPrimary={boxTextAlign === item.value}
								isSecondary={boxTextAlign !== item.value}
								onClick={() => setAttributes({ boxTextAlign: item.value })}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>
				</BaseControl>

				<PanelBody title={__("Digit Styles")} initialOpen={false}>
					<ColorControl
						label={__("Digit Color")}
						color={digitColor}
						onChange={(digitColor) => setAttributes({ digitColor })}
					/>

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={digitFontFamily}
										onChange={(digitFontFamily) =>
											setAttributes({ digitFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={digitSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(digitSizeUnit) =>
											setAttributes({ digitSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={digitFontSize}
										allowReset
										onChange={(newValue) =>
											setAttributes({ digitFontSize: newValue })
										}
										min={8}
										max={100}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={digitFontWeight}
										allowReset
										options={DIGIT_FONT_WEIGHT}
										onChange={(newValue) =>
											setAttributes({ digitFontWeight: newValue })
										}
									/>

									<UnitControl
										selectedUnit={digitLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(digitLineHeightUnit) =>
											setAttributes({ digitLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={digitLineHeight}
										allowReset
										onChange={(digitLineHeight) =>
											setAttributes({ digitLineHeight })
										}
										min={0}
										max={DIGIT_LINE_HEIGHT_MAX}
										step={DIGIT_LINE_HEIGHT_STEP}
									/>

									<UnitControl
										selectedUnit={digitLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(digitLetterSpacingUnit) =>
											setAttributes({ digitLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={digitLetterSpacing}
										allowReset
										onChange={(digitLetterSpacing) =>
											setAttributes({ digitLetterSpacing })
										}
										min={0}
										max={DIGIT_LETTER_SPACING_MAX}
										step={DIGIT_LETTER_SPACING_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Label Styles")} initialOpen={false}>
					<ColorControl
						label={__("Label Color")}
						color={labelColor}
						onChange={(labelColor) => setAttributes({ labelColor })}
					/>

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={labelFontFamily}
										onChange={(labelFontFamily) =>
											setAttributes({ labelFontFamily })
										}
									/>
									<UnitControl
										selectedUnit={labelSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(labelSizeUnit) =>
											setAttributes({ labelSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={labelFontSize}
										allowReset
										onChange={(newValue) =>
											setAttributes({ labelFontSize: newValue })
										}
										min={8}
										max={100}
									/>

									<SelectControl
										label={__("Transform")}
										value={labelTransform}
										options={LABEL_TRANSFORM}
										onChange={(newValue) =>
											setAttributes({ labelTransform: newValue })
										}
									/>

									<BaseControl
										id="eb-countdown-box-font-style"
										label={__("Font Style")}
									>
										<ButtonGroup id="eb-countdown-box-font-style">
											{FONT_STYLES.map((item) => (
												<Button
													isPrimary={labelFontStyle === item.value}
													isSecondary={labelFontStyle !== item.value}
													onClick={() =>
														setAttributes({
															labelFontStyle: item.value,
														})
													}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									<SelectControl
										label={__("Font Decoration")}
										value={labelFontDecoration}
										options={FONT_DECORATION}
										onChange={(newValue) =>
											setAttributes({ labelFontDecoration: newValue })
										}
									/>

									<UnitControl
										selectedUnit={lineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(lineHeightUnit) =>
											setAttributes({ lineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={labelLineHeight}
										allowReset
										onChange={(newValue) =>
											setAttributes({ labelLineHeight: newValue })
										}
										min={0}
										max={100}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
