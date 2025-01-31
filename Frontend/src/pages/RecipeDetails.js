import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate, Link } from "react-router-dom";

const RecipeDetails = () => {
    const { id } = useParams();
    const { data:recipe, isLoading, errors } = useFetch("http://127.0.0.1:8000/api/recipes/"+id);

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return ( 
        <div className="recipe-details">
            {isLoading && <div>Loading...</div>}
            {recipe && (
                <div className="recipe">
                    <div className="text-2xl font-bold">{recipe.name}</div>
                    <br />
                    <div>{recipe.description}</div>
                </div>
            )}
            {errors && <span>{errors}</span>}

            <div className="py-10 flex items-center justify-center">
                <button type="button" className="bg-blue-300 p-2 rounded me-7" onClick={handleClick}>GO BACK</button>
                <Link to="/recipes/new"><button type="button" className="bg-blue-300 p-2 rounded">Create Recipe</button></Link>
            </div>
        </div>
     );
}
 
export default RecipeDetails;