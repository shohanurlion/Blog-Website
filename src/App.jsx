import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Root/Layout';
import Allblog from './Components/AllBlog/Allblog';
import Home from './Home/Home';
import Single from './Components/Singlepost/Single';
import Author from './Components/AuthorPage/Author';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/allblog' element={<Allblog />} />
      <Route path='/singlepost' element={<Single/>} />
      <Route path='/authorpage' element={<Author/>} />
    
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App
