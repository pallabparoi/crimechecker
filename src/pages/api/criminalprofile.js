import { query } from "@/lib/db";

export default async function criminalprofile(req,res) {

    if(req.method === "GET"){

        const criminalid = req.query.criminalid;

        const criminalProfile = await query({
          //  query: "SELECT * FROM criminal WHERE criminalId=?",
          query: "select * from criminal where criminalId=?",

            values: [criminalid],
        })

        res.status(200).json({criminaldetails: criminalProfile});
    
    }


};