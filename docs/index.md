# PocketBudget
## Usage Instructions
1. clone the repository
2. navigate to the PocketBudget directory
3. type 'npm install #' to install the dependencies
4. type 'node app' to run the application
5. navigate to http://localhost:8000

## Implementation
### Application Structure
#### Presentation Tier
Our presentation tier is written in Javascript, HTML, and CSS. We used Handlebars as our templating engine, allowing us to dynamically generate our HTML pages with information from our database and also simplify our workflow by using partials that can be shared among each page. We also used bootstrap as our CSS framework to help us make our web app responsive across almost any platform and allow us to standardize our design elements across the entire app.
#### Logic Tier
Our logic tier is written in Node.js and ExpressJS. This layer acts as a bridge for communication between the presentation tier and the data tier. We used Node.js as our server environment to open files on our server and return the content to the client. It generates dynamic page content based off of our CRUD operations that it sends and retrieves from the data tier. We used Express for our server framework to handle all of our GET, PUT, POST, and DELETE requests. Express allowed us to route all of our requests so the server could send and retrieve the information from the server so it can be displayed to the user in the presentation tier.
#### Data Tier
Our data tier consists of a MySQL database. To keep things simple we used a very small database structure consisting of three tables: Users, Budgets, and Transactions. The user table has columns for a user id, the user's name, email, password, city, state, and zip code. The budget table has columns for a budget id, user id, total budget, amount allocated for bills, food, gas, savings, and fun so the user can create their budget and the server can store the information for display. The transaction table stores all of the information about the purchases that the user enters so it can be compared to their budget and displayed in an easy-to-understand way. It consists of columns for a transaction id, user id, transaction category, transaction description, and transaction amount.

### Application Usage
#### Homepage
![homepage](https://i.imgur.com/Iwnxun3.jpg)
##### Login Modal
![login](https://imgur.com/JCLafT5.jpg)
##### Sign Up Modal
![signup](https://imgur.com/fBwbXTM.jpg)
#### Onboarding
##### Enter Budget
![enterbudget](https://imgur.com/6LO1L7K.jpg)
##### Budget Breakdown
![breakdown](https://imgur.com/bQIejHB.jpg)
##### Confirmation
![confirm](https://imgur.com/7ReoWxe.jpg)
#### Dashboard
![dashboard](https://imgur.com/4n086VO.jpg)
##### Enter Transaction
![entertrans](https://imgur.com/i7D53wP.jpg)
##### View Transaction
![viewtrans](https://imgur.com/TcyEwD4.jpg)
