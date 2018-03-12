/**
 * Created by tatas on 11/02/18.
 */
import React,{Component} from 'react';
import Error from './ErrorComponent';

class FormPageOne extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.handleInput(event)
    }
    render(){
        let activeClass = (this.props.active == "pageOne") ? "active":"inactive";
        let classes = `${activeClass} formOne`;
        return (
            <form className={classes} noValidate>
                <input type="text" required placeholder="Enter Full name" name="name" value={this.props.name} onChange={this.handleChange}/>
                <Error errorDisplay={this.props.errorDisplay.name} errorMessage={this.props.errorMessage.name}/>
                <input type="email" required placeholder="Enter your Email" name="email" value={this.props.email} onChange={this.handleChange}/>
                <Error errorDisplay={this.props.errorDisplay.email} errorMessage={this.props.errorMessage.email}/>
                <input type="tel" required name="tel" placeholder="Phone with country prefix (e.g +15555555555)"
                    value={this.props.tel} onChange={this.handleChange}/>
                <Error errorDisplay={this.props.errorDisplay.tel} errorMessage={this.props.errorMessage.tel}/>
            </form>
        )
    }
}

export default FormPageOne;