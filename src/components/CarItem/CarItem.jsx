import { useContext, useState } from "react";
import "./CarItem.css";
import { HandlerContext } from "../../context/handler-context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function CarItem(props) {
  const ctx = useContext(HandlerContext);
  const [isEdit, setIsEdit] = useState(false);
  const [curPlate, setCurPlate] = useState(" ");
  const [curBrand, setCurBrand] = useState(" ");
  const [curModel, setCurModel] = useState(" ");
  const [curColor, setCurColor] = useState(" ");
  const [curNote, setCurNote] = useState(" ");
  const onClickEdit = () => {
    setIsEdit(true);
    setCurPlate(props.plate);
    setCurBrand(props.brand);
    setCurModel(props.model);
    setCurColor(props.color);
    setCurNote(props.note);
  };

  const onClickDone = () => {
    const editValue = {
      plate: curPlate,
      brand: curBrand,
      model: curModel,
      color: curColor,
      note: curNote,
    };
    ctx.editHandler(props.id, editValue);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <div className="border border-dark rounded my-3 mx-3 d-flex">
        <input
          placeholder="Plate"
          type="text"
          value={curPlate}
          onChange={(e) => {
            setCurPlate(e.target.value);
          }}
        />
        <input
          placeholder="Brand"
          type="text"
          value={curBrand}
          onChange={(e) => {
            setCurBrand(e.target.value);
          }}
        />
        <input
          placeholder="Model"
          type="text"
          value={curModel}
          onChange={(e) => {
            setCurModel(e.target.value);
          }}
        />
        <input
          placeholder="Color"
          type="text"
          value={curColor}
          onChange={(e) => {
            setCurColor(e.target.value);
          }}
        />
        <input
          placeholder="Note"
          type="text"
          value={curNote}
          onChange={(e) => {
            setCurNote(e.target.value);
          }}
        />
        <Button variant="success" onClick={onClickDone}>
          Done
        </Button>
        <Button variant="danger" onClick={() => setIsEdit(false)}>
          Cancel
        </Button>
      </div>
    );
  }

  return (
    <div className="border border-dark rounded my-3 mx-3 d-flex">
      <div className="car-data">
        <div className="row py-2">
          <div className="col fw-bold text-primary fs-4">{props.plate}</div>
          <div className="col fs-5 text">{props.brand}</div>
          <div className="col fs-5 text">{props.model}</div>
          <div className="col fs-5 text">{props.color}</div>
        </div>
        <div className="row py-2">
          <div className="col fs-7 text-secondary">{props.note}</div>
        </div>
      </div>

      <div className="button-container py-3">
        <div className="edit-btn py-1">
          <Button variant="warning" onClick={onClickEdit}>
            Edit
          </Button>
        </div>
        <div className="delete-btn py-1">
          <Button
            variant="danger"
            onClick={() => {
              ctx.deleteHandler(props.id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
