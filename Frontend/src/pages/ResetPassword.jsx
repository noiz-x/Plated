import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
    const { uidb64, key } = useParams();
    const apiDomain = process.env.REACT_APP_API_DOMAIN;
    const navigate = useNavigate();

    const [redirectTimer, setRedirectTimer] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [level, setLevel] = useState(1);

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
                    <div className="email-sent p-3">
                        <div>
                            Successful password reset

                            Login with new passowrd now?
                            Redirects to login automatically.
                        </div>
                    </div>
                )}

            </div>
        </div>
     );
}
 
export default ResetPassword;