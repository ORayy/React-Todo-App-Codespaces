// pages
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
// import Create from './pages/Create';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import Navbar from './components/Navbar';
import RootLayout from './layouts/RootLayout';
import Error from './pages/Error';

// creating BrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error /> } >

      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<Help />} />

    </Route>
  )
)

function App() {
  return (
    <main>

      <RouterProvider router={router} />

    </main>
  );
}

export default App;