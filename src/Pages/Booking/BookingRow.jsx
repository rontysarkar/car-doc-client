
const BookingRow = ({ booking,handleDelete,handleUpdateConfirm }) => {
    const { CustomerName, img, price, date, service,_id,status } = booking
    return (
        <tr>
            <td>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{CustomerName}</div>

                    </div>
                </div>
            </td>
            <td>
                {price}

            </td>
            <td>{service}</td>
            <td>{date}</td>
            <th>
                {
                    status == "Confirm" ? <span className="font-bold text-green-400">Confirm</span> :<button onClick={()=>handleUpdateConfirm(_id)} className="btn btn-ghost btn-xs">Book</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;