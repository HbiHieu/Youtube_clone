export const convertNumber = ( number : string ):string | undefined => {
     const numberLength = number.length ;
     if ( numberLength <= 3 ) return `${numberLength}` ;
     else {
        if( numberLength == 4 ) return `${number[0]},${number[1]} N` ;
        else if ( numberLength == 5 ) return `${number[0]}${number[1]} N` ;
        else if ( numberLength == 6 ) return `${number[0]}${number[1]}${number[2]} N` ;
        else if ( numberLength == 7 ) return `${number[0]},${number[1]} Tr` ;
        else if ( numberLength == 8 ) return `${number[0]}${number[1]} Tr` ;
        else if ( numberLength == 9 ) return `${number[0]}${number[1]}${number[2]} Tr` ;
        else if ( numberLength == 10 ) return `${number[0]} T` ;
     }
}