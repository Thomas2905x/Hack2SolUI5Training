sap.ui.define(["sap/ui/demo/bulletinboard/model/DateFormatter", 'sap/ui/core/Locale', 'sap/ui/thirdparty/sinon'],
	function (DateFormatter, Locale, sinon) {
		function getDateFormatterWithUsLocale() {
			return new DateFormatter({
				locale: new Locale('en-Us')
			});
		}

		QUnit.module("DateFormatter", {
			beforeEach: function () {
				this.stubOfDateNow = sinon.stub(Date, 'now');
				this.stubOfDateNow.returns(new Date(2018, 10, 21, 12, 5));
				this.dateFormatter = getDateFormatterWithUsLocale();
			},
			afterEach: function () {
				this.stubOfDateNow.restore();
			}
		});


		QUnit.test("constructor", function (assert) {
			assert.ok(getDateFormatterWithUsLocale());
		});


		QUnit.test("Should return an empty string if no date is given", function (assert) {
			var formattedDate = this.dateFormatter.format();

			assert.strictEqual(formattedDate, '');
		});

		QUnit.test("Should return the time if the date is from today", function (assert) {
			var dateFromToday = new Date(2018, 10, 21, 12, 5);

			var formattedDate = this.dateFormatter.format(dateFromToday);

			assert.strictEqual(formattedDate, '12:05 PM');
		});

		QUnit.test("Should return 'Yesterday' if the date is from yesterday", function (assert) {
			var dateFromYesterday = new Date(2018, 10, 20, 12, 5);

			var formattedDate = this.dateFormatter.format(dateFromYesterday);

			assert.strictEqual(formattedDate, 'Yesterday');
		});
	}, /* export= */ true);