/**
 * Created by tatas on 10/02/18.
 */
import React,{Component} from 'react';
import DocHeader from './Header';
import DocForm from './DocForm';

class AskForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let activeClass = (this.props.active === "formActive")? "active":"inactive";
        let classes = `${activeClass} formComponent`;
        return(
            <div className={classes}>
                <DocHeader active={this.props.active} toggle={this.props.toggle}/>
                <DocForm/>
            </div>
        )
    }
}
export default AskForm;