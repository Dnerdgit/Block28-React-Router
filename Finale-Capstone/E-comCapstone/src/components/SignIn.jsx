import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router- dom'


export default function SignInLink () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const signIn = useSignIn();

        const retrieveSignin = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/auth/login",{
                    method: "POST",
                    body: JSON.stringify({
                        username: "",
                        password: "",
                    }),
                });

                const result = await response.json();

            retrieveSignin(result);
            
        } catch (error) {
            console.log(error);
        }
    // const SignIn = useSignIn();
    // const onSubmit = async( data, event ) =>{

    // }
    };

    return (
        <div className="sign-in-log">
            <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
            <div>
                <ul>
                    <div className='line-2'>
                        <label>
                            <h3>Username</h3>
                        </label>
                        <input
                            
                            type="text"
                            name="name"
                            value={username}
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                            
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
                            value={password}
                            placeholder="********"
                            onChange={(e) => setPassword(e.target.value)}
                            
                            />
                    </div>
                </ul>
            </div>
            </form>
        </div>
    )
} 