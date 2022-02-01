 /**
  * Dependencies
  * @ignore
  */
 import { NavLink } from 'react-router-dom';
 import HeadAppContainer from "../hoc/headAppContainer"
 import NormalAppContainer from "../hoc/normalAppContainer"

 /**
  * Component
  * @ignore
  */
  const NotFound = () => {
     return (
         <main className="NotFound">
             <HeadAppContainer>
                <h1>404</h1>
                <p>Page not found</p>
             </HeadAppContainer>
             <NormalAppContainer>
                 <>
                    <NavLink className="App-link" to="/">Press here to go home</NavLink>
                </>
             </NormalAppContainer>
         </main>
     )
 }
 
 /**
  * Export
  * @ignore
  */
 export default NotFound