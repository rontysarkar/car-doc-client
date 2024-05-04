import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const carData = useLoaderData()
    const {user} = useContext(AuthContext)

    const handleSubmit = e =>{
        e.preventDefault()
        const name = e.target.name.value; 
        const date = e.target.date.value;
        const email = user?.email;
        const order = {
            CustomerName:name,
            date,
            email,
            service:carData.title,
            service_id:carData._id,
            price:carData.price,
            img:carData.img
        }
        console.log(order)
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('add successfully')
            }
        })
    }
    

    return (
        <div>
            <h1>Title : {carData.title}</h1>
            <form onSubmit={handleSubmit} className="card-body ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$ '+ carData.price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                   <input type="submit" className="btn btn-primary" value="Book" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;