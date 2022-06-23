export type ProfileProps = {
   name :string
}

export const Profile = ({name}: ProfileProps) => {
   return <div>This is private profile component. Name is { name }</div>
}