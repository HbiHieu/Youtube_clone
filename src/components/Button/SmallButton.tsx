import React , { useContext } from "react";

import { Button } from "@mui/material";
import { AppContext } from "../../context/AppProvider";

interface IpropsButton {
  children: string;
  isSelected : boolean ;
  handleClickBtn ?: () => void ,
}

const SmallButton = ({ children , isSelected , handleClickBtn }: IpropsButton) => {
  
  const { darkTheme } = useContext(AppContext) ;

  return (
    <Button
      sx={{
        backgroundColor : isSelected ? ( darkTheme ? '#f2f2f2' : 'black' ) : ( darkTheme ? 'black' : 'white' ) , 
        color : isSelected ? ( darkTheme ? 'black' : 'white' ) : ( darkTheme ? 'white' : 'black' ) ,
        textTransform: "initial",
        fontSize: "14px",
        borderRadius: "8px",
        height:'32px' ,
        maxHeight:'32px',
        width:'auto' ,
      }}
      onClick={handleClickBtn}
    >
      {children}
    </Button>
  );
};

export default SmallButton;
