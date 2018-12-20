# expressYourself
Express week 8 project. 

![](https://media.giphy.com/media/3orifib6e8IUsBsFa0/giphy.gif)

## User stories

basic CV template for FAC



![screen shot 2018-12-18 at 18 27 53](https://user-images.githubusercontent.com/25176118/50175056-c3fda800-02f3-11e9-88f8-0588c6321259.png)


### setup instructions
1. clone repo
2. `npm install` to install all dependencies
3. `node db/db_build.js` to build the database locally, if you are into that kinda thing
4. `npm run dev`to run on port 1989. Year of birth of the "DOM God"...


### Creating a local database
1. run `psql` or `pgcli`
2. CREATE DATABASE express_yourself
3. CREATE USER admin WITH SUPERUSER PASSWORD 'password'
4. ALTER DATABASE express_yourself OWNER TO admin


### DOM bits
- app drawer nicked from project earlier in the week
- hamburger menu nicked from [Colour Code, Week 1 project](https://github.com/fac-15/CC/blob/master/css/style.css)
- using [soundbites with DOM events](https://www.youtube.com/watch?v=VuN8qwZoego)

### SQL bits
- SELECT LUNCH - Posting info to one table, returning the id to enter into another table [Select Lunch](https://github.com/fac-15/SELECTlunch/blob/staging/src/handler/postData.js)