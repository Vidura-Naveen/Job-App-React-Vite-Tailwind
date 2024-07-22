import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display :'block',
    margin : '100px auto',
}

const Spinner = ({ loadingz} ) => {
  return (
    <ClipLoader
    color='#FF0000'
    loading={loadingz}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner