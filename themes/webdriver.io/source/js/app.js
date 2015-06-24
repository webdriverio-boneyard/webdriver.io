var App = function() {

    this.ui = {
        body: $(document.body),
        apinav: $('.apinav'),
        apiLinks: $('.apinav .commands a'),
        apiSections: $('.apinav h3 a'),
        commandSection: $('.apinav .commands'),
        clearLink: $('.searchbar a'),
        searchInput: $('.searchbar input')
    };

    this.events = {
        'click .apinav.guide>h3>a': 'openCommandList',
        'click .navbar-toggle': 'openNavbar',
        'keyup .searchbar>input': 'filterApi',
        'click .searchbar>a': 'clearQuery'
    };

    this.fadeTime = 200;
    this.delegateEvents();
};

App.prototype.openCommandList = function(e) {
    var elem = $(e.target),
        category = elem.data('open'),
        commandList = $('.commands.' + category);

    if(!category) {
        return true;
    }

    e.preventDefault();

    window.test = elem;

    if(commandList.is(':visible')) {
        elem.toggleClass('active');
        return $('.commands.' + category).slideUp();
    }

    $('.commands:visible').slideUp(function() {
        $(this).removeClass('active');
    });
    $('.commands.' + category).slideToggle();

    this.ui.apinav.find('h3 a').removeClass('active');
    elem.addClass('active');
};

App.prototype.openNavbar = function(e) {
    e.preventDefault();
    this.ui.apinav.slideToggle();
};

App.prototype.clearQuery = function() {
    this.ui.apiSections.show();
    this.ui.apiLinks.show();
    this.ui.searchInput.val('');
    this.ui.clearLink.fadeOut(this.fadeTime);
};

App.prototype.filterApi = function(e) {
    var query = $(e.target).val(),
        self = this,
        text, sectionName, heading;

    this.ui.apiLinks.filter(function() {
        text = $(this).text();
        if(text.toLowerCase().indexOf(query.toLowerCase()) === -1) {
            return $(this).hide();
        }
        return $(this).show();
    });

    this.ui.commandSection.each(function(i, section) {
        sectionName = section.className.slice(9, -7);
        heading = $(self.ui.apiSections.filter('[data-open="' + sectionName + '"]').get(0))
        if($(section).find('a:visible').length) {
            return heading.show();
        }

        heading.hide();
    });

    if(query === '') {
        this.ui.clearLink.fadeOut(this.fadeTime);
    } else {
        this.ui.clearLink.fadeIn(this.fadeTime);
    }
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
