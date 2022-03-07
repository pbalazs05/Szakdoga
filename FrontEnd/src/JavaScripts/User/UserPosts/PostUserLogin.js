import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import '../../../Style/adminpage.css';
import auth from "../UserAuth";
import UserData from '../UserDataGetSet';

class PostLoginUserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            pass: ''
        }
    }

    state = {
        redirect: false,
        error: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        })
    }

    SubmitHandler = e => {
        e.preventDefault()
        axios.post('https://localhost:50111/api/user-login', this.state)
            .then(response => {
                UserData.SetUserLastName(response.data.lastname);
                UserData.SetUserFistName(response.data.firstname);
                UserData.SetUserProgramDirector(response.data.programdirector);
                UserData.SetUserPhoneNumber(response.data.phonenumber);
                UserData.SetUserEmail(response.data.email);
                UserData.SetUserUserName(response.data.username);
                UserData.SetUserDoctoralProgram(response.data.doctoralprogram);
                UserData.SetUserSupervisor(response.data.supervisor);
                UserData.SetUserNeptunCode(response.data.neptuncode);
                UserData.SetUserCourseType(response.data.coursetype);
                UserData.SetUserSemester(response.data.semester);
                UserData.SetUserID(response.data._id);
                auth.loggedInUser(response.data.userToken);
                this.setState({ redirect: true });
            })
            .catch(error => {
                this.setState({ error: true });
            })
    }

    render() {
        const { username, pass } = this.state;
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/home' />;
        }

        return (
            <form onSubmit={this.SubmitHandler}>
                <div>
                    {this.state.error &&
                        <div className="login-error">
                            &#x2612; Incorrect username or password.
                        </div>
                    }
                    <span className="txt1">
                        Username
                    </span>
                </div>
                <div className="wrap-input">
                    <input className="input" type="text" name="username" value={username} onChange={this.changeHandler} required />
                </div>
                <br />
                <div>
                    <span className="txt1">
                        Password
                    </span>
                </div>

                <div className="wrap-input">
                    <input className="input" type="password" name="pass" value={pass} onChange={this.changeHandler} required />
                </div>

                <div className="container-login-form-btn">
                    <button type="submit" className="login-form-btn">
                        Login
                    </button>
                </div>
                <ul className="list-containeru">
                    <li>
                        <a className="link-forget" href="/ForgotPass">Forgot your password? </a>
                    </li>
                </ul>
            </form>
        )
    }
}

export default PostLoginUserForm;
