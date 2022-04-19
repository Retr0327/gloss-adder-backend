import request from "supertest";
import app from "../../src/server";

describe("Test root /", () => {
  test("should return success and ip", async () => {
    console.log("hello");
    const response = await request(app).get("/");

    console.log(response.body);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("status", "success");
    expect(response.body).toHaveProperty("ip", "::ffff:127.0.0.1");
  });
});
