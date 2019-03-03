sap.ui.define(['sap/ui/core/format/DateFormat'],
	function (DateFormat) {
		var millisecondsOfADay = 1000 * 60 * 60 * 24;

		var DateFomatter = function (properties) {
			this.timeFormat = DateFormat.getTimeInstance({
				style: "short"
			}, properties.locale);
		};

		DateFomatter.prototype = {
			format: function (date) {
				if (!date) {
					return "";
				}
				var difInMilliseconds = Date.now() - date.getTime();
				var elapsedDays = Math.floor(difInMilliseconds / (millisecondsOfADay));

				if (elapsedDays === 0) {
					return this.timeFormat.format(date);
				}

				if (elapsedDays === 1) {
					return "Yesterday";
				}
			}
		};

		return DateFomatter;
	}, /* export= */ true);