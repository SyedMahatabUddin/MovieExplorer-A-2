import { Search } from "lucide-react";
import { useState } from "react";
export default function Header() {

  const [searchValue,setSearchValue]=useState('')
  const handleSearch = (e)=>{
  const val = searchValue.trim()
    console.log(val);
    
    e.preventDefault()
  }
  return (
  
<div className="bg-[#121826] flex items-center flex-col justify-center" >

<div className="max-w-7xl w-full flex items-center justify-between py-4 px-5">

         {/* logo part */}

   <a href="/" className="border border-gray-500 py-2 px-2 sm:px-4 rounded-xl ">
   <span className="text-xl md:text-2xl">🎬</span>
   <span className="text-[16px] md:text-2xl font-bold bg-linear-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
   MovieExplorer</span>

   </a>


         {/*  Explore part */}

   <a href='/Movies' className="text-[16px] md:text-xl bg-red-600 max-h-10 flex items-center w-fit cursor-pointer hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-red-600/30 active:scale-95">
   Explore</a>



 </div>
<div>


         {/* search part */}

   <form className="flex mb-4 " onSubmit={handleSearch}>
        <input type="search"
          value={searchValue} onChange={(e)=>setSearchValue(e.target.value) }
          placeholder="Search Shows and People "
          className="focus:outline-none pl-3 rounded-l-3xl border-none max-h-10 text-[1.1rem] md:w-60 lg:w-80 w-40 text-gray-600 bg-[#FEFEFE] border"  />
        <button aria-label="Search" className=" py-2 px-4 rounded-r-3xl text-[1.1rem] max-h-10  bg-[#ff0000] hover:bg-[#97423c]  transition duration-500 ">
          <Search color="#ffffff" />
        </button>
   </form>


</div>
</div>
  )
}
