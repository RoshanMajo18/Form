import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";
import micro from '../assets/micro.webp'
import microoff from '../assets/microoff.png'
import Hello from "../hello";
import enTranslations from './english.json'
import hiTranslations from './hindi.json'
import knTranslations from './kannada.json'
import mrTranslations from './marathi.json'
import mlTranslations from './malayalam.json'
import guTranslations from './gujarathi.json'
import teTranslations from './telugu.json'
import { FormContext } from "../../Contexts/FormContext";

function Personal() {
  const {formDataPer,setFormDataPer,setSelectedImagePer,selectedLanguage} = useContext(FormContext)
  const { name, email, phone ,line1,line2,city,state,pin,aadhaar } = formDataPer;
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const isButtonEnabled = name !== "" && email !== ""  && phone !== "" && state !== "" && pin !== "" && aadhaar!=="" ;
  const [isMicOn, setIsMicOn] = useState(false);
  const navigate=useNavigate()

  

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target.result;
      setSelectedImagePer(base64Data);
    };

    reader.readAsDataURL(file);
    
  };


  
  let translations={}


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
    setFormDataPer((prevFormDataPer) => ({
      ...prevFormDataPer,
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
  
      setFormDataPer((prevFormDataPer) => ({
        ...prevFormDataPer,
        [inputName]: transcript,
      }));
      resetTranscript();
    } else {
      e.preventDefault();
      SpeechRecognition.startListening({ continuous: true, language: selectedLanguage });
    }
  };
  
  
  const handleNext = () => {
    navigate('/company')
  };

  return (
    <div className="flex flex-col justify-center items-center  h-200 bg-gray-100" >
    <div>
            <h1>Speech</h1>
            <p>{transcript}</p>
          </div>
        
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3"
        
      >
        <Hello currentPage='personal'/>

        <h3 className="text-2xl mb-4 mt-4 font-semibold">{translations.title}</h3>

           <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            {translations.name} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  flex-grow"
            id="name"
            type="text"
            name="name"
            placeholder={translations.name}
            value={formDataPer.name}
            onChange={handleInputChange}
          />
      <button onClick={(e) => handleClick(e, "name")}>
      {isMicOn==="name" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
          </div>
          
      
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            {translations.email} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder={translations.email}
            value={formDataPer.email}
            onChange={handleInputChange}
          />
        
        <button onClick={(e) => handleClick(e, "email")}>
      {isMicOn==="email" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
    </div>
    </div>
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            {translations.password} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder={translations.password}
            value={formDataPer.password}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "password")}>
      {isMicOn==="password" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            {translations.confirmPassword} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="confirmPassword"
            placeholder={translations.confirmPassword}
            value={formDataPer.confirmPassword}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "confirmPassword")}>
      {isMicOn==="confirmPassword" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div>
        </div> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            {translations.phone} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            name="phone"
            placeholder={translations.phone}
            value={formDataPer.phone}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "phone")}>
      {isMicOn==="phone" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div>
        </div>
        
          
         <h3 className="text-2xl my-4 ">{translations.adress}</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="line1"
          >
            {translations.line1}
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="line1"
            type="text"
            name="line1"
            placeholder={translations.line1}
            value={formDataPer.line1}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "line1")}>
      {isMicOn==="line1" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="line2"
          >
            {translations.line2}
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="line2"
            type="text"
            name="line2"
            placeholder={translations.line2}
            value={formDataPer.line2}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "line2")}>
      {isMicOn==="line2" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            {translations.city}
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            name="city"
            placeholder={translations.city}
            value={formDataPer.city}
            onChange={handleInputChange}
          />
                    <button onClick={(e) => handleClick(e, "city")}>
      {isMicOn==="city" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="state"
          >
            {translations.state} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            name="state"
            placeholder= {translations.state}
            value={formDataPer.state}
            onChange={handleInputChange}
          />
                    <button onClick={(e) => handleClick(e, "state")}>
      {isMicOn==="state" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pin"
          >
            {translations.pin} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pin"
            type="text"
            name="pin"
            placeholder= {translations.pin}
            value={formDataPer.pin}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "pin")}>
      {isMicOn==="pin" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div></div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="aadhaar"
          >
            {translations.aadhaar} <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="aadhaar"
            type="text"
            name="aadhaar"
            placeholder={translations.aadhaar}
            value={formDataPer.aadhaar}
            onChange={handleInputChange}
          />
          <button onClick={(e) => handleClick(e, "aadhaar")}>
      {isMicOn==="aadhaar" ? 
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={micro} alt="" />
        :
        <img className="w-7 h-7 border border-gray-500 rounded-full shadow-md bg-gray-200" src={microoff} alt="" />
      }
    </button>
        </div>
        </div>
        
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
        disabled={!isButtonEnabled}  onClick={handleNext}
          >
            {translations.next}
          </button>
        </div>

        
      </form>
      
    </div>
  );
}

export default Personal;
