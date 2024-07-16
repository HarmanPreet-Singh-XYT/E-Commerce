import { client } from "../data/DB";
import axios from 'axios'
import {oauth2Client} from '../utils/googleAPI';
export const googleAuth = async (code:string) => {
    try {
        const googleRes = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleRes.tokens);

        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
        );
        const query = `
                SELECT userid,username,email,mobile_number,dob FROM "users" WHERE email = $1;
            `;
            
            const values = [userRes.data.email];
            const result = await client.query(query, values);
        return result.rows[0];
    } catch (error) {
        return false;
    }
    
};