/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-red-500">${service.price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${service._id}`}><button className="btn btn-primary">Book now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;