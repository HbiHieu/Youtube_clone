import { Stack } from "@mui/system";
import React , { useContext } from "react";

import { AppContext } from "../context/AppProvider";

import { categories } from "../constant";
import SmallButton from "./Button/SmallButton";

const CategoryNav = () => {
   
  const { selectedCategory , setSelectedCategory } = useContext(AppContext)
 
  return (
    <Stack display={"flex"} flexDirection={"row"} >
      {categories.map((category , index) => (
        <div 
        key={index}
        style={{
            marginLeft:'10px',
        }}>
            <SmallButton
         isSelected={ selectedCategory == category.name }
        handleClickBtn={ () => { setSelectedCategory(category.name) } }
        >{category.name}</SmallButton>
        </div>
      ))}
    </Stack>
  );
};

export default CategoryNav;
