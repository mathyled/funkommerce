import { init } from "./src/init";
import server from "./src/app";

server.listen(3001, () => {
  init();
  console.log("server is runing");
});
