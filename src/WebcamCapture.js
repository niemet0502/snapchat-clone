import React, { useRef, useCallback,useState } from "react"
import Webcam from "react-webcam"
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from "./features/cameraSlice"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
const videoContraints = {
  width: 850,
  height: 400,
  facingMode: "user"
};

function WebcamCapture(){
  const webcamRef = useRef(null)
  const [image,setImage] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setCameraImage(imageSrc))
      history.push('/preview')
    },
    [webcamRef],
  )
  return <div className="webcamCapture">
      <Webcam 
        audio={false}
        height={videoContraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoContraints.width}
        videoContraints={videoContraints}
      />
      <RadioButtonUncheckedIcon
        class="webcamCapture_button"
        onClick={capture}
        fontSize="large"
      />

      <img class="capture_image" src={image} alt=""/>
  </div>
}

export default WebcamCapture;