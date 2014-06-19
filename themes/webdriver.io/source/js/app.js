var App = function() {

    this.ui = {
        window: $('html,body'),
        body: $('body'),
        gists: $('.gists > div')
    };

    this.events = {
        'click .links>a': 'scrollToCommand',
        'click .gist-header>button': 'openGist'
    };

    this.delegateEvents();
};

App.prototype.scrollToCommand = function(e) {
    e.preventDefault();

    var elem = $(e.target),
        target = $('#' + elem.attr('href').slice(1));

    if (target.length) {
        var targetOffset = target.offset().top - 30;
        this.ui.window.animate({scrollTop: targetOffset}, 1000, 'easeOutExpo');
        return false;
    }
};

App.prototype.openGist = function(e) {
    this.ui.gists.filter('.show').removeClass('show');
    this.ui.gists.filter('.' + $(e.target).data('gist')).addClass('show');
};

/**
 * delegate events to dom objects
 * this was cribbed from backbone, to see the original source take a look here:
 * https://github.com/jashkenas/backbone/blob/master/backbone.js#L1062
 */
App.prototype.delegateEvents = function() {

    'use strict';

    var i = 0;
    for (var key in this.events) {
        var method = this[this.events[key]],
            eventName = key.split(' ')[0],
            selector = key.split(' ')[1];

        eventName += '.delegateEvents' + i;
        if (selector === '') {
            this.ui.body.on(eventName, method.bind(this));
        } else {
            this.ui.body.on(eventName, selector, method.bind(this));
        }

        ++i;
    }
};

$(function() {
    new App();
});

jQuery.extend( jQuery.easing, { easeOutExpo: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
}});