"use client";

import { useEffect, useState } from "react"; // Import React

export default function CriminalProfile({ params }) {
  const [criminal, setCriminal] = useState([]);
  const [crime, setCrime] = useState([]);
  
  useEffect(() => {
    async function fetchCriminalProfile() {
      try {
        const res = await fetch(`/api/criminalprofile?criminalid=${params.criminalid}`);
        const response = await res.json();
        console.log(response.criminaldetails);
        setCriminal(response.criminaldetails);
      } catch (error) {
        console.error("Error fetching criminal profile:", error);
      }
    }

    fetchCriminalProfile();
  }, [params.criminalid]);

  useEffect(() => {
    async function fetchCrimeProfile() {
      try {
        const res = await fetch(`/api/crimeprofile?criminalid=${params.criminalid}`);
        const response = await res.json();
        console.log(response.criminaldetails);
        setCrime(response.criminaldetails);
      } catch (error) {
        console.error("Error fetching criminal profile:", error);
      }
    }

    fetchCrimeProfile();
  }, [params.criminalid]);

  return (
    <div>
      <h1 className="flex justify-center">Criminal Profile of {params.criminalid}</h1> 

      {criminal.map((values,index) => (
        <div
          key={values.criminalId}
          className="bg-white p-4 rounded-lg shadow-md mb-4"
        >
          <h1 className="text-xl font-semibold">

          {index === 0 && ( // Render fastName and lastName only for the first entry
              <div>
                <h1 className=" font-bold font-">Name: {values.fastName} {values.lastName} </h1>
                <p className="text-gray-600">Age: {values.age} District: {values.district}</p>
              </div>
            )}
           
          </h1>
          {/* <p className="text-gray-600">Age: {values.age} District: {values.district}</p> */}
        </div>
      ))}

          <h1 className=" font-bold flex justify-center"> Crime Commited </h1>
       {crime.map((values) => (
        <div
          key={values.criminalId}
          className="bg-white p-4 rounded-lg shadow-md mb-4"
        >
          <div>
             <h1  className="text-xl font-semibold"> Crime: {values.crimeInfo} </h1>
             <h3> Refference: <a href={values.reference} > {values.reference}</a></h3>
           
          </div>
        </div>
      ))}
    </div>
  );
}
