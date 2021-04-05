const uuid = require('uuid');
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const dynamoService = {

    async insertItem(user, TableName) {
        const params = {
            TableName,
            Item: {
                userid: uuid.v1(),
                emailAddress: user.emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
            },
        };
        documentClient.put(params, function(err, data) {
            if (err) {
                console.log("Failed to insert item", err)
            } else {
                console.log("Successfully inserted item")
            }
        })
    },

    async queryItem(user, TableName) {
        const params = {
            TableName,
            FilterExpression: 'emailAddress = :email and password = :password',
            ExpressionAttributeValues: { 
                ':email': user.emailAddress,
                ':password': user.password
              }
        }
        const userData = await documentClient.scan(params).promise()
        return userData
    },
};

module.exports = dynamoService;