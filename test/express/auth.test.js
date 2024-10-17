const supertest = require("supertest");
const app = require("../../src/express");

describe("/auth routes", () => {
  describe("GET /auth/login", () => {
    it("Should return a 200 status code", async () => {
      await supertest(app).get("/auth/login").expect(200);
    });
  });
  it("Starts with a test", () => {});
});
