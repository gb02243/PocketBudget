# PocketBudget
## Usage Instructions
```
1. clone the repository
2. navigate to the PocketBudget directory
3. type 'npm install #' to install the dependencies
4. type 'node app' to run the application
5. navigate to http://localhost:8000
```

## Implementation
---
### Application Structure
#### Presentation Tier
Our presentation tier is written in Javascript, HTML, and CSS. We used Handlebars as our templating engine, allowing us to dynamically generate our HTML pages with information from our database and also simplify our workflow by using partials that can be shared among each page. We also used bootstrap as our CSS framework to help us make our web app responsive across almost any platform and allow us to standardize our design elements across the entire app.
#### Logic Tier
Our logic tier is written in Node.js and ExpressJS. This layer acts as a bridge for communication between the presentation tier and the data tier. We used Node.js as our server environment to open files on our server and return the content to the client. It generates dynamic page content based off of our CRUD operations that it sends and retrieves from the data tier. We used Express for our server framework to handle all of our GET, PUT, POST, and DELETE requests. Express allowed us to route all of our requests so the server could send and retrieve the information from the server so it can be displayed to the user in the presentation tier.
#### Data Tier
Our data tier consists of a MySQL database. To keep things simple we used a very small database structure consisting of three tables: Users, Budgets, and Transactions. The user table has columns for a user id, the user's name, email, password, city, state, and zip code. The budget table has columns for a budget id, user id, total budget, amount allocated for bills, food, gas, savings, and fun so the user can create their budget and the server can store the information for display. The transaction table stores all of the information about the purchases that the user enters so it can be compared to their budget and displayed in an easy-to-understand way. It consists of columns for a transaction id, user id, transaction category, transaction description, and transaction amount.

### Application Usage
---
#### Homepage
---
![homepage](https://i.imgur.com/Iwnxun3.jpg)
> From the homepage the user will have the option to Log In or Sign Up
##### Login Modal
![login](https://i.imgur.com/UnEoAQw.jpg)
> Each field in the login modal is verified with color coded emphasis so the user will know if they forgot to fill out a field. Once all of the fields are filled in, they will turn green and the user may log in.
##### Sign Up Modal
![signup](https://i.imgur.com/ZoYZxTJ.png)
> The sign up modal has the same verification features as the Log In modal. Once all of the fields are filled in they will turn green and the user will be redirected to the onboarding page.
#### Onboarding
---
##### Enter Budget
![enterbudget](https://i.imgur.com/N9DzFXk.png)
> On this page the user will be prompted to enter a budget amount per month. Once the field is filled in, it will turn green and the user will be able to move on to the next page.
##### Budget Breakdown
![breakdown](https://i.imgur.com/PWFAwMH.png)
> On this page the user will break down their budget into percentages for each category. As they enter the percentages the graph on the right will update to give them a visual representation of their budget breakdown.
##### Confirmation
![confirm](https://i.imgur.com/SUf28jt.png)
> On this page the user will be prompted to confirm their budget that they created in the previous two pages. They will see a dollar-by-dollar breakdown of each category. Once they are satisfied with their breakdown they can press submit and they will be redirected to their dashboard.
#### Dashboard
---
![dashboard](https://i.imgur.com/ZrQzEjZ.png)
> On the dashboard the user will have a couple of options. They can see a graph of their current budget breakdown that they created as well as a graph of their current reported spending. The spending will be color coded so the user can easily tell if they are over budget and if so what they are over budget on. Below the graphs the user has the option to Enter a Transaction and View Transactions, pressing either of these buttons will redirect them to their respective pages.
##### Enter Transaction
![entertrans](https://i.imgur.com/BkL2wnk.png)
> On this page the user will be able to enter a transaction. The transactions will be categorized, then they will enter the amount, and then they will enter the description of the item.
##### View Transaction
![viewtrans](https://i.imgur.com/tmeZYr5.png)
> On this page the user will be able to see all of their current transactions that they have entered.
