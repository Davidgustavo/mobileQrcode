window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Order = window.blockly.js.blockly.Order || {};

/**
 * Order
 */
window.blockly.js.blockly.Order.ClearCompartment = function() {

	var response, hour, bra;
	this.cronapi.screen.changeValueOfField("Order.active.compartment", '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Order.OpenCompartment = function() {

	var response, hour, bra;
	response = null;
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Order.HourInitial = function() {

	var response, hour, bra;
	bra = '2';
	hour = [
			this.cronapi.dateTime.getHour(this.cronapi.dateTime.getNow()) - bra,
			':',
			this.cronapi.dateTime.getMinute(this.cronapi.dateTime.getNow()),
			':',
			this.cronapi.dateTime.getSecond(this.cronapi.dateTime.getNow())]
			.join('');
	return hour;
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Order.TimeClock = function() {

	var response, hour, bra;
	this.cronapi.util
			.executeJavascriptNoReturn('var date_order_value = document.getElementById(\"date_order\");\nvar hour_order_value = document.getElementById(\"hour_order\");\nvar bought_hours_order_value = document.getElementById(\"textinput-bou'
					+ 'ghtHours\")\n\nlocalStorage.setItem(\"Orders\", date_order_value.value);\n\nvar str = date_order_value.value\n\nvar a = str.split(\"-\")\n\nvar h = hour_order_value.value\nvar hs = h.split(\":\")\n\n/'
					+ '/ var date_order = new Date(document.getElementById(\"date_order\").value).getTime();\n// Set the date we\'re counting down to \"2019-12-28T22:00:00\"\nvar countDownDate = new Date(a[2], (a[1] - 1), a'
					+ '[0], parseInt(hs[0]) + parseInt(bought_hours_order_value.value), hs[1], hs[2]).getTime();\n\n// Update the count down every 1 second\n\nvar x = setInterval(function() {\n\n  // Get todays date and tim'
					+ 'e\n  var now = new Date().getTime();\n    \n  // Find the distance between now and the count down date\n  var distance = countDownDate - now;\n    \n  // Time calculations for days, hours, minutes and'
					+ ' seconds\n  var days = Math.floor(distance / (1000 * 60 * 60 * 24));\n  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n  var minutes = Math.floor((distance % (1000 * 6'
					+ '0 * 60)) / (1000 * 60));\n  var seconds = Math.floor((distance % (1000 * 60)) / 1000);\n    \n  // Output the result in an element with id=\"demo\"\n  document.getElementById(\"demo\").innerHTML = \"T'
					+ 'empo de locação restante: \" + days + \"d \" + hours + \"h \"\n  + minutes + \"m \" + seconds + \"s \";\n    \n  // If the count down is over, write some text \n  if (distance < 0) {\n    clearInterva'
					+ 'l(x);\n    document.getElementById(\"demo\").innerHTML = \"Tempo esgotado!\";\n  }\n}, 1000);\n\n');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Order.ClearTimeClock = function() {

	var response, hour, bra;
	this.cronapi.util
			.executeJavascriptNoReturn('\n$(document).ready(function(){\n    clearInterval(x);\n});');
}
