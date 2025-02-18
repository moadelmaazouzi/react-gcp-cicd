

import { Button } from '@mui/material';
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState(0);

  React.useEffect(
    () => {
    const interval = setInterval(() => {
      setName((prevName) => prevName + 1);
    }
    , 1000);
    return () => clearInterval(interval);}
    );

  return (
   <>
   {/* <h1>Vous avez cliqué {name} fois</h1> */}
   <div>{name}</div>
   </>
  );
}