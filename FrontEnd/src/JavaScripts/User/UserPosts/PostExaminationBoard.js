import axios from 'axios';
import React, { Component } from 'react';
import '../../../Style/App.css';
import UserData from '../UserDataGetSet';

function refreshPage() {
    window.location.reload(false)
}

class ExaminationBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: UserData.GetUserUserName(),
            name: '',
            doctoralSchool: '',
            doctoralProgram: '',
            department: '',
            consultant: '',
            doctoralTopic: '',
            examMainSubject: '',
            examSideSubject: '',
            creditFulfilled: '',
            //president
            presidentName: '',
            presidentPositin: '',
            presidentRank:'',
            presidentInstitution: '',
            presidentDepartment: '',
            presidentPostCode: '',
            presidentLocation: '',
            presidentStreet: '',
            presidentEmail: '',
            //reservePresident
            reservePresidentName: '',
            reservePresidentPosition: '',
            reservePresidentRank: '',
            reservePresidentInstitution: '',
            reservePresidentDepartment: '',
            reservePresidentPostCode: '',
            reservePresidentLocation: '',
            reservePresidentStreet: '',
            reservePresidentEmail: '',
            //memberOne
            memberOneName: '',
            memberOnePosition: '',
            memberOneRank:  '',
            memberOneInstitution: '',
            memberOneDepartment: '',
            memberOnePostCode: '',
            memberOneLocation: '',
            memberOneStreet: '',
            memberOneEmail: '',
            //memberTwo
            memberTwoName: '',
            memberTwoPosition: '',
            memberTwoRank: '',
            memberTwoIntitution: '',
            memberTwoDepartment: '',
            memberTwoPostCode: '',
            memberTwoLocation: '',
            memberTwoStreet: '',
            memberTwoEmail: '',
            //SubstituteOne
            substituteOneName: '',
            substituteOnePosition: '',
            substituteOneRank: '',
            substituteOneInstitution: '',
            substituteOneDepartment: '',
            substituteOnePostCode: '',
            substituteOneLocation: '',
            substituteOneStreet: '',
            substituteOneEmail: '',
            //SubstituteTwo
            substituteTwoName: '',
            substituteTwoPosition: '',
            substituteTwoRank: '',
            substituteTwoIntitution: '',
            substituteTwoDepartment: '',
            substituteTwoPostCode: '',
            substituteTwoLocation: '',
            substituteTwoStreet: '',
            substituteTwoEmail: '',
            //expertOne
            expertOneName: '',
            expertOnePosition: '',
            expertOneRank: '',
            expertOneInstitution: '',
            expertOneDepartment: '',
            expertOnePostCode: '',
            expertOneLocation: '',
            expertOneStreet: '',
            expertOneEmail: '',
            //experTwo
            expertTwoName: '',
            expertTwoPosition: '',
            expertTwoRank: '',
            expertTwoInstitution: '',
            expertTwoDepartment: '',
            expertTwoPostCode: '',
            expertTwoLocation: '',
            expertTwoStreet: '',
            expertTwoEmail: '',

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
        const{ name, doctoralSchool, doctoralProgram, department, consultant, doctoralTopic, examMainSubject, examSideSubject, creditFulfilled} = this.state;
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
                    <input className="inputstilo" type="text"  name="doktoriiskola" value={doctoralSchool} onChange={e => this.setState({ doctoralSchool: e.target.value })}  />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> Doctoral Program:</span>
                    <input className="inputstilo" type="text"  name="program" value={doctoralProgram} onChange={e => this.setState({ doctoralProgram: e.target.value })}  />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> Department:</span>
                    <input className="inputstilo" type="text"  name="department" value={department} onChange={e => this.setState({ department: e.target.value })}  />
                </div>

                <div className="ThreeDivInLine"  >
                    <span className="txt11"> Consultant:</span>
                    <input className="inputstilo" type="text"  name="consultant" value={consultant} onChange={e => this.setState({ consultant: e.target.value })}  />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> Doctoral Topic:</span>
                    <input className="inputstilo" type="text"  name="doctoralTopic" value={doctoralTopic} onChange={e => this.setState({ doctoralTopic: e.target.value })}  />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> The main subject of the exam:</span>
                    <input className="inputstilo" type="text"  name="examMainSubject" value={examMainSubject} onChange={e => this.setState({ examMainSubject: e.target.value })}  />
                </div>

                <div className="ThreeDivInLine"  >
                    <span className="txt11"> The side subject of the exam:</span>
                    <input className="inputstilo" type="text"  name="examSideSubject" value={examSideSubject} onChange={e => this.setState({ examSideSubject: e.target.value })}  />
                </div>

                <div className="ThreeDivInLine" >
                    <span className="txt11"> The student has completed the  minimum of 90 credits:</span>
                    <input className="inputstilo" type="text"  name="creditFulfilled" value={creditFulfilled} onChange={e => this.setState({ creditFulfilled: e.target.value })}  />
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
                            <td rowSpan="8" style={{writingMode: "vertical-rl", textOrientation: "upright", padding:"5px", textAlign: "center"}}  className="BoldFontStyle" >Examination Board</td>
                            <td className="BoldFontStyle" >President</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text" name="presidentName" value={this.presidentName} onChange={e => this.setState({ presidentName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentPositin" value={this.presidentPositin} onChange={e => this.setState({ presidentPositin: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentRank" value={this.presidentRank} onChange={e => this.setState({ presidentRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentInstitution" value={this.presidentInstitution} onChange={e => this.setState({ presidentInstitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentDepartment" value={this.presidentDepartment} onChange={e => this.setState({ presidentDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentPostCode" value={this.presidentPostCode} onChange={e => this.setState({ presidentPostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentLocation" value={this.presidentLocation} onChange={e => this.setState({ presidentLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentStreet" value={this.presidentStreet} onChange={e => this.setState({ presidentStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="presidentEmail" value={this.presidentEmail} onChange={e => this.setState({ presidentEmail: e.target.value })}  ></input></td>

                        </tr>
                        <tr>
                            <td className="BoldFontStyle" >Reserve President</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text" name="reservePresidentName" value={this.reservePresidentName} onChange={e => this.setState({ reservePresidentName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentPosition" value={this.reservePresidentPosition} onChange={e => this.setState({ reservePresidentPosition: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentRank" value={this.reservePresidentRank} onChange={e => this.setState({ reservePresidentRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentInstitution" value={this.reservePresidentInstitution} onChange={e => this.setState({ reservePresidentInstitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentDepartment" value={this.reservePresidentDepartment} onChange={e => this.setState({ reservePresidentDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentPostCode" value={this.reservePresidentPostCode} onChange={e => this.setState({ reservePresidentPostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentLocation" value={this.reservePresidentLocation} onChange={e => this.setState({ reservePresidentLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentStreet" value={this.reservePresidentStreet} onChange={e => this.setState({ reservePresidentStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="reservePresidentEmail" value={this.reservePresidentEmail} onChange={e => this.setState({ reservePresidentEmail: e.target.value })}  ></input></td>
                        </tr>
                        <tr>
                            <td className="BoldFontStyle" >Member</td>
                            <td className="BoldFontStyle" >K</td>
                            <td><input className="tdInput" type="text" name="memberOneName" value={this.memberOneName} onChange={e => this.setState({ memberOneName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOnePosition" value={this.memberOnePosition} onChange={e => this.setState({ memberOnePosition: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOneRank" value={this.memberOneRank} onChange={e => this.setState({ memberOneRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOneInstitution" value={this.memberOneInstitution} onChange={e => this.setState({ memberOneInstitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOneDepartment" value={this.memberOneDepartment} onChange={e => this.setState({ memberOneDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOnePostCode" value={this.memberOnePostCode} onChange={e => this.setState({ memberOnePostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOneLocation" value={this.memberOneLocation} onChange={e => this.setState({ memberOneLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOneStreet" value={this.memberOneStreet} onChange={e => this.setState({ memberOneStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberOneEmail" value={this.memberOneEmail} onChange={e => this.setState({ memberOneEmail: e.target.value })}  ></input></td>
                        </tr>
                        <tr>
                            <td className="BoldFontStyle" >Member</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text" name="memberTwoName" value={this.memberTwoName} onChange={e => this.setState({ memberTwoName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoPosition" value={this.memberTwoPosition} onChange={e => this.setState({ memberTwoPosition: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoRank" value={this.memberTwoRank} onChange={e => this.setState({ memberTwoRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoIntitution" value={this.memberTwoIntitution} onChange={e => this.setState({ memberTwoIntitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoDepartment" value={this.memberTwoDepartment} onChange={e => this.setState({ memberTwoDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoPostCode" value={this.memberTwoPostCode} onChange={e => this.setState({ memberTwoPostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoLocation" value={this.memberTwoLocation} onChange={e => this.setState({ memberTwoLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoStreet" value={this.memberTwoStreet} onChange={e => this.setState({ memberTwoStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="memberTwoEmail" value={this.memberTwoEmail} onChange={e => this.setState({ memberTwoEmail: e.target.value })}  ></input></td>
                        </tr>
                        <tr>
                            <td className="BoldFontStyle" >Substitute</td>
                            <td className="BoldFontStyle" >K</td>
                            <td><input className="tdInput" type="text" name="substituteOneName" value={this.substituteOneName} onChange={e => this.setState({ substituteOneName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOnePosition" value={this.substituteOnePosition} onChange={e => this.setState({ substituteOnePosition: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOneRank" value={this.substituteOneRank} onChange={e => this.setState({ substituteOneRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOneInstitution" value={this.substituteOneInstitution} onChange={e => this.setState({ substituteOneInstitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOneDepartment" value={this.substituteOneDepartment} onChange={e => this.setState({ substituteOneDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOnePostCode" value={this.substituteOnePostCode} onChange={e => this.setState({ substituteOnePostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOneLocation" value={this.substituteOneLocation} onChange={e => this.setState({ substituteOneLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOneStreet" value={this.substituteOneStreet} onChange={e => this.setState({ substituteOneStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteOneEmail" value={this.substituteOneEmail} onChange={e => this.setState({ substituteOneEmail: e.target.value })}  ></input></td>
                        </tr>
                        <tr>
                            <td className="BoldFontStyle" >Substitute</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text" name="substituteTwoName" value={this.substituteTwoName} onChange={e => this.setState({ substituteTwoName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoPosition" value={this.substituteTwoPosition} onChange={e => this.setState({ substituteTwoPosition: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoRank" value={this.substituteTwoRank} onChange={e => this.setState({ substituteTwoRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoIntitution" value={this.substituteTwoIntitution} onChange={e => this.setState({ substituteTwoIntitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoDepartment" value={this.substituteTwoDepartment} onChange={e => this.setState({ substituteTwoDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoPostCode" value={this.substituteTwoPostCode} onChange={e => this.setState({ substituteTwoPostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoLocation" value={this.substituteTwoLocation} onChange={e => this.setState({ substituteTwoLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoStreet" value={this.substituteTwoStreet} onChange={e => this.setState({ substituteTwoStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="substituteTwoEmail" value={this.substituteTwoEmail} onChange={e => this.setState({ substituteTwoEmail: e.target.value })}  ></input></td>
                        </tr>
                        <tr>
                            <td className="BoldFontStyle" >Expert</td>
                            <td className="BoldFontStyle" >K</td>
                            <td><input className="tdInput" type="text" name="expertOneName" value={this.expertOneName} onChange={e => this.setState({ expertOneName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOnePosition" value={this.expertOnePosition} onChange={e => this.setState({ expertOnePosition: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOneRank" value={this.expertOneRank} onChange={e => this.setState({ expertOneRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOneInstitution" value={this.expertOneInstitution} onChange={e => this.setState({ expertOneInstitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOneDepartment" value={this.expertOneDepartment} onChange={e => this.setState({ expertOneDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOnePostCode" value={this.expertOnePostCode} onChange={e => this.setState({ expertOnePostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOneLocation" value={this.expertOneLocation} onChange={e => this.setState({ expertOneLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOneStreet" value={this.expertOneStreet} onChange={e => this.setState({ expertOneStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertOneEmail" value={this.expertOneEmail} onChange={e => this.setState({ expertOneEmail: e.target.value })}  ></input></td>
                        </tr>
                        <tr>
                            <td className="BoldFontStyle" >Expert</td>
                            <td className="BoldFontStyle" >B</td>
                            <td><input className="tdInput" type="text" name="expertTwoName" value={this.expertTwoName} onChange={e => this.setState({ expertTwoName: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoPosition" value={this.expertTwoPosition} onChange={e => this.setState({ expertTwoPosition: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoRank" value={this.expertTwoRank} onChange={e => this.setState({ expertTwoRank: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoInstitution" value={this.expertTwoInstitution} onChange={e => this.setState({ expertTwoInstitution: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoDepartment" value={this.expertTwoDepartment} onChange={e => this.setState({ expertTwoDepartment: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoPostCode" value={this.expertTwoPostCode} onChange={e => this.setState({ expertTwoPostCode: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoLocation" value={this.expertTwoLocation} onChange={e => this.setState({ expertTwoLocation: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoStreet" value={this.expertTwoStreet} onChange={e => this.setState({ expertTwoStreet: e.target.value })}  ></input></td>
                            <td><input className="tdInput" type="text" name="expertTwoEmail" value={this.expertTwoEmail} onChange={e => this.setState({ expertTwoEmail: e.target.value })}  ></input></td>
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