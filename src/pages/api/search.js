import { query } from "@/lib/db";

export default async function search(req,res) {

    if(req.method === "GET"){

        const fastName = req.query.fastName;
        const lastName = req.query.lastName;
        const age = req.query.age;


        
        const criminalSearch = await query({
            query: "SELECT * FROM criminal WHERE fastName LIKE ? AND lastName LIKE ? AND age LIKE ?",
            values: [`%${fastName}%`, `%${lastName}%`, `%${age}%`],
        })

        res.status(200).json({criminals: criminalSearch});
    
    }


};