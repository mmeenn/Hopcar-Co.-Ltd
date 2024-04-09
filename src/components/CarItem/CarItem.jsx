import "./CarItem.css"
function CarItem(props) {

    return(
        <div className="CarItem">
            <div>{props.plate}</div>
            <div>{props.brand}</div>
            <div>{props.model}</div>
            <div>{props.color}</div>
            <div>{props.note}</div>
        </div>
    )
}
export default CarItem;