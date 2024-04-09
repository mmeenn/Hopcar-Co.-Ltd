import "./App.css";
import { useState } from "react";
import NewCar from "./components/NewCar/NewCar";

function App() {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      {isShow? (<div><NewCar/></div>):(
      <div>
        <button onClick={()=>{setIsShow(true)}}>Add New car</button>
      </div>
    )}
    </div>
  );
}

export default App;
