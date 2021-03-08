document.addEventListener("DOMContentLoaded", function () {
	var countdowns = document.getElementsByClassName("eb-countdown-container");

	// Return if there is no countdown block
	if (!countdowns) return;

	// Set each countdown
	for (let i = 0; i < countdowns.length; i++) {
		let countdown = countdowns[i];

		let counter = function (countdown) {
			var dateNode = countdown.getElementsByClassName("eb-countdown-get-date");
			var date = dateNode[0].getAttribute("data-date");
			var now = new Date().getTime();
			var time = new Date(date);
			var currentUtcOffset = time.getTimezoneOffset() * 60 * 1000;
			var timer = new Date(time - now + currentUtcOffset);

			var oneDay = 24 * 60 * 60 * 1000;
			var days = Math.round(timer / oneDay);
			var hours = timer.getHours();
			var minutes = timer.getMinutes();
			var seconds = timer.getSeconds();

			// Get values from html
			var daysNode = countdown.getElementsByClassName(
				"eb-countdown-digits-days"
			);
			var hoursNode = countdown.getElementsByClassName(
				"eb-countdown-digits-hours"
			);
			var minutesNode = countdown.getElementsByClassName(
				"eb-countdown-digits-minutes"
			);
			var secondsNode = countdown.getElementsByClassName(
				"eb-countdown-digits-seconds"
			);

			var isOver = Date.parse(timer) < Date.parse(new Date(currentUtcOffset));

			// Change inner html
			daysNode[0].innerHTML = isOver ? 0 : days;
			hoursNode[0].innerHTML = isOver ? 0 : hours;
			minutesNode[0].innerHTML = isOver ? 0 : minutes;
			secondsNode[0].innerHTML = isOver ? 0 : seconds;

			if (isOver) {
				clearInterval(interval);
			}
		};

		var interval = setInterval(function () {
			counter(countdown);
		}, 1000);
	}
});
