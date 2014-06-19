var App = function() {

    this.ui = {
        body: $(document.body),
        apinav: $('.apinav')
    };

    this.events = {
        'click .apinav>h3>a': 'openCommandList'
    };

    this.delegateEvents();
};

App.prototype.openCommandList = function(e) {
    e.preventDefault();

    var elem = $(e.target),
        category = elem.data('open'),
        commandList = $('.commands.' + category);

    console.log(elem);
    window.test = elem;

    if(commandList.is(':visible')) {
        elem.toggleClass('active');
        return $('.commands.' + category).slideUp();
    }

    $('.commands:visible').removeClass('active').slideUp();
    $('.commands.' + category).slideToggle();

    this.ui.apinav.find('h3 a').removeClass('active');
    elem.addClass('active');
};

/**
 * delegate events to dom objects
 * this was cribbed from backbone, to see the original source take a look here:
 * https://github.com/jashkenas/backbone/blob/master/backbone.js#L1062
 */
App.prototype.delegateEvents = function() {

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