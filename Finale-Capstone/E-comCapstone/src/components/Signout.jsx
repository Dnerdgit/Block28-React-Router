import { useEffect }from 'react'
import { useNavigate } from 'react-router-dom';


const Signout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const signOff = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/users', {
          method: DELETE,
        }); 
  
      } catch (err) {
        console.log(err)
      }
    }


    navigate("/")
  },[navigate])

  return (

    <div>
      <h2>Ready to sign out?</h2>

      <button type="submit">Signout</button>
    </div>

  )
}

export default Signout