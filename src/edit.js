/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

const {
	//
	softMinifyCssStrings,
	generateBackgroundControlStyles,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	// mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} = window.EBCountdownControls;

import classnames from "classnames";

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
	className,
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
		classHook,
		isEvergreenTimer,
		evergreenTimerHours,
		evergreenTimerMinutes,
		recurringCountdown,
		restartTime,
		recurringCountdownEnd,
	} = attributes;

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

	// this useEffect is for the countdown animation effect
	useEffect(() => {
		const fakeElement = { current: { textContent: "3e" } };

		const daysRefUe = daysRef.current ? daysRef : fakeElement;
		const hoursRefUe = hoursRef.current ? hoursRef : fakeElement;
		const minutesRefUe = minutesRef.current ? minutesRef : fakeElement;
		const secondsRefUe = secondsRef.current ? secondsRef : fakeElement;

		const MINUTE_IN_SECONDS = 60;
		const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
		const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS;
		const WEEK_IN_SECONDS = 7 * DAY_IN_SECONDS;
		const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;
		const YEAR_IN_SECONDS = 365 * DAY_IN_SECONDS;
		const HOUR_IN_MILISECONDS = 60 * 60 * 1000;

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

		if (isEvergreenTimer) {
			let evergreenInterval = blockId + "_evergreen_interval",
				evergreenTimeKey = blockId + "_evergreen_time",
				interval = localStorage.getItem(evergreenInterval),
				date = localStorage.getItem(evergreenTimeKey),
				hours = parseInt(evergreenTimerHours || 0) * HOUR_IN_SECONDS,
				minutes = parseInt(evergreenTimerMinutes || 0) * MINUTE_IN_SECONDS,
				evergreenTime = parseInt(hours + minutes);

			if (date === null || interval === null || interval != evergreenTime) {
				date = Date.now() + parseInt(evergreenTime) * 1000;
				localStorage.setItem(evergreenInterval, evergreenTime);
				localStorage.setItem(evergreenTimeKey, date);
			}

			if (recurringCountdown) {
				let recurringAfter = parseFloat(restartTime) * HOUR_IN_MILISECONDS;

				if (parseInt(date) + recurringAfter < Date.now()) {
					date = Date.now() + parseInt(evergreenTime) * 1000;
					localStorage.setItem(evergreenTimeKey, date);
				}

				if (recurringCountdownEnd < date) {
					date = recurringCountdownEnd;
				}
			}

			timeLeft(date || 0);
			const intervalIdEver = setInterval(() => {
				timeLeft(date || 0, intervalIdEver);
			}, 1000);

			return () => {
				clearInterval(intervalIdEver);
			};
		}

		if (!isEvergreenTimer) {
			timeLeft(endTimeStamp || 0);

			const intervalId = setInterval(() => {
				timeLeft(endTimeStamp || 0, intervalId);
			}, 1000);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, [
		endTimeStamp,
		showDays,
		showHours,
		showMinutes,
		showSeconds,
		isEvergreenTimer,
		evergreenTimerHours,
		evergreenTimerMinutes,
		recurringCountdown,
		restartTime,
		recurringCountdownEnd,
	]);

	const blockProps = useBlockProps({
		className: classnames(className, `eb-guten-block-main-parent-wrapper`),
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
			flex-direction: ${flexDirection};
		}

		.${blockId}.eb-cd-wrapper .eb-cd-inner .box {
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
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box:before {
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
			.${blockId}.eb-cd-wrapper .eb-cd-inner .box + .box:before {
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
		${wrapperStylesDesktop}


	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}


	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}


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

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}
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

				<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
					<div className={`${blockId} eb-cd-wrapper`}>
						<div className="eb-cd-inner">
							{showDays ? (
								<div className="box cd-box-day">
									<span ref={daysRef} className="eb-cd-digit">
										00
									</span>
									{daysLabel ? (
										<span className="eb-cd-label">{daysLabel}</span>
									) : null}
								</div>
							) : null}

							{showHours ? (
								<div className="box cd-box-hour">
									<span ref={hoursRef} className="eb-cd-digit">
										00
									</span>
									{hoursLabel ? (
										<span className="eb-cd-label">{hoursLabel}</span>
									) : null}
								</div>
							) : null}

							{showMinutes ? (
								<div className="box cd-box-minute">
									<span ref={minutesRef} className="eb-cd-digit">
										00
									</span>
									{minutesLabel ? (
										<span className="eb-cd-label">{minutesLabel}</span>
									) : null}
								</div>
							) : null}

							{showSeconds ? (
								<div className="box cd-box-second">
									<span ref={secondsRef} className="eb-cd-digit">
										00
									</span>
									{secondsLabel ? (
										<span className="eb-cd-label">{secondsLabel}</span>
									) : null}
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
