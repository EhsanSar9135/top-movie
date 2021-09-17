import Login from "../../Components/Auth/Login";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Register from "../../Components/Auth/Register";

const AuthPage = () => {
   const [status, setStatus] = useState(false);
   return (
      <Card className="w-50 ml-auto mr-auto mt-5">
         <Card.Header className="text-center">
            {!status ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
         </Card.Header>
         <Card.Body>
            {!status ? (
               <Login setStatus={(event) => setStatus(event)} />
            ) : (
               <Register setStatus={(event) => setStatus(event)} />
            )}
         </Card.Body>
      </Card>
   );
};

export default AuthPage;
