import { useState } from "react";
import "./CarItem.css";
function CarItem(props) {
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
    props.editHandler(props.id, editValue);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <div className="CarItem">
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
        <button onClick={onClickDone}>Done</button>
        <button onClick={() => setIsEdit(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="CarItem">
      <div>{props.plate}</div>
      <div>{props.brand}</div>
      <div>{props.model}</div>
      <div>{props.color}</div>
      <div>{props.note}</div>
      <div>
        <button onClick={onClickEdit}>Edit</button>
      </div>
      <div>
        <button
          onClick={() => {
            props.deleteHandler(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default CarItem;
