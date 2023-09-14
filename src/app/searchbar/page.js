"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";


export default function Searchbar() {

  //const [profileid, setprofileid] =useState("");

  const{push} = useRouter()

  const onSubmit =(criminalId) =>{
    push(`/criminalprofile/${criminalId}`)
  }; 

  const [criminalSearchList, setCriminalSearchList] = useState([]);

  const criFnameRef = useRef();
  const criLnameRef = useRef();
  const criAgeRef = useRef();

  async function search(){

    const fastName = criFnameRef.current.value.trim();
    const lastName = criLnameRef.current.value.trim();
    const age = criAgeRef.current.value.trim();


    const queryParams = new URLSearchParams({
      fastName: fastName,
      lastName: lastName,
      age: age,
    });

    // const dataList ={
    //   method: "GET",
    //   headers:{
    //       "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     fastName: fastName,
    //     lastName: lastName,
    //     age: age,
    //   })
    // }

    const res = await fetch(`/api/search?${queryParams.toString()}`);
        const response = await res.json();
        console.log(response.criminals);
        setCriminalSearchList(response.criminals)
        
  }

    return (

     <div className="grid place-items-center m-8">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-r-4 border-yellow-300">
        <form className=" space-x-2">
          <input className="border border-yellow-400 py-2 px-4 rounded-2xl bg-zinc-100/60" 
          type="text" ref={criFnameRef} placeholder="Fast Name" />
          <input className="border border-yellow-400 py-2 px-4 rounded-2xl bg-zinc-100/60" 
          type="text" ref={criLnameRef} placeholder="Last Name" />
          <input className=" w-[100px] border border-yellow-400 py-2 px-4 rounded-2xl bg-zinc-100/60" 
          type="text" ref={criAgeRef} placeholder="Age"/>
          {/* <button onClick={search} className=" bg-yellow-400 font-black cursor-pointer px-6 py-2 rounded-2xl">Search</button> */}
          <input value="Search" type="button" className=" bg-yellow-400 font-black cursor-pointer px-6 py-2 rounded-2xl" onClick={search} />
        </form>
        <div className=" m-8">
          <h1 className=" grid place-items-center font-semibold">Search Results.....</h1>
       {criminalSearchList.map((values)=>{
        return (
          <div
              key={values.criminalId}
              className=" bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <h1 className="text-xl font-semibold">
                <button onClick={() => onSubmit(values.criminalId)}>
                Name: {values.fastName} {values.lastName}
                </button>
              </h1>
              <p className="text-gray-600">Age: {values.age}</p>
            </div>
        )
       })}
      </div>
      </div>
     </div>
    )
  }