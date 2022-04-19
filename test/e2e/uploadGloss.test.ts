import request from "supertest";
import server from "../../src/server";
import redisCli from "../../src/api/models/redisCli";

let token: string;
let mockFileName: string;
let testFileDir: string;

beforeAll(() => {
  testFileDir = "test/__mocks__/mockFile.txt";
  token = new Date().getTime().toString();
  mockFileName = mockFileName = `${token}-${0}-mock.txt`;
});
afterAll(() => {
  redisCli.del(token);
  server.close();
});

describe("Post /uploadGloss", () => {
  test(`should return { status: "failed", msg: "No file uploaded" }`, async () => {
    const response = await request(server)
      .post("/uploadGloss")
      .field("token", token)
      .attach(mockFileName, testFileDir);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("firstFileName");
  });
});
