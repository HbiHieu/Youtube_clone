import React , { useContext } from "react";

import { Button } from "@mui/material";
import { AppContext } from "../../context/AppProvider";

interface IpropsButton {
  children: string;
  handleClickBtn ?: () => void ,
  isSearchPage ?: boolean ,
  style?: object ,
}

const MediumButton = ({ children , handleClickBtn , isSearchPage , style }: IpropsButton) => {
  
  const { darkTheme } = useContext(AppContext) ;

  return (
    <Button
      sx={{
        backgroundColor : darkTheme ? 'white' : 'black' ,
        color : darkTheme ? 'black' : 'white' ,
        textTransform: "initial", 
        fontSize: "14px",
        borderRadius: "20px",
        height:'32px' ,
        maxHeight:'32px',
        width:'82px' ,
        fontWeight:'bold' ,
        marginTop : isSearchPage ? '30px' : '' ,
        '&.MuiButton-root:hover' : {
        backgroundColor : darkTheme ? 'white' : 'black' ,
        opacity:0.8 ,
      },
      ...style ,
      }}
      onClick={handleClickBtn}
    >
      {children}
    </Button>
  );
};

export default MediumButton;
