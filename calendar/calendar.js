/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * color-calendar
 * v1.0.6
 * by Pawan Kolhe <contact@pawankolhe.com> (https://pawankolhe.com/)
 */
var counter = 0;
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Calendar = t()
}(this, (function () {
    "use strict";
    class e {
        constructor(e = {}) {
            var t, a, i, r, n, s, o, l, d, c, h, y, p;
            if (this.CAL_NAME = "color-calendar", this.DAYS_TO_DISPLAY = 42, this.weekdayDisplayTypeOptions = {
                short: ["S", "M", "T", "W", "T", "F", "S"],
                "long-lower": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                "long-upper": ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
            }, this.id = null !== (t = e.id) && void 0 !== t ? t : "#color-calendar", this.calendarSize = null !== (a = e.calendarSize) && void 0 !== a ? a : "large", this.layoutModifiers = null !== (i = e.layoutModifiers) && void 0 !== i ? i : [], this.eventsData = null !== (r = e.eventsData) && void 0 !== r ? r : [], this.theme = null !== (n = e.theme) && void 0 !== n ? n : "basic", this.primaryColor = e.primaryColor, this.headerColor = e.headerColor, this.headerBackgroundColor = e.headerBackgroundColor, this.weekdaysColor = e.weekdaysColor, this.weekdayDisplayType = null !== (s = e.weekdayDisplayType) && void 0 !== s ? s : "long-lower", this.monthDisplayType = null !== (o = e.monthDisplayType) && void 0 !== o ? o : "long", this.startWeekday = null !== (l = e.startWeekday) && void 0 !== l ? l : 0, this.fontFamilyHeader = e.fontFamilyHeader, this.fontFamilyWeekdays = e.fontFamilyWeekdays, this.fontFamilyBody = e.fontFamilyBody, this.dropShadow = e.dropShadow, this.border = e.border, this.borderRadius = e.borderRadius, this.disableMonthYearPickers = null !== (d = e.disableMonthYearPickers) && void 0 !== d && d, this.disableDayClick = null !== (c = e.disableDayClick) && void 0 !== c && c, this.disableMonthArrowClick = null !== (h = e.disableMonthArrowClick) && void 0 !== h && h, this.customMonthValues = e.customMonthValues, this.customWeekdayValues = e.customWeekdayValues, this.monthChanged = e.monthChanged, this.dateChanged = e.dateChanged, this.selectedDateClicked = e.selectedDateClicked, this.customWeekdayValues && 7 === this.customWeekdayValues.length ? this.weekdays = this.customWeekdayValues : this.weekdays = null !== (y = this.weekdayDisplayTypeOptions[this.weekdayDisplayType]) && void 0 !== y ? y : this.weekdayDisplayTypeOptions.short, this.today = new Date, this.currentDate = new Date, this.pickerType = "month", this.eventDayMap = {}, this.oldSelectedNode = null, this.filteredEventsThisMonth = [], this.daysIn_PrevMonth = [], this.daysIn_CurrentMonth = [], this.daysIn_NextMonth = [], this.firstDay_PrevMonth = 0, this.firstDay_CurrentMonth = 0, this.firstDay_NextMonth = 0, this.numOfDays_PrevMonth = 0, this.numOfDays_CurrentMonth = 0, this.numOfDays_NextMonth = 0, this.yearPickerOffset = 0, this.yearPickerOffsetTemporary = 0, this.calendar = document.querySelector(this.id), !this.calendar) throw new Error(`[COLOR-CALENDAR] Element with selector '${this.id}' not found`);
            this.calendar.innerHTML = `\n      <div class="${this.CAL_NAME} ${this.theme} color-calendar--${this.calendarSize}">\n        <div class="calendar__header">\n          <div class="calendar__arrow calendar__arrow-prev"><div class="calendar__arrow-inner"></div></div>\n          <div class="calendar__monthyear">\n            <span class="calendar__month"></span>&nbsp;\n            <span class="calendar__year"></span>\n          </div>\n          <div class="calendar__arrow calendar__arrow-next"><div class="calendar__arrow-inner"></div></div>\n        </div>\n        <div class="calendar__body">\n          <div class="calendar__weekdays"></div>\n          <div class="calendar__days"></div>\n          <div class="calendar__picker">\n            <div class="calendar__picker-month">\n              ${(null !== (p = this.customMonthValues) && void 0 !== p ? p : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]).map((e, t) => `<div class="calendar__picker-month-option" data-value="${t}">${e}</div>`).join("")}\n            </div>\n            <div class="calendar__picker-year">\n              <div class="calendar__picker-year-option" data-value="0"></div>\n              <div class="calendar__picker-year-option" data-value="1"></div>\n              <div class="calendar__picker-year-option" data-value="2"></div>\n              <div class="calendar__picker-year-option" data-value="3"></div>\n              <div class="calendar__picker-year-option" data-value="4"></div>\n              <div class="calendar__picker-year-option" data-value="5"></div>\n              <div class="calendar__picker-year-option" data-value="6"></div>\n              <div class="calendar__picker-year-option" data-value="7"></div>\n              <div class="calendar__picker-year-option" data-value="8"></div>\n              <div class="calendar__picker-year-option" data-value="9"></div>\n              <div class="calendar__picker-year-option" data-value="10"></div>\n              <div class="calendar__picker-year-option" data-value="11"></div>\n              <div class="calendar__picker-year-arrow calendar__picker-year-arrow-left">\n                <div class="chevron-thin chevron-thin-left"></div>\n              </div>\n              <div class="calendar__picker-year-arrow calendar__picker-year-arrow-right">\n                <div class="chevron-thin chevron-thin-right"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    `, this.calendarRoot = document.querySelector(`${this.id} .${this.CAL_NAME}`), this.calendarHeader = document.querySelector(this.id + " .calendar__header"), this.calendarWeekdays = document.querySelector(this.id + " .calendar__weekdays"), this.calendarDays = document.querySelector(this.id + " .calendar__days"), this.pickerContainer = document.querySelector(this.id + " .calendar__picker"), this.pickerMonthContainer = document.querySelector(this.id + " .calendar__picker-month"), this.pickerYearContainer = document.querySelector(this.id + " .calendar__picker-year"), this.yearPickerChevronLeft = document.querySelector(this.id + " .calendar__picker-year-arrow-left"), this.yearPickerChevronRight = document.querySelector(this.id + " .calendar__picker-year-arrow-right"), this.pickerMonthContainer.children[this.today.getMonth()].classList.add("calendar__picker-month-today"), this.layoutModifiers.forEach(e => {
                this.calendarRoot.classList.add(e)
            }), this.layoutModifiers.includes("month-left-align") && (this.calendarHeader.innerHTML = '\n        <div class="calendar__monthyear">\n          <span class="calendar__month"></span>&nbsp;\n          <span class="calendar__year"></span>\n        </div>\n        <div class="calendar__arrow calendar__arrow-prev"><div class="calendar__arrow-inner"></div></div>\n        <div class="calendar__arrow calendar__arrow-next"><div class="calendar__arrow-inner"></div></div>\n      '), this.monthyearDisplay = document.querySelector(this.id + " .calendar__monthyear"), this.monthDisplay = document.querySelector(this.id + " .calendar__month"), this.yearDisplay = document.querySelector(this.id + " .calendar__year"), this.prevButton = document.querySelector(this.id + " .calendar__arrow-prev .calendar__arrow-inner"), this.nextButton = document.querySelector(this.id + " .calendar__arrow-next .calendar__arrow-inner"), this.togglePicker(!1), this.configureStylePreferences(), this.addEventListeners(), this.reset(new Date)
        }
        reset(e) {
            this.currentDate = e || new Date, this.clearCalendarDays(), this.updateMonthYear(), this.updateMonthPickerSelection(this.currentDate.getMonth()), this.generatePickerYears(), this.updateYearPickerSelection(this.currentDate.getFullYear(), 4), this.updateYearPickerTodaySelection(), this.generateWeekdays(), this.generateDays(), this.selectDayInitial(!!e), this.renderDays(), this.setOldSelectedNode(), this.dateChanged && this.dateChanged(this.currentDate, this.getDateEvents(this.currentDate)), this.monthChanged && this.monthChanged(this.currentDate, this.getMonthEvents())
        }
    }
    return e.prototype.addEventListeners = function () {
        this.prevButton.addEventListener("click", this.handlePrevMonthButtonClick.bind(this)), this.nextButton.addEventListener("click", this.handleNextMonthButtonClick.bind(this)), this.monthyearDisplay.addEventListener("click", this.handleMonthYearDisplayClick.bind(this)), this.calendarDays.addEventListener("click", this.handleCalendarDayClick.bind(this)), this.pickerMonthContainer.addEventListener("click", this.handleMonthPickerClick.bind(this)), this.pickerYearContainer.addEventListener("click", this.handleYearPickerClick.bind(this)), this.yearPickerChevronLeft.addEventListener("click", this.handleYearChevronLeftClick.bind(this)), this.yearPickerChevronRight.addEventListener("click", this.handleYearChevronRightClick.bind(this))
    }, e.prototype.configureStylePreferences = function () {
        let e = this.calendarRoot;
        this.primaryColor && e.style.setProperty("--cal-color-primary", this.primaryColor), this.fontFamilyHeader && e.style.setProperty("--cal-font-family-header", this.fontFamilyHeader), this.fontFamilyWeekdays && e.style.setProperty("--cal-font-family-weekdays", this.fontFamilyWeekdays), this.fontFamilyBody && e.style.setProperty("--cal-font-family-body", this.fontFamilyBody), this.dropShadow && e.style.setProperty("--cal-drop-shadow", this.dropShadow), this.border && e.style.setProperty("--cal-border", this.border), this.borderRadius && e.style.setProperty("--cal-border-radius", this.borderRadius), this.headerColor && e.style.setProperty("--cal-header-color", this.headerColor), this.headerBackgroundColor && e.style.setProperty("--cal-header-background-color", this.headerBackgroundColor), this.weekdaysColor && e.style.setProperty("--cal-weekdays-color", this.weekdaysColor)
    }, e.prototype.togglePicker = function (e) {
        !0 === e ? (this.pickerContainer.style.visibility = "visible", this.pickerContainer.style.opacity = "1", "year" === this.pickerType && this.generatePickerYears(), this.removeYearPickerSelection(), this.updateYearPickerSelection(this.currentDate.getFullYear())) : !1 === e ? (this.pickerContainer.style.visibility = "hidden", this.pickerContainer.style.opacity = "0", this.monthDisplay && this.yearDisplay && (this.monthDisplay.style.opacity = "1", this.yearDisplay.style.opacity = "1"), this.yearPickerOffsetTemporary = 0) : "hidden" === this.pickerContainer.style.visibility ? (this.pickerContainer.style.visibility = "visible", this.pickerContainer.style.opacity = "1", "year" === this.pickerType && this.generatePickerYears(), this.removeYearPickerSelection(), this.updateYearPickerSelection(this.currentDate.getFullYear())) : (this.pickerContainer.style.visibility = "hidden", this.pickerContainer.style.opacity = "0", this.monthDisplay && this.yearDisplay && (this.monthDisplay.style.opacity = "1", this.yearDisplay.style.opacity = "1"), this.yearPickerOffsetTemporary = 0)
    }, e.prototype.handleMonthPickerClick = function (e) {
        if (!e.target.classList.contains("calendar__picker-month-option")) return;
        const t = parseInt(e.target.dataset.value, 10);
        this.updateMonthPickerSelection(t), this.updateCurrentDate(0, void 0, t), this.togglePicker(!1)
    }, e.prototype.updateMonthPickerSelection = function (e) {
        e < 0 ? e = 11 : e %= 12, this.removeMonthPickerSelection(), this.pickerMonthContainer.children[e].classList.add("calendar__picker-month-selected")
    }, e.prototype.removeMonthPickerSelection = function () {
        for (let e = 0; e < 12; e++) this.pickerMonthContainer.children[e].classList.contains("calendar__picker-month-selected") && this.pickerMonthContainer.children[e].classList.remove("calendar__picker-month-selected")
    }, e.prototype.handleYearPickerClick = function (e) {
        if (!e.target.classList.contains("calendar__picker-year-option")) return;
        this.yearPickerOffset += this.yearPickerOffsetTemporary;
        const t = parseInt(e.target.innerText),
            a = parseInt(e.target.dataset.value);
        this.updateYearPickerSelection(t, a), this.updateCurrentDate(0, void 0, void 0, t), this.togglePicker(!1)
    }, e.prototype.updateYearPickerSelection = function (e, t) {
        if (void 0 === t) {
            for (let a = 0; a < 12; a++) {
                let i = this.pickerYearContainer.children[a];
                if (parseInt(i.innerHTML) === e && i.dataset.value) {
                    t = parseInt(i.dataset.value);
                    break
                }
            }
            if (void 0 === t) return
        }
        this.removeYearPickerSelection(), this.pickerYearContainer.children[t].classList.add("calendar__picker-year-selected")
    }, e.prototype.updateYearPickerTodaySelection = function () {
        parseInt(this.pickerYearContainer.children[4].innerHTML) === this.today.getFullYear() ? this.pickerYearContainer.children[4].classList.add("calendar__picker-year-today") : this.pickerYearContainer.children[4].classList.remove("calendar__picker-year-today")
    }, e.prototype.removeYearPickerSelection = function () {
        for (let e = 0; e < 12; e++) this.pickerYearContainer.children[e].classList.contains("calendar__picker-year-selected") && this.pickerYearContainer.children[e].classList.remove("calendar__picker-year-selected")
    }, e.prototype.generatePickerYears = function () {
        const e = this.today.getFullYear() + this.yearPickerOffset + this.yearPickerOffsetTemporary;
        let t = 0;
        for (let a = e - 4; a <= e + 7; a++) {
            this.pickerYearContainer.children[t].innerText = a.toString(), t++
        }
        this.updateYearPickerTodaySelection()
    }, e.prototype.handleYearChevronLeftClick = function () {
        this.yearPickerOffsetTemporary -= 12, this.generatePickerYears(), this.removeYearPickerSelection(), this.updateYearPickerSelection(this.currentDate.getFullYear()), this.updateYearPickerTodaySelection()
    }, e.prototype.handleYearChevronRightClick = function () {
        this.yearPickerOffsetTemporary += 12, this.generatePickerYears(), this.removeYearPickerSelection(), this.updateYearPickerSelection(this.currentDate.getFullYear()), this.updateYearPickerTodaySelection()
    }, e.prototype.setMonthDisplayType = function (e) {
        this.monthDisplayType = e, this.updateMonthYear()
    }, e.prototype.handleMonthYearDisplayClick = function (e) {
        if (!e.target.classList.contains("calendar__month") && !e.target.classList.contains("calendar__year")) return;
        if (this.disableMonthYearPickers) return;
        const t = this.pickerType,
            a = e.target.classList;
        a.contains("calendar__month") ? (this.pickerType = "month", this.monthDisplay.style.opacity = "1", this.yearDisplay.style.opacity = "0.7", this.pickerMonthContainer.style.display = "grid", this.pickerYearContainer.style.display = "none") : a.contains("calendar__year") && (this.pickerType = "year", this.monthDisplay.style.opacity = "0.7", this.yearDisplay.style.opacity = "1", this.pickerMonthContainer.style.display = "none", this.pickerYearContainer.style.display = "grid"), t === this.pickerType ? this.togglePicker() : this.togglePicker(!0)
    }, e.prototype.handlePrevMonthButtonClick = function () {
        if (this.disableMonthArrowClick) return;
        const e = this.currentDate.getMonth() - 1;
        this.currentDate.getFullYear() <= this.today.getFullYear() + this.yearPickerOffset - 4 && e < 0 && (this.yearPickerOffset -= 12, this.generatePickerYears()), e < 0 && this.updateYearPickerSelection(this.currentDate.getFullYear() - 1), this.updateMonthPickerSelection(e), this.updateCurrentDate(-1), this.togglePicker(!1)
    }, e.prototype.handleNextMonthButtonClick = function () {
        if (this.disableMonthArrowClick) return;
        const e = this.currentDate.getMonth() + 1;
        this.currentDate.getFullYear() >= this.today.getFullYear() + this.yearPickerOffset + 7 && e > 11 && (this.yearPickerOffset += 12, this.generatePickerYears()), e > 11 && this.updateYearPickerSelection(this.currentDate.getFullYear() + 1), this.updateMonthPickerSelection(e), this.updateCurrentDate(1), this.togglePicker(!1)
    }, e.prototype.updateMonthYear = function () {
        this.oldSelectedNode = null, this.customMonthValues ? this.monthDisplay.innerHTML = this.customMonthValues[this.currentDate.getMonth()] : this.monthDisplay.innerHTML = new Intl.DateTimeFormat("default", {
            month: this.monthDisplayType
        }).format(this.currentDate), this.yearDisplay.innerHTML = this.currentDate.getFullYear().toString()
    }, e.prototype.setWeekdayDisplayType = function (e) {
        var t;
        this.weekdayDisplayType = e, this.weekdays = null !== (t = this.weekdayDisplayTypeOptions[this.weekdayDisplayType]) && void 0 !== t ? t : this.weekdayDisplayTypeOptions.short, this.generateWeekdays()
    }, e.prototype.generateWeekdays = function () {
        let e = "";
        for (let t = 0; t < 7; t++) e += `\n      <div class="calendar__weekday">${this.weekdays[(t + this.startWeekday) % 7]}</div>\n    `;
        this.calendarWeekdays.innerHTML = e
    }, e.prototype.setDate = function (e) {
        e && (e instanceof Date ? this.reset(e) : this.reset(new Date(e)))
    }, e.prototype.getSelectedDate = function () {
        return this.currentDate
    }, e.prototype.clearCalendarDays = function () {
        this.daysIn_PrevMonth = [], this.daysIn_CurrentMonth = [], this.daysIn_NextMonth = []
    }, e.prototype.updateCalendar = function (e) {
        e && (this.updateMonthYear(), this.clearCalendarDays(), this.generateDays(), this.selectDayInitial()), this.renderDays(), e && this.setOldSelectedNode()
    }, e.prototype.setOldSelectedNode = function () {
        if (!this.oldSelectedNode) {
            let e = void 0;
            for (let t = 1; t < this.calendarDays.childNodes.length; t += 2) {
                let a = this.calendarDays.childNodes[t];
                if (a.classList && a.classList.contains("calendar__day-active") && a.innerText === this.currentDate.getDate().toString()) {
                    e = a;
                    break
                }
            }
            e && (this.oldSelectedNode = [e, parseInt(e.innerText)])
        }
    }, e.prototype.selectDayInitial = function (e) {
        if (e) this.daysIn_CurrentMonth[this.currentDate.getDate() - 1].selected = !0;
        else {
            let e = this.today.getMonth() === this.currentDate.getMonth(),
                t = this.today.getDate() === this.currentDate.getDate();
            e && t ? this.daysIn_CurrentMonth[this.today.getDate() - 1].selected = !0 : this.daysIn_CurrentMonth[0].selected = !0
        }
    }, e.prototype.handleCalendarDayClick = function (e) {
        if (!(e.target.classList.contains("calendar__day-box") || e.target.classList.contains("calendar__day-text") || e.target.classList.contains("calendar__day-box-today") || e.target.classList.contains("calendar__day-bullet"))) return;
        if (this.disableDayClick) return;
        if (this.oldSelectedNode && !this.oldSelectedNode[0]) return;
        if (e.target.parentElement.classList.contains("calendar__day-selected")) return void (this.selectedDateClicked && this.selectedDateClicked(this.currentDate, this.getDateEvents(this.currentDate)));
        let t, a;
        t = e.target.parentElement.innerText, a = parseInt(t, 10), this.removeOldDaySelection(), t && (this.updateCurrentDate(0, a), Object.assign(this.daysIn_CurrentMonth[a - 1], {
            selected: !0
        }), this.rerenderSelectedDay(e.target.parentElement, a, !0))
    }, e.prototype.removeOldDaySelection = function () {
        this.oldSelectedNode && (Object.assign(this.daysIn_CurrentMonth[this.oldSelectedNode[1] - 1], {
            selected: !1
        }), this.rerenderSelectedDay(this.oldSelectedNode[0], this.oldSelectedNode[1]))
    }, e.prototype.updateCurrentDate = function (e, t, a, i) {
        this.currentDate = new Date(i || this.currentDate.getFullYear(), null != a ? a : this.currentDate.getMonth() + e, 0 === e && t ? t : 1), (0 !== e || null != a || i) && (this.updateCalendar(!0), this.monthChanged && this.monthChanged(this.currentDate, this.getMonthEvents())), this.dateChanged && this.dateChanged(this.currentDate, this.getDateEvents(this.currentDate))
    }, e.prototype.generateDays = function () {
        this.numOfDays_PrevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate(), this.firstDay_CurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay(), this.numOfDays_CurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
        for (let e = 0; e < this.numOfDays_CurrentMonth; e++) this.daysIn_CurrentMonth.push({
            day: e + 1,
            selected: !1
        })
    }, e.prototype.renderDays = function () {
        let e = 0;
        const t = this.currentDate.getFullYear(),
            a = this.currentDate.getMonth();
        let i;
        this.filteredEventsThisMonth = this.eventsData.filter(e => {
            const i = new Date(e.start);
            return i.getFullYear() === t && i.getMonth() === a
        }), this.eventDayMap = {}, this.filteredEventsThisMonth.forEach(e => {
            const t = new Date(e.start).getDate(),
                a = new Date(e.end).getDate();
            for (let e = t; e <= a; e++) this.eventDayMap[e] = !0
        }), i = this.firstDay_CurrentMonth < this.startWeekday ? 7 + this.firstDay_CurrentMonth - this.startWeekday : this.firstDay_CurrentMonth - this.startWeekday;
        let r = "";
        for (let t = 0; t < i; t++) r += `\n      <div class="calendar__day calendar__day-other">${this.numOfDays_PrevMonth + 1 - i + t}</div>\n    `, e++;
        let n = this.today.getFullYear() === this.currentDate.getFullYear(),
            s = this.today.getMonth() === this.currentDate.getMonth() && n;

        this.daysIn_CurrentMonth.forEach(t => {




            console.log(this.eventsData[counter]);
            if (this.eventsData[counter] != undefined) {
                var style = this.eventsData[counter].style;
                console.log("aaaaaaaaaaaaaaa");
            } else {
                var style = "background:black";
            }
            counter++;

            let a = s && t.day === this.today.getDate();
            r += `\n      <div class="calendar__day calendar__day-active${a ? " calendar__day-today" : ""}${this.eventDayMap[t.day] ? " calendar__day-event" : " calendar__day-no-event"}${t.selected ? " calendar__day-selected" : ""}">\n        <span class="calendar__day-text">${t.day}</span>\n        <div class="calendar__day-bullet" style="${style
                }"></div>\n        <div class="calendar__day-box" ></div>\n      </div>\n    `, e++
        });
        for (let t = 0; t < this.DAYS_TO_DISPLAY - e; t++) r += `\n      <div class="calendar__day calendar__day-other">${t + 1}</div>\n    `;
        this.calendarDays.innerHTML = r
    }, e.prototype.rerenderSelectedDay = function (e, t, a) {
        let i = e.previousElementSibling,
            r = this.today.getFullYear() === this.currentDate.getFullYear(),
            n = this.today.getMonth() === this.currentDate.getMonth() && r && t === this.today.getDate(),
            s = document.createElement("div");
        s.className += `calendar__day calendar__day-active${n ? " calendar__day-today" : ""}${this.eventDayMap[t] ? " calendar__day-event" : " calendar__day-no-event"}${this.daysIn_CurrentMonth[t - 1].selected ? " calendar__day-selected" : ""}`, s.innerHTML = `\n    <span class="calendar__day-text">${t}</span>\n    <div class="calendar__day-bullet"></div>\n    <div class="calendar__day-box"></div>\n  `, i ? i.parentElement ? i.parentElement.insertBefore(s, i.nextSibling) : console.log("Previous element does not have parent") : this.calendarDays.insertBefore(s, e), a && (this.oldSelectedNode = [s, t]), e.remove()
    }, e.prototype.getEventsData = function () {
        return JSON.parse(JSON.stringify(this.eventsData))
    }, e.prototype.setEventsData = function (e) {
        return this.eventsData = JSON.parse(JSON.stringify(e)), this.setDate(this.currentDate), this.eventsData.length
    }, e.prototype.addEventsData = function (e = []) {
        const t = this.eventsData.push(...e);
        return this.setDate(this.currentDate), t
    }, e.prototype.getDateEvents = function (e) {
        return this.filteredEventsThisMonth.filter(t => {
            const a = new Date(t.start).getDate(),
                i = new Date(t.end).getDate();
            return e.getDate() >= a && e.getDate() <= i
        })
    }, e.prototype.getMonthEvents = function () {
        return this.filteredEventsThisMonth
    }, e
}));