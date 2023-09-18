import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
// import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router- dom'
import { useAuth0 } from '@auth0/auth0-react';

export default function SignInLink () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { 
        loginWithPopup, 
        loginWithRedirect, 
        user, 
        isAuthenticated 
    } = useAuth0();

    const retrieveSignin = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type":'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const result = await response.json();
            console.log(result);
            return result;
            
            
        } catch (error) {
            console.log(error);
        }
    };
    // const SignedIn = useSignIn();

    const handleSubmit = async (data, event) => {
        event.preventDefault();

        const signInApproval = await retrieveSignin(data.username, data.password);
        console.log(signInApproval);
    }
 

    return (
        <div className="sign-in-log">
            <h3 className="on-sign">Sign In</h3>
            <form onSubmit={handleSubmit} className="sign-in-form">
            <div>
                <ul>
                    <div className='line-2'>
                        <label>
                            <h3>Username</h3>
                        </label>
                        <input
                            
                            type="text"
                            name="name"
                            id="username"
                            value={username}
                            placeholder="username"
                            onChange={(event) => setUsername(event.target.value)}
                            
                            />
                    </div>
                        <br/>
                    <div className='line-2'>
                        <label>
                            <h3>Password</h3>
                        </label>
                        
                        <input

                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="********"
                            onChange={(event) => setPassword(event.target.value)}
                            
                        />
                    </div>
                        <br/>
                        <br/>
                        <button onClick={loginWithRedirect} type="submit">Sign In</button>
                        <br/>
                        <br/>
                        <a className="make-account" href="/products-list">{!isAuthenticated ? "Don't have an account Sign up!" : 'Continue'}</a>
                    
                </ul>
            </div>
            </form>
        </div>
    )
} 