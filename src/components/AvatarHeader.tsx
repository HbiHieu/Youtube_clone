import React, { useContext } from "react";
import { Avatar } from "@mui/material";

import { AuthContext } from "../context/AuthProvider";
import SignInButton from "./Button/SignInButton";

const AvatarHeader = () => {
  const { user } = useContext(AuthContext);

  console.log(user) ;

  return (
    <>
      {user ? (
        <Avatar
        src={user.photoURL}
        sx={{width: 32, height: 32,marginRight:'22px'}}
        />
      ) : (
        <SignInButton/>
      )}
    </>
  );
};

export default AvatarHeader;
