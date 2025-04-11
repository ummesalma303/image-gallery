"use client"

import React, { useEffect, useState } from 'react';
import Cards from './Cards';

// export const dynamic = 'force-dynamic'
interface ImageData {
  _id: string;
  name: string;
  originalName: string;
  image: string;
}

interface ApiResponse {
  data: ImageData[];
}
const Gallery =  () => {
  const [images, setImages] = useState<ApiResponse>({ data: [] });

  const handleData= async()=>{
    console.log('-------------')
    const res = await fetch('http://localhost:3000/api/gallery');
    const data = await res.json();
    console.log(data)
    setImages(data);
  }
useEffect(()=>{
  handleData()
},[])
console.log(images)

console.log(images)
  return (
    <div className=" bg-gray-200 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center my-9 w-11/12 mx-auto gap-8">
     
      {images?.data?.map((img, index) => (
        // <h2>{JSON.stringify(img)}</h2>
  <Cards key={index} img={img} />
))}
    </div>
  );
};


export default Gallery;
