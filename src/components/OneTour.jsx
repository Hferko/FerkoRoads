import { useState } from "react";
import { useGlobalContext } from "../context";
import { FaMap } from "react-icons/fa";

const OneTour = ({ tour, handleClick }) => {
    const { openModal, setRoad } = useGlobalContext();

    const [txt, setTxt] = useState(tour.info.slice(0, 150));
    const [seeAllTxt, setSeeAllTxt] = useState(true);

    const handleSlice = () => {
        setSeeAllTxt(!seeAllTxt);
        seeAllTxt ? setTxt(tour.info) : setTxt(tour.info.slice(0, 150));
    }

    return (
        <article className="tour-card" key={tour.id}>
            <div onClick={() => { openModal(); setRoad(tour) }} className="tour-img-container">
                <img src={tour.image} className="tour-img" alt={tour.title} />
                <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{tour.title}</h4>
                </div>
                <p>
                    {txt}
                    <button className="info-btn" onClick={handleSlice}>
                        {seeAllTxt ? ' ...mutass többet' : ' ...kevesebbet'}
                    </button>
                </p>
                <div className="tour-footer">
                    <p>
                        <span><FaMap /></span> {tour.location}
                    </p>
                    <p>{tour.duration}</p>
                    <p>{tour.cost}€-tól</p>
                </div>
            </div>
            <button className="btn-block delete-btn" onClick={handleClick}>
                Nem érdekel
            </button>
        </article>
    )
}
export default OneTour;