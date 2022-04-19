import request from "supertest";
import app from "../../src/server";

afterAll(async () => {
  app.close();
});

describe("Test root /", () => {
  test("should return success and ip", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("status", "success");
    expect(response.body).toHaveProperty("ip", "::ffff:127.0.0.1");
  });
});
