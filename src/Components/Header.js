/**
 * Created by tatas on 09/02/18.
 */
import React, {Component} from 'react';

export default function DocHeader(props) {
    return(
        <div className="docHeader" onClick={() => {props.toggle(props.active)}}>
            <span className="docSpan">
                <img className="docChat" src="https://www.docnme.com/chat.svg"/>
                <label className="docLabel">Ask A Doctor</label>
            </span>
            <img className="docDown" src="https://www.docnme.com/down.svg"/>
        </div>
    )
}