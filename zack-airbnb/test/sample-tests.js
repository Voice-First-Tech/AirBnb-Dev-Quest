'use strict';

const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;


for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {
    describe(`PLATFORM: ${rb.type()}`, () => {
        // Test isolated intents, "deep invocations"
        describe('LAUNCH-INTENTS', () => {
                // Invocation: "open my test app"
                it('should return a welcome message to the AirBnb', () => {
                    return send(rb.launch())
                        .then((res) => {
                            const matchesResponse = res.isAsk('Welcome to our humble home. We hope you enjoy your stay!', 'How can I help you?');
                            expect(matchesResponse).to.equal(true);
                        });
                });
        });
    });
}
