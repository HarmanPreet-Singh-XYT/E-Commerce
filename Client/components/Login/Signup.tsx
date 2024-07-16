import { CheckIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { loginFeatures } from '@/app/data';
import Link from 'next/link';
import { Checkbox } from '@headlessui/react'
import { useApp } from '@/Helpers/AccountDialog';
import useAuth from '@/controllers/Authentication';
import Loading from '../Loading';
const Signup = () => {
    const [updates, setUpdates] = useState(false);
    const {registerUser} = useAuth();
    const {toggleAgreement,toggleIsPassword,appState, toggleIsOpenAgreement} = useApp();
    const [loading, setloading] = useState(false)
    async function register(e:any,agreement:boolean,promotion:boolean) {
        e.preventDefault();
        const data = {
            userName:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
            mobile_number:e.target.mobilenum.value,
            dob:e.target.dob.value
        };
        if(e.target.password.value === e.target.repassword.value){
            if(agreement) {setloading(true);await registerUser(data,promotion,setloading)}
            else toggleIsOpenAgreement();
        }else toggleIsPassword();
    };
  return (
    <section className={`bg-gray-50 h-screen w-screen relative flex items-start lg:items-center overflow-x-hidden`}>
        {loading && <div className='w-full h-full absolute'>{loading && <div className='absolute left-0 right-0 top-[30%] z-50'><Loading/></div>}</div> }
        <section className="w-[95%] mx-auto flex justify-center">
            <div className='flex lg:h-[800px] justify-between gap-10'>
                <div className='h-full lg:flex lg:flex-col w-auto hidden lg:justify-between'>
                    <div>
                        <a href="#" className="flex items-center text-2xl mb-2 font-semibold text-gray-900">
                            <img className="w-12 h-12 mr-2" src="https://www.strivemindz.com/images/offerings/icons/ecommerce.png" alt="logo"/>
                            H-Comm    
                        </a>
                        <div className='flex flex-col gap-5'>
                            {loginFeatures.map((each,index)=>
                            <div key={index} className='flex gap-4 items-start'>
                                <CheckIcon width={25} className='text-white bg-primary-600 rounded-full py-1 px-1 mt-2'/>
                                <div>
                                    <h1 className='font-medium'>{each.title}</h1>
                                    <p className='text-sm font-medium'>{each.description}</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className='flex gap-5 text-gray-500 font-medium text-sm'>
                        <Link className='hover:underline hover:text-gray-800' href={'/about'}>About</Link>
                        <Link className='hover:underline hover:text-gray-800' href={'/policy/terms&conditions'}>Terms & Conditions</Link>
                        <Link className='hover:underline hover:text-gray-800' href={'/policy/privacypolicy'}>Privacy</Link>
                        <Link className='hover:underline hover:text-gray-800' href={'/contact'}>Contact</Link>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center  min-w-[500px] px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white lg:hidden">
                    <img className="w-12 h-12 mr-2" src="https://www.strivemindz.com/images/offerings/icons/ecommerce.png" alt="logo"/>
                    H-Comm    
                </Link>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create new account
                            </h1>
                            {/* <h1 className='font-semibold'>Sign up With</h1>
                            <div className='flex justify-between gap-2'>
                                <button className='px-6 py-3 border-[1px] border-gray-200 rounded-lg text-sm font-medium transition-colors duration-150 hover:bg-gray-700 hover:text-white'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img width={20} height={5} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png'/>Google
                                    </div>
                                </button>
                                <button className='px-6 py-3 border-[1px] border-gray-200 rounded-lg text-sm font-medium transition-colors duration-150 hover:bg-gray-700 hover:text-white'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <i className="fa-brands fa-apple fa-xl"></i>Apple
                                    </div>
                                </button>
                                <button className='px-6 py-3 border-[1px] border-gray-200 rounded-lg text-sm font-medium transition-colors duration-150 hover:bg-gray-700 hover:text-white'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img width={20} height={5} src='https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png'/>Meta
                                    </div>
                                </button>
                            </div> */}
                            <form onSubmit={e=>register(e,appState.agreement,updates)} className="space-y-4 md:space-y-6 flex flex-col gap-4 lg:gap-0">
                                
                                {/* <div className='flex w-full items-center'>
                                    <div className='w-full h-[2px] bg-gray-200'></div>
                                    <p className='px-4 text-gray-500'>or</p>
                                    <div className='w-full h-[2px] bg-gray-200'></div>
                                </div> */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                                    <input minLength={4} maxLength={64} required type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your name"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input minLength={5} maxLength={128} required type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your email"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input minLength={8} maxLength={32} required type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Re-Enter Password</label>
                                    <input minLength={8} maxLength={32} required type="password" name="repassword" id="repassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
                                    <input required type="tel" minLength={10} maxLength={10} pattern="\d{10}" inputMode='numeric' name="mobilenum" id="mobilenum" placeholder="Enter your mobile number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
                                    <input required type="date" name="dob" id="dob" placeholder="Enter your DOB" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                                </div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <Checkbox
                                                checked={appState.agreement}
                                                onChange={toggleAgreement}
                                                className="group block size-5 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
                                                >
                                                <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                                                    <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Checkbox>
                                        </div>
                                        <div onClick={()=>toggleAgreement()} className="ml-3 text-sm font-medium">
                                            <label className="text-gray-500">By signing up, you are creating a H-Comm account, and you agree to H-Comm <a className='text-primary-700 font-medium' href='/policy/terms&conditions'>Terms & Conditions</a> and <a className='text-primary-700 font-medium' href='/policy/privacypolicy'>Privacy Policy.</a></label>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                        <Checkbox
                                            checked={updates}
                                            onChange={setUpdates}
                                            className="group block size-5 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
                                            >
                                            <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                                                <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Checkbox>
                                        </div>
                                        <div onClick={()=>setUpdates(!updates)} className="ml-3 text-sm font-medium">
                                            <label className="text-gray-500">Email me about product updates and resources.</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up with New account</button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account yet? <Link href="/sign-in" className="font-medium text-primary-600 hover:underline">Sign in</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </section>
  )
}
export default Signup