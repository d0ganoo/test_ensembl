import React from 'react';
import {getData} from '../backend/store';
import SubHeader from '../components/subHeader';
import Card from '../components/card';

const url = "./sample.json";

const cardContainerStyle = {
    display:'grid',
    padding:'30px 15% 90px 15%',
    gridTemplateColumns: 'repeat(auto-fill, 150px)',
    justifyContent: 'space-between',
    minHeight:'52.3vh'
}

class SeriesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            error: false
        }
    }
    componentDidMount(){
        let data = getData(url);
        data.then(response => {
            let series = response.entries.filter(entry => {
                if (entry.releaseYear >= 2010 && entry.programType === "series"){
                    return entry;
                }
                return false;
            })
            console.log(series);
            series.sort((a,b) => a.title.localeCompare(b.title));
            this.setState({data:series});
        }).catch(() => {
            this.setState({error: true});
        });
    }

    render() {
        const {data, error} = this.state;

        return (
            <React.Fragment>
                <SubHeader title="series"/>
                {
                    error === true ? <p style={{padding:'30px 15%', minHeight:'61.9vh'}}>OOps, something went wrong...</p> :
                    data === null ? <p style={{padding:'30px 15%', minHeight:'61.9vh'}}>Loading...</p> : 
                    <div style={cardContainerStyle}>
                        {
                            data.map((serie, index) => {
                                if (index < 21){
                                    return (<Card key={index} image={serie.images["Poster Art"].url} title={serie.title}/>)
                                }
                                return false;
                            })
                        }
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default SeriesPage;
