type PersonTypes = {
   name: {
      first: string
      last: string
   }
}

export const Person = (props: PersonTypes) => {
   return <div>{props.name.first} {props.name.last}</div>;
}