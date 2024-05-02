
import { Link } from "react-router-dom";
// import image from "../../assets/404.webp"
import image from "../../assets/404-ff2e8b61.webp"

const NotFound = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-10 h-screen justify-center items-center'>
                <img src={image} alt="" className='w-50 h-50' />
            <Link to='/'><button className="btn btn-primary capitalize"> Back to Home </button></Link>
            </div>
            <div className="pb-24">

            </div>
        </div>
    );
};
export default NotFound;