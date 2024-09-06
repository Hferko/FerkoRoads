import { useState } from "react";
import { useGlobalContext } from "../context";
import { IoIosPricetags } from "react-icons/io";

const Trip = ({ trip, handleClick }) => {
    const { openModal, setRoad } = useGlobalContext();
    const [txt, setTxt] = useState(trip.info.slice(0, 150));
    const [seeAllTxt, setSeeAllTxt] = useState(true);

    const ar = trip.price.replace(",", "");

    const handleSlice = () => {
        setSeeAllTxt(!seeAllTxt);
        seeAllTxt ? setTxt(trip.info) : setTxt(trip.info.slice(0, 150));
    }

    return (
        <article className="tour-card" key={trip.id}>
            <div onClick={() => { openModal(); setRoad(trip) }} className="tour-img-container">
                <img src={trip.image} className="tour-img" alt={trip.title} />              
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{trip.name}</h4>
                </div>
                <p>
                    {txt}
                    <button className="info-btn" onClick={handleSlice}>
                        {seeAllTxt ? ' ...mutass többet' : ' ...kevesebbet'}
                    </button>
                </p>
                <div className="tour-footer">                    
                    <p><IoIosPricetags /> {new Intl.NumberFormat('hu-HU').format(parseFloat(ar).toFixed(2))} €</p>
                </div>
            </div>
            <button className="btn-block delete-btn" onClick={handleClick}>
                Nem érdekel
            </button>
        </article>
    )
}
export default Trip;