
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem1 = {};	// @menuItem
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		WAF.loadComponent ( {
    	   id:     'contentComponent',
       		path:   '/views/utilisateurs.waComponent',
       		onSuccess: function () {
            	alert("coucou");
          }
     } );
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
