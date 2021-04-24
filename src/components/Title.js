import React from 'react';
/* PropTypes */
import propTypes from 'prop-types';

const Title = ({ value }) => {
    console.log("Title");
    return <h1>{value}</h1>;
};

Title.propTypes = {
    value: propTypes.string,
}

export default Title;