import app from "./api/app";
import { dockerEnv } from "./api/constants";

const { port } = dockerEnv;

const PORT = port || 3000;

export default app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
