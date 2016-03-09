var testimonials = [{
  text: 'WebdriverIO works with BDD at <a href="http://internetdevels.com">http://internetdevels.com</a> as relayable' +
        'and advanced automation tool.<br>(QA department)',
  name: '@tikohatico',
  url: 'https://github.com/tikohatico',
  avatar: 'https://avatars0.githubusercontent.com/u/13485416?v=3&s=460'
}, {
  text: 'Been using WebdriverIO since may of 2015 at <a href="http://www.thomascook.se">Thomas Cook Northern Europe</a>. ' +
        'It is so easy to get things going and it is so reliable compared to several other frameworks out there. ' +
        'The api is super well organized and easy to find stuff in, and if you get stuck, the Gitter is awesome. ' +
        'We use WebdriverIO mainly for system regression testing on our internal and external web apps. ' +
        'Can\'t endorse this enough!',
  name: 'Joar Ekendahl',
  url: 'https://github.com/dedmau5',
  avatar: 'https://avatars3.githubusercontent.com/u/6918569?v=3&s=460'
}, {
  text: '<a href="https://www.yandex.com/">Yandex</a> is using wdio because of flexible plugin system and simple ' +
        'integration with other testing tools.',
  name: '@pazone',
  url: 'https://github.com/pazone',
  avatar: 'https://avatars2.githubusercontent.com/u/3244018?v=3&s=460'
}, {
  name: 'WebdriverIO is a powerful and advanced automation tool, which has helped us with ease of good and faster ' +
        'execution in moving from traditional selenium webdriver. We at <a href="https://www.axway.com/en">Axway</a> ' +
        'are using it for our UI Automation Testing.',
  name: '@anarwal',
  url: 'https://github.com/anarwal',
  avatar: 'https://avatars3.githubusercontent.com/u/15256209?v=3&s=460'
}, {
  text: 'We\'re just starting to use Webdriverio at the <a href="http://ft.com/">Financial Times</a>, in particular '+
        'to test the FT\'s <a href="http://app.ft.com/">web app</a>. This presents particular challenges due to the ' +
        'interactive nature of the app, and its very complex single-page JS environment. [...]<br>' +
        'Webdriverio is a comprehensive, well documented project with great coverage of the Selenium/Webdriver/Appium ' +
        'specs, as well as loads of very useful helper abstractions.',
  name: 'George Crawford',
  url: 'https://github.com/georgecrawford',
  avatar: 'https://avatars2.githubusercontent.com/u/84737?v=3&s=460'
}, {
  text: 'At <a href="https://wearestagetwo.com/">Stage Two</a> we use Webdriver.IO to automate as many of our tests ' +
        'as possible. The framework is great to work with, as is the support provided.<br>' +
        'The thing we\'ve found most valuable is that with the <a href="https://github.com/webdriverio/cucumber-boilerplate/">Cucumber boilerplate</a> ' +
        'non technical members of the test team can write tests.<br>' +
        'WebdriverIO is a great project which we are happy to endorse.',
  name: 'Dave Houlker',
  url: 'https://github.com/dhoulker',
  avatar: 'https://avatars3.githubusercontent.com/u/5832261?v=3&s=400'
}, {
  text: 'We use webdriver.io in product engineering at <a href="https://www.zendesk.com/">Zendesk</a>.',
  name: 'Kenshiro Nakagawa',
  url: 'https://github.com/kencheeto',
  avatar: 'https://avatars0.githubusercontent.com/u/279406?v=3&s=460'
}, {
  text: 'Here at Nokia (formally Alcatel-Lucent), we execute tens of thousands of tests daily powered by WebdriverIO. ' +
        'It was chosen based on its flexibility with other tools and ease of use, allowing us to build the framework ' +
        'we have today.',
  name: '@bonjonbovi87',
  url: 'https://github.com/bonjonbovi87',
  avatar: 'https://avatars2.githubusercontent.com/u/13667338?v=3&s=460'
}, {
  text: 'At Learnosity we use WebdriverIO to execute hundreds of UI tests as part of our CI pipeline.' +
        'The framework is easy to use, and has proven to be extensive, flexible and reliable.' +
        'The active community behind the project makes it easy to overcome any obstacles which might be encountered.',
  name: 'Kevin McDonnell',
  url: 'https://github.com/kevinmcdonnell',
  avatar: 'https://avatars1.githubusercontent.com/u/7575152?v=3&s=400'
}, {
  text: 'We use WebdriverIO since november 2015 in order to support our ' +
        'QA department with automated frontend tests at <a href="http://www.1and1.com/">1&1</a>.',
  name: 'Alexander Martin',
  url: 'https://github.com/xeladotbe',
  avatar: 'https://avatars3.githubusercontent.com/u/11685228?v=3&s=460'
}, {
  text: '<a href="http://www.buildfocus.io/">Build Focus</a> uses WebdriverIO for all its system testing. It\'s ' +
        'fantastic to use, far more reliable than the other JS options, and lets you write genuinely readable ' +
        'tests with minimum mess.',
  name: 'Tim Perry',
  url: 'https://github.com/pimterry',
  avatar: 'https://avatars1.githubusercontent.com/u/1526883?v=3&s=460'
}, {
  text: 'THIS IS SIMLY THE FUTURE OF TESTING. EASY, OUT THE BOX, MADE BY COMMITTED DEVELOPERS AND TESTING ' +
        'EVANGELISTS!!!!<br><br>I am shouting this!',
  name: 'Sajjad Hossain',
  url: 'https://github.com/sajjadhossain',
  avatar: 'https://avatars2.githubusercontent.com/u/3619592?v=3&s=460'
}, {
  text: 'We\'ve just begun using WebdriverIO at <a href="http://www.urbanoutfitters.com/">Urban Outfitters</a> and ' +
        '<a href="http://www.anthropologie.com/">Anthropologie</a> and are excited about building ' +
        'our integration testing framework using this great tool.',
  name: 'Pat Thiel',
  url: 'https://github.com/patthiel',
  avatar: 'https://avatars3.githubusercontent.com/u/12736578?v=3&s=460'
}, {
  text: 'We\'re using WebdriverIO at Emma for our new JS-based integration testing framework.',
  name: 'Josh Cypher',
  url: 'https://github.com/dcypherthis',
  avatar: 'https://avatars3.githubusercontent.com/u/3697176?v=3&s=460'
}]

var App = function() {

    this.ui = {
        body: $(document.body),
        apinav: $('.apinav'),
        apiLinks: $('.apinav .commands a'),
        apiSections: $('.apinav h3 a'),
        commandSection: $('.apinav .commands'),
        clearLink: $('.searchbar a'),
        searchInput: $('.searchbar input'),
        testimonials: $('.testimonials')
    };

    this.events = {
        'click .apinav.guide>h3>a': 'openCommandList',
        'click .navbar-toggle': 'openNavbar',
        'keyup .searchbar>input': 'filterApi',
        'click .searchbar>a': 'clearQuery'
    };

    this.fadeTime = 200;
    this.delegateEvents();

    if (testimonials.length) {
        this.initTestimonials()
    }
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

App.prototype.initTestimonials = function() {
    var oldTestimonial = $('.testimonials .testimonial');

    var data = testimonials[Math.round(Math.random() * testimonials.length)];
    console.log(data, Math.round(Math.random() * testimonials.length));
    var link = $('<a />').attr('href', data.url).addClass('avatar');
    var avatar = $('<img />').attr('src', data.avatar);
    var text = $('<div />').addClass('text').html(data.text + ' - by ' + data.name);
    var testimonial = $('<div />').addClass('testimonial').append(link.append(avatar)).append(text);

    testimonial.fadeIn(250);
    setTimeout(function() {
      oldTestimonial.replaceWith(testimonial);
    }, 250)
    setTimeout(function() {
      oldTestimonial.fadeOut(250);
      this.initTestimonials();
    }.bind(this), 50000000)
}

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
