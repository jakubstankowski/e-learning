## e-learning

### technology :
- .NET Core 5
- React.js

##### Run React.js frontend:
`cd.. WebUi/ClientApp/e-learning-ui` 
`npm install`
`npm start`

##### Run redis-commander on windows (before that run redis server):

`redis-commander`

##### Start stripe webhook listener

`stripe listen -f https://localhost:44367/api/payments/webhook --skip-verify`
