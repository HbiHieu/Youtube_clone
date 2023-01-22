
// 2022-12-19T09:00:12Z
// 2023-01-19T15:48:52.078

const date = new Date ;

export const DateNow = {
    Year :  date.getFullYear(),
    Month : date.getMonth() + 1 ,
    Date : date.getDate() ,
    Hour : date.getHours() ,
    Minute : date.getMinutes() ,
    Second : date.getSeconds() ,
}
//

function getDay( string:string ) {
    let day = '' ;
    for ( let i = 0 ; i < string.length ; i++ ) {
        if( string[i] == 'T' ) return day;
        day += string[i] ;
    }
    return '' ;
}

function getHourMinuteSecond( value : string ) {
    let arrayTime = [];
    let item = '' ;
    let start = 0 ;
    for ( let i = 0 ; i < value.length ; i++ ) {
        if( value[i] == 'T' ) {
            start = 1 ;
            continue;
        }
        if( start ) {
            if( value[i] == ':' || ( value[i] == 'Z' || value[i] == '.' ) ) {
                arrayTime.push(item) ;
                item = '' ;
                continue;
            }
            item += value[i] ;
        }
    }
    return arrayTime ;
}

const getYearWeekDay = ( dayString:string ) => {

    const stringYearWeekDay = getDay(dayString) ;

    const [ year , month , date ] = stringYearWeekDay.split('-') ;

    return [year,month,date] ;
    
}


// 

export const historyCreateVideo = ( value : string ) :string => {
    const [ year , month , date  ] = getYearWeekDay(value) ;
    const [ hour , minute , second ] = getHourMinuteSecond(value) ;

    if ( (+year != 0) && (+year < DateNow.Year) ) {
       return `${DateNow.Year - +year} năm trước` ;
    }
    else if( +month < DateNow.Month ) {
       return `${DateNow.Month - +month} tháng trước` ;
    }
    else if ( +date < DateNow.Date ) {
        return `${DateNow.Date - +date} ngày trước` ;
    }
    else if ( +hour < DateNow.Hour ) {
        return `${DateNow.Hour - +hour} giờ trước`
    }
    else if ( +minute < DateNow.Minute ) {
        return `${DateNow.Minute - +minute} phút trước`
    }
    else if ( +second < DateNow.Second ) {
        return `${DateNow.Second - +second} giây trước`
    }
    return `${value}` ;
}



