import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";

const Features = ({feature}) => {
    return (
        <div >
            <h1 className="flex items-center"><TiTick className="text-white bg-green-700 rounded-full mr-3"></TiTick> {feature}</h1>
        </div>
    );
};


Features.propTypes = {
    feature: PropTypes.string
}
export default Features;