/**
 * Created by tatas on 12/02/18.
 */
import React, {Component} from 'react';

class DoctorsPage extends Component{
    constructor(props){
        super(props)
        this.state={
            doctorsList :[
                {
                    "Menstruation(Periods)" : [{
                    name:"Dr.Pratibha Narayan",
                    dept:"Obstetrics & Gynecology",
                    exp:"17 years years of experience",
                    desc:"Highrisk Pregnancies, Infertility"
                    },{
                        name:"Dr. Komal Chavan",
                        dept:"Obstetrics & Gynecology",
                        exp:"17 years years of experience",
                        desc:"High Risk Pregnancy Emergency Obstetrician, Gynaecologic Endoscopist & Infertility Specialist"
                    }]
                },
                {
                    "pregnancy" : [{
                        name:"Dr.Pratibha Narayan",
                        dept:"Obstetrics & Gynecology",
                        exp:"17 years years of experience",
                        desc:"Highrisk Pregnancies, Infertility"
                    },
                    {
                        name:"Dr.Ajit Patil",
                        dept:"Obstetrics & Gynecology",
                        exp:"",
                        desc:"Microsurgery for tubal anastomoses , Advanced laparoscopic surgery , Fetal medicine Certified Sonographer"
                    },
                    {
                        name:"Dr. Komal Chavan",
                        dept:"Obstetrics & Gynecology",
                        exp:"17 years years of experience",
                        desc:"High Risk Pregnancy Emergency Obstetrician, Gynaecologic Endoscopist & Infertility Specialist"
                    }
                    ]
                }
            ]
        }
    }

    render(){
        let activeClass = (this.props.active == "pageThree") ? "active":"inactive";
        let classes = `${activeClass} pageThree`;
        let questionType = this.props.questionType;
        return(
            <div className={classes}>
                <div className="docsPage">
                    <label className="docLabel">Choose Your Doctor</label>
                    <div className="docsList">
                        {this.state.doctorsList.map(function(items){
                            console.log(items, questionType)
                            if(Object.keys(items)[0] == questionType){
                                return items[questionType].map(function (item) {
                                   return <div className="docInfo">
                                        <img className="docImage"
                                             src="https://www.gravatar.com/avatar/4af8e49d9ee465f20635b3985cc6e7ed.jpg?d=identicon"
                                        />
                                        <div className="docsDesc">
                                            <div><span>{item.name}</span></div>
                                            <div><span>{item.dept}</span></div>
                                            <div><span>{item.exp}</span></div>
                                            <div><span>{item.desc}</span></div>
                                        </div>
                                    </div>
                                })
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorsPage;