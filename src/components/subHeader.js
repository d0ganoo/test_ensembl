import React from 'react';
import PropTypes from 'prop-types';

const subHeaderStyle = {
    backgroundColor: "#414141",
    color: '#fff',
    padding: '15px 15%'
};

const SubHeader = function(props) {
    return (
        <div style={subHeaderStyle}>
            <h2 style={{textTransform:'capitalize'}}>Popular {props.title}</h2>
        </div>
    )
};

SubHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default SubHeader;