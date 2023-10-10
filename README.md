# movie-review-reactApp

## Steps to Follow to build a FullStack Application
This application uses the following techstack: 
* Backend: Spring Boot
*  Database: Mongo DB
*  Frontend: React App

Steps followed during the development -- There is a fair argument whether things should start from frontend or backend.
My personal preference is to 
* first setup the database,
* second write the backend logic,
* third build the frontend components,
* fourth connect the backend and frontend.

With the above approach in mind let us start with **Step1** 

### Step 1: Setting up the Database:# movie-review-reactApp

In this project we use MongoDB database cluster provided for free.
Go to [mongo db website](https://www.mongodb.com) and login. Follow the steps/tutorial which will be provided to create a Mongo DB shared cluster for the first you login.
**Note:Please initialize a shared cluster which is free of cost (if you do not want to get charged for the usage)**
Once the setup is complete, there are several ways to interact with your MongoDB.
In this project I chose to interact with help of a shell.

I am a mac user so firstly I had to install the **mongosh** on my local machine using the terminal.

The command to install is 
``` brew install mongosh ```

Once the mongosh is installed we can use the connection string provided by the MongoDB Interface to establish a secure connection to the Database. You will have to set a username 
and **SCRAM** key in the Database Access tab.

After the connection is established follow these steps to create a database, collections and import the data into these collections.

``` show dbs ``` will show the exsisting databses

``` use databasename ``` will change the active database or if a database doesn't exist with that name it will create a new database

``` db.createCollection("collectionName") ``` will create a new collection in the database

``` show collections ``` will show all the collections in the current database

``` db.collectionName.find() ``` will show the content of the collections (e.g. if the my collectionName is movie then db.movie.find())

There are several ways to insert data into MongoDB collection, one of them is --

 ``` mongoimport --uri="your uri" --username=yourusername -d dbname -c collectionName --file="filepath" --jsonArray ```
