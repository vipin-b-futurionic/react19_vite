import { createBrowserRouter, Route, RouterProvider } from "react-router"
import { Movie } from "./pages/Movie"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import AppLayout from "./Components/Layout/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { getMoviesData } from "./api/GetApiData"

const  App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <ErrorPage />,
      children: [
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/about",
          element: <About />,
        },
        {
          path:"/movie",
          element: <Movie />, 
          loader: getMoviesData
        },
        {
          path:"/contact",
          element: <Contact />,
        }
      ]
      
    },
    

  ])

  // const router = createBrowserRouter(

  //   createRoutesFromElements(
  //     <Route>
  //       <Route path = "/" element = {<Home />} />
  //       <Route path = "/about" element = {<About />}/>
  //       <Route path = "/contact" element = {<Contact />}/>
  //       <Route path = "/movie" element = {<Movie />}/>
  //     </Route>
  //   )

  // )


  return <RouterProvider router = {router} />

}
export default App