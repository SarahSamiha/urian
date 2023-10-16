import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name, photo);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one uppercase character.');
            return;
        }
        else if (!/[!@#\$%^&*()_+{}\[\]:;<>,.?~\\|\-]/.test(password)) {
            setRegisterError('Password should have at least one special character.')
            return;
        }

        setRegisterSuccess('');
        setRegisterError('');

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                setRegisterSuccess('User created successfully');
                navigate(location?.state ? location.state : '/')

                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })

    }

    return (
        <div>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col  w-full max-w-sm text-darkGreen text-xl font-bold">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold text-purple">Register now!</h1>
                    </div>
                    <div className=" flex-shrink-0 shadow-2xl bg-darkGreen bg-opacity-30 rounded-xl ">
                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="form-control w-[300px]">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-12">
                                    {
                                        showPassword ?
                                            <AiFillEyeInvisible></AiFillEyeInvisible> :
                                            <AiFillEye></AiFillEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-green-800 bg-purple text-white border-none">Register</button>
                            </div>
                        </form>
                        
                        {
                            registerSuccess && <p className="text-darkGreen text-lg text-center pb-3">
                                {registerSuccess}
                            </p>
                        }
                        {
                            registerError && <p className="text-purple text-lg text-center pb-3">
                                {registerError}
                            </p>
                        }
                        
                        <p className="text-center pt-3 pb-3 ">Already have an account? <Link className="text-purple" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;