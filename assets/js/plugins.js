// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function () {
        var noop = function () {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

jQuery.noConflict();
jQuery('.slider-plugin').bjqs({
    'animation': 'slide',
    'width': 634,
    'height': 355,
    'rotationSpeed': 9000,
    'showMarkers': true,
    'showControls': true,
    'centerMarkers': true,
    'automatic': true
});

jQuery('.menufade').hover(function(){
    jQuery(this).stop().animate({backgroundColor: '#fa08b2',color: '#fff'},150);
}, function() {
    jQuery(this).stop().animate({backgroundColor: 'transparent', color: '#575757'},150);
});

jQuery('.logo').mouseover(function() {
  jQuery(this).wiggle('start', {
    wiggleDegrees: ['1','2','1','0','-1','-2','-1','0'],
    delay: 35,
    limit: 2,
    randomStart: false,
    onWiggle: function(object) {
        // code goes here
    },
    onWiggleStart: function(object) {
        // code goes here
    },
    onWiggleStop: function(object) {
        // code goes here
    }
});
});


jQuery('.featuredArticle').slides({
    generateNextPrev: true,
    generatePagination: false,
    play: 5000,
    pause: 2500,
    hoverPause: true
});

jQuery('#top-link').click(function (e) {
    jQuery('html, body').animate({
        scrollTop: 0
    }, 'slow');
});

// form field scripts
jQuery('body').ready(function () {
    jQuery('.textInput').each(function () {
        jQuery(this).val(jQuery(this).attr('defaultVal'));
        jQuery(this).css({
            color: '#666'
        });
    });

    jQuery('.textInput').focus(function () {
        if (jQuery(this).val() == jQuery(this).attr('defaultVal')) {
            jQuery(this).val('');
            jQuery(this).css({
                color: '#696969'
            });
        }
    });

    jQuery('.textInput').blur(function () {
        if (jQuery(this).val() == '') {
            jQuery(this).val(jQuery(this).attr('defaultVal'));
            jQuery(this).css({
                color: '#999'
            });
        }
    });
});