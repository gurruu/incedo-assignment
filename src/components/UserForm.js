import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import ShowInput from "./ShowInput";

function UserForm() {
  const [currData, setCurrData] = useState({
    name: "Gaurav",
    email: "gaurav@hmail.com",
  });

  const changeHandler=(e)=>{
    setCurrData((prevData)=>{
        return {
            ...prevData,
            [e.target.name]:e.target.value
        }
    })
  }

  const submitHandler=(event)=>{
   event.preventDefault()
   console.log(currData)
  }

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        margin: "auto",
        marginTop: "150px",
      }}
    >
      <TextField
        style={{ padding: "10px" }}
        fullWidth
        label="Name"
        id="name"
        value={currData.name}
        name="name"
        onChange={changeHandler}
      />
      <TextField
        style={{ padding: "10px" }}
        fullWidth
        label="Email"
        id="email"
        value={currData.email}
        name="email"
        onChange={changeHandler}
      />
      <Button
        style={{ marginLeft: "10px" }}
        variant="contained"
        color="success"
        onClick={submitHandler}
      >
        Submit
      </Button>
      <ShowInput userData={currData}/>
    </Box>

  );
}
export default UserForm;
