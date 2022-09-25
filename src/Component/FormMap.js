import React from "react";
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import DisplayInfo from "./DisplayInfo";
class FormMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lat:"",
            lon:"",
            display_name:"",
            output:false,
            mapFlag:false,
            errFlag:false

        }
    }

    enterCity=(event)=>{
      event.preventDefault()
      const cityName = event.target.cityName.value
      console.log(cityName)
        axios
        .get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`)
        .then(result=>
            this.setState({
                lat:result.data[0].lat,
                lon:result.data[0].lon,
                display_name:result.data[0].display_name,
                output:true,
                mapFlag:true

            })
        )
        .catch(err=>
            // console.log(err) ;
            this.setState({
                errFlag:true
            })
            )
    }




    render(){

        return(
            <>
 <Form onSubmit={this.enterCity}>
      <Form.Group className="mb-3" >
        <Form.Label>City name</Form.Label>
        <Form.Control type="text" placeholder="cityName" name="cityName"/>
      </Form.Group>

     
     
      <Button variant="primary" type="submit">
        Explore!
      </Button>
    </Form>
    {this.state.output && <DisplayInfo all={this.state}/>}
{this.state.mapFlag && <p> <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}`}></img> </p>}
 {this.state.errFlag && <p> error </p>}
            </>
        )
    }
}
export default FormMap