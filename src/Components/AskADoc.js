/**
 * Created by tatas on 09/02/18.
 */
import React,{Component} from 'react';
import AskForm from './AskForm';
import AskInfo from './AskInfo';

class AskADoc extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: "infoActive"
        }
    }

    toggleMenu = (prevState) => {
        if(prevState === "infoActive"){
            this.setState({
                active : "formActive"
            })
        }
        else{
            this.setState({
                active : "infoActive"
            })
        }
    }

    render(){
        return (
            <div className="root">
                <AskForm active={this.state.active} toggle={this.toggleMenu}/>
                <AskInfo active={this.state.active} toggle={this.toggleMenu}/>
            </div>
        )
    }
}

export default AskADoc;