"use client"
// import Image from 'next/image'

import TextField from '@mui/material/TextField';
// import AddImage from './components/AddImage';
import Gallery from './components/gallery';
// import Button from '@mui/material/Button';


const Home:React.FC = () => {
 
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
        
        // data
        const payload = {
          name: res?.display_name,
          originalName: res?.original_filename,
          image: res?.url
        }

        // post data in database
        const response = await fetch('http://localhost:3000/api/gallery',{
          method:'POST',
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const result = await response.json()
        console.log(result)
        alert('image successfully uploaded')
        
      } catch (error) {
        console.log(error)
      }
     
    }

  }
 
  
  return (
    <div className='w-full h-screen my-14'>
      <div className="w-11/12 mx-auto flex justify-between items-center">
      <div>
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
               <Gallery/>
  

              </div>
    </div>
  )
}

export default Home