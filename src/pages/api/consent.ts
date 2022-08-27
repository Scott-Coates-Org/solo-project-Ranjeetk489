import type { NextApiResponse, NextApiRequest } from "next";
import { generateAuthUrl } from  "../../utils/googleApis";


const consentUrl = async (request:NextApiRequest, response: NextApiResponse) => {
    
    const url = await generateAuthUrl();
    response.status(200).json(url);
};

export default consentUrl;
