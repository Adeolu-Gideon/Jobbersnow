/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { 
  HomeLayout, 
  Login, 
  Register, 
  Landing, 
  Profile, 
  Stats, 
  Admin, 
  AllJobs, 
  AddJob, 
  DashboardLayout, 
  DeleteJob, 
  EditJob, 
  Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

const  App = () => {

  return <RouterProvider router={router} />
  
}

export default App
