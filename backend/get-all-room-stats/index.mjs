import AWS from 'aws-sdk';
import { BigQuery } from '@google-cloud/bigquery';


const dynamodb = new AWS.DynamoDB.DocumentClient({
     region: 'us-east-1',
     accessKeyId: '',
     secretAccessKey: '',
     sessionToken: '',
 });
 console.log("After DynamoDB", dynamodb);
 // Initialize BigQuery
 const bigquery = new BigQuery({
     projectId: 'serverless-project-429820',
     keyFilename: 'serverless-project-429820-c5e312b2368f.json'
 });
 
 console.log("After BigQuery");

 const datasetId = 'serverless';
 const tableId = 'roomDetails';
 
 export const handler = async (event) => {
     try {
         const deleteOldData = `DELETE FROM \`${datasetId}.${tableId}\` WHERE TRUE`;
         await bigquery.query({query: deleteOldData});
         console.log("Data Deleted");
         const params = {
             TableName: 'RoomsTable'
         };
         const data = await dynamodb.scan(params).promise();

         console.log("Data", data);
         const items = data.Items;
 
         // Prepare rows for BigQuery
         const rows = items.map(item => ({
             id: item.roomId, 
         }));
 
         // Insert data into BigQuery
         await bigquery.dataset(datasetId).table(tableId).insert(rows);
 
         console.log('Data exported successfully');
 
         return {
             statusCode: 200,
             body: JSON.stringify('Data exported successfully')
         };
     } catch (error) {
         console.error('Error exporting data:', error);
 
         return {
             statusCode: 500,
             body: JSON.stringify('Error exporting data')
         };
     }
 };