# Meet the FACers
Express Handlebars week 8 project. A basic CV template / skills database for FAC 15.

![](https://media.giphy.com/media/bl0OeEBbELdkc/giphy.gif)
> It's kinda got this way with gifs now...

## User stories
- As a member of FAC, I want to pair with coursemates who are of a similar level, to train on workshops
- As a member of FAC, I want to help form a strong team with coursemates who have different strengths
- As a member of FAC, I want to know which coursemates are best equipped to help me with a particular coding problem

![](https://i.imgur.com/1kckHZy.jpg)

### Whiteboarding / Planning

![](https://i.imgur.com/WKxd5eA.jpg)

### setup instructions
1. clone repo
2. `npm install` to install all dependencies
3. Create a local database with pgcli (see below)
4. `node db/db_build.js` to build the database locally, if you are into that kinda thing
5. `npm run dev` to run on port 1989. Year of birth of the "DOM God"...

### Creating a local database
1. run `psql` or `pgcli`
2. CREATE DATABASE express_yourself
3. CREATE USER admin WITH SUPERUSER PASSWORD 'password'
4. ALTER DATABASE express_yourself OWNER TO admin

---

### Stuff and Things we did...

### DOM bits
- app drawer nicked from project earlier in the week
- hamburger menu nicked from [Colour Code, Week 1 project](https://github.com/fac-15/CC/blob/master/css/style.css)
- using [soundbites with DOM events](https://www.youtube.com/watch?v=VuN8qwZoego)

### SQL bits
- SELECT LUNCH - Posting info to one table, returning the id to enter into another table [Select Lunch](https://github.com/fac-15/SELECTlunch/blob/staging/src/handler/postData.js)
- [can't send headers after they were sent to the client error](https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client)
- problem with database connection (on Martin's laptop), had to install pgcli new version. Much frustration.
- did an INNER JOIN to get all user data from two tables in the database. Joined user_ids to retrieve names.

### Other stuff
- Self indulgent CSS
- [HackMD with some bits and bobs in](https://hackmd.io/JkdM0tkhTRe9WfpVGBR3zQ)
- ```Array.sort()``` method
- replicating backend rendering in the frontend (see `public/index.js`)


### Things we didn't do:
- Extensive Testing
- Login, Signup, protected routes
- Database Testing
- Pick an uncontroversial name
- Host on Heroku
- Check if user exists in database before adding
- Server side validation
- Travis

![screen shot 2018-12-18 at 18 27 53](https://user-images.githubusercontent.com/25176118/50175056-c3fda800-02f3-11e9-88f8-0588c6321259.png)