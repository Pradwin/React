import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Home } from "./Pages/Home"
import { Country } from "./Pages/Country"
import { AppLayout } from "./Components/Layout/AppLayout"
import "./App.css"
import { Error } from "./Pages/Error"
import { CountryDetail } from "./Components/UI/CountryDetail"

const App = () => {
  const router = createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[{
      path:"/",
      element:<Home/>
    },{
      path:"contact",
      element:<Contact/>
    },{
      path:"about",
      element:<About/>
    },{
      path:"country",
      element:<Country/>
    },
    {
      path:"country/:id",
      element:<CountryDetail/>
    }]
  }])
  return <RouterProvider router={router}>
  </RouterProvider>
}
export default App;