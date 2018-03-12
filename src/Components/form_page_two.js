/**
 * Created by tatas on 11/02/18.
 */
import React,{Component} from 'react';
import Error from './ErrorComponent';

class FormPageTwo extends Component{
    constructor(props){
        super(props)
        this.state = {
            options:["Select Problem Type","Menstruation(Periods)",
                "Pregnancy","General Gynaecology","Menopause","Exercise and Physiotherapy",
                "Pre-Conception","Fertility Treatments","Unable to conceive","Gynecological Cancers",
                "Nutrition","Mental Health"]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
    }

    handleChange(event){
        this.props.handleInput(event)
    }

    handleFileInput(event){
        this.props.handleInput(event,this.fileInput);
    }
    render(){
        let activeClass = (this.props.active == "pageTwo") ? "active":"inactive";
        let classes = `${activeClass} formTwo`;
        return(
            <form className={classes}>
                <select className="docSelect" name="questionType" value={this.props.selInput} onChange={this.handleChange}>
                    {this.state.options.map((name) => {
                        return <option key={name} value={name}>{name}</option>
                    })}
                </select>
                <Error errorDisplay={this.props.errorDisplay.questionType} errorMessage={this.props.errorMessage.questionType}/>
                <textarea className="docDesc" name="description" placeholder="Description"
                          value={this.props.desc} cols="30" rows="5" onChange={this.handleChange}/>
                <Error errorDisplay={this.props.errorDisplay.desc} errorMessage={this.props.errorMessage.desc}/>
                <input type="file" name="file" multiple accept=".xls,.xlsx,.pdf,image/*" size="2097152"
                ref={(input) => {
                    this.fileInput = input;
                }} onChange={this.handleFileInput}/>
                <span>
                    <input type="checkbox" name="otherPerson" checked={this.props.otherPer}
                           onChange={this.handleChange}/>
                <label className="docLabel">This question is for someone I know</label>
                </span>
            </form>
        )
    }
}

export default FormPageTwo;