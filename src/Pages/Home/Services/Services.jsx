import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="my-20">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-400">Service</h3>
                <h1 className="text-5xl  font bold ">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour,  or randomised words which do not <br/> look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service=> <ServicesCard key={service._id} service={service}/>)
                }
            </div>
            
        </div>
    );
};

export default Services;