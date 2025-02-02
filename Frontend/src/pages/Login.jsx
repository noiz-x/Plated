import { useState } from "react";
import { login } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [emailuname, setEmailuname] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (error) {
            setError("Login Failed");
        }
    };

    const handleForgetPassword = () => {
        if (emailuname === ""){
            setError("Email or username field is empty");
        }
    }

    return (  
        <div className="login py-10 sm:px-10 px-3">
            <div className="bg-white xl:mx-96 lg:mx-64 md:mx-40 sm:mx-10 rounded-lg shadow-lg p-6 sm:p-10">
                <div>
                    <div className="text-2xl text-center mb-3 font-semibold">
                        Sign In
                    </div>

                    {error && (
                        <div className="error">
                            { error }
                        </div>
                    )}

                    <form onSubmit={e => handleSubmit(e)}>
                        <div>
                            <label htmlFor="field1">Email Or Username</label>
                            <input 
                                type="text"
                                id="field1"
                                className="input"
                                required
                                placeholder="Input your email or username"
                                minLength={3}
                                value={emailuname}
                                onChange={(e) => setEmailuname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password"
                                id="password" 
                                className="input"
                                placeholder="Input your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="float-end pb-4 text-blue-800 cursor-pointer hover:underline" onClick={handleForgetPassword}>
                            Forgot password?
                        </div>
                        <div className="mt-5">
                            <button type="submit" className="btn w-full" disabled={isLoading} style={{
                                opacity: isLoading && 0.6,
                            }}>{ isLoading && "Logging you in..." }{ !isLoading && "Login"}</button>
                        </div>
                    </form>

                    <div className="foot">
                        <div className="flex mt-3 flex-row justify-center items-center">
                            <hr className="w-full" />
                            <span className="px-3">or</span>
                            <hr className="w-full" />
                        </div>
                        
                        <div className="mt-4">
                            <button className="w-full border border-blue-800 border-opacity-30 text-blue-900 p-2 rounded-sm hover:bg-blue-50 flex justify-center items-center shadow-md">
                                <svg className="w-7 h-7 mr-2" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                            <g id="Google" transform="translate(401.000000, 860.000000)">
                                                <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                                                <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                                                <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path>
                                                <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>Sign in with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;