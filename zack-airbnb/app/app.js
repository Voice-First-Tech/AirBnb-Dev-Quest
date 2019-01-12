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
        let speech  = this.speechBuilder()
            .addText("Welcome to our humble home. We hope you enjoy your stay!");
        let repromt  = this.speechBuilder()
            .addText("How can I help you?");
            
        this.followUpState('MainServiceState')
            .ask(speech, repromt);
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
