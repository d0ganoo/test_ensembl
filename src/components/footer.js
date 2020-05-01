import React from 'react';
import { Link } from 'react-router-dom';

import facebookWhite from '../assets/images/facebook-white.svg';
import twitterWhite from '../assets/images/twitter-white.svg';
import instagramWhite from '../assets/images/instagram-white.svg';


import appStore from '../assets/images/app-store.svg';
import playStore from '../assets/images/play-store.svg';
import microsoft from '../assets/images/microsoft.png';

const footerStyle = {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    backgroundColor: "#1e1e1e",
    color: '#72736E',
    padding: '30px 15%'
};

const cellMenuStyle = {
    display: 'inline-block',
    borderRight:'1px solid #72736E',
    paddingLeft:'15px',
    paddingRight:'15px'
}

const cellMenuStyleXs = {
    display: 'block',
    paddingTop: '3px'
}

const lastCellMenuStyle = {
    display: 'inline-block',
    borderRight:'none',
    paddingLeft:'15px',
}

const firstCellMenuStyle = {
    display: 'inline-block',
    borderRight:'1px solid #72736E',
    marginTop:'15px',
    paddingLeft:'0px',
    paddingRight:'15px'
}

const copyRightStyle = {
    paddingTop:'15px'
}

const lastRowContainer = {
    display:'flex',
    justifyContent: 'space-between',
    marginTop:'30px',
    paddingRight:'0px'
}

const rsLogoStyle = {
    height: '40px',
    width: '40px',
    marginRight:'30px',
    paddingTop:'10px',
    cursor:'pointer'
}

const storeStyle = {
    margin: '5px',
    width: '215px'
}

const rsContainerXS = {
    display:'flex',
    flexDirection:'column'
}

const rsContainer = {
    display:'flex',
    flexDirection:'row'
}

const storeContainer = {
    display:'flex',
    flexDirection:'row'
}

const storeContainerxS = {
    display:'flex',
    flexDirection:'column'
}

const Footer = function() {
    let clMenuStyle = window.innerWidth > 1100 ? cellMenuStyle : cellMenuStyleXs;
    let resContainer = window.innerWidth > 1000 ? rsContainer : rsContainerXS;
    let stContainer = window.innerWidth > 1000 ? storeContainer : storeContainerxS;

    return (
        <footer style={footerStyle}>
            <ul>
                <Link to="/" style={{color:'#72736E'}}><li style={window.innerWidth > 1100 ? firstCellMenuStyle : clMenuStyle}>Home</li></Link>
                <li style={clMenuStyle}>Terms and Conditions</li>
                <li style={clMenuStyle}>Privacy Policy</li>
                <li style={clMenuStyle}>Collection Statement</li>
                <li style={clMenuStyle}>Help</li>
                <li style={window.innerWidth > 1100 ? lastCellMenuStyle : clMenuStyle }>Manage Account</li>
            </ul>
            <p style={copyRightStyle}>Copyright 2020 DEMO Streaming. All Rights Reserved.</p>
            <div style={lastRowContainer}>
                <div style={window.innerWidth > 560 ? {display:'flex',flexDirection:'row', alignItems:'center'} : resContainer}>
                    <img style={window.innerWidth > 560 ? rsLogoStyle : {width: '40px', height: '40px', paddingTop:'10px'}} src={facebookWhite} alt="logo facebook" />
                    <img style={window.innerWidth > 560 ? rsLogoStyle : {width: '40px', height: '40px', paddingTop:'25px'}} src={twitterWhite} alt="logo twitter" />
                    <img style={window.innerWidth > 560 ? rsLogoStyle : {width: '40px', height: '40px', paddingTop:'30px'}} src={instagramWhite} alt="logo instagram" />
                </div>
                <div style={stContainer}>
                    <img style={window.innerWidth < 1100 ? {    margin: '5px', width: '170px'} : storeStyle} src={appStore} alt="logo apple store" />
                    <img style={window.innerWidth < 1100 ? {    margin: '5px', width: '170px'} : storeStyle} src={playStore} alt="logo google play" />
                    <img style={{width:'170px', margin: '6px 6px 6px 5px'}} src={microsoft} alt="logo microsoft" />
                </div>
            </div>
        </footer>
    )
};

export default Footer;