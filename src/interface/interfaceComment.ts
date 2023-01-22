export interface IComment {
    id : string | undefined,
    snippet : {
        topLevelComment : {
            snippet : {
                authorDisplayName : string | undefined,
                authorProfileImageUrl : string | undefined,
                textDisplay : string ,
                updatedAt : string ,
            }
        }
    }
}