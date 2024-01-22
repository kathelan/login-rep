import React, {useState} from 'react';
import '../styles/LoginForm.css'
import {FaUser, FaLock} from "react-icons/fa";


export default function LoginForm() {

    const [isRegister, setIsRegister] = useState(false);

    const renderLoginBody = () => {
        return (
            <>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>
                        Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={(e) => {
                        e.preventDefault();
                        setIsRegister(true);
                    }}>Register</a></p>
                </div>
            </>
        )
    };

    const renderRegisterBody = () => {
        return (
            <>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required/>
                    <FaLock className="icon"/>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>
                        Already have an account?
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            setIsRegister(false);
                        }}>
                            Login
                        </a>
                    </p>
                </div>
            </>
        )
    };

    return (
        <div className="wrapper">
            <form action="">
                {isRegister ? renderRegisterBody() : renderLoginBody()}
            </form>
        </div>

    );
}
