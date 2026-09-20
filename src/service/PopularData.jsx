import { Calendar, Star } from "lucide-react";
import { useEffect, useState } from "react";

const PopularData = () => {
  const [loading, setLoading]= useState(true)
  const [show, setShow] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => {

    fetch("https://api.tvmaze.com/shows?page=1")
      .then((res) => res.json())
      .then((data) => {
                    setShow(data);
                    setLoading(false)});
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };


  if (loading) {
  return <div className="flex justify-center p-10">
    <span className="loading loading-bars loading-xl"></span>
    </div>;
}
  return (
    
    <div className="w-full flex flex-col items-center">

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
{show.slice(0, visibleCount).map((user) => (



         <div key={user.id}  className="max-w-300">

          <div className="w-full h-80 overflow-hidden rounded-t-lg">
            
          <img src={user.shows?.image?.medium || user.image?.original }
               loading="lazy"  alt={user.show?.name || "Poster"}
             className="w-full h-full object-cover"
             />
          </div>


          <div className="px-1 space-y-2 border-gray-400 border py-2 rounded-b-lg">
          <p className="">{user.show?.name || user.name}</p>

          <div className="flex justify-between"> 
            <p className="flex items-center gap-1 text-[14px]"><Star size={14} strokeWidth={2} className="text-yellow-400 fill-yellow-400" />{user.rating?.average} </p>
            <p className="text-[14px] flex items-center gap-1"><Calendar size={14} strokeWidth={2} /> {user.premiered?.split("-")[0] || "N/A"}</p>
          </div>
           
            <button className="mx-auto  block bg-red-400 my-2 py-1.5 px-4 rounded-xl">See Details</button>
          </div>


         </div>

      ))}
     </div>

      {visibleCount < show.length && (
        <button
          onClick={handleShowMore}
          className="my-8 bg-red-600 text-white font-medium py-2 px-6 rounded-xl hover:bg-red-700 transition"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default PopularData;
