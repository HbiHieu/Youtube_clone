export interface IChannel {
    id : string ,
    brandingSettings : {
    image : {
        bannerExternalUrl : string ,
    }
    },
    snippet : {
        title : string ,
        customUrl : string ,
        thumbnails : {
            high : {
                url : string ,
            },
            medium : {
                url : string ,
            }
        } ,
    }
    statistics : {
        subscriberCount?:string ,
    } | undefined
}