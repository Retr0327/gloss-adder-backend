import path from "path";

const UPLOAD_DIR: string = path.resolve("src", "api", "upload");
const getUploadedFileDir = (name: string) => path.resolve(UPLOAD_DIR, name);

const dockerEnv = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  port: process.env.PORT,
  period: process.env.NODE_ENV,
};

export { UPLOAD_DIR, getUploadedFileDir, dockerEnv };
