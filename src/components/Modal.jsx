import { FaTimes } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { useGlobalContext } from "../context";
import { FaMap } from "react-icons/fa";

let ar = null;

const Modal = () => {
    const { isModalOpen, closeModal, road } = useGlobalContext();

    if (road.price) {
        ar = road.price.replace(",", "");
    }

    return (
        <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
            <div className="modal-container">
                <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes />
                </button>
                <div className="modal-img-container">
                    <img src={road.image} className="modal-img" alt={road.title} />
                    <p className="tour-date">{road.date}</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>{road.title}{road.name}</h4>
                    </div>
                    <p>{road.info}</p>
                    <div className="tour-footer">
                        <p className="wiki"><a href={`https://wikipedia.org/wiki/${road.location}`}> <span><FaMap /></span> {road.location}</a></p>
                        <p>{road.duration}</p>
                        {ar ? <p><IoIosPricetags /> {ar} €</p> :
                            <p>{road.cost}€-tól</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;