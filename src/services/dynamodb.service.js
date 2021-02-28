const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const dynamoService = {

    async insertItem(user, TableName) {

        const params = {
            TableName,
            Item: {
                userid: user.userid,
                emailAddress: user.emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
            },
        };

        documentClient.put(params, function(err, data) {
            if (err) {
                console.log("Failed to insert item")
            } else {
                console.log("Successfully inserted item")
            }
        })
    },
};

module.exports = dynamoService;