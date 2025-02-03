import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
    return ( 
        <ScaleLoader 
            color={color}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};
 
export default Loader;