import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
const NavBar = () => {
    const {logOut,user} = useContext(AuthContext)
    const navItems = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/about'}>About</Link></li>
    <li><Link to={'/about'}>Services</Link></li>
    <li><Link to={'/about'}>Blog</Link></li>
    <li><Link to={'/about'}>Contact</Link></li>
    <li><Link to={'/login'}>login</Link></li>
    <li><Link to={'/signUp'}>signUp</Link></li>
    {
        user && <li><Link to={'/booking'}>Booking</Link></li>
    }
    </>

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            console.log(result)
        })
    }
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo} alt="" className='size-20' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <Link><button className="btn btn-outline btn-warning">Appointment</button></Link>
            {
                user && <button className='btn' onClick={handleLogOut}>Log Out</button>
            }
            </div>
        </div>
    );
};

export default NavBar;