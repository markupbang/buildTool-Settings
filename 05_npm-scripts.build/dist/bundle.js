(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 /* collapse */
$.fn.collapse = function(slideTime) {
    'use strict';

    var uiName = $(this).attr('data-ui');
    var isExpandable = false;
    if(uiName == "gt-collapse-expandable") isExpandable = true;

    $(this).each(function() {

        //Variable
        var $acd, $acdHeader, $acdContent;

        //Save data-acd
        $acd = $(this);
        $acdHeader = $acd.find('[data-collapse="header"]');
        $acdContent = $acd.find('[data-collapse="content"]');

        $acdHeader.each(function(event) {

            //collapse header click
            $(this).click(function() {
                var $thisContent = $(this).parent().find('[data-collapse="content"]');

                if(!isExpandable) {
                   $acdContent.parent().removeClass('gt-active');
                   $acdContent.slideUp(slideTime);
                }

                if($thisContent.is(':hidden')) {
                    //Open collapse
                    $thisContent.slideDown(slideTime);
                    $(this).parent().addClass('gt-active');
                } else {
                    //Close collapse
                    $thisContent.slideUp(slideTime);
                    $(this).parent().removeClass('gt-active');
                }
            });
        });
    });
};

},{}],2:[function(require,module,exports){
/* modal */
$.fn.gmodal = function() {
    'use strict';
    $(this).each(function() {
        
        //Variable
        var dimmed, modalWindow;
        
        //Save modal data-target
        modalWindow = '#' + $(this).attr('data-target');
        
        //Show modal
        function showModal() {
            //Move to the center
            $(modalWindow).css('marginLeft', -($(modalWindow).width() / 2));
            $(modalWindow).css('marginTop', -($(modalWindow).height() / 2));
            $(modalWindow).show();

            //Create div dimmed
            dimmed = $(document.createElement("div"));
            dimmed.attr("class", "_popDimmed").css({
                "position": "fixed",
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
                "background": "#000",
                "opacity": "0.5",
                "z-index": "1010"
            });

            //Append dimmed
            $(dimmed).appendTo('body');
            $(modalWindow).appendTo('body');

            //Add Event
            $(dimmed).on('click', hideModal);
        }

        //Hide modal
        function hideModal() {
            $(modalWindow).hide();
            $(dimmed).remove();
        }

        //Add Event
        $(this).on('click', showModal);
        $(modalWindow).find('[data-modal="hide"]').on('click', hideModal);
    });
};
    

},{}],3:[function(require,module,exports){
 /* tab */
$.fn.tab = function(option) {
    'use strict';
    //Decide event trigger
    var eventTrigger;
    switch(option) {
        case "click":
        eventTrigger = "click";
        break;

        case "mouseover":
        eventTrigger = "mouseover";
        break;

        default:
        eventTrigger = "click";
    }

    $(this).each(function() {

        //Variable
        var $tab_head, targetId;

        $tab_head = $(this);
        targetId = [];

        $tab_head.find('[data-id]').each(function() {

            var $tab_nav = $(this);
            var thisId = "#" + $(this).attr('data-id');

            //Event handler
            function eventHandler(event) {
                event.preventDefault();
                $tab_head.find("li.gt-active").removeClass("gt-active");
                $tab_nav.parents("li").addClass("gt-active");
                $(targetId.join(", ")).not(thisId).hide();
                $(thisId).show();
            }
            targetId.push(thisId);

            //Add event
            $(this).bind(eventTrigger, eventHandler);
        });
    });
};

},{}],4:[function(require,module,exports){
require('./components/Collapse');
require('./components/Modal');
require('./components/Tab');

},{"./components/Collapse":1,"./components/Modal":2,"./components/Tab":3}]},{},[4]);
