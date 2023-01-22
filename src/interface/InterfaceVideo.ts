export interface IVideo {
    id : {
        videoId:string ,
        channelId?:string ,
        playlistId?:string ,
    },
    snippet : {
        channelId:string ,
        channelTitle ?: string ,
        publishedAt?:string ,
        thumbnails?:{
            high : {
                url:string ,
            }
        } ,
        liveBroadcastContent ?: string ,
        description ?: string ,
        title?: string 
        | undefined
    } ,
    statistics ?: {
        likeCount : string | undefined,
        viewCount : string | undefined ,
    } | undefined
}

export interface IVideos {
    videos : IVideo[] ,
}