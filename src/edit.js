/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps, MediaUpload, RichText } = wp.blockEditor;
const { Button } = wp.components;
const { useEffect, useRef } = wp.element;

const { select } = wp.data;

/**
 * Internal dependencies
 */
import "./editor.scss";
import {
	softMinifyCssStrings,
	isCssExists,
	generateBackgroundControlStyles,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

import Inspector from "./inspector";

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

export default function Edit({
	attributes,
	setAttributes,
	isSelected,
	clientId,
}) {
	const daysRef = useRef(null);
	const hoursRef = useRef(null);
	const minutesRef = useRef(null);
	const secondsRef = useRef(null);

	const {
		resOption,
		blockId,
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
		showSeparator,
		separatorType,
		// sepPositionRight,
		// sepPositionTop,
		separatorColor = "#4c457b",

		//
		contentsAlign,

		//
		contentsDirection,

		//
		contentsJustify,

		//
		flexDirection,

		//
		digitsColor = "#fff",
		dayDgColor,
		hourDgColor,
		minuteDgColor,
		secondDgColor,

		//
		labelsColor = "#fff",
		dayLbColor,
		hourLbColor,
		minuteLbColor,
		secondLbColor,

		//
		dayBdrColor,
		hourBdrColor,
		minuteBdrColor,
		secondBdrColor,

		//
		boxsBds_borderStyle,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		const BLOCK_PREFIX = "eb-countdown";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	// this useEffect is for the countdown animation effect
	useEffect(() => {
		const fakeElement = { current: { textContent: "3e" } };

		const daysRefUe = daysRef.current ? daysRef : fakeElement;
		const hoursRefUe = hoursRef.current ? hoursRef : fakeElement;
		const minutesRefUe = minutesRef.current ? minutesRef : fakeElement;
		const secondsRefUe = secondsRef.current ? secondsRef : fakeElement;

		const timeLeft = (deadlineTimeStamp, intervalId = null) => {
			const now = Date.now();
			const secondsLeft = Math.round((deadlineTimeStamp - now) / 1000);
			const seconds = secondsLeft % 60;
			const minutes = Math.floor(secondsLeft / 60) % 60;
			const hours = Math.floor(secondsLeft / 3600) % 24;
			const days = Math.floor(secondsLeft / 86400);

			if (secondsLeft < 0) {
				clearInterval(intervalId);
				daysRefUe.current.textContent = "00";
				hoursRefUe.current.textContent = "00";
				minutesRefUe.current.textContent = "00";
				secondsRefUe.current.textContent = "00";
				return;
			}

			daysRefUe.current.textContent = days < 10 ? `0${days}` : `${days}`;
			hoursRefUe.current.textContent = hours < 10 ? `0${hours}` : `${hours}`;
			minutesRefUe.current.textContent =
				minutes < 10 ? `0${minutes}` : `${minutes}`;
			secondsRefUe.current.textContent =
				seconds < 10 ? `0${seconds}` : `${seconds}`;
		};

		timeLeft(endTimeStamp || 0);

		const intervalId = setInterval(() => {
			timeLeft(endTimeStamp || 0, intervalId);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [endTimeStamp, showDays, showHours, showMinutes, showSeconds]);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// styling codes start from here
	//

	// styles related to generateResponsiveRangeStyles start ⬇
	const {
		rangeStylesDesktop: wrapWidthDesktop,
		rangeStylesTab: wrapWidthTab,
		rangeStylesMobile: wrapWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: wrapperWidth,
		customUnit: "px",
		property: "max-width",
		attributes,
	});

	const {
		rangeStylesDesktop: BoxsSpaceBetweenDesktop,
		rangeStylesTab: BoxsSpaceBetweenTab,
		rangeStylesMobile: BoxsSpaceBetweenMobile,
	} = generateResponsiveRangeStyles({
		controlName: boxsSpaceConst,
		customUnit: "px",
		property: flexDirection === "row" ? "margin-left" : "margin-top",
		attributes,
	});

	const {
		rangeStylesDesktop: SeparatorTopDesktop,
		rangeStylesTab: SeparatorTopTab,
		rangeStylesMobile: SeparatorTopMobile,
	} = generateResponsiveRangeStyles({
		controlName: separatorPosTop,
		property: "top",
		attributes,
	});

	const {
		rangeStylesDesktop: SeparatorRightDesktop,
		rangeStylesTab: SeparatorRightTab,
		rangeStylesMobile: SeparatorRightMobile,
	} = generateResponsiveRangeStyles({
		controlName: separatorPosRight,
		property: "padding-right",
		attributes,
	});
	// styles related to generateResponsiveRangeStyles end

	// styles related to generateTypographyStyles start ⬇
	const {
		typoStylesDesktop: digitsTypoStylesDesktop,
		typoStylesTab: digitsTypoStylesTab,
		typoStylesMobile: digitsTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_digits,
		defaultFontSize: 40,
	});

	const {
		typoStylesDesktop: labelsTypoStylesDesktop,
		typoStylesTab: labelsTypoStylesTab,
		typoStylesMobile: labelsTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_labels,
		defaultFontSize: 18,
	});

	const {
		typoStylesDesktop: separatorTypoStylesDesktop,
		typoStylesTab: separatorTypoStylesTab,
		typoStylesMobile: separatorTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_separator,
		defaultFontSize: 44,
	});
	// styles related to generateTypographyStyles end

	// styles related to generateBackgroundControlStyles start ⬇

	const {
		backgroundStylesDesktop: wrpBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrpBackgroundStylesTab,
		hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
		backgroundStylesMobile: wrpBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
		overlayStylesDesktop: wrpOverlayStylesDesktop,
		hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
		overlayStylesTab: wrpOverlayStylesTab,
		hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
		overlayStylesMobile: wrpOverlayStylesMobile,
		hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
		bgTransitionStyle: wrpBgTransitionStyle,
		ovlTransitionStyle: wrpOvlTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WrpBgConst,
		// noOverlay: true,
		// noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	const {
		backgroundStylesDesktop: boxsBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: boxsHoverBackgroundStylesDesktop,
		backgroundStylesTab: boxsBackgroundStylesTab,
		hoverBackgroundStylesTab: boxsHoverBackgroundStylesTab,
		backgroundStylesMobile: boxsBackgroundStylesMobile,
		hoverBackgroundStylesMobile: boxsHoverBackgroundStylesMobile,
		bgTransitionStyle: boxsBgTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: cdBoxsBgConst,
		noOverlay: true,
		noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	const {
		backgroundStylesDesktop: dayBoxBgStylesDesktop = "",
		hoverBackgroundStylesDesktop: dayBoxHoverBgStylesDesktop = "",
		backgroundStylesTab: dayBoxBgStylesTab = "",
		hoverBackgroundStylesTab: dayBoxHoverBgStylesTab = "",
		backgroundStylesMobile: dayBoxBgStylesMobile = "",
		hoverBackgroundStylesMobile: dayBoxHoverBgStylesMobile = "",
	} = showDays
		? generateBackgroundControlStyles({
				noTransition: true,
				attributes,
				controlName: cdDayBoxBgConst,
				noOverlay: true,
				noMainBgi: true,
				// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
		  })
		: {};

	const {
		backgroundStylesDesktop: hourBoxBgStylesDesktop = "",
		hoverBackgroundStylesDesktop: hourBoxHoverBgStylesDesktop = "",
		backgroundStylesTab: hourBoxBgStylesTab = "",
		hoverBackgroundStylesTab: hourBoxHoverBgStylesTab = "",
		backgroundStylesMobile: hourBoxBgStylesMobile = "",
		hoverBackgroundStylesMobile: hourBoxHoverBgStylesMobile = "",
	} = showHours
		? generateBackgroundControlStyles({
				noTransition: true,
				attributes,
				controlName: cdHourBoxBgConst,
				noOverlay: true,
				noMainBgi: true,
				// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
		  })
		: {};

	const {
		backgroundStylesDesktop: minuteBoxBgStylesDesktop = "",
		hoverBackgroundStylesDesktop: minuteBoxHoverBgStylesDesktop = "",
		backgroundStylesTab: minuteBoxBgStylesTab = "",
		hoverBackgroundStylesTab: minuteBoxHoverBgStylesTab = "",
		backgroundStylesMobile: minuteBoxBgStylesMobile = "",
		hoverBackgroundStylesMobile: minuteBoxHoverBgStylesMobile = "",
	} = showMinutes
		? generateBackgroundControlStyles({
				noTransition: true,
				attributes,
				controlName: cdMinuteBoxBgConst,
				noOverlay: true,
				noMainBgi: true,
				// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
		  })
		: {};

	const {
		backgroundStylesDesktop: secondBoxBgStylesDesktop = "",
		hoverBackgroundStylesDesktop: secondBoxHoverBgStylesDesktop = "",
		backgroundStylesTab: secondBoxBgStylesTab = "",
		hoverBackgroundStylesTab: secondBoxHoverBgStylesTab = "",
		backgroundStylesMobile: secondBoxBgStylesMobile = "",
		hoverBackgroundStylesMobile: secondBoxHoverBgStylesMobile = "",
	} = showSeconds
		? generateBackgroundControlStyles({
				noTransition: true,
				attributes,
				controlName: cdSecondBoxBgConst,
				noOverlay: true,
				noMainBgi: true,
				// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
		  })
		: {};

	// styles related to generateBackgroundControlStyles end

	// styles related to generateDimensionsControlStyles start ⬇
	const {
		dimensionStylesDesktop: wrpMarginDesktop,
		dimensionStylesTab: wrpMarginTab,
		dimensionStylesMobile: wrpMarginMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: cdWrapMarginConst,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: wrpPaddingDesktop,
		dimensionStylesTab: wrpPaddingTab,
		dimensionStylesMobile: wrpPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: cdWrapPaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: boxsPaddingDesktop,
		dimensionStylesTab: boxsPaddingTab,
		dimensionStylesMobile: boxsPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: cdBoxsPaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: digitsPaddingDesktop,
		dimensionStylesTab: digitsPaddingTab,
		dimensionStylesMobile: digitsPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: cdDigitsPaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: labelsPaddingDesktop,
		dimensionStylesTab: labelsPaddingTab,
		dimensionStylesMobile: labelsPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: cdLabelsPaddingConst,
		styleFor: "padding",
	});
	// styles related to generateDimensionsControlStyles end

	// styles related to generateBorderShadowStyles start ⬇
	const {
		styesDesktop: wrpBdShdStyesDesktop,
		styesTab: wrpBdShdStyesTab,
		styesMobile: wrpBdShdStyesMobile,
		stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
		stylesHoverTab: wrpBdShdStylesHoverTab,
		stylesHoverMobile: wrpBdShdStylesHoverMobile,
		transitionStyle: wrpBdShdTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: WrpBdShadowConst,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	const {
		styesDesktop: boxsbdShadowStyesDesktop,
		styesTab: boxsbdShadowStyesTab,
		styesMobile: boxsbdShadowStyesMobile,
		stylesHoverDesktop: boxsbdShadowStylesHoverDesktop,
		stylesHoverTab: boxsbdShadowStylesHoverTab,
		stylesHoverMobile: boxsbdShadowStylesHoverMobile,
		transitionStyle: boxsbdShadowTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: cdBoxsBdShadowConst,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});
	// styles related to generateBorderShadowStyles end

	const wrapperStylesDesktop = `
		.${blockId}.eb-cd-wrapper{
			${wrapWidthDesktop}
			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBackgroundStylesDesktop}
			${wrpBdShdStyesDesktop}
			transition: ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}
		
		div.${blockId}.eb-cd-wrapper{
			margin-left: auto;
			margin-right: auto;
		}
		
		.${blockId}.eb-cd-wrapper:hover{			
			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
		}
		
		.${blockId}.eb-cd-wrapper:before{			
			${wrpOverlayStylesDesktop}
			transition: ${wrpOvlTransitionStyle};
		}
		
		.${blockId}.eb-cd-wrapper:hover:before{			
			${wrpHoverOverlayStylesDesktop}
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner {
			display: flex;
			justify-content: center;
			flex-direction: ${flexDirection};
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box {
			position:relative;
			display: flex;
			width: 100%;
			${boxsBackgroundStylesDesktop}
			transition: ${boxsBgTransitionStyle}, ${boxsbdShadowTransitionStyle};
			${boxsPaddingDesktop}
			${boxsbdShadowStyesDesktop}
			${
				contentsDirection.includes("row")
					? `justify-content: ${contentsJustify};`
					: " "
			}
			flex-direction: ${contentsDirection};
			align-items: ${contentsAlign};
		}

		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box:hover{
			${boxsHoverBackgroundStylesDesktop}
			${boxsbdShadowStylesHoverDesktop}
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span {
			display: block;
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {
			${digitsTypoStylesDesktop}
			${digitsPaddingDesktop}
			color: ${digitsColor};
		}
		
		${
			showSeparator && flexDirection === "row"
				? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box:before {
				position: absolute;
				right: 90%;
				content: "${separatorType}";
				color: ${separatorColor};
				${SeparatorTopDesktop}
				${SeparatorRightDesktop}
				${separatorTypoStylesDesktop}
			}

			div.${blockId}.eb-cd-wrapper .eb-cd-inner .box:before{
				line-height:0;
			}
			`
				: " "
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {
			${labelsTypoStylesDesktop}
			${labelsPaddingDesktop}
			color: ${labelsColor};
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box {
			margin: 0;
			${BoxsSpaceBetweenDesktop}
		}

		${
			showDays
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day{
				${dayBoxBgStylesDesktop}
				${
					boxsBds_borderStyle !== "none" && dayBdrColor
						? `border-color: ${dayBdrColor};`
						: " "
				}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{
				${dayBoxHoverBgStylesDesktop}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day span.eb-cd-label{
				${dayLbColor ? `color: ${dayLbColor};` : " "}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day span.eb-cd-digit{
				${dayDgColor ? `color: ${dayDgColor};` : " "}
			} 
			`
				: " "
		}

		${
			showHours
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{
				${hourBoxBgStylesDesktop}
				${
					boxsBds_borderStyle !== "none" && hourBdrColor
						? `border-color: ${hourBdrColor};`
						: " "
				}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{
				${hourBoxHoverBgStylesDesktop}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour span.eb-cd-label{
				${hourLbColor ? `color: ${hourLbColor};` : " "}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour span.eb-cd-digit{
				${hourDgColor ? `color: ${hourDgColor};` : " "}
			} 
			`
				: " "
		}

		${
			showMinutes
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{
				${minuteBoxBgStylesDesktop}
				${
					boxsBds_borderStyle !== "none" && minuteBdrColor
						? `border-color: ${minuteBdrColor};`
						: " "
				}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{
				${minuteBoxHoverBgStylesDesktop}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute span.eb-cd-label{
				${minuteLbColor ? `color: ${minuteLbColor};` : " "}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute span.eb-cd-digit{
				${minuteDgColor ? `color: ${minuteDgColor};` : " "}
			} 
			`
				: " "
		}

		${
			showSeconds
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second{
				${secondBoxBgStylesDesktop}
				${
					boxsBds_borderStyle !== "none" && secondBdrColor
						? `border-color: ${secondBdrColor};`
						: " "
				}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{
				${secondBoxHoverBgStylesDesktop}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second span.eb-cd-label{
				${secondLbColor ? `color: ${secondLbColor};` : " "}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second span.eb-cd-digit{
				${secondDgColor ? `color: ${secondDgColor};` : " "}
			} 
			`
				: " "
		}

	`;

	const wrapperStylesTab = `
		.${blockId}.eb-cd-wrapper{
			${wrapWidthTab}
			${wrpMarginTab}
			${wrpPaddingTab}
			${wrpBackgroundStylesTab}
			${wrpBdShdStyesTab}
		}		
		
		.${blockId}.eb-cd-wrapper:hover{			
			${wrpHoverBackgroundStylesTab}
			${wrpBdShdStylesHoverTab}
		}
		
		.${blockId}.eb-cd-wrapper:before{			
			${wrpOverlayStylesTab}
		}
		
		.${blockId}.eb-cd-wrapper:hover:before{			
			${wrpHoverOverlayStylesTab}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box {
			${boxsBackgroundStylesTab}
			${boxsPaddingTab}
			${boxsbdShadowStyesTab}
		}

		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box:hover{
			${boxsHoverBackgroundStylesTab}
			${boxsbdShadowStylesHoverTab}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {
			${digitsTypoStylesTab}
			${digitsPaddingTab}
		}

		${
			showSeparator && flexDirection === "row"
				? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box:before {
				${separatorTypoStylesTab}
				${SeparatorTopTab}
				${SeparatorRightTab}
			}
			`
				: " "
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {
			${labelsTypoStylesTab}
			${labelsPaddingTab}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box {
			${BoxsSpaceBetweenTab}
		}
		
		${
			showDays
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day{
				${dayBoxBgStylesTab}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{
				${dayBoxHoverBgStylesTab}
			} 
			`
				: " "
		}

		${
			showHours
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{
				${hourBoxBgStylesTab}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{
				${hourBoxHoverBgStylesTab}
			} 
			`
				: " "
		}

		${
			showMinutes
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{
				${minuteBoxBgStylesTab}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{
				${minuteBoxHoverBgStylesTab}
			} 
			`
				: " "
		}

		${
			showSeconds
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second{
				${secondBoxBgStylesTab}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{
				${secondBoxHoverBgStylesTab}
			} 

			`
				: " "
		}

	`;

	const wrapperStylesMobile = `
		.${blockId}.eb-cd-wrapper{
			${wrapWidthMobile}
			${wrpBackgroundStylesMobile}
			${wrpMarginMobile}
			${wrpPaddingMobile}
			${wrpBdShdStyesMobile}
		}		
		
		.${blockId}.eb-cd-wrapper:hover{			
			${wrpHoverBackgroundStylesMobile}
			${wrpBdShdStylesHoverMobile}
		}
		
		.${blockId}.eb-cd-wrapper:before{			
			${wrpOverlayStylesMobile}
		}
		
		.${blockId}.eb-cd-wrapper:hover:before{			
			${wrpHoverOverlayStylesMobile}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box {
			${boxsBackgroundStylesMobile}
			${boxsPaddingMobile}
			${boxsbdShadowStyesMobile}
		}

		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box:hover{
			${boxsHoverBackgroundStylesMobile}
			${boxsbdShadowStylesHoverMobile}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-digit {
			${digitsTypoStylesMobile}
			${digitsPaddingMobile}
		}

		${
			showSeparator && flexDirection === "row"
				? `
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box:before {
				${separatorTypoStylesMobile}
				${SeparatorTopMobile}
				${SeparatorRightMobile}
			}
			`
				: " "
		}
		
		.${blockId}.eb-cd-wrapper .eb-cd-inner .box span.eb-cd-label {
			${labelsTypoStylesMobile}
			${labelsPaddingMobile}
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box {
			${BoxsSpaceBetweenMobile}
		}
			
		${
			showDays
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day{
				${dayBoxBgStylesMobile}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-day:hover{
				${dayBoxHoverBgStylesMobile}
			} 
			`
				: " "
		}

		${
			showHours
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour{
				${hourBoxBgStylesMobile}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-hour:hover{
				${hourBoxHoverBgStylesMobile}
			} 
			`
				: " "
		}

		${
			showMinutes
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute{
				${minuteBoxBgStylesMobile}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-minute:hover{
				${minuteBoxHoverBgStylesMobile}
			} 
			`
				: " "
		}

		${
			showSeconds
				? `			
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second{
				${secondBoxBgStylesMobile}
			} 

			.${blockId}.eb-cd-wrapper .eb-cd-inner .box.cd-box-second:hover{
				${secondBoxHoverBgStylesMobile}
			} 

			`
				: " "
		}


	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`		
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}


	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}


	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}


	`);

	//
	// styling codes End here
	//

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		// Edit view
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>

			<div class={`${blockId} eb-cd-wrapper`}>
				<div class="eb-cd-inner">
					{showDays ? (
						<div class="box cd-box-day">
							<span ref={daysRef} class="eb-cd-digit">
								00
							</span>
							{daysLabel ? <span class="eb-cd-label">{daysLabel}</span> : null}
						</div>
					) : null}

					{showHours ? (
						<div class="box cd-box-hour">
							<span ref={hoursRef} class="eb-cd-digit">
								00
							</span>
							{hoursLabel ? (
								<span class="eb-cd-label">{hoursLabel}</span>
							) : null}
						</div>
					) : null}

					{showMinutes ? (
						<div class="box cd-box-minute">
							<span ref={minutesRef} class="eb-cd-digit">
								00
							</span>
							{minutesLabel ? (
								<span class="eb-cd-label">{minutesLabel}</span>
							) : null}
						</div>
					) : null}

					{showSeconds ? (
						<div class="box cd-box-second">
							<span ref={secondsRef} class="eb-cd-digit">
								00
							</span>
							{secondsLabel ? (
								<span class="eb-cd-label">{secondsLabel}</span>
							) : null}
						</div>
					) : null}
				</div>
			</div>
		</div>,
	];
}
