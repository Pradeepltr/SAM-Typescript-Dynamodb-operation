Create a AWS SAM Project with typescript and in this project handle dynamodb put and scan operation to put data in dynamodb and scan operation for retrive all data that present on dynamodb releted table

end-point
-  To put data
  - https://nipek5g0p5.execute-api.us-east-1.amazonaws.com/Prod/empdata
     - method - post
     - body data
         {
         "id":"emp_id",
         "name": "emp_name",
         "dept":"emp_deptarment"
         }
        
- To get data
  - https://nipek5g0p5.execute-api.us-east-1.amazonaws.com/Prod/empdata
    - method - get
