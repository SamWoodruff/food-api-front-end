import React,{useState} from 'react'
import axios from 'axios'

const RegistrationPage = () =>{
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createNewUser = () =>{
        axios.post('/createUser',{name, address, email, password});
        setName("");
        setAddress("");
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <div>
                Name:
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>  
            </div>
            <div>
                Address:
                <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text"/>
            </div>
            <div>
                Email:
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text"/>  
            </div>
            <div>
                Password:
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
            </div>
            <button onClick={()=>createNewUser()}>Register</button>
        </div>
    )
}

export default RegistrationPage;

