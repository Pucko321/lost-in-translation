 /**
  * Dependencies
  * @ignore
  */
 import { NavLink } from 'react-router-dom';

 /**
  * Component
  * @ignore
  */
  const NotFound = () => {
     return (
         <main className="NotFound">
             <h1>404</h1>
             <p>Page not found</p>
             <NavLink className="App-link" to="/">Press here to go home</NavLink>
         </main>
     )
 }
 
 /**
  * Export
  * @ignore
  */
 export default NotFound