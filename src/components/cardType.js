import React from 'react';
import PropTypes from 'prop-types';
import actionImg from '../assets/images/placeholder.png';

const cardTypeStyle = {
    display:'flex',
    alignItems: 'center',
    backgroundColor: "#414141",
    backgroundImage:`url(${actionImg})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundClip: 'border-box',
    color: '#fff',
    height: '230px',
    width: '150px'
};

const titleStyle = {
    width:'100%', 
    textAlign:'center', 
    textTransform:'uppercase',
    postion: 'relative',
    top:'-3px',
    fontWeight:'bold'
}

const CardType = function(props) {
    return (
        <React.Fragment>
            <div style={cardTypeStyle}>
                <h3 style={titleStyle}>{props.title}</h3>
            </div>
            <p style={{color:"black", paddingTop:"5px", textTransform:'capitalize'}}>popular {props.title}</p>
        </React.Fragment>

    )
};

CardType.propTypes = {
    title: PropTypes.string.isRequired
};

export default CardType;