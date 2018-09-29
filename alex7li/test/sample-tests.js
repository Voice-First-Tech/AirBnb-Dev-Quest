'use strict';

const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;


for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {
    describe(`PLATFORM: ${rb.type()}`, () => {
        // Test isolated intents, "deep invocations"
        describe('LAUNCH-INTENYS', () => {
                // Invocation: "open my test app"
                it('should return a welcome message to the Airbnb', () => {
                    return send(rb.launch())
                        .then((res) => {
                            const matchesResponse = res.isAsk('Welcome to the thing', 'How can I help you?');
                            expect(matchesResponse).to.equal(true);
                        });
                });
        });
    });
}

