import { Outlet } from "react-router"
import Header from "../component/Header"
import Footer from "../component/Footer"
import { useState } from "react";
const MainLayout = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch}/>
      <Outlet context={{ searchQuery }}/>
      <Footer/>
    </div>
  )
}
export default MainLayout
