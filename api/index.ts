import { init } from "./src/init";
import server from "./src/app";
const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  init();
  console.log("server is runing ",PORT);
});
