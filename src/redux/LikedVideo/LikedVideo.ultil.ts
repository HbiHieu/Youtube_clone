import { IVideo } from "../../interface"

export const handleAddLikedVideo = ( likedVideos:IVideo[] , video:IVideo) => {
    return [video , ...likedVideos]
}