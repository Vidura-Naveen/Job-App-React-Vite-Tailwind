import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
// import JobOnlyPagecopy from './pages/JobOnlyPage';
import JobOnlyPage , {jobLoader} from './pages/JobOnlyPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayouts/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobPage/>}/>
    <Route path='/add-job' element={<AddJobPage/>}/>
    {/* <Route path='/jobs/:id' element={<JobOnlyPagecopy/>}/> */}
    <Route path='/jobs/:id' element={<JobOnlyPage/>} loader = {jobLoader}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App