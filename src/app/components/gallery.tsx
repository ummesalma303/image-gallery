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
    <div>
      {/* {images?.data?.map((img, index: number) => (
        <Card key={index} img={img}/>
      ))} */}
      {images?.data?.map((img, index) => (
        // <h2>{JSON.stringify(img)}</h2>
  <Cards key={index} img={img} />
))}
    </div>
  );
};


export default Gallery;
