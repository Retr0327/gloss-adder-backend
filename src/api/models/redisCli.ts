import Redis from "ioredis";

const redisConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return "redis://redis:6379";
  }
  return "";
};

const redisCli = new Redis(redisConfig());

export default redisCli;
