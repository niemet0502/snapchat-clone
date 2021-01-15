import React, { useRef, useCallback } from "react"
import Webcam from "react-webcam"
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
const videoContraints = {
  width: 850,
  height: 400,
  facingMode: "user"
};

function WebcamCapture(){
  const webcamRef = useRef(null)
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
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
      />
  </div>
}

export default WebcamCapture;