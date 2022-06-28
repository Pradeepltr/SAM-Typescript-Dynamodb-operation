import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
const AWS=require('aws-sdk')
const DB=new AWS.DynamoDB.DocumentClient();



export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    if(event.httpMethod=='POST')
    {
    const BodyData=JSON.parse(event.body || ' ');
    const params={
        TableName:"typescript-sam-dynamodb",
        Item:{
            id:BodyData?.id,
            Name:BodyData?.name,
            Department:BodyData?.dept
        }

    }
    try {
        await DB.put(params).promise()
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'data Submitted',
            }),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
}
if(event.httpMethod=='GET')
{
    const params={
        TableName:"typescript-sam-dynamodb",

    }
    try {
        await DB.scan(params).promise()
        .then((data:any)=>{
            response = {
                statusCode: 200,
                body: JSON.stringify({
                    EMP_DATA: data,
                }),
            };

        })
       
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
}

    return response;
};
