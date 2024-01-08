import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans from "./pages/vans/Vans";
import VansDetail from "./pages/vanDetail/VanDetail";
import "../server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/hostVans/HostVans";
import HostVanDetails from "./pages/host/hostVanDetails/HostVanDetails";
import HostVanInfo from "./pages/host/hostVanDetails/HostVanInfo";
import HostVanPhotos from "./pages/host/hostVanDetails/HostVanPhotos";
import HostVanPricing from "./pages/host/hostVanDetails/HostVanPricing";
import NotFound from "./pages/notFoundPage/NotFound";

// Replacing <BrowserRouter> with <RouterProvider>, createBrowserRouter and createRoutesFromElements components for Data layer API
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route path="vans" element={<Vans />} />
  <Route path="vans/:id" element={<VansDetail />} />

  <Route path="*" element={<NotFound />} />

  {/* Nested Routing without using Layout route for shared element */}
  {/* <Route path="vans">
  <Route index element={<Vans />} />
  <Route path=":id" element={<VansDetail />} />
  </Route> */}

  <Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="vans" element={<HostVans />} />
    <Route path="vans/:id" element={<HostVanDetails />}>
      <Route index element={<HostVanInfo />} />
      <Route path="pricing" element={<HostVanPricing />} />
      <Route path="photos" element={<HostVanPhotos />} />
    </Route>
    <Route path="reviews" element={<Reviews />} />
  </Route>
</Route>
))


function App() {
  return (
    <RouterProvider router={router} />

    // <BrowserRouter> doesn't support data API

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />

    //       <Route path="vans" element={<Vans />} />
    //       <Route path="vans/:id" element={<VansDetail />} />

    //       <Route path="*" element={<NotFound />} />

    //       {/* Nested Routing without using Layout route for shared element */}
    //       {/* <Route path="vans">
    //       <Route index element={<Vans />} />
    //       <Route path=":id" element={<VansDetail />} />
    //       </Route> */}

    //       <Route path="host" element={<HostLayout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="income" element={<Income />} />
    //         <Route path="vans" element={<HostVans />} />
    //         <Route path="vans/:id" element={<HostVanDetails />}>
    //           <Route index element={<HostVanInfo />} />
    //           <Route path="pricing" element={<HostVanPricing />} />
    //           <Route path="photos" element={<HostVanPhotos />} />
    //         </Route>
    //         <Route path="reviews" element={<Reviews />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
