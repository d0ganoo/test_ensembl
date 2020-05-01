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

class MoviesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            error:false
        }
    }
    componentDidMount(){
        let data = getData(url);
        data.then(response => {
            let movies = response.entries.filter(entry => {
                if (entry.releaseYear >= 2010 && entry.programType === "movie"){
                    return entry;
                }
                return false;
            })
            movies.sort((a,b) => a.title.localeCompare(b.title));
            this.setState({data:movies});
        }).catch(() => {
            this.setState({error: true});
        });
    }

    render() {
        const {data, error} = this.state;

        return (
            <React.Fragment>
                <SubHeader title="movies"/>
                {
                    error === true ? <p style={{padding:'30px 15%', minHeight:'61.9vh'}}>OOps, something went wrong...</p> :
                    data === null ? <p style={{padding:'15px 15%', minHeight:'61.9vh'}}>Loading...</p> : 
                    <div style={cardContainerStyle}>
                        {
                            data.map((movie, index) => {
                                if (index < 21){
                                    return (<Card key={index} image={movie.images["Poster Art"].url} title={movie.title}/>)
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

export default MoviesPage;
