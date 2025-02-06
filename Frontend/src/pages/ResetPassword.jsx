import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
    const { uidb64, key } = useParams();
    const apiDomain = process.env.REACT_APP_API_DOMAIN;
    const navigate = useNavigate();

    const [redirectTimer, setRedirectTimer] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [level, setLevel] = useState(2);

    // form
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const handleRedirect = () => {
        let time = 10
        setInterval(() => {
            if (time > 0){
                setRedirectTimer(time);
                time--;
            }
            else{
                navigate("/login");
            }
        }, 1000)
    }

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();

        fetch(`${apiDomain}api/auth/password/reset/confirm/`, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({ new_password1: password1, new_password2: password2, uid: uidb64, token: key })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                throw Error("Password Reset Failed. Link may be invalid or expired.");
            } else if (data.new_password2) {
                throw Error(data.new_password2[0]);
            } else if (data.detail && data.detail === "Password has been reset with the new password.") {
                // success!
                setIsLoading(false);
                setError(null);
                setLevel(2);
            } else{
                throw Error("Something Went Wrong.");
            }
        })
        .catch(err => {
            setIsLoading(false);
            setError(err.message);
        })
    }

    return ( 
        <div className="reset-password py-10 sm:px-10 px-3">
            <div className="bg-white xl:mx-96 lg:mx-64 md:mx-40 sm:mx-10 rounded-lg shadow-lg p-6 sm:p-10">
                {level === 1 && (
                    <div>
                        <div className="text-2xl text-center mb-3 font-semibold">
                            Reset Your Password
                        </div>

                        {error && (
                            <div className="error">
                                { error }
                            </div>
                        )}

                        <form onSubmit={e => handleSubmit(e)}>
                            <div>
                                <label htmlFor="password1">Enter New Password</label>
                                <input 
                                    type="password"
                                    id="password1"
                                    className="input"
                                    required
                                    placeholder="Input your new password"
                                    minLength={8}
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password2">Confirm Your Password</label>
                                <input 
                                    type="password"
                                    id="password2" 
                                    className="input"
                                    placeholder="Confirm your password"
                                    required
                                    value={password2}
                                    minLength={8}
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="btn w-full" disabled={isLoading} style={{
                                    opacity: isLoading && 0.6,
                                }}>{ isLoading && "Setting Password..." }{ !isLoading && "Set Password"}</button>
                            </div>

                        </form>
                    </div>
                )}

                { level === 2 && (
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

            </div>
        </div>
     );
}
 
export default ResetPassword;