import React , { useContext } from "react";

import { Button } from "@mui/material";
import { AppContext } from "../../context/AppProvider";

interface IpropsButton {
  children: React.ReactNode;
  handleClickBtn ?: (e?:any) => void ,
  isSearchPage ?: boolean ,
  style?: object ,
  startIcon ?:JSX.Element ,
  videoId ?: string | undefined,
}

const DetailVideoButton = ({ children , videoId , handleClickBtn , isSearchPage , style , startIcon }: IpropsButton) => {

  return (
    <Button
      sx={{
        backgroundColor : false ? '#282727' : '#f2f2f2' ,
        color : false ? 'white' : 'black' ,
        textTransform: "initial", 
        fontSize: "14px",
        borderRadius: "20px",
        height:'36px' ,
        maxHeight:'36px',
        width:'auto' ,
        marginTop : isSearchPage ? '30px' : '' ,
        padding:'0 16px',
        '&.MuiButton-root:hover' : {
        backgroundColor : false ? '#413f3e' : '#e5e5e5' ,
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
