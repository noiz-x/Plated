import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = ({ text }) => {
    return ( 
        <div className="loader w-[100vw] h-[100vh] bg-white absolute top-0 left-0 z-50 flex flex-col justify-center items-center">
            <ScaleLoader 
                color={"#1e40af"}
                loading={true}
                size={200}
            />
            <p className="mt-4 text-blue-800 text-sm font-semibold">{ text }</p>
        </div>
    );
};
 
export default Loader;