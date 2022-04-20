import request from "supertest";
import server from "src/server";
import redisCli from "src/api/models/redisCli";
import { removeUploadedFolder } from "src/api/helpers/download";

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

describe("POST /uploadGloss", () => {
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

    const actual = { status: "failed", message: "No download token" };

    expect(response.statusCode).toEqual(400);
    expect(response.body).toMatchObject(actual);
  });
});

describe("GET /download", () => {
  test("should return success", async () => {
    const response = await request(server).get(`/download/${token}`);
    expect(response.statusCode).toEqual(200);
    removeUploadedFolder(token);
  });

  test("should return false", async () => {
    const response = await request(server).get(`/download/`);
    expect(response.statusCode).toEqual(404);
  });
});
