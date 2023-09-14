import mysql from 'mysql2/promise';


export async function query({query, values=[]}){
    const db = await mysql.createConnection({
       host: process.env.MYSQL_HOST,
       user: process.env.MYSQL_USER,
       password: process.env.MYSQL_PASSWOARD,
       database: process.env.MYSQL_DATABASE,
    });

    try{
        const[results] = await db.execute(query,values);
        db.end();
        return results;
    }
    catch(error){
        throw Error(error.message);
        return{error};
    }
    
}