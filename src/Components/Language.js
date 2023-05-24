import React, { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../Contexts/FormContext";

function Language() {
 
  const {setSelectedLanguage,selectedLanguage} = useContext(FormContext)
  const handleLanguageChange = (event) => {
    event.preventDefault()
    setSelectedLanguage(event.target.value);
   
  };

  const navigate=useNavigate()
    const handleNext=(e)=>{
        e.preventDefault()
        navigate('/personal')
    }
    useEffect(() => {
      console.log(selectedLanguage);
    }, [selectedLanguage]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-200 p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Language Selection</h1>
        <label htmlFor="language" className="text-medium font-medium mb-2">
          Select a Language:
        </label>
        <select
          name="language"
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="en-IN">English</option>
          <option value="hi-IN">Hindi</option>
          <option value="kn-IN">Kannada</option>
          <option value="mr-IN">Marathi</option>
          <option value="ml-IN">Malayalam</option>
          <option value="te-IN">Telugu</option>
          <option value="gu-IN">Gujarathi</option>
        </select>
        <div className="flex items-center justify-between ">
          <div className="mr-2"></div>
          <button
            className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
        onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Language;
