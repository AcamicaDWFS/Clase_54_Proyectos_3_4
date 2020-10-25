'use strict';

window.calculator = (function() {

    return {
        init: init
    }

	function getIntById(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	function sum() {
		var suma = getIntById('x') + getIntById('y');
		document.getElementById('result').innerHTML = isNaN(suma) ? 0 : suma;
	};

	function multiply() {
		var mult = getIntById('x') * getIntById('y');
		document.getElementById('result').innerHTML = isNaN(mult) ? 0 : mult;
	};

	function init() {
		document.getElementById('add').addEventListener('click', sum);
		document.getElementById('mult').addEventListener('click', multiply);
	};

})();
