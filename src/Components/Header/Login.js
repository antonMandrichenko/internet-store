import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import SignIn from "../SignIn";

Login.propTypes = {

};

function Login() {

  const[isOpenDialog, setIsOpenDialog] = useState(false)

  const handleOpenDialog = () => {
    console.log('fgfgfgfgf')
    setIsOpenDialog(!isOpenDialog);
  };

  return (
    <Fragment>
      <Button color="inherit" onClick={handleOpenDialog} >Login</Button>
      <SignIn isOpenDialog={isOpenDialog} handleOpenDialog={handleOpenDialog}/>
    </Fragment>

  );
}

export default Login;
