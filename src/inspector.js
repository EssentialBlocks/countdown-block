/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const { useEffect, useState, useRef } = wp.element;
const { select } = wp.data;
const {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
	DateTimePicker,
	TabPanel,
} = wp.components;

/**
 * Internal dependencies
 */

import faIcons from "../util/faIcons.js";
import TypographyDropdown from "../util/typography-control-v2";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
import ImageAvatar from "../util/image-avatar/";
import GradientColorControl from "../util/gradient-color-controller";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";
import ResetControl from "../util/reset-control";
import BorderShadowControl from "../util/border-shadow-control";
import BackgroundControl from "../util/background-control";

import SingleBoxControl from "./singleBoxControl";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import objAttributes from "./attributes";

import {
	typoPrefix_digits,
	typoPrefix_labels,
	typoPrefix_separator,
} from "./constants/typographyPrefixConstants";

import {
	wrapperWidth,
	boxsSpaceConst,
	separatorPosTop,
	separatorPosRight,
} from "./constants/rangeNames";

import {
	cdBoxsPaddingConst,
	cdWrapMarginConst,
	cdWrapPaddingConst,
	cdDigitsPaddingConst,
	cdLabelsPaddingConst,
} from "./constants/dimensionsConstants";

import {
	cdBoxsBgConst,
	cdDayBoxBgConst,
	cdHourBoxBgConst,
	cdMinuteBoxBgConst,
	cdSecondBoxBgConst,
	WrpBgConst,
} from "./constants/backgroundsConstants";

import {
	cdBoxsBdShadowConst,
	WrpBdShadowConst,
} from "./constants/borderShadowConstants";

import {
	STYLE_PRESETS,
	ALIGN_ITEMS,
	SEPARATOR_TYPES,
	LAYOUT_TYPES,
	JUSTIFY_CONTENTS,
	FLEX_DIRECTIONS,
} from "./constants";

const defaultPresetAttrsObj = {
	boxsBds_Bdr_Bottom: "1",
	boxsBds_Bdr_Left: "1",
	boxsBds_Bdr_Right: "1",
	boxsBds_Bdr_Top: "1",
	boxsBds_borderStyle: "none",
	boxsP_Bottom: "20",
	boxsP_Top: "20",
	boxsBds_Rds_Bottom: "10",
	boxsBds_Rds_Left: "10",
	boxsBds_Rds_Right: "10",
	boxsBds_Rds_Top: "10",
	boxsBds_Rds_Unit: "px",
	boxsBg_backgroundType: "gradient",
	contentsDirection: "column",
	contentsAlign: "center",
	flexDirection: "row",
	separatorType: ":",

	lblPad_isLinked: true,
	showSeparator: false,

	boxsBg_backgroundColor: undefined,
	dayDgColor: undefined,
	dayBdrColor: undefined,
	dg_FontSize: undefined,
	dg_LineHeight: undefined,
	digitsColor: undefined,
	hourBdrColor: undefined,
	hourDgColor: undefined,
	labelsColor: undefined,
	lb_FontSize: undefined,
	lb_FontWeight: undefined,
	lb_TextTransform: undefined,
	minuteBdrColor: undefined,
	minuteDgColor: undefined,
	secondDgColor: undefined,
	separatorColor: undefined,
	secondBdrColor: undefined,
	WrpBg_backgroundColor: undefined,
	wrpBdSd_Rds_Bottom: undefined,
	wrpBdSd_Rds_Left: undefined,
	wrpBdSd_Rds_Right: undefined,
	wrpBdSd_Rds_Top: undefined,
	wrpBdSd_blur: undefined,
	wrpBdSd_hOffset: undefined,
	wrpBdSd_shadowColor: undefined,
	wrpBdSd_vOffset: undefined,
	dayBg_backgroundColor: undefined,
	hourBg_backgroundColor: undefined,
	lb_LineHeight: undefined,
	lblPad_Left: undefined,
	lblPad_Top: undefined,
	minuteBg_backgroundColor: undefined,
	secondBg_backgroundColor: undefined,
	sp_FontSize: undefined,
	sp_FontWeight: undefined,
	lblPad_Bottom: undefined,
};

function Inspector({ attributes, setAttributes }) {
	const {
		resOption,
		blockId,
		blockRoot,
		blockMeta,

		//  deadline Date timestamp
		endTimeStamp,

		//
		showDays,
		showHours,
		showMinutes,
		showSeconds,

		//
		daysLabel,
		hoursLabel,
		minutesLabel,
		secondsLabel,

		//
		preset,

		//
		flexDirection,

		//
		showSeparator,
		separatorType,
		// sepPositionRight,
		// sepPositionTop,
		separatorColor,

		//
		contentsAlign,

		//
		contentsDirection,

		//
		contentsJustify,

		//
		digitsColor,

		//
		labelsColor,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	const handleDateChange = (newDate) => {
		const endTimeStamp = new Date(newDate).getTime();
		setAttributes({ endTimeStamp });
	};

	const handlePresetChange = (preset) => {
		switch (preset) {
			case "default":
				setAttributes({
					...defaultPresetAttrsObj,
				});
				break;

			case "preset1":
				setAttributes({
					...defaultPresetAttrsObj,

					boxsBds_Rds_Bottom: "50",
					boxsBds_Rds_Left: "50",
					boxsBds_Rds_Right: "50",
					boxsBds_Rds_Top: "50",
					boxsBds_Rds_Unit: "%",
					boxsBg_backgroundColor: "rgba(255,255,255,0.5)",
					boxsBg_backgroundType: "classic",
					dg_FontSize: 60,
					dg_LineHeight: 1,
					digitsColor: "rgba(16,253,244,1)",
					labelsColor: "rgba(0,0,0,0.5)",
				});
				break;

			case "preset2":
				setAttributes({
					...defaultPresetAttrsObj,

					boxsBds_Bdr_Bottom: "2",
					boxsBds_Bdr_Left: "2",
					boxsBds_Bdr_Right: "2",
					boxsBds_Bdr_Top: "2",
					boxsBds_borderStyle: "solid",
					boxsBg_backgroundColor: "rgba(255,255,255,1)",
					boxsBg_backgroundType: "classic",
					boxsP_Bottom: "12",
					boxsP_Top: "12",
					dayBdrColor: "rgba(0,194,232,1)",
					dg_FontSize: 64,
					dg_LineHeight: 1.1,
					digitsColor: "rgba(75,75,75,1)",
					hourBdrColor: "rgba(255,107,211,1)",
					labelsColor: "rgba(75,75,75,1)",
					lb_FontSize: 21,
					lb_TextTransform: "uppercase",
					minuteBdrColor: "rgba(153,102,13,1)",
					secondBdrColor: "rgba(0,91,255,1)",
				});
				break;

			case "preset3":
				setAttributes({
					...defaultPresetAttrsObj,
					WrpBg_backgroundColor: "rgba(255,255,255,1)",
					boxsBg_backgroundType: "classic",
					dayDgColor: "rgba(52,219,213,1)",
					dg_FontSize: 62,
					dg_LineHeight: 1.1,
					hourDgColor: "rgba(138,65,255,1)",
					labelsColor: "rgba(77,77,77,1)",
					lb_FontSize: 16,
					lb_FontWeight: "500",
					lb_TextTransform: "uppercase",
					minuteDgColor: "rgba(1,206,135,1)",
					secondDgColor: "rgba(252,105,125,1)",
					separatorColor: "rgba(91,91,91,1)",
					showSeparator: true,
					wrpBdSd_Rds_Bottom: "10",
					wrpBdSd_Rds_Left: "10",
					wrpBdSd_Rds_Right: "10",
					wrpBdSd_Rds_Top: "10",
					wrpBdSd_blur: 20,
					wrpBdSd_hOffset: 11,
					wrpBdSd_shadowColor: "rgba(155,155,155,1)",
					wrpBdSd_vOffset: 12,
				});
				break;

			case "preset4":
				setAttributes({
					...defaultPresetAttrsObj,

					boxsBg_backgroundType: "classic",
					boxsP_Bottom: "27",
					contentsDirection: "row",
					dayBg_backgroundColor: "rgba(253,121,139,1)",
					dg_FontSize: 64,
					dg_LineHeight: 1,
					hourBg_backgroundColor: "rgba(23,229,157,1)",
					flexDirection: "column",
					labelsColor: "rgba(238,238,238,1)",
					lb_FontSize: 20,
					lb_FontWeight: "500",
					lb_LineHeight: 0,
					lb_TextTransform: "uppercase",
					lblPad_Left: "10",
					lblPad_Top: "35",
					lblPad_isLinked: false,
					minuteBg_backgroundColor: "rgba(124,117,255,1)",
					secondBg_backgroundColor: "rgba(75,230,224,1)",
				});
				break;

			case "preset5":
				setAttributes({
					...defaultPresetAttrsObj,

					WrpBg_backgroundColor: "rgba(40,70,175,1)",
					boxsBg_backgroundType: "classic",
					dg_FontSize: 70,
					dg_LineHeight: 1,
					digitsColor: "rgba(255,255,255,0.8)",
					lb_FontSize: 19,
					lb_FontWeight: "100",
					lb_TextTransform: "uppercase",
					lblPad_Top: "5",
					lblPad_isLinked: false,
					separatorColor: "rgba(255,255,255,0.71)",
					separatorType: "|",
					showSeparator: true,
					sp_FontSize: 90,
					sp_FontWeight: "100",
				});
				break;

			case "preset6":
				setAttributes({
					...defaultPresetAttrsObj,

					boxsBg_backgroundColor: "rgba(107,99,255,1)",
					boxsBg_backgroundType: "classic",
					boxsP_Bottom: "10",
					boxsP_Top: "10",
					contentsAlign: "flex-end",
					contentsDirection: "row",
					dg_FontSize: 37,
					lb_FontSize: 12,
					lb_LineHeight: 1,
					lb_TextTransform: "uppercase",
					lblPad_Bottom: "20",
					lblPad_Left: "5",
					lblPad_isLinked: false,
				});
				break;

			case "preset7":
				setAttributes({
					...defaultPresetAttrsObj,

					boxsBds_Bdr_Bottom: "10",
					boxsBds_Bdr_Left: "10",
					boxsBds_Bdr_Right: "10",
					boxsBds_Bdr_Top: "10",
					boxsBds_Rds_Bottom: "50",
					boxsBds_Rds_Left: "50",
					boxsBds_Rds_Right: "50",
					boxsBds_Rds_Top: "50",
					boxsBds_Rds_Unit: "%",
					boxsBds_borderStyle: "solid",
					boxsBg_backgroundType: "classic",
					boxsP_Bottom: "16",
					boxsP_Top: "16",
					dg_FontSize: 46,
					dg_LineHeight: 1,
					digitsColor: "rgba(0,0,0,0.5)",
					labelsColor: "rgba(0,0,0,0.5)",
					lb_FontWeight: "600",
				});
				break;
		}

		setAttributes({ preset });
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody
										title={__("Countdown Settings")}
										// initialOpen={false}
									>
										<BaseControl label={__("Design Preset")}>
											<SelectControl
												// label={__("Design Preset")}
												value={preset}
												options={STYLE_PRESETS}
												// onChange={(preset) => setAttributes({ preset })}
												onChange={handlePresetChange}
											/>
										</BaseControl>

										<BaseControl label={__("Countdown Due Date")}>
											<DateTimePicker
												currentDate={
													endTimeStamp ? new Date(endTimeStamp) : new Date()
												}
												onChange={(newDate) => handleDateChange(newDate)}
												is12Hour={true}
											/>
										</BaseControl>
									</PanelBody>

									<PanelBody title={__("Content Settings")} initialOpen={false}>
										<ToggleControl
											label={__("Display Days")}
											checked={showDays}
											onChange={() => setAttributes({ showDays: !showDays })}
										/>

										{showDays && (
											<>
												<TextControl
													label={__("Custom Label For Days")}
													value={daysLabel}
													type="text"
													onChange={(daysLabel) => setAttributes({ daysLabel })}
												/>

												<p
													style={{
														marginTop: "-5px",
													}}
												>
													<i>Leave blank to hide</i>
												</p>
											</>
										)}

										<ToggleControl
											label={__("Display Hours")}
											checked={showHours}
											onChange={() => setAttributes({ showHours: !showHours })}
										/>

										{showHours && (
											<>
												<TextControl
													label={__("Custom Label For Hours")}
													value={hoursLabel}
													type="text"
													onChange={(hoursLabel) =>
														setAttributes({ hoursLabel })
													}
												/>

												<p
													style={{
														marginTop: "-5px",
													}}
												>
													<i>Leave blank to hide</i>
												</p>
											</>
										)}

										<ToggleControl
											label={__("Display Minutes")}
											checked={showMinutes}
											onChange={() =>
												setAttributes({ showMinutes: !showMinutes })
											}
										/>

										{showMinutes && (
											<>
												<TextControl
													label={__("Custom Label For Minutes")}
													value={minutesLabel}
													type="text"
													onChange={(minutesLabel) =>
														setAttributes({ minutesLabel })
													}
												/>

												<p
													style={{
														marginTop: "-5px",
													}}
												>
													<i>Leave blank to hide</i>
												</p>
											</>
										)}

										<ToggleControl
											label={__("Display Seconds")}
											checked={showSeconds}
											onChange={() =>
												setAttributes({ showSeconds: !showSeconds })
											}
										/>

										{showSeconds && (
											<>
												<TextControl
													label={__("Custom Label For Seconds")}
													value={secondsLabel}
													type="text"
													onChange={(secondsLabel) =>
														setAttributes({ secondsLabel })
													}
												/>

												<p
													style={{
														marginTop: "-5px",
													}}
												>
													<i>Leave blank to hide</i>
												</p>
											</>
										)}
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Boxs Styles")}
										//  initialOpen={false}
									>
										<BaseControl label="Layout">
											<ButtonGroup>
												{LAYOUT_TYPES.map(({ value, label }) => (
													<Button
														isLarge
														isSecondary={flexDirection !== value}
														isPrimary={flexDirection === value}
														onClick={() =>
															setAttributes({ flexDirection: value })
														}
													>
														{label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<ResponsiveRangeController
											noUnits
											baseLabel={__("Container Max Width")}
											controlName={wrapperWidth}
											resRequiredProps={resRequiredProps}
											min={100}
											max={2000}
											step={1}
										/>

										<ResponsiveRangeController
											noUnits
											baseLabel={__("Space Between Boxs")}
											controlName={boxsSpaceConst}
											resRequiredProps={resRequiredProps}
											min={0}
											max={200}
											step={1}
										/>

										<BaseControl label={__("Contents Direction")}>
											<SelectControl
												value={contentsDirection}
												options={FLEX_DIRECTIONS}
												onChange={(contentsDirection) =>
													setAttributes({ contentsDirection })
												}
											/>
										</BaseControl>

										{contentsDirection.includes("row") && (
											<>
												<BaseControl label={__("Contents Justify Position")}>
													<SelectControl
														value={contentsJustify}
														options={JUSTIFY_CONTENTS}
														onChange={(contentsJustify) =>
															setAttributes({ contentsJustify })
														}
													/>
												</BaseControl>
											</>
										)}

										<BaseControl label={__("Contents Alignment")}>
											<ButtonGroup>
												{ALIGN_ITEMS.map(({ value, label }) => (
													<Button
														isLarge
														isSecondary={contentsAlign !== value}
														isPrimary={contentsAlign === value}
														onClick={() =>
															setAttributes({
																contentsAlign: value,
															})
														}
													>
														{label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<PanelBody title={__("Background")} initialOpen={false}>
											<BackgroundControl
												controlName={cdBoxsBgConst}
												resRequiredProps={resRequiredProps}
												noOverlay
												noMainBgi
												// noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'
											/>
										</PanelBody>

										<PanelBody title={__("Padding")} initialOpen={false}>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={cdBoxsPaddingConst}
												baseLabel="Padding"
											/>
										</PanelBody>
										<PanelBody
											title={__("Border & Shadow")}
											initialOpen={false}
										>
											<BorderShadowControl
												controlName={cdBoxsBdShadowConst}
												resRequiredProps={resRequiredProps}
												// noShadow
												// noBorder
											/>
										</PanelBody>
									</PanelBody>

									<PanelBody
										title={__("Individual Box Styling")}
										initialOpen={false}
									>
										{showDays && (
											<SingleBoxControl
												resRequiredProps={resRequiredProps}
												heading="Days"
												bgControlName={cdDayBoxBgConst}
												dgColorAttrString="dayDgColor"
												lbColorAttrString="dayLbColor"
												bdColorAttrString="dayBdrColor"
											/>
										)}
										{showHours && (
											<SingleBoxControl
												resRequiredProps={resRequiredProps}
												heading="Hours"
												bgControlName={cdHourBoxBgConst}
												dgColorAttrString="hourDgColor"
												lbColorAttrString="hourLbColor"
												bdColorAttrString="hourBdrColor"
											/>
										)}
										{showMinutes && (
											<SingleBoxControl
												resRequiredProps={resRequiredProps}
												heading="Minutes"
												bgControlName={cdMinuteBoxBgConst}
												dgColorAttrString="minuteDgColor"
												lbColorAttrString="minuteLbColor"
												bdColorAttrString="minuteBdrColor"
											/>
										)}
										{showSeconds && (
											<SingleBoxControl
												resRequiredProps={resRequiredProps}
												heading="Seconds"
												bgControlName={cdSecondBoxBgConst}
												dgColorAttrString="secondDgColor"
												lbColorAttrString="secondLbColor"
												bdColorAttrString="secondBdrColor"
											/>
										)}
									</PanelBody>

									<PanelBody title={__("Digits")} initialOpen={false}>
										<ColorControl
											label={__("Color")}
											color={digitsColor}
											onChange={(digitsColor) => setAttributes({ digitsColor })}
										/>

										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_digits}
											resRequiredProps={resRequiredProps}
										/>

										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={cdDigitsPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Labels")} initialOpen={false}>
										<ColorControl
											label={__("Color")}
											color={labelsColor}
											onChange={(labelsColor) => setAttributes({ labelsColor })}
										/>

										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_labels}
											resRequiredProps={resRequiredProps}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={cdLabelsPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									{flexDirection === "row" && (
										<PanelBody title={__("Separator")} initialOpen={false}>
											<ToggleControl
												label={__("Show Separator")}
												checked={showSeparator}
												onChange={() =>
													setAttributes({ showSeparator: !showSeparator })
												}
											/>

											{showSeparator && (
												<>
													<SelectControl
														label={__("Separator Type")}
														value={separatorType}
														options={SEPARATOR_TYPES}
														onChange={(separatorType) =>
															setAttributes({ separatorType })
														}
													/>

													<ResponsiveRangeController
														baseLabel={__("Position Top")}
														controlName={separatorPosTop}
														resRequiredProps={resRequiredProps}
														min={0}
														max={900}
														step={1}
													/>

													<ResponsiveRangeController
														baseLabel={__("Position Right")}
														controlName={separatorPosRight}
														resRequiredProps={resRequiredProps}
														min={0}
														max={900}
														step={1}
													/>

													<ColorControl
														label={__("Color")}
														color={separatorColor}
														onChange={(separatorColor) =>
															setAttributes({ separatorColor })
														}
													/>

													<TypographyDropdown
														baseLabel="Typography"
														typographyPrefixConstant={typoPrefix_separator}
														resRequiredProps={resRequiredProps}
													/>
												</>
											)}
										</PanelBody>
									)}
								</>
							)}
							{tab.name === "advance" && (
								<>
									<PanelBody
										title={__("Margin & Padding")}
										// initialOpen={true}
									>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={cdWrapMarginConst}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={cdWrapPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Background ")} initialOpen={false}>
										<BackgroundControl
											controlName={WrpBgConst}
											resRequiredProps={resRequiredProps}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WrpBdShadowConst}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
}
export default Inspector;
