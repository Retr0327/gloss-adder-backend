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

afterEach(() => {
  Promise.all([redisCli.del(token), server.close()]);
});

describe("Post /uploadGloss", () => {
  test(`should return success`, async () => {
    const response = await request(server)
      .post("/uploadGloss")
      .field("token", token)
      .attach(mockFileName, testFileDir);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("firstFileName");
  });

  test(`should return { status: 'failed', message: "No download token" }`, async () => {
    const response = await request(server)
      .post("/uploadGloss")
      .attach(mockFileName, testFileDir);

    expect(response.statusCode).toEqual(400);
    expect(response.body.status).toBe("failed");
    expect(response.body.message).toBe("No download token");
  });
});
