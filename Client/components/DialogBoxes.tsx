import React,{useEffect} from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useApp } from '@/Helpers/AccountDialog';
import { useRouter } from 'next/navigation'
const DialogBoxes = () => {
    const router = useRouter()
    const { toggleAgreement,toggleIsOpenAgreement,appState,toggleIsPassword,toggleBackgroundBlur, toggleServerError,toggleIsExists,toggleIsIncorrect } = useApp();
    // useEffect(() => {
    //     const valuesToExclude = ['agreement', 'updates','loggedIn','backgroundBlur']; // Example keys to exclude
    //     const filteredValues = Object.entries(appState)
    //         .filter(([key]) => !valuesToExclude.includes(key))
    //         .map(([, value]) => value);

    //     const anyTrue = filteredValues.some(value => value === true);
    //     if (anyTrue) {
    //         toggleBackgroundBlur();
    //     }
    // }, [appState]);
  return (
    <>
        <Dialog open={appState.isOpenAgreement} onClose={() => toggleIsOpenAgreement()} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-xl text-center">
                <DialogTitle className="font-bold">Sign Up Agreement</DialogTitle>
                <Description>By signing up, you are creating a H-Comm account, and you agree to H-Comm <a className='text-primary-700 font-medium' href='/policy/terms&conditions'>Terms & Conditions</a> and <a className='text-primary-700 font-medium' href='/policy/privacypolicy'>Privacy Policy.</a></Description>
                <div className="flex justify-center gap-4">
                <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => toggleIsOpenAgreement}>Cancel</button>
                <button className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' onClick={() => {toggleIsOpenAgreement();toggleAgreement();}}>Accept</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={appState.isPassword} onClose={() => toggleIsPassword()} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                <DialogTitle className="font-bold">Password</DialogTitle>
                <Description>Passwords don't match. Try again.</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => toggleIsPassword()}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={appState.serverError} onClose={() => toggleServerError()} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border  p-6 rounded-xl text-center drop-shadow-custom-xl bg-red-400 text-white">
                <DialogTitle className="font-bold">Error</DialogTitle>
                <Description>We are currently facing Down Time. Please Try again lator.</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-white transition-colors duration-300 hover:text-black py-2 px-6 rounded-xl' onClick={() => toggleServerError()}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={appState.isExists} onClose={() => toggleIsExists()} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-xl text-center">
                <DialogTitle className="font-bold">Account Already Exists</DialogTitle>
                <Description>An Account with Same Email address or Mobile number Already Exists</Description>
                <p>Do you want to Sign in</p>
                <div className="flex justify-center gap-4">
                <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => toggleIsExists()}>OK</button>
                <button className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' onClick={() => {toggleIsExists();router.push('/sign-in')}}>Sign in</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={appState.isIncorrect} onClose={() => toggleIsIncorrect()} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                <DialogTitle className="font-bold">Incorrect Credentials</DialogTitle>
                <Description>Your Email address or Password is Incorrect. Please Check Again.</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => toggleIsIncorrect()}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
    </>
  )
}

export default DialogBoxes