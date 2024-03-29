/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import { DashboardNavbar, MobileSidebar, Sidebar } from "../components"
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = {name: "John"};
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logging out");
  };
  
  return (
    <>
      <DashboardContext.Provider value={{user, showSidebar, toggleSidebar, logoutUser}}>
        <div>
          <main>
            {/* <MobileSidebar /> */}
            <Sidebar />
            <div>
              <DashboardNavbar />
              <div>
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </DashboardContext.Provider>
    </>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;