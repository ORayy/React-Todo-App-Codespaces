// pages
import Home from './pages/Home';
import About from './pages/About';
// import Careers, { careersLoader } from './pages/Careers';
import Add from './pages/Add'
import Careers from './pages/Careers';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from './layouts/RootLayout';
import ErrorLayout from './layouts/ErrorLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout'

// pages
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

      <Route path='/' element={<CareersLayout />}>
        <Route 
        path='careers' 
        element={<Careers />} 
        // loader={careersLoader}
        />
        <Route path='add' element={<Add />}/>
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