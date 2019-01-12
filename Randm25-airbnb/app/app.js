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
        this.toIntent('HelloAirBnbIntent');
    },

    'HelloAirBnbIntent': function() {
      let speech = this.speechBuilder()
        .addText('Welcome to the comfy cabin! We want your experience to be nothing but royalty. I can change the temperature, tell you the wifi password, help you learn the wifi password, or help you check out. How can I help you?', 'How can I help you?')
        let reprompt = this.speechBuilder()
        .addText('How can I help you?')


this.followUpState('MainServiceState')
.ask(speech, reprompt);

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
