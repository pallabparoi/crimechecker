"use client";

import { useEffect, useState } from "react";
import Searchbar from "../searchbar/page";

export default  function Search() {

    const [criminalList, setCriminalList] = useState([]);

    async function getCriminalList(){
        const dataList ={
            method: "GET",
            headers:{
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(`/api/search2`,
        dataList);
        const response = await res.json();
        setCriminalList(response.criminals)
    }

    useEffect(()=> {
        getCriminalList();
    },[])

    return (
        
     <div>
        <Searchbar/>
      <h1 className="flex justify-center">Search Results</h1>
      <div className="">
       {criminalList.map((values)=>{
        return (
           <div key={values.criminalId} className="flex justify-center">
            <div className="">
            <h1>Name: {values.fastName} {values.lastName} age: {values.age}</h1>
            </div>
            </div>
        )
       })}
      </div>

     </div>
    )
  }
  