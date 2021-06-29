# Exercise

Suppose you have $50,000 in cash, your goal is to develop a REST API backend that can recommend headphones you should buy on [Head-Fi](http://www.head-fi.org/f/6550/headphones-for-sale-trade), with the pure interest of selling them in the future to make money. **You need to consider how to invest your money to maximise your profit.** (Friendly reminder: you might want to consider the pricing trend of second-hand headphones)

The requirements are:

1. A JSON dataset from Head-Fi's [trading forum](https://www.head-fi.org/forums/headphones-for-sale-trade.6550/) has been crawled for you, you can download it using [this link](https://static.polarr.co/hiring/backend/threads.json.zip). You should parse and analyse this dataset and extract key information as the basis of your solution. You can use memory, local storage or databases to store your processed data.

2. You backend needs to provide a GET route **/recommend** where it needs to return an array of recommended **"For Sale"** threads to buy headphones from. Your recommendation algorithm should be based on data provided in step 1, and **the result sorted by descending profitability**. Profitability can be defined as how likely and how much you will be making a profit by buying and reselling a headphone.

3. You must have a **README.md** file that explains:
    - Compile and deployment instructions
    - Your solution on a abstract level, especially for the critical parts such as algorithms and data model.
    - Anything you feel awesome in your solution that's not covered in the above parts.
    
4. Our preference is for you to use Javascript/Typescript to implement it, but feel free to use the language you are most familiar with.

We want you to spend as much time as you'd like on this assignment. While the time is limited, we expect a usable backend program. That means assumptions and compromises will have to be made, please document these in the README. Also think about how your program maybe improved in the future.

## Installation

This app requires:

- A Linux or MacOS Environment _(Windows Untested)_
- Node.js LTS 14+

If you do not have node.js installed:

1. [Install NVM](https://github.com/creationix/nvm#installation) or [Install Yarn] (https://classic.yarnpkg.com/en/docs/install/#mac-stable)
2. [Install Node 14](https://github.com/creationix/nvm#usage) `nvm install 14`
3. [Switch to Node 14](https://github.com/creationix/nvm#usage) `nvm use 14`


## Starting the App

From the checked-out application folder, run:

`npm install` or `yarn`

This will install dependencies.

`npm start` or `yarn start`

You should see output like this:

```
node index.js
App listening on port 3000
```

You can then hit the default endpoint:

`http://localhost:3000/`

You should see something like this:

```json
{
  "messsage": "Hello World"
}
```

You can verify eslint error using below command

`eslint .`

To shutdown the server simply send a `^C`.

## Document ( For testing api )

To access Swagger Document

http://localhost:3000/api-docs/

For testing /recommend api
 
Open your browser and copy below link
http://localhost:3000/api-docs/

Now Expand API Doc
Now click on Try it now
Pass Amount in textbox and press execute button, you will get responce in box

## Testing

To run the existing (sample) tests simply use:

`npm test` or `yarn test`

You should see output like this:

```txt
 Test Suites: 3 passed, 3 total
 Tests:       5 passed, 5 total
 Snapshots:   0 total
 Time:        2.585s
 Ran all test suites.
```

## Contact

We encourage you to use your best discretion, but also to ask questions and communicate if you need it.
