type GreetProps = {
   name: string
   messageCount?: number
   isLoggedIn: boolean
}

export const Greet = (para: GreetProps) => {
   const { messageCount = 0 } = para;
   return (
      <div>
         <h2>{para.isLoggedIn
            ? `Welcome ${para.name}  you have ${messageCount} messages to read.`
            : 'welcome guest'
         }</h2>
      </div>
   )
}