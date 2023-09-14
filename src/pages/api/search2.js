import { query } from "@/lib/db";

export default async function search(req,res) {

    if(req.method === "GET"){

        const criminalList = await query({
            query:"select * from criminal",
            values: [],
        })

        res.status(200).json({criminals: criminalList});
    
    }


};