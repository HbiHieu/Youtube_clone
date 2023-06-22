import { IUser } from "./interfaceUser";

export interface IAuthContext {
    value : {
        user:IUser | undefined ,
        setUser : ( value : IUser | undefined ) => void ,
    }
}