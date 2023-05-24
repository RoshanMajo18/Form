import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import Hello from "../hello";
import micro from '../assets/micro.webp'
import microoff from '../assets/microoff.png'
import enTranslations from './en.json'
import hiTranslations from './hi.json'
import knTranslations from './kn.json'
import mrTranslations from './mr.json'
import mlTranslations from './ml.json'
import guTranslations from './gu.json'
import teTranslations from './te.json'
import { FormContext } from "../../Contexts/FormContext";
function Company() {
  const {formDataCom,setFormDataCom,setSelectedImageCom,selectedLanguage} = useContext(FormContext)
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const {rpy,gstin,pan}=formDataCom
  const [isMicOn, setIsMicOn] = useState(false);
  const isButtonEnabled = rpy!==""  && pan!=="" 

  

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target.result;
      setSelectedImageCom(base64Data);
    };

    reader.readAsDataURL(file);
  };
  
  const navigate=useNavigate()


  
  let translations

  if(selectedLanguage==='en-IN'){
    translations=enTranslations
  }
  else if(selectedLanguage==='hi-IN'){
    translations=hiTranslations
  }
  else if(selectedLanguage==='kn-IN'){
    translations=knTranslations
  }
  else if(selectedLanguage==='mr-IN'){
    translations=mrTranslations
  }
  else if(selectedLanguage==='ml-IN'){
    translations=mlTranslations
  }
  else if(selectedLanguage==='te-IN'){
    translations=teTranslations
  }
  else if(selectedLanguage==='gu-IN'){
    translations=guTranslations
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // const transformedValue = value.replace(/at/gi, '@');
    setFormDataCom((prevFormDataCom) => ({
      ...prevFormDataCom,
      [name]: value,
    }));
  };

  const handleClick = (e, inputName) => {
    setIsMicOn((prevMicOn) => {
      
      if (prevMicOn === inputName) {
        return null; 
      }
      return inputName; 
    });
  
    if (isMicOn === inputName) {
      e.preventDefault();
      resetTranscript();
      SpeechRecognition.stopListening();
  
      setFormDataCom((prevFormDataCom) => ({
        ...prevFormDataCom,
        [inputName]: transcript.toUpperCase(),
      }));
     
    } else {
      e.preventDefault();
      SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
    }
  };

  
  const handleSubmit = (event) => {
    navigate('/bank')
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <div>
            <h1>Speech</h1>
            <p>{transcript}</p>
          </div>
        
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3"
        onSubmit={handleSubmit}
      >
        <Hello currentPage='company'/>
        <h3 className="text-2xl mb-4 mt-4 font-semibold">{translations.title}</h3>
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rpy"
          >
            {translations.rpy} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rpy"
            type="text"
            name="rpy"
            placeholder={translations.rpy}
            value={formDataCom.rpy}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "rpy")}>
      {isMicOn==="rpy" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gstn"
          >
            GSTIN 
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gstin"
            type="text"
            name="gstin"
            placeholder="GSTIN"
            value={formDataCom.gstin}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "gstin")}>
      {isMicOn==="gstin" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pan"
          >
            {translations.pan} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pan"
            type="text"
            name="pan"
            placeholder={translations.pan}
            value={formDataCom.pan}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "pan")}>
      {isMicOn==="pan" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
          {translations.upload}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
          />
          
        </div>

        <div className="flex items-center justify-between ">
          <div className="mr-2"></div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isButtonEnabled ? "" : "opacity-50 cursor-not-allowed"}`}
        disabled={!isButtonEnabled} type="submit" 
          >
           {translations.next}
          </button>
        </div>

        
      </form>
      
    </div>
  );
}

export default Company;
