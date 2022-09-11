import "dotenv/config";

const PORT = process.env.PORT || 1337;
const ROOT = __dirname;

export const config = {
  server: {
    port: PORT,
    root: ROOT,
  },
};
