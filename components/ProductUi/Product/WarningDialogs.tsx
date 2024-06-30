import React from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
const WarningDialogs = ({WarningType,setWarningType,setloading}:{WarningType:null | string,setWarningType:React.Dispatch<React.SetStateAction<string|null>>,setloading:React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div>
        <Dialog open={WarningType==='successful'} onClose={() => setWarningType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                <DialogTitle className="font-bold">Successfully Submitted</DialogTitle>
                <Description>You will be able see your review in couple of minutes on our site. Thank you</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setWarningType(null)}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={WarningType==='exists'} onClose={() => setWarningType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                <DialogTitle className="font-bold">Already Exists</DialogTitle>
                <Description>Review cannot be processed as the review already exists.</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setWarningType(null)}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={WarningType==='noOrder'} onClose={() => setWarningType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                <DialogTitle className="font-bold">Purchase product</DialogTitle>
                <Description>Only the customers who bought this product can share their review.</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setWarningType(null)}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={WarningType==='error'} onClose={() => setWarningType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border  p-6 rounded-xl text-center drop-shadow-custom-xl bg-red-400 text-white">
                <DialogTitle className="font-bold">Error</DialogTitle>
                <Description>We are currently facing Down Time. Please Try again lator.</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-white transition-colors duration-300 hover:text-black py-2 px-6 rounded-xl' onClick={() => setWarningType(null)}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={WarningType==='notExists'} onClose={() => setWarningType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                <DialogTitle className="font-bold">Does not Exist</DialogTitle>
                <Description>Review cannot be processed as the review does not exists.</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setWarningType(null)}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={WarningType==='deleted'} onClose={() => setWarningType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-xl text-center drop-shadow-custom-xl">
                <DialogTitle className="font-bold">Successfully Deleted</DialogTitle>
                <Description>Your review will be deleted shortly. Thank you</Description>
                <div className="flex justify-center gap-4">
                    <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setWarningType(null)}>OK</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
    </div>
  )
}

export default WarningDialogs