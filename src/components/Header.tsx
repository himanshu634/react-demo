type HeaderPropsType = {
   children: string
}

export const Header = (props: HeaderPropsType) => {
   return (
      <h3>{props.children}</h3>
   );
}