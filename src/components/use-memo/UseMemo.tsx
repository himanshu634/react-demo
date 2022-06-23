import { useState, useMemo } from 'react';


export const UseMemo = () => {
   const [number, setNumber] = useState(0);
   const [dark, setDark] = useState(false);
   const doubleNumber = useMemo(() => { return slowFunction(number); }, [number]);
   const themeStyles = useMemo(() => {
      return {
         backgroundColor: dark ? 'black' : 'white',
         color: dark ? 'white' : 'black',
      }
   }, [dark]);

   return (
      <>
         <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
         <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
         <div style={themeStyles}>{doubleNumber}</div>
      </>
   );
}

function slowFunction(num:number) {
   console.log("Calling slow function");
   for (let i = 0; i <= 1000000000; i++){ }
   return num * 2;
}