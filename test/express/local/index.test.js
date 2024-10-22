const { request, createAgent } = require("../test-helpers");

describe("GET /local", () => {
  it("Should redirect to login when not logged in", async () => {
    await request()
      .get("/local")
      .expect(303)
      .expect(
        "location",
        `/auth/login?redirectUrl=${encodeURIComponent("/local")}`,
      );
  });

  describe("User is logged in", () => {
    it("Should render the page", async () => {
      const agent = createAgent();
      await agent
        .post("/auth/login")
        .send("username=validuser&password=validpassword")
        .expect(303);
      await agent.get("/local").expect(200);
    });
  });
});
