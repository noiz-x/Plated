import recipe1 from "../assets/images/mexican_recipe1.jpeg"
import bgRecipe from "../assets/images/mexican_bg.webp"

import SearchBar from "../components/SearchBar";

const Home = () => {
    return ( 
        <div className="home text-slate-100 bg-blue-800">
            <div className="text-6xl font-bold text-center p-4 pt-10">Explore Recipies on PLATED</div>
            <div className="flex flex-wrap justify-center gap-10 mb-10">Browse up to 7,000 recipies on Plated</div>

            <SearchBar />
            
            <div className="relative flex items-center bg-black">
                <div className="w-auto p-4 absolute z-10 flex items-center">
                    <img src={recipe1} alt="Mexican Recipe" className="w-80 object-cover ml-8"/>
                    <div className="text-nowrap text-white px-8">
                        <div className="text-6xl font-semibold mb-2">Mexican Dishes</div>
                        <div className="text-xl">Explore our beautiful collection of Mexican recipes</div>
                    </div>
                </div>
                <img src={bgRecipe} alt="background recipe" className="object-cover opacity-40 hover:opacity-60 transition ease-in duration-1000" style={{
                    height: "380px",
                    width: "100vw"
                }} />
            </div>

        </div>
     );
}
 
export default Home;