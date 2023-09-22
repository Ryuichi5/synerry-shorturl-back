import { sign ,verify} from "jsonwebtoken";
import { config } from "dotenv";
import * as sha256 from "sha256";

config();
export interface AuthenticationPayload {
    id :number;
    iat? : bigint ;
    exp? : bigint;
}

export class AuthenticationHelpers{


    public static checkAuthentication(request) : any{
        try{
            let accessToken = request.headers.authorization.split(" ")[1];
            let jwtResponse = verify(String(accessToken),"QAGiuGp4rSLsUSYWruclnQ5qa1VxAmVuReeImv0biNreD4sau7");
            
            return jwtResponse;
        }catch(error){
            console.error(`check authentication error -->`,error.message);
            return null;
        }
    }
    
}

// let token = AuthenticationHelpers.generateAccessToken({name : "za" },"3000");
// console.log(AuthenticationHelpers.checkAuthentication(token));
//console.log(AuthenticationHelpers.hashPassword("555"));