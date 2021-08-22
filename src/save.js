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
			<div className={`${blockId} eb-cd-wrapper`}>
				<div
					className="eb-cd-inner"
					data-deadline-time={`${endTimeStamp || 0}`}
				>
					{showDays ? (
						<div className="box cd-box-day">
							<span className="eb-cd-digit">00</span>
							{daysLabel ? (
								<span className="eb-cd-label">{daysLabel}</span>
							) : null}
						</div>
					) : null}

					{showHours ? (
						<div className="box cd-box-hour">
							<span className="eb-cd-digit">00</span>
							{hoursLabel ? (
								<span className="eb-cd-label">{hoursLabel}</span>
							) : null}
						</div>
					) : null}

					{showMinutes ? (
						<div className="box cd-box-minute">
							<span className="eb-cd-digit">00</span>
							{minutesLabel ? (
								<span className="eb-cd-label">{minutesLabel}</span>
							) : null}
						</div>
					) : null}

					{showSeconds ? (
						<div className="box cd-box-second">
							<span className="eb-cd-digit">00</span>
							{secondsLabel ? (
								<span className="eb-cd-label">{secondsLabel}</span>
							) : null}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
