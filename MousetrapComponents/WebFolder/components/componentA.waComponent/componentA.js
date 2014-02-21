
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'componentA';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	// @endregion// @endlock
	
	function doButton1(){
		alert("compA");
	};
	Mousetrap.bind("enter", doButton1);

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		doButton1();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
