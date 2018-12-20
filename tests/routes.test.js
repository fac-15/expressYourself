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

// const funcArr = ["/facsters", "/facsters/:name"];

// test("Check facsters gets status of 200", t => {
//   request(app)
//     .get("/facsters")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         t.equal(res.status == 200, true);
//         t.end();
//       }
//     });
// });

// test("Check facsters returns a json object", t => {
//   request(app)
//     .get("/facsters")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(typeof res.body);
//         t.equal(typeof res.body === "object", true);
//         t.end();
//       }
//     });
// });

// test("Check facsters returns an object", t => {
//   request(app)
//     .get("/facsters")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         //   console.log(typeof res.body);
//         t.equal(typeof res.body === "object", true);
//         t.end();
//       }
//     });
// });

// test("Check facsters/abdullah returns the firstname Abdullah", t => {
//   request(app)
//     .get("/facsters/abdullah")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(res.body);
//         t.equal(res.body[0].firstname === "Abdullah", true);
//         t.end();
//       }
//     });
// });

// test("Check cohort is an integer", t => {
//   request(app)
//     .get("/facsters/abdullah")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // console.log(res.body);
//         t.equal(typeof res.body[0].cohort === "number", true);
//         t.end();
//       }
//     });
// });

// test("Check length of obj array", t => {
//   request(app)
//     .get("/facsters/abdullah")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // console.log(res.body);
//         t.equal(res.body.length === 1, true);
//         t.end();
//       }
//     });
// });

// test("Check length of main obj is different than 1", t => {
//   request(app)
//     .get("/facsters")
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         // console.log(res.body);
//         t.equal(res.body.length != 1, true);
//         t.end();
//       }
//     });
// });
