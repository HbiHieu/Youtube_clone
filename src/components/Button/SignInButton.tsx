import Button from '@mui/material/Button'
import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { handleClickSignInWithGoogle } from '../../firebase';

interface SignInButtonProps {
  style ?: object ,
}

const SignInButton = ({style}:SignInButtonProps) => {
  return (
    <Button
          startIcon={<AccountCircleIcon />}
          onClick={handleClickSignInWithGoogle}
          sx={{
            borderRadius: "18px",
            border: "1px solid #ccc",
            textTransform: "initial",
            fontWeight: "bold",
            width: "130px",
            marginRight:'22px',
            ...style ,
          }}
        >
          Đăng nhập
        </Button>
  )
}

export default SignInButton