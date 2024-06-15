import React from 'react'

import TopHead from'../components/TopHead'
import HomeCard from'../components/HomeCard'
import JobLists from'../components/JobLists'
import ViewAllJobs from'../components/ViewAllJobs'

const HomePage = () => {
  return (
    <div>
      
      <TopHead title='Test Title' subtitle='This is Sub Title'/>
      <HomeCard/>
      <JobLists/>
      <ViewAllJobs/>
    </div>
  )
}

export default HomePage