type InputPropsType = {
   value: string
   changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputPropsType) => {
   return (
      <div><input value={props.value} onChange={props.changeHandler}></input></div>
   );
}