import CarItem from "../CarItem/CarItem";

function CarList(props) {
    const carList = props.carList;
    return(
        <div>
            {carList.map((e)=>(
                <CarItem
                    key = {e.id}
                    id = {e.id}
                    plate = {e.plate}
                    brand = {e.brand}
                    model = {e.model}
                    color = {e.color}
                    note = {e.note}
                />
            ))}
        </div>
    )
}

export default CarList;