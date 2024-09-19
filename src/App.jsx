import { useEffect } from "react";
import io from "socket.io-client";
const END_POINT = "http://localhost:8080";
var socket;

const App = () => {
  useEffect(() => {
    socket = io(END_POINT);
  }, []);

  return <div>App</div>;
};

export default App;
