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
                <span className="info-titleuser">Javaslat a doktori (PhD) komplexvizsga bizottságának összetételére</span>
                <br />
                <div style={{display: "inline-block", paddingInline:"2%", width:"33%", paddingBottom: "10px"}} >
                    <span className="txt1"> Name of Candidate:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="JeloltNeve" value={name} onChange={e => this.setState({ name: e.target.value })} required />
                </div>

                <div style={{ display: "inline-block",paddingInline:"2%", width:"33%"}}  >
                    <span className="txt1"> Doctoral School:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="doktoriiskola" value={doctoralSchool} onChange={e => this.setState({ doctoralSchool: e.target.value })} required />
                </div>

                <div style={{ display: "inline-block", paddingInline:"2%", width:"33%"}} >
                    <span className="txt1"> Doctoral Program:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="program" value={doctoralProgram} onChange={e => this.setState({ doctoralProgram: e.target.value })} required />
                </div>

                <div style={{display: "inline-block", paddingInline:"2%", width:"33%", paddingBottom: "10px"}} >
                    <span className="txt1"> Department:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="department" value={department} onChange={e => this.setState({ department: e.target.value })} required />
                </div>

                <div style={{ display: "inline-block", paddingInline:"2%", width:"33%"}}  >
                    <span className="txt1"> Consultant:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="consultant" value={consultant} onChange={e => this.setState({ consultant: e.target.value })} required />
                </div>

                <div style={{ display: "inline-block", paddingInline:"2%", width:"33%"}} >
                    <span className="txt1"> Doctoral Topic:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="doctoralTopic" value={doctoralTopic} onChange={e => this.setState({ doctoralTopic: e.target.value })} required />
                </div>

                <div style={{display: "inline-block", paddingInline:"2%", width:"33%", paddingBottom: "20px"}} >
                    <span className="txt1"> The main subject of the exam:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="examMainSubject" value={examMainSubject} onChange={e => this.setState({ examMainSubject: e.target.value })} required />
                </div>

                <div style={{ display: "inline-block", paddingInline:"2%", width:"33%"}}  >
                    <span className="txt1"> The side subject of the exam:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="examSideSubject" value={examSideSubject} onChange={e => this.setState({ examSideSubject: e.target.value })} required />
                </div>

                <div style={{ display: "inline-block", paddingInline:"2%", width:"33%"}} >
                    <span className="txt1"> The student has completed the required minimum of 90 credits:</span>
                    <input style={{ backgroundColor: 'white', border:'1px solid'}} className="wrap-inputa" type="text"  name="creditFulfilled" value={creditFulfilled} onChange={e => this.setState({ creditFulfilled: e.target.value })} required />
                </div>

                <div style={{display: 'flex', }} >
                    <table style={{width: '80%'}}>
                        <tbody>
                            <tr >

                                <td ><input className="input" type="text" style={{ backgroundColor: 'white', border:'1px solid', display: "inline-block" }} id="1"></input></td>

                                <td ><input className="input" type="text" style={{ backgroundColor: 'white', border:'1px solid' }}></input></td>

                                <td ><input className="input" type="text" style={{backgroundColor: 'white',border:'1px solid' }}></input></td>
                            </tr>

                            <tr>

                                <td ><input className="input" type="text" style={{ backgroundColor: 'white',border:'1px solid' }}></input></td>

                                <td ><input className="input" type="text" style={{ backgroundColor: 'white',border:'1px solid' }}></input></td>
                            </tr>
                            <br/>
                            <tr>

                                <td ><input className="input" type="text" style={{ backgroundColor: 'white',border:'1px solid' }}></input></td>
                            </tr>
                            <br/>
                            <tr>

                                <td ><input className="input" type="text" style={{ backgroundColor: 'white',border:'1px solid' }}></input></td>
                            </tr>
                            <br/>
                            <tr>
                                <td ><input className="input" type="text" style={{ backgroundColor: 'white',border:'1px solid' }}></input></td>
                            </tr>
                            <br/>
                            <tr>
                                <td ><input className="input" type="text" style={{ backgroundColor: 'white',border:'1px solid' }}></input></td>
                            </tr>
                            <br/>
                            <tr>
                                <td ><input className="input" type="text" style={{ backgroundColor: 'white',border:'1px solid' }}></input></td>
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