"use client";

import Image from "next/image";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

interface UploadImage  {
  event: "success"
  info: { public_id: string };
}

export default function Home() {
  // use state to change the Image
  const [imageId , setImageId] = useState("ymq8vf97s1sbbxf6aeou")
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* upload Button */}
      <CldUploadButton uploadPreset="jxonj6ev" 
      onUpload={(result, widget) => { 
        let res = result as UploadImage
        setImageId(res.info.public_id);
      }} 
      />
      {/* view image */}
      <CldImage
        width="400"
        height="300"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
