import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleSubmit = e =>{

        e.preventDefault()
        const email = e.target.email.value ;
        const password = e.target.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result=>console.log(result))
        .catch(error=>console.error(error))

        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                   <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-3xl font-bold">Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className='btn btn-primary' />
                        </div>
                        <h1>You have a new <Link to={'/signUp'} className='text-orange-500'>Sign Up</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;