"use client"
import React, { useState } from 'react'

// import Button from '@mui/material/Button';


const Home:React.FC = () => {
  const [files, setFile] = useState<File | null>(null);
  if (!files) {
    return
  }else{
    const formData = new FormData()
    formData.append("File",files)
    formData.append("upload_preset", "test_one");
    console.log(formData)

  }
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className=' border-2 border-dashed h-44 w-74'>
        
                <label htmlFor="image" className="inline-block px-6 py-3 bg-green-400 text-white mb-2 text-sm">
                  Select Image:
                <input onChange={(e)=>setFile(e.target.files ? e.target.files[0]:null )} className='hidden'
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
                </label>
              </div>

       {/* <Button variant="contained">Upload</Button> */}
    </div>
  )
}

export default Home