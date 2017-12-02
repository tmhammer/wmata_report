
'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetReport');
    },
    'ReportIntent': function () {
        this.emit('GetReport');
    },
    'GetReport': function () {
        this.emit(':tell', 'Congratulations!  You have successfully asked for a metro report');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'You can say Metro Report to hear a status report of the metro, or say exit.';
        const reprompt = 'You can say Metro Report to hear a status report of the metro, or say exit.';
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
