const { useBlockProps } = wp.blockEditor;

export default function Save({ attributes }) {
	const {
		blockId,

		//
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
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div class={`${blockId} eb-cd-wrapper`}>
				<div class="eb-cd-inner" data-deadline-time={`${endTimeStamp || 0}`}>
					{showDays ? (
						<div class="box cd-box-day">
							<span class="eb-cd-digit">00</span>
							{daysLabel ? <span class="eb-cd-label">{daysLabel}</span> : null}
						</div>
					) : null}

					{showHours ? (
						<div class="box cd-box-hour">
							<span class="eb-cd-digit">00</span>
							{hoursLabel ? (
								<span class="eb-cd-label">{hoursLabel}</span>
							) : null}
						</div>
					) : null}

					{showMinutes ? (
						<div class="box cd-box-minute">
							<span class="eb-cd-digit">00</span>
							{minutesLabel ? (
								<span class="eb-cd-label">{minutesLabel}</span>
							) : null}
						</div>
					) : null}

					{showSeconds ? (
						<div class="box cd-box-second">
							<span class="eb-cd-digit">00</span>
							{secondsLabel ? (
								<span class="eb-cd-label">{secondsLabel}</span>
							) : null}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
