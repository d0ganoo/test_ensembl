import React from 'react';
import PropTypes from 'prop-types';

const cardStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    color: '#fff',
    height: '230px',
    width: '150px'
};

const titleStyle = {
    width:'150px',
    color:"black",
    paddingTop:"5px", 
    textTransform:'capitalize',
    overflow:'hidden',
    textOverflow:'ellipsis',
    whiteSpace: 'nowrap'
}

const Card = function(props) {
    return (
        <div style={{width:'150px', marginBottom:'15px'}}>
            <div style={cardStyle}>
                <img style={{maxWidth:'100%', height:'auto'}} src={props.image} alt={props.title}/>
            </div>
            <p style={titleStyle}>{props.title}</p>
        </div>

    )
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Card;