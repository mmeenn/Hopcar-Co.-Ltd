import { useContext, useState } from "react";
import { HandlerContext } from "../../context/handler-context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function NewCar(props) {
  const ctx = useContext(HandlerContext);
  const setIsShow = props.setIsShow;
  const [curPlate, setCurPlate] = useState(" ");
  const [curBrand, setCurBrand] = useState(" ");
  const [curModel, setCurModel] = useState(" ");
  const [curColor, setCurColor] = useState(" ");
  const [curNote, setCurNote] = useState(" ");
  const submitHandler = (event) => {
    event.preventDefault();
    const newCar = {
      plate: curPlate,
      brand: curBrand,
      model: curModel,
      color: curColor,
      note: curNote,
    };

    ctx.addCarListHandler(newCar);

    setCurPlate("");
    setCurBrand("");
    setCurModel("");
    setCurColor("");
    setCurNote("");
    setIsShow(false);
  };
  return (
    <div>
      <form className="newcar-container" onSubmit={submitHandler}>
        <div className="flex-column">
          <div className="flex-row w-50 mx-auto">
            <Form.Label>Plate Number</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="example : GH123"
              value={curPlate}
              onChange={(e) => {
                setCurPlate(e.target.value);
              }}
            />
          </div>
          <div className="flex-row w-50 mx-auto">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              value={curBrand}
              onChange={(e) => {
                setCurBrand(e.target.value);
              }}
            />
          </div>
          <div className="flex-row w-50 mx-auto">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              value={curModel}
              onChange={(e) => {
                setCurModel(e.target.value);
              }}
            />
          </div>
          <div className="flex-row w-50 mx-auto">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              value={curColor}
              onChange={(e) => {
                setCurColor(e.target.value);
              }}
            />
          </div>
          <div className="flex-row w-50 mx-auto">
            <Form.Group>
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={curNote}
                onChange={(e) => {
                  setCurNote(e.target.value);
                }}
              />
            </Form.Group>
          </div>
        </div>
        <div>
          <Button variant="success" type="submit" className="mx-1 my-2">
            Add
          </Button>
          <Button
            className="mx-1 my-2"
            variant="danger"
            type="button"
            onClick={() => {
              setIsShow(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
