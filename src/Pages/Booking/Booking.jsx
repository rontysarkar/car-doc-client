import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Booking = () => {
    const [bookings,setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/booking?email=${user?.email}`

    useEffect(() => {
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //          console.log(data)
        //          setBookings(data)

        //      })

    }, [url])


    const handleDelete = (id) =>{
        const process = confirm('Are You Sure')
        if(process){
            fetch(`http://localhost:5000/booking/${id}`,{
                method:"DELETE"
            })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('Delete successfully')
                const remainingBooking = bookings.filter(booking=> booking._id != id)
                setBookings(remainingBooking)
            }
        })
        }
        
    }

    const handleUpdateConfirm = id =>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method:"PATCH",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify({status: "Confirm"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('successfully update')
                const remainingBooking = bookings.filter(booking=> booking._id !== id);
                const updated = bookings.find(booking=> booking._id === id);
                updated.status = 'Confirm'
                const newBookings = [...remainingBooking,updated]
                setBookings(newBookings)
            }
        })
    }



    return (
        <div className="overflow-x-auto">
            <h1 className="text-2xl">Bookings Length:{bookings.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>DELETE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>SERVICE</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleUpdateConfirm={handleUpdateConfirm}/>)
                    }
                    
                </tbody>
               

            </table>
        </div>
    );
};

export default Booking;