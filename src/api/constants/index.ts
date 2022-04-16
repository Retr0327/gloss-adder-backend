import path from "path";

const UPLOAD_DIR: string = path.resolve("src", "api", "upload");
const getUploadedFileDir = (name: string) => path.resolve(UPLOAD_DIR, name);

const dockerEnv = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  koaPort: process.env.KOA_PORT,
};

export { UPLOAD_DIR, getUploadedFileDir, dockerEnv };
