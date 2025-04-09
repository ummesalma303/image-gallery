"use client"
import React, { useState } from 'react'

// import Button from '@mui/material/Button';


const Home:React.FC = () => {
  // const [files, setFile] = useState<File | null>(null);

  const handleImage = async (imgUrl: React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(e)
    if (!imgUrl) {
      // console.log(imgUrl)
      return
    }else{
      // console.log(imgUrl)
      const formData = new FormData()
      formData.append("file",imgUrl)
      formData.append("upload_preset", "test_one");
      console.log(formData)

     
      
     
    }
  }
  
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className=' border-2 border-dashed h-44 w-74'>
        
                <label htmlFor="image" className="inline-block px-6 py-3 bg-green-400 text-white mb-2 text-sm">
                  Select Image:
                <input onChange={(e)=>handleImage(e.target.files?.[0] || null )} className='hidden'
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