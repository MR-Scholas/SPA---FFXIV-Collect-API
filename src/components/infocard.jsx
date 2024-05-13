

export default function InfoCard (props)
{
    return(
        <div className="infoCard">
            <div className="cardHeader">
                <h2>{props.name}</h2>
                <img className ="icon" src={props.icon}/>
            </div>
            <div>Added: {props.patch}</div>
            <div>Owned: {props.owned}</div>
        </div>
    )
}