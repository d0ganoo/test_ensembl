import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "DodgerBlue",
    color: '#fff',
    padding: '15px 15%'
};

const connexion = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}

const trial = {
    marginLeft: '30px',
    padding: '10px',
    backgroundColor:'#414141'
}

const Header = function() {
    return (
        <header style={headerStyle}>
            <Link to="/" style={{color:'#fff', display: 'flex', alignItems: 'center'}}><h1>DEMO Streaming</h1></Link>
            <div style={connexion}>
                <p>Log in</p>
                <p style={trial}>Start your free trial</p>
            </div>
        </header>
    )
};

export default Header;