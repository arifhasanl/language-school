import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const froma= location.state?.from?.pathname || "/";
    const {loginUser}=useContext(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault();
        const from=event.target;
        const email=from.email.value;
        const password=from.password.value;
        loginUser(email,password)
        .then(()=>{

        })
        .then((error)=>{
            
        })
    }
    navigate(froma, { replace: true });
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  flex ">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"name="password" placeholder="password" className="input input-bordered" />
                            </div>
                           
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>are you new please <Link to='/signUp'>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;