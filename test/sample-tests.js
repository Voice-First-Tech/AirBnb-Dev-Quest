'use strict';

const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;


for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {
    describe(`PLATFORM: ${rb.type()}`, () => {
        // Test isolated intents, "deep invocations"
        describe('LAUNCH-INTENT', () => {
                // Invocation: "open my test app"
                it('should return a welcome message to Airbnb"', () => {
                    return send(rb.launch())
                        .then((res) => {
                            const matchesResponse = res.isAsk('Dear Guest, welcome to Airbnb.', 'How can I help you with?');
                            expect(matchesResponse).to.equal(true);
                        });
                });
        });

    });
}
