import React,{useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../config/actions';


const UserLogin = ({ updateCurrentUser }) => {
    const [email, verifyEmail] = useState("");
    const [password, verifyPassword] = useState("");
    
    const getUser = () => {
        axios.post('/getUser',{email, password}).then(response=>updateCurrentUser(response.data));
        verifyEmail("");
        verifyPassword("");
    }
    return(
         <div className="login-cont">
            <div className="login">
                Email:
                <input value={email} onChange={(e)=>verifyEmail(e.target.value)} type="text"/>
            </div>
            <div className="login">
                Password:
                <input value={password} onChange={(e)=>verifyPassword(e.target.value)} type="password"/>
            </div>
                <button className="btn1" onClick={()=>getUser()}>Login</button>
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
    updateCurrentUser: user => dispatch(actions.updateCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(UserLogin);