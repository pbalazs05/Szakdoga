import axios from 'axios';
import React, { Component } from 'react';
import '../../../Style/App.css';
import UserData from '../UserDataGetSet';

function refreshPage() {
    window.location.reload(false)
}

class PostDoctoralDissertation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: UserData.GetUserUserName(),
            name: UserData.GetUserFirstName().concat(" ").concat(UserData.GetUserLastName()),
            doctoralSchool: '',
            doctoralProgram: UserData.GetUserDoctoralProgram(),
            dissertationTitle: '',
            supervisor: UserData.GetUserSupervisor(),
            numberOfAnnouncements: '',
            acceptedAnnouncements: '',
            LanguageExams: '',
            priorDiscussion: '',
            doctoralSchoolEvaluation: '',

            //president
            presidentName: '',
            presidentPosition: '',
            presidentRank: '',
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
            memberOneRank: '',
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
            memberTwoInstitution: '',
            memberTwoDepartment: '',
            memberTwoPostCode: '',
            memberTwoLocation: '',
            memberTwoStreet: '',
            memberTwoEmail: '',

            //memberThree
            memberThreeName: '',
            memberThreePosition: '',
            memberThreeRank: '',
            memberThreeInstitution: '',
            memberThreeDepartment: '',
            memberThreePostCode: '',
            memberThreeLocation: '',
            memberThreeStreet: '',
            memberThreeEmail: '',

            //memberFour
            memberFourName: '',
            memberFourPosition: '',
            memberFourRank: '',
            memberFourInstitution: '',
            memberFourDepartment: '',
            memberFourPostCode: '',
            memberFourLocation: '',
            memberFourStreet: '',
            memberFourEmail: '',

            //ReserveMemberOne
            ReserveMemberOneName: '',
            ReserveMemberOnePosition: '',
            ReserveMemberOneRank: '',
            ReserveMemberOneInstitution: '',
            ReserveMemberOneDepartment: '',
            ReserveMemberOnePostCode: '',
            ReserveMemberOneLocation: '',
            ReserveMemberOneStreet: '',
            ReserveMemberOneEmail: '',

            //ReserveMemberTwo
            ReserveMemberTwoName: '',
            ReserveMemberTwoPosition: '',
            ReserveMemberTwoRank: '',
            ReserveMemberTwoInstitution: '',
            ReserveMemberTwoDepartment: '',
            ReserveMemberTwoPostCode: '',
            ReserveMemberTwoLocation: '',
            ReserveMemberTwoStreet: '',
            ReserveMemberTwoEmail: '',

            //ReviewerOne
            ReviewerOneName: '',
            ReviewerOnePosition: '',
            ReviewerOneRank: '',
            ReviewerOneInstitution: '',
            ReviewerOneDepartment: '',
            ReviewerOnePostCode: '',
            ReviewerOneLocation: '',
            ReviewerOneStreet: '',
            ReviewerOneEmail: '',

            //ReviewerTwo
            ReviewerTwoName: '',
            ReviewerTwoPosition: '',
            ReviewerTwoRank: '',
            ReviewerTwoInstitution: '',
            ReviewerTwoDepartment: '',
            ReviewerTwoPostCode: '',
            ReviewerTwoLocation: '',
            ReviewerTwoStreet: '',
            ReviewerTwoEmail: '',

            //ReserveReviewerOne
            ReserveReviewerOneName: '',
            ReserveReviewerOnePosition: '',
            ReserveReviewerOneRank: '',
            ReserveReviewerOneInstitution: '',
            ReserveReviewerOneDepartment: '',
            ReserveReviewerOnePostCode: '',
            ReserveReviewerOneLocation: '',
            ReserveReviewerOneStreet: '',
            ReserveReviewerOneEmail: '',

            //ReserveReviewerTwo
            ReserveReviewerTwoName: '',
            ReserveReviewerTwoPosition: '',
            ReserveReviewerTwoRank: '',
            ReserveReviewerTwoInstitution: '',
            ReserveReviewerTwoDepartment: '',
            ReserveReviewerTwoPostCode: '',
            ReserveReviewerTwoLocation: '',
            ReserveReviewerTwoStreet: '',
            ReserveReviewerTwoEmail: '',
        }
    }

    SubmitHandler = e => {
        e.preventDefault()
        axios.post('https://localhost:50111/api/DissertationDefense', this.state)
            .then(response => {
                alert("Biztos el akarod menteni?");
                refreshPage()
            })
            .catch(error => {
                alert(error)
                refreshPage()
            })
    }

    /**
     * Fájl letöltést kezelő függvény
     */
    downloadHandler = (e) => {
        const fileName = this.state.name + " Doctoral Dissertation Defense Committee.docx";
        axios({
            method: 'post',
            url: 'https://localhost:50111/api/DissertationDefense/download',
            responseType: 'blob',
            headers: {},
            data: { type: 'string', value: this.state.name },
        })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));

                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                alert("You have not created this document yet.");
                refreshPage();
            })
    }

    render() {
        let content = null;
        content = <form onSubmit={this.SubmitHandler}>
            <div style={{ marginLeft: "auto", marginRight: 'auto' }}>
                <br />
                <span className="info-titleuser">Suggestion for dissertation defense committee composition</span>
                <br />
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Name of Candidate:</span>
                    <input className="inputstilo" type="text" name="JeloltNeve" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine"  >
                    <span className="txt11"> Doctoral School:</span>
                    <input className="inputstilo" type="text" name="doktoriiskola" value={this.state.doctoralSchool} onChange={e => this.setState({ doctoralSchool: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Doctoral Program:</span>
                    <input className="inputstilo" type="text" name="program" value={this.state.doctoralProgram} onChange={e => this.setState({ doctoralProgram: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Dissertation Title:</span>
                    <input className="inputstilo" type="text" name="courseType" value={this.state.dissertationTitle} onChange={e => this.setState({ dissertationTitle: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine"  >
                    <span className="txt11"> Supervisor:</span>
                    <input className="inputstilo" type="text" name="supervisor" value={this.state.supervisor} onChange={e => this.setState({ supervisor: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Total Number of Announcements:</span>
                    <input className="inputstilo" type="text" name="numberOfAnnouncements" value={this.state.numberOfAnnouncements} onChange={e => this.setState({ numberOfAnnouncements: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Number of publications in a major journal:</span>
                    <input className="inputstilo" type="text" name="acceptedAnnouncements" value={this.state.acceptedAnnouncements} onChange={e => this.setState({ acceptedAnnouncements: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Languange Exams (level and date) :</span>
                    <input className="inputstilo" type="text" name="LanguageExams" value={this.state.LanguageExams} onChange={e => this.setState({ LanguageExams: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine"  >
                    <span className="txt11"> Date of preliminary discussion:</span>
                    <input className="inputstilo" type="text" name="priorDiscussion" value={this.state.priorDiscussion} onChange={e => this.setState({ priorDiscussion: e.target.value })} required />
                </div>
                <div className="ThreeDivInLine" >
                    <span className="txt11"> Evaluation of the Doctoral School:</span>
                    <input className="inputstilo" type="text" name="doctoralSchoolEvaluation" value={this.doctoralSchoolEvaluation} onChange={e => this.setState({ doctoralSchoolEvaluation: e.target.value })} required />
                </div>

                <div style={{ display: 'flex', width: "95%", marginLeft: "auto", marginRight: "auto" }} >
                    <table className="GeneratedTable">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Scientific degree</th>
                                <th>Institution</th>
                                <th>Department</th>
                                <th>Postcode</th>
                                <th>Location</th>
                                <th>Street</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan="8" style={{ writingMode: "vertical-rl", textOrientation: "upright", padding: "5px", textAlign: "center" }} className="BoldFontStyle" >Deffense Committee</td>
                                <td className="BoldFontStyle" >Chair</td>
                                <td className="BoldFontStyle" >Internal</td>
                                <td><input className="tdInput" type="text" name="presidentName" value={this.presidentName} onChange={e => this.setState({ presidentName: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentPosition" value={this.presidentPosition} onChange={e => this.setState({ presidentPosition: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentRank" value={this.presidentRank} onChange={e => this.setState({ presidentRank: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentInstitution" value={this.presidentInstitution} onChange={e => this.setState({ presidentInstitution: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentDepartment" value={this.presidentDepartment} onChange={e => this.setState({ presidentDepartment: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentPostCode" value={this.presidentPostCode} onChange={e => this.setState({ presidentPostCode: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentLocation" value={this.presidentLocation} onChange={e => this.setState({ presidentLocation: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentStreet" value={this.presidentStreet} onChange={e => this.setState({ presidentStreet: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="presidentEmail" value={this.presidentEmail} onChange={e => this.setState({ presidentEmail: e.target.value })} required ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Reserve Chair</td>
                                <td className="BoldFontStyle" >Internal</td>
                                <td><input className="tdInput" type="text" name="reservePresidentName" value={this.reservePresidentName} onChange={e => this.setState({ reservePresidentName: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentPosition" value={this.reservePresidentPosition} onChange={e => this.setState({ reservePresidentPosition: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentRank" value={this.reservePresidentRank} onChange={e => this.setState({ reservePresidentRank: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentInstitution" value={this.reservePresidentInstitution} onChange={e => this.setState({ reservePresidentInstitution: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentDepartment" value={this.reservePresidentDepartment} onChange={e => this.setState({ reservePresidentDepartment: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentPostCode" value={this.reservePresidentPostCode} onChange={e => this.setState({ reservePresidentPostCode: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentLocation" value={this.reservePresidentLocation} onChange={e => this.setState({ reservePresidentLocation: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentStreet" value={this.reservePresidentStreet} onChange={e => this.setState({ reservePresidentStreet: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="reservePresidentEmail" value={this.reservePresidentEmail} onChange={e => this.setState({ reservePresidentEmail: e.target.value })} required ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Member</td>
                                <td className="BoldFontStyle" >Internal</td>
                                <td><input className="tdInput" type="text" name="memberOneName" value={this.memberOneName} onChange={e => this.setState({ memberOneName: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOnePosition" value={this.memberOnePosition} onChange={e => this.setState({ memberOnePosition: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOneRank" value={this.memberOneRank} onChange={e => this.setState({ memberOneRank: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOneInstitution" value={this.memberOneInstitution} onChange={e => this.setState({ memberOneInstitution: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOneDepartment" value={this.memberOneDepartment} onChange={e => this.setState({ memberOneDepartment: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOnePostCode" value={this.memberOnePostCode} onChange={e => this.setState({ memberOnePostCode: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOneLocation" value={this.memberOneLocation} onChange={e => this.setState({ memberOneLocation: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOneStreet" value={this.memberOneStreet} onChange={e => this.setState({ memberOneStreet: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberOneEmail" value={this.memberOneEmail} onChange={e => this.setState({ memberOneEmail: e.target.value })} required ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Member</td>
                                <td className="BoldFontStyle" >Internal</td>
                                <td><input className="tdInput" type="text" name="memberTwoName" value={this.memberTwoName} onChange={e => this.setState({ memberTwoName: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoPosition" value={this.memberTwoPosition} onChange={e => this.setState({ memberTwoPosition: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoRank" value={this.memberTwoRank} onChange={e => this.setState({ memberTwoRank: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoInstitution" value={this.memberTwoInstitution} onChange={e => this.setState({ memberTwoInstitution: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoDepartment" value={this.memberTwoDepartment} onChange={e => this.setState({ memberTwoDepartment: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoPostCode" value={this.memberTwoPostCode} onChange={e => this.setState({ memberTwoPostCode: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoLocation" value={this.memberTwoLocation} onChange={e => this.setState({ memberTwoLocation: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoStreet" value={this.memberTwoStreet} onChange={e => this.setState({ memberTwoStreet: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberTwoEmail" value={this.memberTwoEmail} onChange={e => this.setState({ memberTwoEmail: e.target.value })} required ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Member</td>
                                <td className="BoldFontStyle" >External</td>
                                <td><input className="tdInput" type="text" name="memberThreePosition" value={this.memberThreeName} onChange={e => this.setState({ memberThreeName: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreePosition" value={this.memberThreePosition} onChange={e => this.setState({ memberThreePosition: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreeRank" value={this.memberThreeRank} onChange={e => this.setState({ memberThreeRank: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreeInstitution" value={this.memberThreeInstitution} onChange={e => this.setState({ memberThreeInstitution: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreeDepartment" value={this.memberThreeDepartment} onChange={e => this.setState({ memberThreeDepartment: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreePostCode" value={this.memberThreePostCode} onChange={e => this.setState({ memberThreePostCode: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreeLocation" value={this.memberThreeLocation} onChange={e => this.setState({ memberThreeLocation: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreeStreet" value={this.memberThreeStreet} onChange={e => this.setState({ memberThreeStreet: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberThreeEmail" value={this.memberThreeEmail} onChange={e => this.setState({ memberThreeEmail: e.target.value })} required ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Member</td>
                                <td className="BoldFontStyle" >External</td>
                                <td><input className="tdInput" type="text" name="memberFourName" value={this.memberFourName} onChange={e => this.setState({ memberFourName: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourPosition" value={this.memberFourPosition} onChange={e => this.setState({ memberFourPosition: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourRank" value={this.memberFourRank} onChange={e => this.setState({ memberFourRank: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourInstitution" value={this.memberFourInstitution} onChange={e => this.setState({ memberFourInstitution: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourDepartment" value={this.memberFourDepartment} onChange={e => this.setState({ memberFourDepartment: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourPostCode" value={this.memberFourPostCode} onChange={e => this.setState({ memberFourPostCode: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourLocation" value={this.memberFourLocation} onChange={e => this.setState({ memberFourLocation: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourStreet" value={this.memberFourStreet} onChange={e => this.setState({ memberFourStreet: e.target.value })} required ></input></td>
                                <td><input className="tdInput" type="text" name="memberFourEmail" value={this.memberFourEmail} onChange={e => this.setState({ memberFourEmail: e.target.value })} required ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Reserve Member</td>
                                <td className="BoldFontStyle" >Internal</td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOneName" value={this.ReserveMemberOneName} onChange={e => this.setState({ ReserveMemberOneName: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOnePosition" value={this.ReserveMemberOnePosition} onChange={e => this.setState({ ReserveMemberOnePosition: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOneRank" value={this.ReserveMemberOneRank} onChange={e => this.setState({ ReserveMemberOneRank: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOneInstitution" value={this.ReserveMemberOneInstitution} onChange={e => this.setState({ ReserveMemberOneInstitution: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOneDepartment" value={this.ReserveMemberOneDepartment} onChange={e => this.setState({ ReserveMemberOneDepartment: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOnePostCode" value={this.ReserveMemberOnePostCode} onChange={e => this.setState({ ReserveMemberOnePostCode: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOneLocation" value={this.ReserveMemberOneLocation} onChange={e => this.setState({ ReserveMemberOneLocation: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOneStreet" value={this.ReserveMemberOneStreet} onChange={e => this.setState({ ReserveMemberOneStreet: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberOneEmail" value={this.ReserveMemberOneEmail} onChange={e => this.setState({ ReserveMemberOneEmail: e.target.value })}  ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Reserve Member</td>
                                <td className="BoldFontStyle" >External</td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoName" value={this.ReserveMemberTwoName} onChange={e => this.setState({ ReserveMemberTwoName: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoPosition" value={this.ReserveMemberTwoPosition} onChange={e => this.setState({ ReserveMemberTwoPosition: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoRank" value={this.ReserveMemberTwoRank} onChange={e => this.setState({ ReserveMemberTwoRank: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoInstitution" value={this.ReserveMemberTwoInstitution} onChange={e => this.setState({ ReserveMemberTwoInstitution: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoDepartment" value={this.ReserveMemberTwoDepartment} onChange={e => this.setState({ ReserveMemberTwoDepartment: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoPostCode" value={this.ReserveMemberTwoPostCode} onChange={e => this.setState({ ReserveMemberTwoPostCode: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoLocation" value={this.ReserveMemberTwoLocation} onChange={e => this.setState({ ReserveMemberTwoLocation: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoStreet" value={this.ReserveMemberTwoStreet} onChange={e => this.setState({ ReserveMemberTwoStreet: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveMemberTwoEmail" value={this.ReserveMemberTwoEmail} onChange={e => this.setState({ ReserveMemberTwoEmail: e.target.value })}  ></input></td>
                            </tr>
                            <tr>
                            <td rowSpan="4" style={{ writingMode: "vertical-rl", textOrientation: "upright", padding: "5px", textAlign: "center" }} className="BoldFontStyle" >Reviewer</td>
                                <td className="BoldFontStyle" >Reviewer</td>
                                <td className="BoldFontStyle" >Internal</td>
                                <td><input className="tdInput" type="text" name="ReviewerOneName" value={this.ReviewerOneName} onChange={e => this.setState({ ReviewerOneName: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOnePosition" value={this.ReviewerOnePosition} onChange={e => this.setState({ ReviewerOnePosition: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOneRank" value={this.ReviewerOneRank} onChange={e => this.setState({ ReviewerOneRank: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOneInstitution" value={this.ReviewerOneInstitution} onChange={e => this.setState({ ReviewerOneInstitution: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOneDepartment" value={this.ReviewerOneDepartment} onChange={e => this.setState({ ReviewerOneDepartment: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOnePostCode" value={this.ReviewerOnePostCode} onChange={e => this.setState({ ReviewerOnePostCode: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOneLocation" value={this.ReviewerOneLocation} onChange={e => this.setState({ ReviewerOneLocation: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOneStreet" value={this.ReviewerOneStreet} onChange={e => this.setState({ ReviewerOneStreet: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerOneEmail" value={this.ReviewerOneEmail} onChange={e => this.setState({ ReviewerOneEmail: e.target.value })}  ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Reviewer</td>
                                <td className="BoldFontStyle" >External</td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoName" value={this.ReviewerTwoName} onChange={e => this.setState({ ReviewerTwoName: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoPosition" value={this.ReviewerTwoPosition} onChange={e => this.setState({ ReviewerTwoPosition: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoRank" value={this.ReviewerTwoRank} onChange={e => this.setState({ ReviewerTwoRank: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoInstitution" value={this.ReviewerTwoInstitution} onChange={e => this.setState({ ReviewerTwoInstitution: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoDepartment" value={this.ReviewerTwoDepartment} onChange={e => this.setState({ ReviewerTwoDepartment: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoPostCode" value={this.ReviewerTwoPostCode} onChange={e => this.setState({ ReviewerTwoPostCode: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoLocation" value={this.ReviewerTwoLocation} onChange={e => this.setState({ ReviewerTwoLocation: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoStreet" value={this.ReviewerTwoStreet} onChange={e => this.setState({ ReviewerTwoStreet: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReviewerTwoEmail" value={this.ReviewerTwoEmail} onChange={e => this.setState({ ReviewerTwoEmail: e.target.value })}  ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Reserve Reviewer</td>
                                <td className="BoldFontStyle" >External</td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOneName" value={this.ReserveReviewerOneName} onChange={e => this.setState({ ReserveReviewerOneName: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOnePosition" value={this.ReserveReviewerOnePosition} onChange={e => this.setState({ ReserveReviewerOnePosition: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOneRank" value={this.ReserveReviewerOneRank} onChange={e => this.setState({ ReserveReviewerOneRank: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOneInstitution" value={this.ReserveReviewerOneInstitution} onChange={e => this.setState({ ReserveReviewerOneInstitution: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOneDepartment" value={this.ReserveReviewerOneDepartment} onChange={e => this.setState({ ReserveReviewerOneDepartment: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOnePostCode" value={this.ReserveReviewerOnePostCode} onChange={e => this.setState({ ReserveReviewerOnePostCode: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOneLocation" value={this.ReserveReviewerOneLocation} onChange={e => this.setState({ ReserveReviewerOneLocation: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOneStreet" value={this.ReserveReviewerOneStreet} onChange={e => this.setState({ ReserveReviewerOneStreet: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerOneEmail" value={this.ReserveReviewerOneEmail} onChange={e => this.setState({ ReserveReviewerOneEmail: e.target.value })}  ></input></td>
                            </tr>
                            <tr>
                                <td className="BoldFontStyle" >Reserve Reviewer</td>
                                <td className="BoldFontStyle" >Internal</td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoName" value={this.ReserveReviewerTwoName} onChange={e => this.setState({ ReserveReviewerTwoName: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoPosition" value={this.ReserveReviewerTwoPosition} onChange={e => this.setState({ ReserveReviewerTwoPosition: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoRank" value={this.ReserveReviewerTwoRank} onChange={e => this.setState({ ReserveReviewerTwoRank: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoInstitution" value={this.ReserveReviewerTwoInstitution} onChange={e => this.setState({ ReserveReviewerTwoInstitution: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoDepartment" value={this.ReserveReviewerTwoDepartment} onChange={e => this.setState({ ReserveReviewerTwoDepartment: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoPostCode" value={this.ReserveReviewerTwoPostCode} onChange={e => this.setState({ ReserveReviewerTwoPostCode: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoLocation" value={this.ReserveReviewerTwoLocation} onChange={e => this.setState({ ReserveReviewerTwoLocation: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoStreet" value={this.ReserveReviewerTwoStreet} onChange={e => this.setState({ ReserveReviewerTwoStreet: e.target.value })}  ></input></td>
                                <td><input className="tdInput" type="text" name="ReserveReviewerTwoEmail" value={this.ReserveReviewerTwoEmail} onChange={e => this.setState({ ReserveReviewerTwoEmail: e.target.value })}  ></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="documentButtons">
                    <button type="submit" className="documentButtonss" onChange={this.handleSubmit}>Save File</button>
                    <button type="submit" className="documentButtonss" style={{ display: 'inline-block' }} onClick={this.downloadHandler}>Download File</button>
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
export default PostDoctoralDissertation;