
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
import history from '../utils/history';
const ErroPage = () =>{
    return (
        <>
          <div> ERRO ErroPage</div>
          <Link to="/">My Profile</Link>
          <button onClick={envent =>{
history.push("/")
          }}>Click</button>
          <Outlet />
        </>
      
        
    )
}

export default ErroPage;