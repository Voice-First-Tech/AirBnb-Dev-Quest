'use strict';
const { App, Util } = require('jovo-framework');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { Alexa } = require('jovo-platform-alexa');
jest.setTimeout(500);

for (const p of [new Alexa(), new GoogleAssistant()]) {
    const testSuite = p.makeTestSuite();

    describe(`PLATFORM: ${p.constructor.name} LAUNCH INTENTS` , () => {
        test('should return a welcome message and ask for house rules at "LAUNCH"', async () => {
            const conversation = testSuite.conversation();

            const launchRequest = await testSuite.requestBuilder.launch();
            const responseLaunchRequest = await conversation.send(launchRequest);
            expect(
                responseLaunchRequest.isAsk('Welcome to your Denver AirBnb! I can help you throughout your stay. To get started go over the house rules by saying, house rules, now.', 'Please say, house rules, now.')
            ).toBe(true);

        });
    });
}
