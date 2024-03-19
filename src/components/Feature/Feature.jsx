import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
          <p className='flex items-center ali'> <AiFillCheckCircle className='text-green-400 mr-2' /> {feature}</p>  
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
};

export default Feature;