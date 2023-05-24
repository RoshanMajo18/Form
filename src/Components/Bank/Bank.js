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


function Bank() {
  const {formDataBan,setFormDataBan,selectedLanguage} = useContext(FormContext)
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isMicOn, setIsMicOn] = useState(false);
  const {abn,acno,ifsc}=formDataBan
  const isButtonEnabled = abn!=='' && acno!=='' && ifsc!=='' 

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
    setFormDataBan((prevFormDataBan) => ({
      ...prevFormDataBan,
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
      SpeechRecognition.stopListening();
  
      setFormDataBan((prevFormDataBan) => ({
        ...prevFormDataBan,
        [inputName]: transcript.toUpperCase(),
      }));
      resetTranscript();
    } else {
      e.preventDefault();
      SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
    }
  };

  const handleSubmit = (event) => {
    navigate('/upload')
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
        <Hello currentPage='bank'/>
        <h3 className="text-2xl mb-4 mt-4 font-semibold">{translations.title}</h3>
        
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="abn"
          >
            {translations.abn}<span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="abn"
            type="text"
            name="abn"
            placeholder={translations.abn}
            value={formDataBan.abn}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "abn")}>
      {isMicOn==="abn" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="acno"
          >
            {translations.acno}<span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="acno"
            type="text"
            name="acno"
            placeholder={translations.acno}
            value={formDataBan.acno}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "acno")}>
      {isMicOn==="acno" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ifsc"
          >
           {translations.ifsc} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ifsc"
            type="text"
            name="ifsc"
            placeholder={translations.ifsc}
            value={formDataBan.ifsc}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "ifsc")}>
      {isMicOn==="ifsc" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
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

export default Bank;
