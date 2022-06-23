type StatusPropsType = {
   status: "success" | "loading" | "error"
}

export const Status = (props: StatusPropsType) => {
   let message = "";
   
   if (props.status === "loading") {
      message = "Loading...";
   } else if (props.status === "success") {
      message = "Data fetched successfully.";
   } else if (props.status === "error") {
      message = "Error fetching data.";
   } else {
      message = "Status is missing.";
   }

   return (
      <h2>Status: {message} </h2>
   )
}