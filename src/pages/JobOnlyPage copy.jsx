// This is one way for do that task // This is one way for do that task // This is one way for do that task 
// This is one way for do that task // This is one way for do that task // This is one way for do that task 
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobOnlyPage = () => {
    const { id }= useParams();
    const [job,setJob]=useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        const fetchJob = async() => {
            try {
            const rest = await fetch(`/api/jobs/${id}`);
            const data = await rest.json();
            // console.log(data);
            setJob(data);
            } catch (error) {
                console.log( 'errrrrrrrrrrr',error);
            } finally{
                setLoading(false);
            }
        };
        fetchJob();
    },[]);
  return (
    loading ? <Spinner/> : <h1>{job.title}</h1>
  )
}



export default JobOnlyPage