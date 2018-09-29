'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    // logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.toIntent('HelloAirbnbIntent');
    },

    'HelloAirbnbIntent': function() {
        let speech = this.speechBuilder()
                  .addText('Dear Guest, welcome to Airbnb.')
        let reprompt = this.speechBuilder()
                  .addText('How can I help you with?')
        this.followUpState('MainServiceState').ask(speech, reprompt)
    },

    'MainServiceState': {
        'MyNameIsIntent': function(name) {
            this.toStatelessIntent('MyNameIsIntent', name);
        },

        // // Test fails if this is commented out
        // 'Unhandled': function(name) {
        //     this.ask('What\'s your name?');
        // },
    },

    'MyNameIsIntent': function(name) {
        this.tell('Hey ' + name.value + ', nice to meet you!');
    },

});

module.exports.app = app;
