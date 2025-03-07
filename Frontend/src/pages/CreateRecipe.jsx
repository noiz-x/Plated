import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const CreateRecipe = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [status, setStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const apiDomain = process.env.REACT_APP_API_DOMAIN;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { name, description };

        fetch(`${apiDomain}api/recipes/`, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (!response.ok){
                throw Error("could not fetch data");
            }
        })
        .catch(err => {
            console.log(err.message);
            setErrors(err.message)
        })

        if (!errors){
            navigate("/recipes");
            // Add a flash message of some'n later. Using m the status we get
        }
    }

    return ( 
        <div className="create-recipe bg-slate-100 min-h-screen">
            <Sidebar />
            <div className="bg-slate-100 sticky top-0 lg:hidden">
                <div className="text-2xl ml-[4rem] font-semibold py-3">Plated</div>
            </div>
            <div className="lg:ml-[20rem] h-full lg:px-0 px-4">
                <span className="font-bold text-4xl text-blue-950">Create New Recipe</span>
                <form className="p-4" onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label htmlFor="name" className="font-semibold text-lg">Input Recipe Name:</label>
                        <p><input type="text"
                                className="p-2 w-96 rounded" 
                                id="name" 
                                value={name} 
                                required
                                onChange={e => setName(e.target.value)} 
                        /></p>
                    </div>
                    <div>
                        <label htmlFor="description" className="font-semibold text-lg">Describe Your Recipe:</label>
                        <p><textarea type="text"
                            id="description" 
                            className="p-3 h-28 w-96 rounded"
                            value={description}
                            required
                            onChange={e => setDescription(e.target.value)}
                        ></textarea></p>
                    </div>
                    <button type="submit" className="bg-blue-300 p-2 rounded me-3">Create Recipe</button>
                    <button type="button" className="bg-blue-300 p-2 rounded" onClick={handleClick}>Back</button>
                </form>
            </div>
        </div>
     );
}
 
export default CreateRecipe;