import { useState } from "react";
import { login } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
    const [emailuname, setEmailuname] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [level, setLevel] = useState(1);
    const [resendCodeTimer, setResendCodeTimer] = useState(0);

    const apiDomain = process.env.REACT_APP_API_DOMAIN;

    const navigate = useNavigate();

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleResendMail = () => {
        setIsLoading(true);

        fetch(`${apiDomain}api/auth/password/reset/`, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({ email: emailuname }) 
        })
        .then((res) => {
            if (res.ok){
                let time = 60;
                setIsLoading(false);
                setResendCodeTimer(time);

                setInterval(() => {
                    if (time >= 0){
                        time--;
                        setResendCodeTimer(time);
                    }
                }, 1000);
            }
            else{
                setIsLoading(false);
            }
        })
    }

    const openInbox = () => {
        if (emailuname.includes("@gmail.com")) {
            window.open("https://mail.google.com/", "_blank");
        } else if (emailuname.includes("@outlook.com")) {
            window.open("https://outlook.live.com/", "_blank");
        } else if (emailuname.includes("@yahoo.com")) {
            window.open("https://mail.yahoo.com/", "_blank");
        } else {
            alert("Please open your inbox manually.");
        }
    }

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            await login(emailuname, password);
            // logged in =>
            setIsLoading(false);
            navigate("/dashboard");
        } catch (error) {
            setError("Login Failed. Invalid Credentials");
            setIsLoading(false);
        }
    };

    const handleForgetPassword = () => {
        if (emailuname === ""){
            setError("Email or username field is empty");
        }
        else if(!isValidEmail(emailuname)){
            setError("Field must contain a valid email")
        }
        else{
            fetch(`${apiDomain}api/auth/password/reset/`, {
                headers : {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({
                    email: emailuname
                })
            })
            .then(res => {
                if (!res.ok){
                    throw Error("Failed to send password reset mail")
                }
                else{
                    setError(null);
                    setLevel(2);
                }
            })
            .catch(err => {
                setError(err.message);
            })
        }
    }

    return (
        <div className="login min-h-screen flex flex-col">
            <Navbar />
            <div className="py-10 sm:px-10 px-3 bg-slate-100 flex-grow">
                <div className="bg-white xl:mx-96 lg:mx-64 md:mx-40 sm:mx-10 rounded-lg shadow-lg p-6 sm:p-10">
                    {level === 1 && (
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
                    )}

                    { level === 2 && (
                        <div className="email-sent p-3">
                            <div className="flex justify-center mb-3">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                                    <path d="m28 6h-24a2 2 0 0 0 -2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-16a2 2 0 0 0 -2-2zm-2.2 2-9.8 6.78-9.8-6.78zm-21.8 16v-15.09l11.43 7.91a1 1 0 0 0 1.14 0l11.43-7.91v15.09z"/><path d="m0 0h32v32h-32z" fill="none"/>
                                </svg>
                            </div>
                            An email has been sent to <span className="text-blue-900">{emailuname}</span> with a password reset link. Check your inbox to reset your password.

                            <div className="mt-4">
                                <button className="w-full border border-blue-800 border-opacity-30 p-2 rounded-sm hover:bg-blue-50 flex justify-center items-center shadow-md" onClick={openInbox}>
                                    <span>Open Inbox</span>
                                </button>
                            </div>

                            <div className="mt-3 py-4">Didn't recieve an email?
                                { resendCodeTimer <= 0 && !isLoading && <span className="text-blue-900 ml-1 cursor-pointer hover:underline" onClick={handleResendMail}>resend email</span> }
                                { isLoading && <span className="text-blue-900 ml-1">resending email...</span> }
                                { resendCodeTimer > 0 && !isLoading && <span className="text-blue-900 ml-1">{`email resent, resend another mail in ${resendCodeTimer}s`}</span> }
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
 
export default Login;