import { useState } from "react";

function NewCar(props) {
    const setIsShow = props.setIsShow
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
          note: curNote
        }
    
        
        console.log(`plate=${curPlate} brand=${curBrand} Model=${curModel} color=${curColor} note=${curNote}`);
    
        setCurPlate("");
        setCurBrand("");
        setCurModel("");
        setCurColor("");
        setCurNote("");
        setIsShow(false)
      };
    return(
        <div>
            <form className="newcar-container" onSubmit={submitHandler}>
        <div>
          <label>Plate Number</label>
          <input type="text" value={curPlate} onChange={(e)=>{setCurPlate(e.target.value)}} />
        </div>
        <div>
          <label>Brand</label>
          <input type="text" value={curBrand} onChange={(e)=>{setCurBrand(e.target.value)}} />
        </div>
        <div>
          <label>Model</label>
          <input type="text" value={curModel} onChange={(e)=>{setCurModel(e.target.value)}} />
        </div>
        <div>
          <label>Color</label>
          <input type="text" value={curColor} onChange={(e)=>{setCurColor(e.target.value)}} />
        </div>
        <div>
          <label>Note</label>
          <input type="text" value={curNote} onChange={(e)=>{setCurNote(e.target.value)}} />
        </div>
        <div>
          <button type="submit">Add</button>
          <button onClick={()=>{setIsShow(false)}}>Cancel</button>
        </div>
      </form>
        </div>
    )
}

export default NewCar;