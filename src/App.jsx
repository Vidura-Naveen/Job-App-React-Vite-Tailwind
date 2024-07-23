import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider, json } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
// import JobOnlyPagecopy from './pages/JobOnlyPage';
import JobOnlyPage , {jobLoader} from './pages/JobOnlyPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {

  //ADD JOB
  const addJob = async (newjob)=>{
    // console.log(newjob);
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(newjob),
    });
    return;
  }
  //Delete JOB
  const deleteJob = async (id)=>{
    // console.log('DELETE' ,id);
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    });
    return;
  }
//UpdateJOB
const updateJob = async (job)=>{
  // console.log('DELETE' ,id);
  const res = await fetch(`/api/jobs/${job.id}`,{
    method:'PUT',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(job),
  });
  return;
}
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayouts/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobPage/>}/>
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
      {/* <Route path='/jobs/:id' element={<JobOnlyPagecopy/>}/> */}
      <Route path='/jobs/:id' element={<JobOnlyPage deleteJob={deleteJob}/>} loader = {jobLoader}/>
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader = {jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
  );

  return <RouterProvider router={router}/>
}

export default App