# Meet the FACers
Express Handlebars week 8 project. A basic CV template / skills database for FAC 15.
Gives Json a good headstart on his [student project!](https://github.com/fac-15/project-ideas/issues/8)

![](https://external-preview.redd.it/eT-5pYpej7kUXLQ22wnSKElCDoJ4FJshexNTGEcD0zk.gif?format=png8&s=6d45997c05d42ed8d98f90b3d4e41773e8576d30)
> [It's kinda got this way with gifs now...](http://i.imgur.com/MKV12OF.gifv)

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
3. Create a local database with `pgcli` or `psql` (see below)
4. `node db/db_build.js` to build the database locally, as we haven't made on on Heroku yet. **NOTE:** Uncomment the line: ```// dbBuilder();``` in ```db/db_build.js``` first.
5. `config.env`should look something like this:
```javascript
DATABASE_URL = postgres://<user_name>:<password>@localhost:5432/<database_name>
```
6. `npm run dev` to run on port 1989. The year that [Express Yourself](https://www.youtube.com/watch?v=u31FO_4d9TY) came out. Our original project name.
7. Runs on **staging** branch

### Creating a local database
- Connect to postgres, by typing `psql` or `pgcli` in the terminal.
- Create the database by typing **CREATE DATABASE** `<database_name>`;.
- Create a superuser with a password by typing **CREATE USER** `<user_name>` **WITH SUPERUSER PASSWORD** '`<password>`'; (the password needs to be in quotes, otherwise you get an error).
- Change ownership of the database to the new user by typing **ALTER DATABASE** `<database_name>` **OWNER TO** `<user_name>`;

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

### Other stuff of note
- Lots of self indulgent CSS
- Posting data to server through the form
- Using a handlebars helper function
- ```Array.sort()``` method to sort by skill ascending
- replicating backend rendering in the frontend (see `public/index.js`)
- [HackMD with some bits and bobs in](https://hackmd.io/JkdM0tkhTRe9WfpVGBR3zQ)


### Things we didn't do:

![](https://media.giphy.com/media/wuw1DKSj9eq9G/giphy.gif)

- Extensive Testing
- Login, Signup, protected routes (authentication)
- Database Testing
- [Pick an original name](https://www.imdb.com/title/tt0290002/)
- Host on Heroku
- Check if user exists in database before adding
- Server side validation
- Travis CI and the fancy badges
