import JobList from './JobList'
import React from 'react'
import jobjson from '../jobs.json'


function JobLists() {

  const limitjobsinhome = jobjson.slice(0,3);
console.log(jobjson);
  return (
    <div>
        
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          {limitjobsinhome.map((jobsz) =>(
          <JobList key={jobsz.id} job={jobsz}/>
          ))}

        </div>
      </div>
    </section>

    </div>
  )
}

export default JobLists