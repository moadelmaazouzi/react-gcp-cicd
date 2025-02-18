
import React, { useState } from 'react'
import { Snackbar, Button, Alert } from "@mui/material";
import SnackbarComponent from '../components/SnackBarComponent';

export default function About() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = (_:string,   reason:string) => {
      if (reason !== "clickaway") setOpen(false);
    };
  return (
    <>
    
    <SnackbarComponent></SnackbarComponent>
    </>
  )
}


