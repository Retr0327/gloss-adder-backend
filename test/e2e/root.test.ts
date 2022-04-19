import request from "supertest";
import server from "src/server";

afterAll(() => {
  server.close();
});

describe("Test root /", () => {
  test("should return success and ip", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("status", "success");
    expect(response.body).toHaveProperty("ip", "::ffff:127.0.0.1");
  });
});
