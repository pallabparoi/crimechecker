import { query } from "@/lib/db";

export default async function criminalprofile(req,res) {

    if(req.method === "GET"){

        const criminalid = req.query.criminalid;

        const criminalProfile = await query({
          //  query: "SELECT * FROM criminal WHERE criminalId=?",
          query: "select * from criminal inner join crime inner join crimeCriminal on criminalId= ? AND criminalId = criminalId_fk AND crimeId = crimeId_fk",

            values: [criminalid],
        })

        res.status(200).json({criminaldetails: criminalProfile});
    
    }


};