import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useState } from "react";


const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const froma = location.state?.from?.pathname || "/";
    const { createUser, upDateUser } = useContext(AuthContext);
    const [passMessage, setMessage] = useState('');
    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const conformPassword = form.conformPassword.value;
        if (password !== conformPassword) {
            setMessage('! no mached your password');
        } else {
            setMessage('')
            createUser(email, password)
                .then(() => {
                    upDateUser(name, photo)
                        .then(() => {
                            const saveUser = { name: name, email: email }
                            fetch('http://localhost:5000/user', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        form.reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate('/');
                                    }
                                })
                            navigate(froma, { replace: true });
                        })
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content  flex ">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SingUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input required type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Conform Password</span>
                                </label>
                                <input required type="password" name="conformPassword" placeholder="confrompassword" className="input input-bordered" />
                                <p className="text-red">{passMessage}</p>
                            </div>

                            <div className="form-control mt-6">
                                <input required className="btn btn-primary" type="submit" value="SingUp" />
                            </div>
                        </form>
                        <p>You have already acount please<Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;