const { request } = require("./test-helpers");
const { parse } = require("node-html-parser");
const { expect } = require("chai");

describe("/auth routes", () => {
  describe("GET /auth/login", () => {
    it("Should return a 200 status code", async () => {
      await request().get("/auth/login").expect(200);
    });
  });

  describe("POST /auth/login with bad credential", () => {
    describe("with good credentials", () => {
      it("should return a status 303", async () => {
        await request()
          .post("/auth/login")
          .send("username=validuser&password=validpassword")
          .expect(301);
        //.expect("location", "/me");
      });
    });

    describe("with bad credentials", () => {
      it("should return a status 400", async () => {
        await request()
          .post("/auth/login")
          .send("username=invaliduser&password=validpassword")
          .expect(400);
      });

      it("Should keep the username in the text box", async () => {
        const response = await request()
          .post("/auth/login")
          .send("username=invaliduser&password=validpassword");
        const result = parse(response.text);
        const usernameInput = result.querySelector("#username");
        const value = usernameInput.getAttribute("value");
        expect(value).to.equal("invaliduser");
      });

      it("Should show an error message", async () => {
        const response = await request()
          .post("/auth/login")
          .send("username=invaliduser&password=validpassword");
        const result = parse(response.text);
        expect(result.textContent).to.contain(
          "Username or password did not match",
        );
      });
    });
  });
});
