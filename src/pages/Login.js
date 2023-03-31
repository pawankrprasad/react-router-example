import { useNavigate } from 'react-router-dom';

const Login = () =>{


    const navigate = useNavigate();

    const onLoginHandler = () =>{
        console.log("User has clicked login button");
        navigate('/page1');

    }

    return(
        <div>
            <div>
                <label>User Name</label>
                <input type="text" placeholder="Enter your user name"/>
            </div>
            <div>
            <label>Password</label>
                <input type="password" placeholder="Enter your password"/>
            </div>
            <div>
                <button type="button" onClick={onLoginHandler} >Login</button>
            </div>
        </div>
    )
}

export default Login;