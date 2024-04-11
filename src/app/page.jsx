import React, { useReducer, useState } from "react";
import NewCar from "../components/NewCar/NewCar";
import CarList from "../components/CarList/CarList";
import { HandlerContext } from "../context/handler-context";
import { reducer } from "../reducers/ListChanged-reducer";
// import "./page.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

let lastId = 5;
const INITIAL_CARLIST = [
  {
    id: 1,
    plate: "GM899",
    brand: "BMW",
    model: "520d M Sport Pro",
    color: "Grey metallic",
    note: "Classy",
  },
  {
    id: 2,
    plate: "GT919",
    brand: "mercedes-benz",
    model: "E-class saloon",
    color: "Black",
    note: "Classy",
  },
  {
    id: 3,
    plate: "TT269",
    brand: "Honda",
    model: "City Hatchback RS",
    color: "Blue metallic",
    note: "Most Favourite",
  },
  {
    id: 4,
    plate: "AB123",
    brand: "Toyota",
    model: "Yaris Ative",
    color: "Red",
    note: " ",
  },
  {
    id: 5,
    plate: "CB353",
    brand: "Honda",
    model: "Jazz",
    color: "Yellow",
    note: " ",
  },
];

export default function Page() {
  const [isShow, setIsShow] = useState(false);
  const [carList, dispatch] = useReducer(reducer, INITIAL_CARLIST);

  const addCarListHandler = (newCarData) => {
    const newCar = {
      ...newCarData,
      id: ++lastId,
    };
    dispatch({
      type: "add_Car",
      newCar: newCar,
    });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "delete_Car",
      deleteId: id,
    });
  };

  const editHandler = (id, car) => {
    dispatch({
      type: "edit_Car",
      editId: id,
      car: car,
    });
  };

  return (
    <HandlerContext.Provider
      value={{
        addCarListHandler: addCarListHandler,
        editHandler: editHandler,
        deleteHandler: deleteHandler,
      }}
    >
      <div className="webcontainer">
        <div className="add-container border border-dark rounded py-5 mx-3">
          {isShow ? (
            <div>
              <NewCar setIsShow={setIsShow} />
            </div>
          ) : (
            <div>
              <Button
                onClick={() => {
                  setIsShow(true);
                }}
                variant="outline-primary"
              >
                Add New car
              </Button>
            </div>
          )}
        </div>
        <div className="list-container">
          <CarList carList={carList} />
        </div>
      </div>
    </HandlerContext.Provider>
  );
}
