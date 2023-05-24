import React ,{useState} from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Personal from './Components/Personal/Personal'

import Company from './Components/Company/Company'
import Bank from './Components/Bank/Bank'
import Upload from './Components/Upload/Upload'
import Language from './Components/Language'
import { FormContext } from './Contexts/FormContext'
import Preview from './Components/Preview/Preview'

const App = () => {
  const [formDataPer, setFormDataPer] = useState({
    name: "",
    email: "",
    phone: "",
    line1:"",
    line2:"",
    city:"",
    state:"",
    pin:"",
    aadhaar:"",
  })

  const [formDataCom, setFormDataCom] = useState({
    rpy: "",
    gstin: "",
    pan: "",
    aadhaar:"",
  });

  const [formDataBan, setFormDataBan] = useState({
    abn: "",
    acno: "",
    ifsc: "",
  });
 
  const [selectedLanguage, setSelectedLanguage] = useState("en-IN");
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [chequeFile, setChequeFile] = useState(null);
  const [selectedImagePer, setSelectedImagePer] = useState(null);
  const [selectedImageCom, setSelectedImageCom] = useState(null);
  return (
    <FormContext.Provider value={{formDataPer,setFormDataPer,selectedImagePer,setSelectedImagePer,
    formDataCom,setFormDataCom,selectedImageCom,setSelectedImageCom,
    formDataBan,setFormDataBan,
    aadhaarFile,panFile,chequeFile,setAadhaarFile,setChequeFile,setPanFile,
    selectedLanguage,setSelectedLanguage}}>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/language' element={<Language/>} />
            <Route exact path='/personal' element={<Personal/>} />
            <Route exact path='/company' element={<Company/>} />
            <Route exact path='/bank' element={<Bank/>} />
            <Route exact path='/upload' element={<Upload/>} />
            <Route exact path='/preview' element={<Preview/>}/>
          </Routes>
      </BrowserRouter>
   </FormContext.Provider>
      
  )
}

export default App
