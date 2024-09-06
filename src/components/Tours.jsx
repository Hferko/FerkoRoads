import { useEffect, useState } from 'react';
import { useGlobalContext } from "../context";
import OneTour from "./OneTour";
import Trip from './Trip';

const url = 'https://www.course-api.com/react-tours-project';

const Tours = () => {
    const {tours} = useGlobalContext();
    const [isLoading, setIsLoading] = useState(true);
    const [utazasok, setUtazasok] = useState(tours);
    const [travels, setTravels] = useState([]);
    const [isError, setIsError] = useState(false);
    const [reset, setReset] = useState(false)

    const handleRemove = (id) => {
        const newTours = utazasok.filter(journey => journey.id !== id);
        setUtazasok(newTours);        
    }  

    const handleDelete = (id) => {
        const newTours = travels.filter(journey => journey.id !== id);
        setTravels(newTours);        
    }  

    const handleReset = () => {
        setReset(!reset);
    }
    
    useEffect(() => {
        setUtazasok(tours);
        const getTours = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const jsonTours = await response.json();
                setTravels(jsonTours);
            }
            catch (error) {
                console.log(error);
                setIsError(true);
            }

            setIsLoading(false);
        }
        getTours();        
    }, [reset]);

    if (utazasok.length === 0 && travels.length === 0) {
        return (
            <div className='warning'>
                <h2>Nem maradt több túra, ami érdekelhetne</h2>
                <button className='btn' onClick={handleReset}>LÁSSAM ÚJRA AZ ÖSSZESET</button>
            </div>
        )
    }
    
    return (
        <>
            <section className="hero3"></section>
            <section className="section" id="tours">
                <div className="section-title">
                    <h2>kiemelt <span>túráink</span></h2>
                </div>
                <div className="section-center featured-center">
                    {utazasok.map((tour) => {   
                        return (      
                        <OneTour tour={tour} key={tour.id} handleClick={() => handleRemove(tour.id)}/> 
                        )  
                    })}
                </div>
                    <hr />
                <div className="section-title">
                    <h2>állandó <span>túráink</span></h2>
                </div>
                <div className="section-center featured-center">
                    {
                    isLoading ? <p className="loading"></p> :
                    isError ? <h3 className='alert' >Gáz van! Nem jöttek le az utak a szerverről</h3> :
                    travels.map((trip) => {   
                        return (      
                        <Trip trip={trip} key={trip.id} handleClick={() => handleDelete(trip.id)}/> 
                        )  
                    })}
                </div>
            </section>
            <section className="hero4"></section>
        </>
    )
}
export default Tours;