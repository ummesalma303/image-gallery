"use client"
import Image from 'next/image'
import React, { useState } from 'react'
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// import Button from '@mui/material/Button';


const Home:React.FC = () => {
  const [image, setImage] = useState< string>('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>)=>{
    const selectedFile = e.target.files?.[0]
   
  if (!selectedFile) {
    console.log("No file selected");
      return
    }else{
      try {
        
        const formData = new FormData()
        formData.append("file", selectedFile)
        formData.append("upload_preset", "image_gallery");
        const data = await fetch('https://api.cloudinary.com/v1_1/dfieeuqta/image/upload',{
          method: 'POST',
          body: formData
        })
        const res = await data.json()
        setImage(res.url)
      console.log(res.url)
      } catch (error) {
        console.log(error)
      }
     
    }
  }
  
  return (
    <div className='w-full h-screen my-14'>
      <div className="">
      <div className=''>
        
                <label htmlFor="image" className="inline-block px-6 py-3 bg-green-400 text-white mb-2 text-sm">
                  Select Image:
                <input onChange={(e)=>handleFileChange(e)} className='hidden'
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
                </label>
              </div>
{/* search bar */}
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        
      </div>
           


       {/* <Button variant="contained">Upload</Button> */}



       <div className="">
               {image && <Image src={image} width={90} height={40} alt='uploaded'/>}
               
  

              </div>
    </div>
  )
}

export default Home