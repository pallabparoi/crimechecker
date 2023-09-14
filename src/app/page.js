import Link from "next/link";
import Searchbar from "./searchbar/page";


export default function Home() {
  return (
   <main>
    <div>
    <h1 className="flex justify-center">Home</h1>
    <Link className=" flex justify-end mr-14 font-bold" href="/create">Input New Criminal</Link>
    </div>
    <Searchbar/>
  
   </main>
  )
}
