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
         <div>
                Email:
                <input value={email} onChange={(e)=>verifyEmail(e.target.value)} type="text"/>
                Password:
                <input value={password} onChange={(e)=>verifyPassword(e.target.value)} type="password"/>
                <button onClick={()=>getUser()}>Login</button>
            </div>
        );
}

const mapDispatchToProps = dispatch =>({
    updateCurrentUser: user => dispatch(actions.updateCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(UserLogin);