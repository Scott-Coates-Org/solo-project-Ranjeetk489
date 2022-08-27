import { createRequire } from "module";
const require = createRequire(import.meta.url);
const google = require("@googleapis/calendar");

import { env } from "../env/server.mjs";
import * as keys from "../../clientCredentials.json";

const oAuth2Client = new google.auth.OAuth2(
    env.GOOGLE_CONSENT_CLIENT_ID,
    env.GOOGLE_CONSENT_CLIENT_SECRET,
    "http://localhost:3000/prescription"
)


export const generateAuthUrl = async () => {

    const scopes = [
        "https://www.googleapis.com/auth/calendar",
        "https://www.googleapis.com/auth/drive"
    ];

    const url = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
    })

    return url;
}




// export const getAuthenticateClient  = ()  => {
//     return new Promise((resolve, reject) => {
//         const oAuth2Client = new OAuth2Client(
//             keys.web.client_id,
//             keys.web.client_secret,
//             keys.web.redirect_uris[0]
//         );
//         const scopes = [
//             "https://www.googleapis.com/auth/calendar",
//             "https://www.googleapis.com/auth/drive"
//         ];
//         const authorizeUrl = oAuth2Client.generateAuthUrl({
//             access_type: 'offline',
//             scope: scopes
//         })

//     })
// }


export const getTokens = async (token:string|undefined = undefined) => {
    if(token) {
        const {tokens} = await  oAuth2Client.getToken(token);
        oAuth2Client.setCredentials(tokens);
        oAuth2Client.on('tokens', (tokens) => {
            if (tokens.refresh_token) {
              // store the refresh_token in my database!
            console.log(tokens.refresh_token);
            }
            console.log(tokens.access_token);
        });
    }

}


export const sendToken = async (token: string | undefined) => {
    await fetch("api/getCredentials", {
        method: "POST",
        mode: "cors",
        credentials: 'same-origin',
        body: JSON.stringify(token)
    })
}