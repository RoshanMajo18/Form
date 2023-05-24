import React, { useContext, useState } from "react";
import Hello from "../hello";
import enTranslations from './en.json'
import hiTranslations from './hi.json'
import knTranslations from './kn.json'
import mrTranslations from './mr.json'
import mlTranslations from './ml.json'
import guTranslations from './gu.json'
import teTranslations from './te.json'
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";

const Upload = () => {
  const {setAadhaarFile,setChequeFile,setPanFile,aadhaarFile,panFile,selectedLanguage} = useContext(FormContext)
  const navigate = useNavigate()
  // const {abn,acno,ifsc}=formData
  const isButtonEnabled = aadhaarFile!==null && panFile!==null 

  const handleAadhaarFileChange = (event) => {
    const file = event.target.files[0];
    setAadhaarFile(file);
  };

  const handlePanFileChange = (event) => {
    const file = event.target.files[0];
    setPanFile(file);
  };
  const handleCancelledChequeChange = (event) => {
    const file = event.target.files[0];
    setChequeFile(file);
  };

  const handleUpload = () => {
    // Implement the logic to upload the files
    // if (aadhaarFile && panFile) {
    //   // Perform upload operation
    //   console.log("Aadhaar File:", aadhaarFile);
    //   console.log("PAN File:", panFile);
    // } else {
    //   // Show error message or perform validation
    //   console.log("Please select Aadhaar and PAN files");
    // }
    navigate('/preview')
  };

  
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

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3"
        onSubmit={handleUpload}
      >
        <Hello currentPage='upload'/> 
        <h3 className="text-2xl mb-4 mt-4 font-semibold">{translations.title}</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="aadhar"
          >
           {translations.aadhar} <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="aadhaar"
            type="file"
            accept=".pdf"
            onChange={handleAadhaarFileChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="aadhar"
          >
           {translations.pan} <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pan"
            type="file"
            accept=".pdf"
            onChange={handlePanFileChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="aadhar"
          >
           {translations.cheque} <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cancel"
            type="file"
            accept=".pdf"
            onChange={handleCancelledChequeChange}
          />
        </div>
        <div className="flex items-center justify-between ">
          <div className="mr-2"></div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isButtonEnabled ? "" : "opacity-50 cursor-not-allowed"}`}
        disabled={!isButtonEnabled} type="submit"
          >
            Preview
          </button>
        </div>

        
      </form>
      
    </div>
  );
  
};

export default Upload;
