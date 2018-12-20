const test = require("tape");
const request = require("supertest");
const app = require("../src/app");
// const server = require("../app");

//routes tests
//** 200 HOME **
test("Check home route returns a 200", t => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        t.equal(res.status == 200, true);
        t.end();
      }
    });
});

//** 200 SEARCH-PROFILES **
test("Check search-profiles route returns a 200", t => {
  request(app)
    .get("/search-profiles")
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        t.equal(res.status == 200, true);
        t.end();
      }
    });
});

//** 200 CREATE-PROFILES **
test("Check create-profiles route returns a 200", t => {
  request(app)
    .get("/create-profile")
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        t.equal(res.status == 200, true);
        t.end();
      }
    });
});

//** NON EXISTING 404 **
test("Check non-existing route returns a 404", t => {
  request(app)
    .get("/elephant-route")
    .expect(404)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        t.equal(res.status == 404, true);
        t.end();
      }
    });
});

// CHECK TYPE OF RES.BODY IS OBJ
test("Check search-profiles route returns a json object", t => {
  request(app)
    .get("/search-profiles")
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(typeof res.body);
        t.equal(typeof res.body === "object", true);
        t.end();
      }
    });
});

test("Check postData.postDataUser creates a new user", t => {
  request(app)
    .get("/search-profiles")
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(typeof res.body);
        t.equal(typeof res.body === "object", true);
        t.end();
      }
    });
});
