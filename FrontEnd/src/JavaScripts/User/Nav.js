import React from 'react';
import '../../Style/App.css';
import '../../Style/adminpage.css';
import UserData from './UserDataGetSet';
import DeIkLogo from '../../Style/deiklogo85x85.png'
import PostLogoutUserForm from './FormPost/PostUserLogout';

function Nav() {
    return (
        <div>
            <style>{'body { background-color: #f6f6f6; }'}</style>
            <div className="titlea">
                <span className="login-form-title">
                    Doctoral School <br /> of Informatics
                </span>
                <div className="img-wrapu">
                    <img src={DeIkLogo} alt={"DeIkLogo"} />
                </div>
            </div>
            <nav className="nav-area">
                <ul>
                    <li>
                        <a href="/home"> {UserData.GetUserFirstName()} {UserData.GetUserLastName()}</a>
                    </li>
                    <li>
                        <div className="dropdownnav">
                            <button className="dropbtnnav">Subjects</button>
                            <div className="dropdown-contentnav">
                                <a href="/subject-registration">Register for Subjects</a>
                                <a href="/taken-courses">Taken Courses</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/graduation">Degree Conferment Procedure</a>
                    </li>
                    <li>
                        <div className="dropdownnav">
                            <button className="dropbtnnav">Documents</button>
                            <div className="dropdown-contentnav">
                                <a href="/examination-board">Suggestion for the composition of the PhD exam examination board</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <PostLogoutUserForm />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
