import React from 'react';
import SubHeader from '../components/subHeader';
import { Link } from 'react-router-dom';
import CardType from '../components/cardType';

const homePageStyle = {
    padding:'30px 15% 90px 15%',
    display:'flex',
    minHeight:'52.3vh'
}

class HomePage extends React.Component {
    render() {
      return (
        <React.Fragment>
            <SubHeader title="titles"/>
            <div style={window.innerWidth < 460 ? {display:'flex', flexDirection:'column', alignItems:'center', padding:'15px'} : homePageStyle}>
                <Link to="/series">
                    <CardType title="series" />
                </Link>
                <Link to="/movies" style={window.innerWidth < 460 ? {marginLeft:'0px',marginTop:'15px;'}:{marginLeft:'15px'}}>
                    <CardType title="movies" />
                </Link>
            </div>
        </React.Fragment>
      );
    }
}

export default HomePage;
