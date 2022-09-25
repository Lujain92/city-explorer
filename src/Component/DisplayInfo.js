import React from "react";

class DisplayInfo extends React.Component{
    render(){
        return(
            <>
            <p> Name : {this.props.all.display_name} </p>
            <p>lat: {this.props.all.lat}</p>
            <p>lon: {this.props.all.lon}</p>
            </>
        )
    }
}
export default DisplayInfo