import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";
import redditImg from "../assets/reddit.png";


export default function  Footer (){

    return (
     <div className="bg-[#121826] ">
      <div className=" max-w-300 mx-auto space-y-3 px-4  mt-10 py-4">
        <div className="flex justify-between"> 
          <div className=" flex gap-2 flex-wrap">
            <p className="text-xl font-light  text-white">Follow Us On:</p>
            <div className=" flex gap-3">
              <a href="Facebook.com">
                <img className="w-6"  src={facebookImg} ></img>
              </a>
              <a href="">
               <img className="w-6"  src={instagramImg} ></img>
              </a>
              <a href="">
                <img className="w-6"  src={redditImg} ></img>
              </a>
            </div>
          </div>


          <div className="gap-3 flex">
            <a className="cursor-pointer hover:underline  md:text-xl font-light text-white " href="/Features">Features</a>
            <a className="cursor-pointer hover:underline  md:text-xl font-light text-white " href="/API">API</a>
            <a className="cursor-pointer hover:underline  md:text-xl font-light text-white " href="/Blog">Blog</a>
            <a className="cursor-pointer hover:underline  md:text-xl font-light text-white " href="/Request">Request a Show</a>
            <a className="cursor-pointer hover:underline  md:text-xl font-light text-white " href="/Data">Data Policies</a>
          </div>
        </div>





        <div className=" flex justify-between">
            <p className="text-[15px]  text-white" >© MovieExplorer.com</p>
            <div className="space-x-3">
              <a href="/Copyright Policy" className="cursor-pointer hover:underline  md:text-[16px] font-light text-white ">Copyright Policy</a>
              <a href="/Privacy Policy" className="cursor-pointer hover:underline  md:text-[16px] font-light text-white ">Privacy Policy</a>
              <a href="/ToS" className="cursor-pointer hover:underline  md:text-[16px] font-light text-white ">ToS</a>
            </div>
        </div>
      </div>
     </div>
    )
  
}
