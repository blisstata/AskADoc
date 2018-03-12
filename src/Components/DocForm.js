/**
 * Created by tatas on 10/02/18.
 */
import React, {Component} from 'react';
import PageOne from './form_page_one';
import PageTwo from './form_page_two';
import PageThree from './form_page_three';

class DocForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:"",
            email:"",
            tel:"",
            active:"pageOne",
            errorDisplay : {
                name:"none",
                email:"none",
                tel:"none",
                questionType:"none",
                desc:""
            },
            errorMessage : {
                name:"",
                email:"",
                tel:"",
                questionType : "",
                desc:""
            },
            fileInput:{},
            selInput:"Select Problem Type",
            desc:"",
            otherCheck:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    handleChange(e,fileInput){
       if(e.target.name == "name"){
           this.setState({name:e.target.value})
       }else if(e.target.name == "email"){
           this.setState({email:e.target.value})
       }else if(e.target.name == "tel"){
           this.setState({tel:e.target.value})
       }else if(e.target.name == "questionType"){
           this.setState({selInput:e.target.value})
       }else if(e.target.name == "description"){
           this.setState({desc:e.target.value})
       }else if(e.target.name == "file"){
           this.setState({fileInput:fileInput.files})
       }else if(e.target.name == "otherPerson"){
           this.setState({otherCheck:e.target.checked})
       }
       this.setState({
           errorDisplay:{name:"none",email:"none",tel:"none",questionType:"none",desc:"none"}
       });
    }

    handleSubmit(e){
        let {name,email,tel} = this.state;
        if(this.state.active == "pageOne"){
            if(name === "" || name.trim() === ""){
                this.setState({
                    errorDisplay:{name:"display"},
                    errorMessage:{name:"Please provide a name"}
                });
                return false;
            }
            if(email === "" || email.trim() === "" || !this.validateEmail(email)){
                this.setState({
                    errorDisplay:{email:"display"},
                    errorMessage:{email:"Please provide an email address"}
                });
                return false;
            }
            if( tel === "" || tel.trim() === ""){
                this.setState({
                    errorDisplay:{tel:"display"},
                    errorMessage:{tel:"Please provide a phone number"}
                });
                return false;
            }
            this.setState({active:"pageTwo"})
        }else if(this.state.active == "pageTwo"){
            let {selInput,desc} = this.state;
            if(selInput === "Select Problem Type"){
                this.setState({
                    errorDisplay:{questionType:"display"},
                    errorMessage:{questionType:"Please select a question"}
                });
                return false;
            }
            if(desc.trim() === ""){
                this.setState({
                    errorDisplay:{desc:"display"},
                    errorMessage:{desc:"Please Write a description"}
                })
                return false;
            }
            this.setState({active:"pageThree"})
        }

    }

    validateEmail(email){
        let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEmail.test(email)
    }
    render(){
        return(
            <div className="mainDoc">
                <PageOne name={this.state.name} email={this.state.email}
                         tel={this.state.tel} handleInput={this.handleChange} active={this.state.active}
                         errorDisplay={this.state.errorDisplay} errorMessage={this.state.errorMessage}/>
                <PageTwo active={this.state.active} selInput={this.state.selInput}
                         desc={this.state.desc} handleInput={this.handleChange} otherPer={this.state.otherCheck}
                         errorDisplay={this.state.errorDisplay} errorMessage={this.state.errorMessage}/>
                <PageThree active={this.state.active} questionType={this.state.selInput}/>
                <footer>
                    <input type="submit" name="submit" value="Next" className="btnSubmit" onClick={this.handleSubmit}/>
                </footer>
            </div>
        )
    }
}

export default DocForm;