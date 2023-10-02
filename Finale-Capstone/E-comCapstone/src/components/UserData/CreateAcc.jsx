// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useAuth0 } from '@auth0/auth0-react';


// export default function CreateAcc({token}) {
//     const [username, setUsername] = useSessionStorage("username", "");
//         useState(() => {
//             const savedUser = localStorage.getItem("username");
//             const parsedUser = JSON.parse(savedUser);
//             return parsedUser || "";
//         });

//     const [password, setPassword] = useSessionStorage("password", "");
//         useState(() => {
//             const savedPass = localStorage.getItem("password");
//             const parsedPass = JSON.parse(savedPass);
//             return parsedPass || "";
//         });

//     const [email, setEmail] = useLocalStorage("email");
//         useState(() => {
//             const savedEmail = localStorage.getItem("email");
//             const parsedEmail = JSON.parse(savedEmail);
//             console.log(savedEmail);
//             return parsedEmail || "";
//         })

//     const {
//         register,
//         handleSubmit,
//     } = useForm();

//     const {
//         error,
//         isAuthenticated
//     } = useAuth0()

//     const navigate = useNavigate();

//     const onSubmit = async (data, event) => {
//         const response = await SignInData(data.username, data.password);
//         event.preventDefault();
//         console.log(data);
        
   
//         if (response.success) {
//             // signIn(true);
//             navigate("/");
//         } else {
//             alert("Invalid Entry");
//         }
//    }

//   return (

//     <div>
        

//     <div className="signInApp">
//         <h2>Sign In</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className='sign-up-form'>
//                 <label>
//                     Username 
//                 </label>
//                 <input 
//                 {...register("username", {
//                     required: true,
//                 })}
//                     type="text"
//                     name="name"
//                     value={username}
//                     placeholder="Username"
//                     onChange={(event) => setUsername(event.target.value)}
//                     id="name"
//                     />
//                     {error.username?.type === 'required' && <p>Invalid Username</p>}
//                     <br/>
//                     <br/>
//                 <label>
//                     Password 
//                 </label>
//                 <input
//                 {...register("password", {
//                     required: true,
//                 })}
//                     type="password"
//                     name="password"
//                     value={password}
//                     placeholder="**********"
//                     onChange={(event) => setPassword(event.target.value)}
//                     id="password"
//                     />
//                     {error.password?.type === 'required' && <p>Invalid Password</p>}
//                     <br/>
//                     <br/>

//                     <button onClick={token} type="submit">Sign In</button>
//                     <br/>
//                     <a className="make-account" href="/create">Already haven an account. Sign In</a>
//             </form>
//         </div>
//     </div>
//     )
// }