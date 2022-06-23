import React from "react";

type ButtonPropsType = {
   clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
   
}

export const Button = (props: ButtonPropsType) => {
   return (
      <button onClick={(event) => props.clickHandler(event, 1)} value="Click Here">Click Me</button>
   );
}