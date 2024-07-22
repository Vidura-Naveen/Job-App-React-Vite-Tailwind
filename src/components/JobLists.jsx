import { useState , useEffect } from 'react';
import JobList from './JobList'
import React from 'react'
import Spinner from './Spinner';




const JobLists = ({isHome=false}) => {
  // const JobListsfilter = isHome? jobjson.slice(0,3) : jobjson;
  const [jobsz , setJobsz] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const fetchJobs = async () => {
      const apiURL = isHome ? '/api/jobs?_limit=3' : 'http://localhost:8000/jobs';
      try {
      const rest = await fetch(apiURL);
      const data = await rest.json();
      setJobsz(data);
      } catch (error) {
        console.log( 'errrrrrrrrrrr',error);
      } finally{
        setLoading(false);
      }
    }
    fetchJobs();
  },[])

// console.log(jobjson);
  return (
  
      <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">{ isHome ? 'Recent Jobs' : 'Browse Jobs'}</h2>
         {loading ? (
          <Spinner loadingz={loading}/>
          // <h1>Loading</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobsz.map((jobsza) =>(
          <JobList key={jobsza.id} job={jobsza}/>
          ))}
          </div>
        )}
      </div>
    </section>

  )
}

export default JobLists