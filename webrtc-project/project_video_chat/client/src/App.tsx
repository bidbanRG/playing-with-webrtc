import { useCallback, useEffect, useRef, useState } from 'react'



import './App.css'

function App() {

   const videoRef = useRef<HTMLVideoElement>(null);

   useEffect(() => {
       
   const constraints = {
  audio: true,
  video: { width: 400, height: 720 }
 };



navigator.mediaDevices.getUserMedia(constraints)
  .then((mediaStream) => {
  
    if(videoRef.current){ 

       videoRef.current.srcObject = mediaStream
        videoRef.current.onloadedmetadata = () => {
        videoRef.current?.play();
      }
    };
  })
  .catch((err) => {
    // always check for errors at the end.
    console.error(`${err.name}: ${err.message}`);
  });




   },[])   

  return <div>
        hemlo
        <video style = {{width:"400px"}} ref = {videoRef} />
   </div>
    
}

















export default App
