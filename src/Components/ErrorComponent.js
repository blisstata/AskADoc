/**
 * Created by tatas on 12/02/18.
 */
import React,{Component} from 'react';

class ErrorComponent extends Component{
    render(){
        return(
            <div className={(this.props.errorDisplay == "none")?"inactive":"active"}>
                <span className="error">
                    {this.props.errorMessage}
                </span>
            </div>
        )
    }
}

export default ErrorComponent;