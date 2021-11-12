# E-Learning

E-Learning is platform for every people wanted start publish and sell e-learning courses. In use cases is very simillar like udemy. This project have very intuitive user interface, and very great skallable and easy to maintain technology. Fell free to check it out how this work

## Technology:
- .NET Core 5
- React.js



## Usage
Run React.js frontend:

`cd.. WebUi/ClientApp/e-learning-ui` 
`npm install`
`npm start`

Run redis-commander on windows (before that run redis server):

`redis-commander`

Start stripe webhook listener (before that remember to install stripe CLI)

`stripe listen -f https://localhost:44367/api/payments/webhook --skip-verify`
