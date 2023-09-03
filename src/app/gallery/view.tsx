
"use client";
import { CldImage } from "next-cloudinary";

const View = ({src}: {src: string}) => {
  return (
    
      <CldImage
      width="400"
      height="300"
      src={src}
      sizes="100vw"
      alt="Description of my image"
    />
   
  )
}

export default View