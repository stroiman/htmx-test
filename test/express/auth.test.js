const supertest = require("supertest");
const app = require("../../src/express");

describe("/auth routes", () => {
  describe("GET /auth/login", () => {
    it("Should return a 200 status code", async () => {
      await supertest(app).get("/auth/login").expect(200);
    });
  });

  describe("POST /auth/login with bad credential", () => {
    describe("with good credentials", () => {
      it("should return a status 303", async () => {
        const test = supertest(app);
        await test
          .post("/auth/login")
          .send("username=validuser&password=validpassword")
          .expect(301)
          .expect("location", "/me");
      });
    });

    describe("with bad credentials", () => {
      it("should return a status 400", async () => {
        const test = supertest(app);
        await test
          .post("/auth/login")
          .send("username=invaliduser&password=validpassword")
          .expect(400);
      });
    });
  });
});
