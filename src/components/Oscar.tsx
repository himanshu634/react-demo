type OscarPropsType = {
   children: React.ReactNode
}

export const Oscar = (props: OscarPropsType) => {
   return (
      <div>{props.children}</div>
   );
}