"use client"

import React, { useEffect, useState } from 'react';
import Cards from './Cards';

// export const dynamic = 'force-dynamic'

const Gallery =  () => {
  const [images, setImages] = useState<{ data: string[] }>({ data: [] });
  const handleData= async()=>{

    const res = await fetch('http://localhost:3000/api/gallery');
    const data = await res.json();
    setImages(data);
  }
useEffect(()=>{
handleData()
},[])
console.log(images)
  return (
    <div className=" bg-amber-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center my-9 w-11/12 mx-auto gap-8">
     
      {images?.data?.map((img, index) => (
        // <h2>{JSON.stringify(img)}</h2>
  <Cards key={index} img={img} />
))}
    </div>
  );
};


export default Gallery;
