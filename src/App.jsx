import "./App.css";
import { useState } from "react";
import NewCar from "./components/NewCar/NewCar";
import CarList from "./components/CarList/CarList";
// let lastId = 5;
const INITIAL_CARLIST = [
  {
    id: 1,
    plate: "GM899",
    brand: "BMW",
    model: "520d M Sport Pro",
    color: "Grey metallic",
    note: "Classy"
  },
  {
    id: 2,
    plate: "GT919",
    brand: "mercedes-benz",
    model: "E-class saloon",
    color: "Black",
    note: "Classy"
  },
  {
    id: 3,
    plate: "TT269",
    brand: "Honda",
    model: "City Hatchback RS",
    color: "Blue metallic",
    note: "Most Favourite"
  },
  {
    id: 4,
    plate: "AB123",
    brand: "Toyota",
    model: "Yaris Ative",
    color: "Red",
    note: " "
  },
  {
    id: 5,
    plate: "CB353",
    brand: "Honda",
    model: "Jazz",
    color: "Yellow",
    note: " "
  }
]

function App() {
  const [isShow, setIsShow] = useState(false);
  const [carList, setCarList] = useState(INITIAL_CARLIST);
  // const addNewCarHandler = (newCarData) => {
  //   const newCar = {
  //     ...newCarData,
  //     id: ++lastId
  //   }
  // }
  return (
    <div className="webcontainer">
      <div className="add-container">
        {isShow ? (
          <div>
            <NewCar setIsShow ={setIsShow} />
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setIsShow(true);
              }}
            >
              Add New car
            </button>
          </div>
        )}
      </div>
      <div className="list-container"><CarList carList={carList} /></div>
    </div>
  );
}

export default App;
