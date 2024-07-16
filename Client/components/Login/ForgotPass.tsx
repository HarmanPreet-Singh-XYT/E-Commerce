import React,{useState} from 'react'
import Link from 'next/link';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useApp } from '@/Helpers/AccountDialog';
import forgotOTPHandler from '@/app/api/sendOTP';
import OtpInput from 'react-otp-input';
import resetPassHandler from '@/app/api/resetPass';
import Countdown from './otpTimer';
import { useRouter } from 'next/navigation';
import Loading from '../Loading';
interface userData{
    email:string;
    password:string;
}
const ForgotPass = () => {
    const router = useRouter();
    const [otpPopup, setotpPopup] = useState(false);
    const [resendDisabled, setResendDisabled] = useState(true);
    const [resent, setResent] = useState(false);
    const [OTP, setOTP] = useState('');
    const [success, setSuccess] = useState(false);
    const [expiredOTP, setExpiredOTP] = useState(false);
    const [incorrectOTP, setIncorrectOTP] = useState(false);
    const [form, setForm] = useState<userData>({email:'',password:''});
    const [loading, setloading] = useState(false);
    const {toggleIsPassword,appState,toggleServerError,toggleIsIncorrect} = useApp();
    async function resetPassProceed(data:userData,otp:string){
        setloading(true);
        const dataStructure = {email:data.email,password:data.password,otp}
        const resetPassword = await resetPassHandler(dataStructure);
        switch (resetPassword.status) {
            case 200:
                setSuccess(true);
                setloading(false);
                break;
            case 205:
                setIncorrectOTP(true);
                setloading(false);
                break;
            case 210:
                setExpiredOTP(true);
                setloading(false);
                break;
            default:
                toggleServerError();
                setloading(false);
                break;
        }
    }
    async function resetPass(e:any) {
        e.preventDefault();
        setloading(true);
        const data = {
            email:e.target.email.value,
            password:e.target.password.value,
        };
        if(e.target.password.value === e.target.repassword.value){
            setForm(data);
            const sendMail = await forgotOTPHandler(data.email);
            switch (sendMail.status) {
                case 200:
                    setotpPopup(true);
                    setloading(false);
                    break;
                case 205:
                    toggleIsIncorrect();
                    setloading(false);
                    break;
                default:
                    toggleServerError;
                    setloading(false);
                    break;
            }
        }else toggleIsPassword();
    };
    async function resendOTP(form:userData){
        setloading(true);
        const sendMail = await forgotOTPHandler(form.email);
            switch (sendMail.status) {
                case 200:
                    setResent(true);
                    setloading(false);
                    break;
                default:
                    toggleServerError;
                    setloading(false);
                    break;
        }
    }
    function toggleResend(){
        setResendDisabled(!resendDisabled);
    }
    return (
        <section className={`bg-gray-50 h-screen w-screen flex items-start lg:items-center overflow-x-hidden ${(appState.isIncorrect || otpPopup || appState.isPassword) && 'blurbg'}`}>
            {loading && <div className='w-full h-full absolute'>{loading && <div className='absolute left-0 right-0 top-[30%] z-50'><Loading/></div>}</div> }
            <Dialog open={otpPopup} onClose={() => setotpPopup(false)} className="relative z-40">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center font-medium">
                <DialogTitle className="font-bold">OTP Sent</DialogTitle>
                <Description>An OTP has been Sent on your Email Address, Please check your Email Inbox</Description>
                <Countdown onComplete={toggleResend}/>
                <div>
                <Dialog open={incorrectOTP} onClose={() => setIncorrectOTP(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                    <DialogTitle className="font-bold">Incorrect</DialogTitle>
                    <Description>OTP is Incorrect. Try again.</Description>
                    <div className="flex justify-center gap-4">
                        <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setIncorrectOTP(false)}>OK</button>
                    </div>
            </DialogPanel>
                </div>
            </Dialog>
            <Dialog open={expiredOTP} onClose={() => setExpiredOTP(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                    <DialogTitle className="font-bold">Expired</DialogTitle>
                    <Description>OTP has been Expired. Try again.</Description>
                    <div className="flex justify-center gap-4">
                        <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setExpiredOTP(false)}>OK</button>
                        <button className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' onClick={()=>{resendOTP(form);setExpiredOTP(false)}}>Resend</button>
                    </div>
                </DialogPanel>
                </div>
            </Dialog>
            <Dialog open={success} onClose={() => setSuccess(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                    <DialogTitle className="font-bold">Successful</DialogTitle>
                    <Description>Password has been Successfully Changed.</Description>
                    <p>Click on Sign In to Login</p>
                    <div className="flex justify-center gap-4">
                        <button className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' onClick={() => {setSuccess(false);setotpPopup(false);router.push('/sign-in');}}>Sign In</button>
                    </div>
                </DialogPanel>
                </div>
            </Dialog>
            <Dialog open={resent} onClose={() => setResent(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                    <DialogTitle className="font-bold">Resent</DialogTitle>
                    <Description>OTP has been Resent. Please check your Inbox</Description>
                    <div className="flex justify-center gap-4">
                        <button className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' onClick={() => setResent(false)}>OK</button>
                    </div>
                </DialogPanel>
                </div>
            </Dialog>
                </div>
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
                    <button className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' onClick={() => {resetPassProceed(form,OTP)}}>Submit</button>
                </div>
                <div>
                <p>Didn't receive OTP? <span className='text-primary-700'><button onClick={()=>resendOTP(form)} disabled={resendDisabled}>Resend OTP</button></span></p>
                </div>
                
            </DialogPanel>
            </div>
            </Dialog>
            
        
            <section className="w-[95%] mx-auto flex justify-center">
                <div className='flex lg:h-[650px] justify-between items-center gap-10'>
                    <div className="flex flex-col items-center justify-center min-w-[500px] px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link href="#" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
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
                                        <input minLength={5} maxLength={128} required type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your email"/>
                                    </div>
                                    <div data-validate = "Enter Password">
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                        <input minLength={8} maxLength={32} required type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Re-Enter Password</label>
                                        <input minLength={8} maxLength={32} required type="password" name="repassword" id="repassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
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