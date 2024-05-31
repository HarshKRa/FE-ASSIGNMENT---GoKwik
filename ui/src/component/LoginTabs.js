import React, { useState } from 'react'
import logo from '../img/googleImg.png'

const LoginTabs = () => {
  const[data,setData] = useState("")
  const[flag,setFlag] = useState(false)

  const handleChange = (e)=>{

    setData(e.target.value)
    var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var numberValidation =  /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{8}$/

    if(data.match(emailValidation)){
      setFlag(true)
    }else if(parseInt(data) == data && data.match(numberValidation)){
      setFlag(true)
    }else{
      setFlag(false)
    }
  }


  const handleSubmit = ()=>{
    if(flag){
      alert("all good")
      setData("")
    }
  }
  return (
    <div className='bg-white md:absolute lg:absolute  md:h-[80vh] lg:h-[80vh] h-[90vh] md:top-6 md:right-20 md:w-[50vw] lg:w-[35vw] w-[90vw] mx-auto mt-5 rounded-md'>
      <div className='flex gap-7 flex-col px-10 py-20' >
        <h1 className='text-blue-900 font-bold text-lg'>Login to Dashboard</h1>


        <div>
        <label className='text-gray-600'>Email or Mobile Number</label>
          <input className='w-full border-b-2 px-1 py-2 mt-3 text-black'
          type='text'
          name='data'
          value={data}
          onChange={handleChange}
          />
          
          <div>
          { data.length === 0? 
            <h2>.</h2>
              : flag ? 
              <h2 className='text-green-600'>Proceed with next</h2>
              :<h2 className='text-red-600'>Please Enter valid Mail or Phone Number</h2> 
            
          }
          </div>
        </div>

        <button className='bg-blue-600 py-2 rounded-md' onClick={handleSubmit}>Next</button>

        <div className=" text-gray-400 grid grid-cols-3  justify-center items-center before:contenet-[''] before:h-0.5 before:bg-gray-400 before:block after:contenet-[''] after:h-0.5 after:bg-gray-400 after:block text-center">
          or</div>

        <div className='w-48 flex bg-blue-600 h-10 mx-auto rounded'>
          <div className='h-9 w-9'>
            <img className='mt-0.5 ml-0.5 rounded-l' src={logo}></img>
          </div>
          <div className='m-auto'>
            Sign in with Google
          </div>
        </div>


      </div>

      <div className='md:mt-14 lg:mt-14 mt-5 w-72 mx-auto'>
        <p className='text-center font-semibold text-gray-400'>Protected by reCAPTCHA Google</p>
        <p className='text-center font-light text-blue-800'>Privacy Policy <span>&</span> Termes of Service <span>apply</span></p>
      </div>
    </div>
  )
}

export default LoginTabs
