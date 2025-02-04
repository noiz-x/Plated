import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ResetPassword = () => {
    const { uidb64, key } = useParams();
    const apiDomain = process.env.REACT_APP_API_DOMAIN;
    const navigate = useNavigate();

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
                navigate("/login");
            }
        }, 1000)
    }

    const handleSubmit = () => {
        fetch(`${apiDomain}api/auth/password/reset/confirm/`, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({ uid: uidb64, token: key })
        })
        .then(res => {
            if (res.ok){
                setIsLoading(false);
                handleRedirect();
            }
            else{
                throw Error("We could'nt change your password. Link may be invalid or expired.");
            }
        })
        .catch(err => {
            setIsLoading(false);
            setError(err.message);
        })
    }

    return ( 
        <div className="password-reset">
            I'll finish this password reset page tomorrow.
        </div>
     );
}
 
export default ResetPassword;