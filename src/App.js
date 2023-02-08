import logo from "./logo.svg";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { Button } from "reactstrap";
import Home from "./componants/Home";
import Course from "./componants/Course";
import AllCouse from "./componants/AllCourse";

function App() {
  const btnhadaler = () => {
    toast("This is the frist massage !!", { position: "top-center" });
  };
  return (
    <div>
      <Home />
      {/* <Course /> */}
      <AllCouse/>
    </div>
  );
}

export default App;
