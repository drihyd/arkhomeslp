function toggleMinClass(e) {
	"open" == e.className ? e.className = "close" : e.className = "open"
}

function toggleOpeClass(e) {
	"opacOff" == e.className ? e.className = "opacOn" : e.className = "opacOff"
}

// function hideForm() {
// 	$("#footerSignup").height(), $("#footerSignup").offset().top, $(document).scrollTop();
// 	$(".form-container").css("display", "inline-block")
// }

function positionForm() {
	var e = $("#about").offset().top;
	console.log("form " + e);
	var t = $(document).scrollTop();
	console.log("scroll " + t), t > e - 200 ? (console.log(" " + t + "," + (e - 200)), $("#form").addClass("sticky")) : (console.log("correct"), $("#form").removeClass("sticky"))
}
$(window).scroll(function () {
	$(window).scrollTop()
}), $(".top-menu").click(function () {
	return $("html, body").animate({
		scrollTop: $($.attr(this, "*href")).offset().top - 80
	}, 500), !1
}), jQuery(document).ready(function (e) {
	var t = e(".cd-top");
	e(window).scroll(function () {
		e(this).scrollTop() > 300 ? t.addClass("cd-is-visible") : t.removeClass("cd-is-visible cd-fade-out"), e(this).scrollTop() > 1200 && t.addClass("cd-fade-out")
	}), t.on("click", function (t) {
		t.preventDefault(), e("body,html").animate({
			scrollTop: 0
		}, 700)
	})
}), $(window).on("load resize", function () {
// 	hideForm(), positionForm()
}), $(document).on("ready scroll", function () {
// 	hideForm(), positionForm()
});
var UtmCookie, UtmForm, _uf, dateObj = new Date,
	year = dateObj.getFullYear(),
	dateYear = $("#footerYear");

function getCookie(e) {
	for (var t = e + "=", i = decodeURIComponent(document.cookie).split(";"), o = 0; o < i.length; o++) {
		for (var r = i[o];
			" " == r.charAt(0);) r = r.substring(1);
		if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
	}
	return ""
}
dateYear.html(year), UtmCookie = function () {
	function e(e) {
		null == e && (e = {}), this._cookieNamePrefix = "_uc_", this._domain = e.domain, this._sessionLength = e.sessionLength || 1, this._cookieExpiryDays = e.cookieExpiryDays || 365, this._additionalParams = e.additionalParams || [], this._utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"], this.writeInitialReferrer(), this.writeLastReferrer(), this.writeInitialLandingPageUrl(), this.setCurrentSession(), this.additionalParamsPresentInUrl() && this.writeAdditionalParams(), this.utmPresentInUrl() && this.writeUtmCookieFromParams()
	}
	return e.prototype.createCookie = function (e, t, i, o, r, n) {
		var a, s, l, m, d, c;
		c = null, i && ((d = new Date).setTime(d.getTime() + 24 * i * 60 * 60 * 1e3), c = d), s = null != c ? "; expires=" + c.toGMTString() : "", l = null != o ? "; path=" + o : "; path=/", a = null != r ? "; domain=" + r : "", m = null != n ? "; secure" : "", document.cookie = this._cookieNamePrefix + e + "=" + escape(t) + s + l + a + m
	}, e.prototype.readCookie = function (e) {
		var t, i, o, r;
		for (r = this._cookieNamePrefix + e + "=", i = document.cookie.split(";"), o = 0; o < i.length;) {
			for (t = i[o];
				" " === t.charAt(0);) t = t.substring(1, t.length);
			if (0 === t.indexOf(r)) return t.substring(r.length, t.length);
			o++
		}
		return null
	}, e.prototype.eraseCookie = function (e) {
		this.createCookie(e, "", -1, null, this._domain)
	}, e.prototype.getParameterByName = function (e) {
		var t;
		return e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), (t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search)) ? decodeURIComponent(t[1].replace(/\+/g, " ")) : ""
	}, e.prototype.additionalParamsPresentInUrl = function () {
		var e, t, i, o;
		for (e = 0, t = (o = this._additionalParams).length; t > e; e++)
			if (i = o[e], this.getParameterByName(i)) return !0;
		return !1
	}, e.prototype.utmPresentInUrl = function () {
		var e, t, i, o;
		for (e = 0, t = (o = this._utmParams).length; t > e; e++)
			if (i = o[e], this.getParameterByName(i)) return !0;
		return !1
	}, e.prototype.writeCookie = function (e, t) {
		this.createCookie(e, t, this._cookieExpiryDays, null, this._domain)
	}, e.prototype.writeAdditionalParams = function () {
		var e, t, i, o, r;
		for (e = 0, t = (o = this._additionalParams).length; t > e; e++) i = o[e], r = this.getParameterByName(i), this.writeCookie(i, r)
	}, e.prototype.writeUtmCookieFromParams = function () {
		var e, t, i, o, r;
		for (e = 0, t = (o = this._utmParams).length; t > e; e++) i = o[e], r = this.getParameterByName(i), this.writeCookie(i, r)
	}, e.prototype.writeCookieOnce = function (e, t) {
		this.readCookie(e) || this.writeCookie(e, t)
	}, e.prototype._sameDomainReferrer = function (e) {
		var t;
		return t = document.location.hostname, e.indexOf(this._domain) > -1 || e.indexOf(t) > -1
	}, e.prototype._isInvalidReferrer = function (e) {
		return "" === e || void 0 === e
	}, e.prototype.writeInitialReferrer = function () {
		var e;
		e = document.referrer, this._isInvalidReferrer(e) && (e = "direct"), this.writeCookieOnce("referrer", e)
	}, e.prototype.writeLastReferrer = function () {
		var e;
		e = document.referrer, this._sameDomainReferrer(e) || (this._isInvalidReferrer(e) && (e = "direct"), this.writeCookie("last_referrer", e))
	}, e.prototype.writeInitialLandingPageUrl = function () {
		var e;
		(e = this.cleanUrl()) && this.writeCookieOnce("initial_landing_page", e)
	}, e.prototype.initialReferrer = function () {
		return this.readCookie("referrer")
	}, e.prototype.lastReferrer = function () {
		return this.readCookie("last_referrer")
	}, e.prototype.initialLandingPageUrl = function () {
		return this.readCookie("initial_landing_page")
	}, e.prototype.incrementVisitCount = function () {
		var e, t, i;
		e = "visits", t = parseInt(this.readCookie(e), 10), i = isNaN(t) ? 1 : t + 1, this.writeCookie(e, i)
	}, e.prototype.visits = function () {
		return this.readCookie("visits")
	}, e.prototype.setCurrentSession = function () {
		var e;
		e = "current_session", this.readCookie(e) || (this.createCookie(e, "true", this._sessionLength / 24, null, this._domain), this.incrementVisitCount())
	}, e.prototype.cleanUrl = function () {
		var e;
		return e = window.location.search.replace(/utm_[^&]+&?/g, "").replace(/&$/, "").replace(/^\?$/, ""), window.location.origin + window.location.pathname + e + window.location.hash
	}, e
}(), UtmForm = function () {
	function e(e) {
		null == e && (e = {}), this._utmParamsMap = {}, this._utmParamsMap.utm_source = e.utm_source_field || "USOURCE", this._utmParamsMap.utm_medium = e.utm_medium_field || "UMEDIUM", this._utmParamsMap.utm_campaign = e.utm_campaign_field || "UCAMPAIGN", this._utmParamsMap.utm_content = e.utm_content_field || "UCONTENT", this._utmParamsMap.utm_term = e.utm_term_field || "UTERM", this._additionalParamsMap = e.additional_params_map || {}, this._initialReferrerField = e.initial_referrer_field || "IREFERRER", this._lastReferrerField = e.last_referrer_field || "LREFERRER", this._initialLandingPageField = e.initial_landing_page_field || "ILANDPAGE", this._visitsField = e.visits_field || "VISITS", this._addToForm = e.add_to_form || "all", this._formQuerySelector = e.form_query_selector || "form", this.utmCookie = new UtmCookie({
			domain: e.domain,
			sessionLength: e.sessionLength,
			cookieExpiryDays: e.cookieExpiryDays,
			additionalParams: Object.getOwnPropertyNames(this._additionalParamsMap)
		}), "none" !== this._addToForm && this.addAllFields()
	}
	return e.prototype.addAllFields = function () {
		var e, t, i, o;
		i = this._utmParamsMap;
		for (t in i) e = i[t], this.addFormElem(e, this.utmCookie.readCookie(t));
		o = this._additionalParamsMap;
		for (t in o) e = o[t], this.addFormElem(e, this.utmCookie.readCookie(t));
		this.addFormElem(this._initialReferrerField, this.utmCookie.initialReferrer()), this.addFormElem(this._lastReferrerField, this.utmCookie.lastReferrer()), this.addFormElem(this._initialLandingPageField, this.utmCookie.initialLandingPageUrl()), this.addFormElem(this._visitsField, this.utmCookie.visits())
	}, e.prototype.addFormElem = function (e, t) {
		var i, o, r, n, a;
		if (t && (i = document.querySelectorAll(this._formQuerySelector)).length > 0)
			if ("first" === this._addToForm)(o = i[0]).insertBefore(this.getFieldEl(e, t), o.firstChild);
			else
				for (n = 0, a = i.length; a > n; n++)(r = i[n]).insertBefore(this.getFieldEl(e, t), r.firstChild)
	}, e.prototype.getFieldEl = function (e, t) {
		var i;
		return (i = document.createElement("input")).type = "hidden", i.name = e, i.value = t, i
	}, e
}(), _uf = window._uf || {}, window.UtmForm = new UtmForm(_uf);