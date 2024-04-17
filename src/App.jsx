import TodayDeal from "./pages/TodayDeal"
import Home from "./pages/Home"
import NewArrival from "./pages/NewArrival"
import Treding from "./pages/Treding"
import Discount from "./pages/Discount"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RequirementSlip from "./pages/RequirementSlip"
import SearchByImage from "./pages/SearchByImage"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/discount",
      element: <Discount />,
    },
    {
      path: "/trending",
      element: <Treding />,
    },
    {
      path: "/new_arrival",
      element: <NewArrival />,
    },
    {
      path: "/today_deal",
      element: <TodayDeal />,
    },
    {
      path: "/requirement_slip",
      element: <RequirementSlip />,
    },
    {
      path: "/searchByImage",
      element: <SearchByImage />,
    }
  ],);

  return (

    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App