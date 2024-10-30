import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 p-2 hover:bg-lime-700 rounded-lg">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};


Link.propTypes = {
    route: PropTypes.object
}

export default Link;