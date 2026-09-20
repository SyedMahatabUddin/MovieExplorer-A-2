import PopularData from "../service/PopularData";
import Recently from "../service/Recently";

const Home = () => {


    
  return (
   

    <div className=" flex justify-center items-center flex-col py-7">
{/* trending content */}
    
  <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-4 mb-10">
   <div className=" space-y-4 px-5">
    <h2 className="text-3xl font-bold">Trending</h2>
  <PopularData/>
   </div>
  </div>

{/* Recently Premieres content */}
  <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-4 mb-10">
   <div className=" space-y-4 px-5">
    <h2 className="text-3xl font-bold">Recently Premieres</h2>
  <Recently/>
   </div>
  </div>


    </div>
  );
};
export default Home;
