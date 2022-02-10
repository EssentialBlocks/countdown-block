document.addEventListener("DOMContentLoaded", function () {
	const countdowns = document.querySelectorAll(".eb-cd-wrapper > .eb-cd-inner");

	// Return if there is no countdown block
	if (!countdowns) return;

	for (let i = 0; i < countdowns.length; i++) {
		const element = countdowns[i];

		const deadlineTimeStamp = parseInt(
			element.getAttribute("data-deadline-time")
		);

		const fakeElement = { textContent: "3e" };

		const daySpan =
			element.querySelector(".cd-box-day > .eb-cd-digit") || fakeElement;
		const hourSpan =
			element.querySelector(".cd-box-hour > .eb-cd-digit") || fakeElement;
		const minuteSpan =
			element.querySelector(".cd-box-minute > .eb-cd-digit") || fakeElement;
		const secondSpan =
			element.querySelector(".cd-box-second > .eb-cd-digit") || fakeElement;

		const timeLeft = (deadlineTimeStamp, intervalId = null) => {
			const now = Date.now();
			const secondsLeft = Math.round((deadlineTimeStamp - now) / 1000);
			const seconds = secondsLeft % 60;
			const minutes = Math.floor(secondsLeft / 60) % 60;
			const hours = Math.floor(secondsLeft / 3600) % 24;
			const days = Math.floor(secondsLeft / 86400);

			if (secondsLeft < 0) {
				clearInterval(intervalId);
				daySpan.textContent = "00";
				hourSpan.textContent = "00";
				minuteSpan.textContent = "00";
				secondSpan.textContent = "00";
				return;
			}

			daySpan.textContent = days < 10 ? `0${days}` : `${days}`;
			hourSpan.textContent = hours < 10 ? `0${hours}` : `${hours}`;
			minuteSpan.textContent = minutes < 10 ? `0${minutes}` : `${minutes}`;
			secondSpan.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`;
		};

		timeLeft(deadlineTimeStamp || 0);

		const intervalId = setInterval(() => {
			timeLeft(deadlineTimeStamp || 0, intervalId);
		}, 1000);
	}
});
