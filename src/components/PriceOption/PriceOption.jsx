import PropTypes from "prop-types";
import Features from "../features/features";

const PriceOption = ({option}) => {

    const{name, price, features} = option;

    return (
        <div className="bg-blue-500 rounded-md p-4 flex flex-col  text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl text-center">{name}</h4>
            <h1 className="mt-10 flex-grow">
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </h1>
            <button className="mt-12 bg-green-700 btn w-full py-2 font-bold">Buy Now</button>
        </div>
    );
};


PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;