"use client";

import { useRef, useState } from "react";

export default function Create() {

  const criFnameRef = useRef();
  const criLnameRef = useRef();
  const criDriRef = useRef();
  const criAgeRef = useRef();

  const [created, setCreated] = useState(false);

  async function addCriminal(){

    const fast_name = criFnameRef.current.value.trim();
    const last_name = criLnameRef.current.value.trim();
    const district = criDriRef.current.value.trim();
    const age = criAgeRef.current.value.trim();

      const dataList ={
      method: "POST",
      headers:{
          "Content-Type": "application/json",
      },

      body: JSON.stringify({
        fast_name: fast_name,
        last_name: last_name,
        district: district,
        age: age,
      })
    }
        const res = await fetch(`/api/createNewCriminal`,
        dataList);
        const response = await res.json();
        console.log(response);

        //if(response.response.message !== "success") return;

        const newCriminal = response.response.criminals;
        
        
        setCreated(true);
}
  
    return (
     <div>
      <h1>Create new criminal</h1>

      <input type="text" ref={criFnameRef} className="border-2 border-rose-500" />
      <input type="text" ref={criLnameRef} className="border-2 border-rose-500" />
      <input type="text" ref={criDriRef} className="border-2 border-rose-500" />
      <input type="text" ref={criAgeRef} className="border-2 border-rose-500" />
      <input 
      value="Save" 
      type="button"
      onClick={addCriminal}
      />
      {created ? <div>{response.response.message}</div> : null}

      </div>
    )
  }