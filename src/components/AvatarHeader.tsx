import React, { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";

import { AuthContext } from "../context/AuthProvider";
import SignInButton from "./Button/SignInButton";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const AvatarHeader = () => {
  const { user, setUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  console.log(user);

  return (
    <>
      {user ? (
        <>
          <Avatar
            src={user.photoURL}
            sx={{ width: 32, height: 32, marginRight: "22px" }}
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
          />
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClick={() => {
              setAnchorEl(null);
            }}
            sx={{
              borderRadius: "8px",
            }}
          >
            <MenuItem>
              <span
                onClick={() => {
                  signOut(auth);
                  setUser(undefined);
                }}
              >
                Đăng xuất
              </span>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

export default AvatarHeader;
