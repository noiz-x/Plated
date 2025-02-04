import useFetch from "../hooks/useFetch";
import { useNavigate, Link } from "react-router-dom";

const RecipesList = () => {
    const apiDomain = process.env.REACT_APP_API_DOMAIN;
    const { data:recipes, isLoading, errors} = useFetch(`${apiDomain}api/recipes/`);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return ( 
        <div className="recipes-list">
            {isLoading && <div>Loading...</div>}
            {recipes && recipes.map(recipe => (
                <div key={recipe.id}>
                    <Link to={"/recipes/"+recipe.id}><span className='font-bold'>{recipe.name}:</span></Link>
                    <br></br>
                    <span>{recipe.description}</span>
                    <p className='font-serif text-end border-b-2'>{recipe.date_added}</p>
                </div>
            ))}
            {errors && <span className="text-red-500">{errors}</span>}

        <div className="py-10 flex items-center justify-center">
            <button type="button" className="bg-blue-300 p-2 rounded me-7" onClick={handleClick}>GO BACK</button>
            <Link to="/recipes/new"><button type="button" className="bg-blue-300 p-2 rounded">Create Recipe</button></Link>
        </div>
        </div>
     );
}
 
export default RecipesList;