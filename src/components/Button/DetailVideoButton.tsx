import React , { useContext } from "react";

import { Button } from "@mui/material";
import { AppContext } from "../../context/AppProvider";

interface IpropsButton {
  children: React.ReactNode;
  handleClickBtn ?: (e?:any) => void ,
  isSearchPage ?: boolean ,
  style?: object ,
  startIcon ?:JSX.Element
}

const DetailVideoButton = ({ children , handleClickBtn , isSearchPage , style , startIcon }: IpropsButton) => {
  
  const { darkTheme } = useContext(AppContext) ;

  return (
    <Button
      sx={{
        backgroundColor : darkTheme ? '#282727' : '#f2f2f2' ,
        color : darkTheme ? 'white' : 'black' ,
        textTransform: "initial", 
        fontSize: "14px",
        borderRadius: "20px",
        height:'36px' ,
        maxHeight:'36px',
        width:'auto' ,
        marginTop : isSearchPage ? '30px' : '' ,
        padding:'0 16px',
        '&.MuiButton-root:hover' : {
        backgroundColor : darkTheme ? '#413f3e' : '#e5e5e5' ,
      },
      ...style ,
      }}
      onClick={ handleClickBtn }
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};

export default DetailVideoButton;
