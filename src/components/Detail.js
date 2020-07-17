import React from 'react';
import './Detail.css';

class Detail extends React.Component{
    
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const {location} = this.props;
        if (location.state){
            return (
                <div className="about_container">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <h2 id="about_greet">
                        {location.state.title}
                    </h2>
                    <span>
                        {location.state.year}
                    </span>
                    <span>
                        {location.state.summary}
                    </span>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;