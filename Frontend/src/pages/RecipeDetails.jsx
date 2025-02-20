import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RecipeDetails = () => {
    const { id } = useParams();
    const apiDomain = process.env.REACT_APP_API_DOMAIN;
    const { data:recipe, isLoading, errors } = useFetch(`${apiDomain}api/recipes/`+id);

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return ( 
        <div className="recipe-details bg-slate-100 min-h-screen">
            <Sidebar />
            <div className="bg-slate-100 sticky top-0 lg:hidden">
                <div className="text-2xl ml-[4rem] font-semibold py-3">Plated</div>
            </div>
            <div className="lg:ml-[20rem] h-full lg:px-0 px-4">
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
        </div>
     );
}
 
export default RecipeDetails;