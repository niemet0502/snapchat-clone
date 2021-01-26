import React from 'react'
import { useSelector } from "react-redux"
import { selectCameraImage } from "./features/cameraSlice"

function Preview() {
  const cameraImage = useSelector()
  return (
    <div className="preview">
      <img src="" alt=""/>
    </div>
  )
}

export default Preview
