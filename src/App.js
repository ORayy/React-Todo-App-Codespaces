// pages
import Home from './pages/Home';
import About from './pages/About';
// import Help from './pages/Help';
// import Create from './pages/Create';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import Navbar from './components/Navbar';
import RootLayout from './layouts/RootLayout';
import ErrorLayout from './layouts/ErrorLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

// creating BrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<ErrorLayout /> } >

      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />} >
        <Route path='faq'  element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

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