import React, { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext'

import enTranslationsPer from '../Personal/english.json'
import hiTranslationsPer from '../Personal/hindi.json'
import knTranslationsPer from '../Personal/kannada.json'
import mrTranslationsPer from '../Personal/marathi.json'
import mlTranslationsPer from '../Personal/malayalam.json'
import guTranslationsPer from '../Personal/gujarathi.json'
import teTranslationsPer from '../Personal/telugu.json'

import enTranslationsCom from '../Company/en.json'
import hiTranslationsCom from '../Company/hi.json'
import knTranslationsCom from '../Company/kn.json'
import mrTranslationsCom from '../Company/mr.json'
import mlTranslationsCom from '../Company/ml.json'
import guTranslationsCom from '../Company/gu.json'
import teTranslationsCom from '../Company/te.json'

import enTranslationsBan from '../Bank/en.json'
import hiTranslationsBan from '../Bank/hi.json'
import knTranslationsBan from '../Bank/kn.json'
import mrTranslationsBan from '../Bank/mr.json'
import mlTranslationsBan from '../Bank/ml.json'
import guTranslationsBan from '../Bank/gu.json'
import teTranslationsBan from '../Bank/te.json'

import enTranslationsUp from '../Upload/en.json'
import hiTranslationsUp from '../Upload/hi.json'
import knTranslationsUp from '../Upload/kn.json'
import mrTranslationsUp from '../Upload/mr.json'
import mlTranslationsUp from '../Upload/ml.json'
import guTranslationsUp from '../Upload/gu.json'
import teTranslationsUp from '../Upload/te.json'

const Preview = () => {
    const {formDataPer,selectedImagePer,formDataCom,selectedImageCom,formDataBan,aadharFile,panFile,chequeFile} = useContext(FormContext)

    const {selectedLanguage} = useContext(FormContext)
  
    let translationsPer
    let translationsCom
    let translationsBan
    let translationsUp
  
    if(selectedLanguage==='en-IN'){
      translationsPer=enTranslationsPer
      translationsCom=enTranslationsCom
      translationsBan=enTranslationsBan
      translationsUp=enTranslationsUp

    }
    else if(selectedLanguage==='hi-IN'){
      translationsPer=hiTranslationsPer
      translationsCom=hiTranslationsCom
      translationsBan=hiTranslationsBan
      translationsUp=hiTranslationsUp
    }
    else if(selectedLanguage==='kn-IN'){
      translationsPer=knTranslationsPer
      translationsCom=knTranslationsCom
      translationsBan=knTranslationsBan
      translationsUp=knTranslationsUp
    }
    else if(selectedLanguage==='mr-IN'){
      translationsPer=mrTranslationsPer
      translationsCom=mrTranslationsCom
      translationsBan=mrTranslationsBan
      translationsUp=mrTranslationsUp
    }
    else if(selectedLanguage==='ml-IN'){
      translationsPer=mlTranslationsPer
      translationsCom=mlTranslationsCom
      translationsBan=mlTranslationsBan
      translationsUp=mlTranslationsUp
    }
    else if(selectedLanguage==='te-IN'){
      translationsPer=teTranslationsPer
      translationsCom=teTranslationsCom
      translationsBan=teTranslationsBan
      translationsUp=teTranslationsUp
    }
    else if(selectedLanguage==='gu-IN'){
      translationsPer=guTranslationsPer
      translationsCom=guTranslationsCom
      translationsBan=guTranslationsBan
      translationsUp=guTranslationsUp
    }

    const handleSubmit = ()=>{

    }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{translationsPer.title}</h2>
      <div className="bg-white shadow-md rounded p-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.name}:</label>
          <p className="text-gray-900">{formDataPer.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.email}:</label>
          <p className="text-gray-900">{formDataPer.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.phone}:</label>
          <p className="text-gray-900">{formDataPer.phone}</p>
        </div>
        <div className="mb-4">
        <h3 className="text-xl font-bold mb-4">{translationsPer.adress}</h3>
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.line1}:</label>
          <p className="text-gray-900">{formDataPer.line1}</p>
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.line2}:</label>
          <p className="text-gray-900">{formDataPer.line2}</p>
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.city}:</label>
          <p className="text-gray-900">{formDataPer.city}</p>
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.state}:</label>
          <p className="text-gray-900">{formDataPer.state}</p>
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.pin}:</label>
          <p className="text-gray-900">{formDataPer.pin}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsPer.aadhaar}:</label>
          <p className="text-gray-900">{formDataPer.aadhaar}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Picture:</label>
          <img src={selectedImagePer} alt="User Picture" className="w-32 h-32 rounded-full" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-4 mb-4">{translationsCom.title}</h2>
      <div className="bg-white shadow-md rounded p-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsCom.rpy}:</label>
          <p className="text-gray-900">{formDataCom.rpy}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">GSTIN:</label>
          <p className="text-gray-900">{formDataCom.gstin}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsCom.pan}:</label>
          <p className="text-gray-900">{formDataCom.pan}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Company Logo:</label>
          <img src={selectedImageCom} alt="User Picture" className="w-32 h-32 rounded-full" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-4 mb-4">{translationsBan.title}</h2>
      <div className="bg-white shadow-md rounded p-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsBan.abn}:</label>
          <p className="text-gray-900">{formDataBan.abn}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsBan.acno}:</label>
          <p className="text-gray-900">{formDataBan.acno}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">{translationsBan.ifsc}:</label>
          <p className="text-gray-900">{formDataBan.ifsc}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 ">
          <div className="mr-2"></div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
         onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
    </div>
  )
}

export default Preview
