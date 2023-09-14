import { query } from "@/lib/db";

export default async function search(req,res) {

    if(req.method === "POST"){

        const fastName = req.body.fast_name;
        const lastName = req.body.last_name;
        const district = req.body.district;
        const age = req.body.age;

        const createNewCriminal = await query({
            query:"insert into criminal(fastName, lastName, district, age) VALUES (?,?,?,?)",
            values: [fastName, lastName, district, age],
        })
        let criminals = [];
        if(createNewCriminal.insertId){
            message = "success";
        }
        else{
            message ="error"
        }

            criminals ={
            criminalId: createNewCriminal.insertId,
            fast_name: fastName,
            last_name:lastName,
            district : district,
            age : age,

        }

        res.status(200).json({response :{ message: message , criminals : criminals}});
    
    }


};