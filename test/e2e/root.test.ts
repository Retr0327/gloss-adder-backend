import request from "supertest";
import server from "src/server";

afterAll(() => {
  server.close();
});

describe("Test root /", () => {
  test("should return success and ip", async () => {
    const response = await request(server).get("/");
    const actual = { status: "success", ip: "::ffff:127.0.0.1" };

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject(actual);
  });
});
