# How to run the repository in a local environment

Step 1: 
```sh
$ git clone git@github.com:soydulceangelina/miniMarket.git
```

Step 2:
```sh
$ npm install
```

Step 3: <br/><br/>
Create a file named .env at the root, thene create two environment variables:
- REACT_APP_WOMPI_KEY, your Wompi public key
- REACT_APP_CLIENT_URL, your Wompi redirect url

Step 4:
```sh
$ npm start
```

# How to run the test

```sh
$ npm test
```

# How to build the app for a production enviroment 

```sh
npm run deploy:nodomain
```