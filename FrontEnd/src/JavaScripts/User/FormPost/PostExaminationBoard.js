import axios from 'axios';
import React, { Component } from 'react';
import '../../../Style/App.css';

function refreshPage() {
    window.location.reload(false)
}

class ExaminationBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            doctoralSchool: '',
            doctoralProgram: '',
            department: '',
            consultant: '',
            doctoralTopic: '',
            examMainSubject: '',
            examSideSubject: '',
            creditFulfilled: '',
        }
    }

    SubmitHandler = e => {
        e.preventDefault()
        axios.post('https://localhost:50111/api/examboard', this.state)
        .then(response => {
            alert("Biztos el akarod menteni?");
            refreshPage()
        })
        .catch(error => {
            alert(error)
            refreshPage()
        })
    }

    render() {
        const{name, doctoralSchool, doctoralProgram, department, consultant, doctoralTopic, examMainSubject, examSideSubject, creditFulfilled} = this.state;
        let content = null;
        content = <form onSubmit={this.SubmitHandler}>
            <div style={{marginLeft: "auto", marginRight: 'auto'}}>
                <br />
                <span className="info-titleuser">Suggestion for the composition of the (Phd) complex exam examination board!</span>
                <br />
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Name of Candidate:</span>
                    <input className="inputstilo" type="text"  name="JeloltNeve" value={name} onChange={e => this.setState({ name: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine"  >
                    <span className="txt11"> Doctoral School:</span>
                    <input className="inputstilo" type="text"  name="doktoriiskola" value={doctoralSchool} onChange={e => this.setState({ doctoralSchool: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> Doctoral Program:</span>
                    <input className="inputstilo" type="text"  name="program" value={doctoralProgram} onChange={e => this.setState({ doctoralProgram: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> Department:</span>
                    <input className="inputstilo" type="text"  name="department" value={department} onChange={e => this.setState({ department: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine"  >
                    <span className="txt11"> Consultant:</span>
                    <input className="inputstilo" type="text"  name="consultant" value={consultant} onChange={e => this.setState({ consultant: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> Doctoral Topic:</span>
                    <input className="inputstilo" type="text"  name="doctoralTopic" value={doctoralTopic} onChange={e => this.setState({ doctoralTopic: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> The main subject of the exam:</span>
                    <input className="inputstilo" type="text"  name="examMainSubject" value={examMainSubject} onChange={e => this.setState({ examMainSubject: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine"  >
                    <span className="txt11"> The side subject of the exam:</span>
                    <input className="inputstilo" type="text"  name="examSideSubject" value={examSideSubject} onChange={e => this.setState({ examSideSubject: e.target.value })} required />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> The student has completed the required minimum of 90 credits:</span>
                    <input className="inputstilo" type="text"  name="creditFulfilled" value={creditFulfilled} onChange={e => this.setState({ creditFulfilled: e.target.value })} required />
                </div>

                <div style={{display: 'flex', width:"95%",  marginLeft:"auto", marginRight:"auto"}} >
                <table className="GeneratedTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Rank</th>
                            <th>Institution</th>
                            <th>Department</th>
                            <th>Post code</th>
                            <th>Location</th>
                            <th>Street</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="8" style={{writingMode: "vertical-rl", textOrientation: "upright", padding:"5px", textAlign: "center"}}  className="BoldFontStyle" >Examination</td>
                            <td className="BoldFontStyle" >President</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text" ></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>

                        </tr>
                        <tr>

                            <td className="BoldFontStyle" >Reserve President</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                        </tr>
                        <tr>

                            <td className="BoldFontStyle" >Member</td>
                            <td className="BoldFontStyle" >K</td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                        </tr>
                        <tr>

                            <td className="BoldFontStyle" >Member</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                        </tr>
                        <tr>

                            <td className="BoldFontStyle" >Substitute</td>
                            <td className="BoldFontStyle" >K</td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                        </tr>
                        <tr>

                            <td className="BoldFontStyle" >Substitute</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                        </tr>
                        <tr>

                            <td className="BoldFontStyle" >Expert</td>
                            <td className="BoldFontStyle" >K</td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                        </tr>
                        <tr>

                            <td className="BoldFontStyle" >Expert</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                            <td><input className="tdInput" type="text"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>

                <div className="container-login-form-btna">
                    <button type="submit" className="login-form-btna" onChange={this.handleSubmit}>
                        Save File
                    </button>
                </div>
            </div>
        </form>

        return (
            <div>
                {content}
                <br />
            </div>
        );
    }
}
export default ExaminationBoard;