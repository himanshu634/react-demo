import { useState } from "react";

type AuthUser = {
   name: string
   email: string
}

export const User = () => {
   //* here {} as AuthUser is value assertion 
   const [user, setUser] = useState({} as AuthUser);

  const handleLogin = () => {
      setUser({
         name: "Himanshu",
         email: "himanshumendapra@gmail.com"
      });
   }

   return (
      <div>
         <button onClick={handleLogin}>Login</button>
         <div>user name is {user.name}</div>
         <div>user email is {user.email}</div>
      </div>
   )
}