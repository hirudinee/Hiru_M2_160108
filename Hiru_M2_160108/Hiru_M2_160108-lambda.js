let AWS = require('aws-sdk');
let SL = require('slappforge-aws');
const sqs = new SL.AWS.SQS();
exports.handler = function (event, context, callback) {

	sqs.sendMessage({
		MessageBody: 'This is a sample message',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		DelaySeconds: '0',

		MessageAttributes: {
			"key": {
				"DataType": "Number",
				"StringValue": "001"
			},
			"key01": {
				"DataType": "String",
				"StringValue": "test"
			}
		}
	},
		function (data) {
			// your logic (logging etc) to handle successful message delivery, should be here
			console.log(data)
		},
		function (error) {
			// your logic (logging etc) to handle failures, should be here
			console.log(error)
		});

	callback(null, 'Successfully executed');
}