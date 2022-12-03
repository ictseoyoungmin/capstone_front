import React, {useState} from "react";
import { Form, Input, Button, Label, Container } from "reactstrap";
import Stack from 'react-bootstrap/Stack'
import axios from "axios";
import './UploadImageForm.css'
import Dropzonea from './test'
import Dropzone from './tt'
import { API_URL } from "../index";


function UploadImageForm() {
  const [text, setText] = useState("없음");
  const [heat, setHeatmap] = useState("");
  const [fileImage, setFileImage] = useState("");

  const uploadModule = async (e) => {
  e.preventDefault();
  
  const upload_file = e.target[0].files[0];
  const upload_image_name = e.target[0].value; // C:fakepath/~
  const formData = new FormData();
  
  formData.append("image", upload_file);
  formData.append("enctype", "multipart/form-data")

  console.log('formdata')
  console.log("upload : "+e.target[0].value)
  const URL = API_URL+"upload/image/"

  axios({
    method: "POST",
    url: URL,
    data: formData,
    headers: {
        "Content-Type": "multipart/form-data",
    }
  }).then(function (response) {
    console.log(response)
  }).then(function (){
    const URL = API_URL+"upload/image/processing/"
    axios.get(URL, {
      params: {
        user_image: upload_image_name
      }
  })
  .then((response)=>{
    var obj = JSON.stringify(response.data['result']); 
	  console.log(obj); 
	  var jsonObj = JSON.parse(obj);
    if (jsonObj.isForgery){
      setText(jsonObj.proba+"% forgery image.");
    }else{
      setText(jsonObj.proba+"% Not forgery image.")
    }
    setHeatmap(response.data['heatmap']);
  })
  .catch((Error)=>{console.log(Error)})})   
  }
  
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
    console.log(fileImage);
  };

    return (
    <>
        <Container style={{display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
            <Stack direction="horizontal" gap={3} >
              <Container style={{display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
              <Dropzone onClick={console.log("clk")}>
                  </Dropzone>
              </Container>
                <Container style={{minHeight:"40vh", maxWidth:"512px"}}>
                  {heat && 
                    (<img src ={heat} alt = "result" style={{margin:"auto", maxWidth:"512px"}}/>)}
                </Container>
                <Container style={{display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                {text && (<h1>{text}</h1>)}
                </Container>
            </Stack>
          </Container>
       
        <Dropzonea>
        </Dropzonea>
     
    </>
    );
}
export default UploadImageForm;