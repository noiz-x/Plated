import { useParams, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const VerifyEmail = () => {
    const { key } = useParams();
    const history = useHistory();

    const [redirectTimer, setRedirectTimer] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleRedirect = () => {
        let time = 10
        setInterval(() => {
            if (time > 0){
                setRedirectTimer(time);
                time--;
            }
            else{
                history.push("/login");
            }
        }, 1000)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:8000/api/auth/registration/verify-email/", {
                headers: {"Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify({ key })
            })
            .then(res => {
                if (res.ok){
                    setIsLoading(false);
                    handleRedirect();
                }
                else{
                    throw Error("We could'nt verify your email. Link may be invalid or expired.");
                }
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        }, 1000);
    }, []);

    return ( 
        <div className="email-verification">
            <div className="register py-10 sm:px-10 px-3">
                <div className="bg-white xl:mx-96 lg:mx-64 md:mx-40 sm:mx-10 rounded-lg shadow-lg p-6 sm:p-10">
                    
                    { isLoading && (
                    <div>
                        <div className="w-full p-3 flex justify-center">
                            <div className="w-16 h-16 p-4 rounded-full border-8 border-slate-200 border-l-blue-800 animate-spin"></div>
                        </div>
                        <div className="text-center">Pls wait, your email is being verified...</div>
                    </div>
                    )}

                    { !isLoading && !error && (
                    <div className="flex-col justify-center p-4">
                        <svg width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 mx-auto">
                            <path fillRule="evenodd" d="M10 16L12 14V10L13.6569 8.34314C15.1571 6.84285 16 4.80802 16 2.68629V0H13.3137C11.192 0 9.15714 0.842855 7.65685 2.34315L6 4H2L0 6L10 16ZM10.5 7C11.3284 7 12 6.32843 12 5.5C12 4.67157 11.3284 4 10.5 4C9.67157 4 9 4.67157 9 5.5C9 6.32843 9.67157 7 10.5 7Z" fill="#00b"/>
                            <path d="M4.9274 13.7558L2.24423 11.0726L0 15L1 16L4.9274 13.7558Z" fill="#00b"/>
                        </svg>
                        <div className="text-center">Your email has been verified successfully.</div>
                        <div className="my-3">
                            <Link to="/login"><button className="btn w-full">Log in now</button></Link>
                        </div>
                        <div className="text-center">Redirects to login automatically in {redirectTimer}s</div>
                    </div>
                    )}

                    { !isLoading && error && (
                        <div className="flex-col justify-center p-4">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 mx-auto">
                                <path d="M12 8V12" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 16.0195V16" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="12" r="10" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="text-center pb-3">
                                {error}
                            </div>
                            <span className="mx-4 text-blue-800 cursor-pointer hover:underline">Resend Verification Link</span> 
                            <div style={{padding:"3px"}}></div>
                            <span className="mx-4 text-blue-800 cursor-pointer hover:underline">Contact support</span>
                            <div className="p-1"></div>
                            <hr />
                            <div className="pt-2 px-4">Already verified? <Link to="/login" className="text-blue-800 cursor-pointer hover:underline">Login</Link></div>
                        </div>
                    )}

                </div>
            </div>
        </div>
     );
}
 
export default VerifyEmail;