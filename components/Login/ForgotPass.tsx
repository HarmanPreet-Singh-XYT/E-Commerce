import React,{useState} from 'react'
import Link from 'next/link';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import useAuth from '@/controllers/Authentication';
import { useApp } from '@/Helpers/AccountDialog';
import forgotOTPHandler from '@/app/api/sendOTP';
import OtpInput from 'react-otp-input';
interface userData{
    email:string;
    password:string;
}
const ForgotPass = () => {
    const [otpPopup, setotpPopup] = useState(false);
    const [OTP, setOTP] = useState('');
    const [form, setForm] = useState<userData>({email:'',password:''});
    const {toggleIsPassword,appState} = useApp();
    const {} = useAuth();
    async function resetPass(e:any) {
        e.preventDefault();
        const data = {
            email:e.target.email.value,
            password:e.target.password.value,
        };
        if(e.target.password.value === e.target.repassword.value){
            setForm(data);
            const sendMail = await forgotOTPHandler(data.email);
            setotpPopup(true);
        }else toggleIsPassword();
    };
    return (
        <section className={`bg-gray-50 h-screen w-screen flex items-start lg:items-center overflow-x-hidden ${(otpPopup || appState.isPassword) && 'blurbg'}`}>
            <Dialog open={otpPopup} onClose={() => setotpPopup(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center font-medium">
                <DialogTitle className="font-bold">OTP Sent</DialogTitle>
                <Description>An OTP has been Sent on your Email Address, Please check your Email Inbox</Description>
                <div className='flex justify-center'>
                    <OtpInput
                        value={OTP}
                        onChange={setOTP}
                        shouldAutoFocus
                        inputStyle={'bg-gray-100 m-2 py-4 text-xl pl-3 text-black min-w-[75px] rounded-xl'}
                        numInputs={4}
                        inputType='number'
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setotpPopup(false)}>Cancel</button>
                    <button className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' onClick={() => {setotpPopup(false)}}>Submit</button>
                </div>
                <p>Didn't receive OTP? <span className='text-primary-700'><button>Resend OTP</button></span></p>
            </DialogPanel>
            </div>
        </Dialog>
            <section className="w-[95%] mx-auto flex justify-center">
                <div className='flex lg:h-[650px] justify-between items-center gap-10'>
                    <div className="flex flex-col items-center justify-center min-w-[500px] px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white lg:hidden">
                            <img className="w-12 h-12 mr-2" src="https://www.strivemindz.com/images/offerings/icons/ecommerce.png" alt="logo"/>
                            H-Comm    
                        </Link>
                        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                    Reset Password
                                </h1>
                                <form onSubmit={(e)=>resetPass(e)} method='post' className="space-y-4 md:space-y-6 flex flex-col gap-4 lg:gap-0" action="/">
                                    <div data-validate = "Enter Email">
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                        <input required type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your email"/>
                                    </div>
                                    <div data-validate = "Enter Password">
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input required type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Re-Enter Password</label>
                                        <input required type="password" name="repassword" id="repassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get OTP & Reset Password</button>
                                </form>
                                <div className='text-center'><Link href="/sign-in" className="font-medium text-primary-600 hover:underline">Go Back</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </section>

  )
}

export default ForgotPass