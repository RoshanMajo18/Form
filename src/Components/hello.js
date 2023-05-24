import React, { useContext } from 'react'
import { FormContext } from '../Contexts/FormContext'
import enTranslations from './Title/en.json'
import hiTranslations from './Title/hi.json'
import knTranslations from './Title/kn.json'
import mrTranslations from './Title/mr.json'
import mlTranslations from './Title/ml.json'
import guTranslations from './Title/gu.json'
import teTranslations from './Title/te.json'


const Hello = ({currentPage}) => {

  const {selectedLanguage} = useContext(FormContext)
  
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

  return (
    <header className='sticky  z-10 flex min-h-[48px] flex-col items-center justify-center bg-white px-10 h-16 pb-0 border-b'>
        <div className='flex w-full items-center justify-center h-12'>
            <div className='relative w-full pb-2'>
                <div className=' relative flex min-w-max items-center justify-between'>
                <div className="absolute  top-3 h-1 w-full bg-gray-300"></div>

                    <div className='relative flex min-w-[50px] flex-col items-center'>
                    <div className={`z-20  flex h-6 w-6 items-center justify-center rounded-full border-2 border-onSurface-disabled bg-white p-2 text-xs font-semibold border-secondary ${currentPage === 'personal' ? 'text-green-500' : 'text-gray-500'}`}>
                <div>1</div>
              </div>
              <div className={`z-40 mt-1  text-xs font-semibold ${currentPage === 'personal' ? 'text-green-500' : 'text-gray-500'}`}>{translations.title1}</div>
                        <div className='absolute z-10 h-full w-1/2 bg-white left-0'></div>
                    </div>
                    <div className='relative flex min-w-[50px] flex-col items-center'>
                    <div className={`z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-onSurface-disabled bg-white p-2 text-xs font-semibold border-secondary ${currentPage === 'company' ? 'text-green-500' : 'text-gray-500'}`}>
                <div>2</div>
              </div>
              <div className={`z-40 mt-1 text-xs font-semibold ${currentPage === 'company' ? 'text-green-500' : 'text-gray-500'}`}>{translations.title2}</div>
                        {/* <div className='absolute z-10 h-full w-1/2 bg-white left-0'></div> */}
                    </div>
                    <div className='relative flex min-w-[50px] flex-col items-center'>
                    <div className={`z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-onSurface-disabled bg-white p-2 text-xs font-semibold border-secondary ${currentPage === 'bank' ? 'text-green-500' : 'text-gray-500'}`}>
                <div>3</div>
              </div>
              <div className={`z-40 mt-1 text-xs font-semibold ${currentPage === 'bank' ? 'text-green-500' : 'text-gray-500'}`}>{translations.title3}</div>
                        {/* <div className='absolute z-10 h-full w-1/2 bg-white left-0'></div> */}
                    </div>
                    <div className='relative flex min-w-[50px] flex-col items-center'>
                    <div className={`z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-onSurface-disabled bg-white p-2 text-xs font-semibold border-secondary ${currentPage === 'upload' ? 'text-green-500' : 'text-gray-500'}`}>
                <div>4</div>
              </div>
              <div className={`z-40 mt-1 text-xs font-semibold ${currentPage === 'upload' ? 'text-green-500' : 'text-gray-500'}`}>{translations.title4}</div>
              
                        <div className='absolute z-10 h-full w-1/2 bg-white right-0'></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hello
