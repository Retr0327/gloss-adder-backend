import Redis from "ioredis";
import { dockerEnv } from "../constants";

const { redisHost, redisPort } = dockerEnv;

const redisConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return `redis://${redisHost}:${redisPort}`;
  }
  return "";
};

const redisCli = new Redis(redisConfig());

export default redisCli;
