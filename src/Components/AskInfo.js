/**
 * Created by tatas on 10/02/18.
 */
import React,{Component} from 'react';

class AskInfo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let activeClass = (this.props.active === "infoActive")? "active":"inactive";
        let classes = `${activeClass} infoComponent`;
        return(
            <div className={classes} onClick={() => {this.props.toggle(this.props.active)}}>
                <div>
                    <img src="https://www.docnme.com/doc.jpg" className="infoImg"/>
                    <label className="infoLabel">Have a question or need a second opinion, get authentic advice now.</label>
                </div>
            </div>
        )
    }
}

export default AskInfo