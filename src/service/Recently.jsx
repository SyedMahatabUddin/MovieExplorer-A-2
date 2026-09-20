import { Calendar, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Recently = () => {
  
  const [modal, setModal] =useState(false);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule/full")
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
        setLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  if (loading) {
    return (
      <div className="flex justify-center p-10">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {show.slice(0, visibleCount).map((user) => (
        <div key={user.id} className="max-w-300">
          <div className="w-full h-80 overflow-hidden rounded-t-lg">
            <img
              src={
                user._embedded?.show?.image?.original ||
                user._embedded?.show?.image?.medium
              }
              loading="lazy"
              alt={user._embedded?.show?.name || "Poster"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-1 space-y-2 border-gray-400 border py-2 rounded-b-lg">
            <p className="font-semibold">{user._embedded?.show?.name || user.name}</p>

            <div className="flex justify-between">
              <p className="flex items-center gap-1 text-[14px]">
                <Star
                  size={14}
                  strokeWidth={2}
                  className="text-yellow-400 fill-yellow-400"
                />
                {user._embedded?.show?.rating?.average || "N/A "}
              </p>
              <p className="text-[14px] flex items-center gap-1">
                <Calendar size={14} strokeWidth={2} />{" "}
                {user._embedded?.show?.premiered?.split("-")[0] || "N/A"}
              </p>
            </div>

            <button onClick={()=> setModal(user.id) } className="mx-auto cursor-pointer block bg-red-400 my-2 py-1.5 px-4 rounded-xl">
              See Details
            </button>

                    {modal=== user.id && (<div onClick={()=>setModal(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center  px-4 z-50">
          <div onClick={(e)=>e.stopPropagation()} className="w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden space-y-3 pb-6">
          <div className="grid grid-cols-2">
           <img className="row-span-1" src={user._embedded?.show.image?.medium} alt={`${user._embedded?.show.name} Poster Image`} />

           <div className="row-span-1">

           <h2 className="text-xl font-extrabold text-center my-2">{user._embedded?.show.name}</h2> 
          <p><span className="font-semibold text-gray-800">Type:</span> {user._embedded?.show.type}</p>
          <p><span className="font-semibold text-gray-800">Language:</span> {user._embedded?.show.language}</p>
          <p><span className="font-semibold text-gray-800">Runtime:</span> {user._embedded?.show.runtime} min</p>
          <p><span className="font-semibold text-gray-800">Rating:</span> {user._embedded?.show.rating?.average|| "N/A"}</p>
           </div>


          </div>
          <p className="text-sm text-gray-700 w-full px-3 text-center">
          {user._embedded?.show.summary?.replace(/<[^>]+>/g, "")|| "No summary available for this show yet."}
        </p>

           <button
          onClick={() => setModal(false)}
          className="mt-2 bg-red-500 text-white cursor-pointer py-2 px-4 rounded-xl text-center mx-auto block w-30"
        >
          Close
        </button>
         </div>
        </div> )}

          </div>
        </div>
      ))}
     </div>
      {visibleCount < show.length && (
        <button
          onClick={handleShowMore}
          className="my-8 bg-red-600 cursor-pointer text-white font-medium py-2 px-6 rounded-xl hover:bg-red-700 transition"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Recently;
