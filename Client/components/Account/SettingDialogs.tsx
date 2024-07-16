import React from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import {userAddressAddHandler, userAddressDeleteHandler, userAddressUpdateHandler, userUpdateHandler} from '@/app/api/userUpdate';
import { useAppDispatch } from '@/app/hooks';
import { addAddress, removeAddress, setAddress, setDefaultAccount } from '@/features/UIUpdates/UserAccount';
interface Address {
    addressID:number;
    addressType:string;
    contactNumber:number;
    addressLine1:string
    addressLine2:string
    city:string;
    state:string;
    country:string;
    postalCode:string;
    userName:string;
    is_default:boolean;
}
interface Account{
    userID:number;
    userName:string;
    email:string;
    mobile_number:number;
    dob:string;
}
const SettingDialogs = ({addresses,dialogType,setdialogType,menuType,userID,setLoading,selectedAddress,setselectedAddress,defaultAccount}:{addresses:Address[],dialogType:string | null,setdialogType:React.Dispatch<React.SetStateAction<string | null>>,menuType:string,userID:number,setLoading:React.Dispatch<React.SetStateAction<boolean>>,selectedAddress: Address,setselectedAddress:React.Dispatch<React.SetStateAction<Address>>,defaultAccount:Account}) => {
    const dispatch = useAppDispatch();
    function capitalizeFirstLetter(string:string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async function formSubmitProfile(e:any,Dialog:string|null,userID:number){
        e.preventDefault();
        setdialogType(null);
        setLoading(true);
        const updateValue = e.target.updateValue.value
        switch (Dialog) {
            case 'name':
                await userUpdateHandler({ userID,userName:updateValue, email:false, mobile_number:false, dob:false,password:false }).then((res)=>
                    res.status===200 && dispatch(setDefaultAccount({ 
                        ...defaultAccount, 
                        userID, 
                        userName: updateValue 
                    })))
                setLoading(false);
                break;
            case 'date of birth':
                await userUpdateHandler({ userID,userName:false, email:false, mobile_number:false, dob:updateValue,password:false  }).then((res)=>
                    res.status===200 && dispatch(setDefaultAccount({ 
                        ...defaultAccount, 
                        userID, 
                        dob: updateValue 
                    })))
                setLoading(false);
                break;
            case 'email':
                await userUpdateHandler({ userID,userName:false, email:updateValue, mobile_number:false, dob:false,password:false  }).then((res)=>
                    res.status===200 && dispatch(setDefaultAccount({ 
                        ...defaultAccount, 
                        userID, 
                        email: updateValue 
                    })))
                setLoading(false);
                break;
            case 'number':
                await userUpdateHandler({ userID,userName:false, email:false, mobile_number:updateValue, dob:false,password:false  }).then((res)=>
                    res.status===200 && dispatch(setDefaultAccount({ 
                        ...defaultAccount, 
                        userID, 
                        mobile_number: updateValue 
                    })))
                setLoading(false);
                break;
            case 'password':
                await userUpdateHandler({ userID,userName:false, email:false, mobile_number:false, dob:false,password:updateValue  })
                setLoading(false);
                break;
            default:
                setdialogType('defaultAddressError');
                break;
        }
    }
    async function formSubmitAddress(e:any,Dialog:string|null,userID:number,addressID?:number){
        e.preventDefault();
        setdialogType(null);
        setLoading(true);
        const data = {
            addressType:e.target.addresstype.value,
            contactNumber:e.target.contactnumber.value,
            addressLine1:e.target.addressline1.value,
            addressLine2:e.target.addressline2.value,
            city:e.target.city.value,
            state:e.target.state.value,
            country:e.target.country.value,
            postalCode:e.target.postalcode.value,
            userName:e.target.name.value,
        }
        switch (Dialog) {
            case 'address':
                addressID != undefined && await userAddressUpdateHandler(data,userID,addressID).then((res)=>{
                    if(res.status===200){
                        dispatch(setAddress(addresses.map((each) => {
                            return each.addressID === addressID ? { ...data, addressID,is_default:false } : each;
                        })));
                    }
                })
                setLoading(false);
                break;
            case 'newaddress':
                await userAddressAddHandler(data,userID).then((res)=>{
                    if(res.status===200){
                        const newAddress = addresses.length===0 ? { ...data, addressID: res.addressID, is_default:true } : { ...data, addressID: res.addressID, is_default:false };
                        dispatch(addAddress(newAddress));
                    }
                })
                setLoading(false);
                break;
            default:
                setdialogType('defaultAddressError');
                break;
        }
    }
    async function deleteAddress(userID:number,addressID:number){
        setLoading(true);
        await userAddressDeleteHandler(addressID,userID).then((res)=>res.status===200 ? dispatch(removeAddress(addressID)) : setdialogType('defaultAddressError'));
        setLoading(false);
    }
    return (
    <>
    {menuType==='profile' && <div>
        <Dialog open={dialogType!=null} onClose={() => setdialogType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 drop-shadow-custom-xl">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-xl text-center">
                <DialogTitle className="font-bold">Update {dialogType != null && capitalizeFirstLetter(dialogType)}</DialogTitle>
                <Description>Note: updating Profile will not affect current orders.</Description>
                <form onSubmit={(e)=>formSubmitProfile(e,dialogType,userID)} className='flex flex-col gap-2'>
                    <label>Please Enter New {dialogType != null && capitalizeFirstLetter(dialogType)}</label>
                    {dialogType==='name' && <input required id='updateValue' type='text' minLength={4} maxLength={64} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>}
                    {dialogType==='date of birth' && <input required id='updateValue' type='date' className='border-[1px] px-2 w-[150px] rounded-md py-1 mx-auto'/>}
                    {dialogType==='email' && <input id='updateValue' required type='email' minLength={5} maxLength={128} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>}
                    {dialogType==='number' && <input id='updateValue' type='tel' required minLength={10} maxLength={10} className='border-[1px] w-[150px] rounded-md py-1 mx-auto'/>}
                    {dialogType==='password' && <input id='updateValue' type='password' required minLength={8} maxLength={32} className='border-[1px] w-[150px] rounded-md py-1 mx-auto'/>}
                    <div className="flex justify-center gap-4">
                    <button type='button' className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>Cancel</button>
                    <button type='submit' className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' >Submit</button>
                    </div>
                </form>
            </DialogPanel>
            </div>
        </Dialog>
    </div>}
    {(menuType==='address' && dialogType==='address') && <div>
        <Dialog open={dialogType!=null} onClose={() => setdialogType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 drop-shadow-custom-xl">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-xl text-center">
                <DialogTitle className="font-bold">{'Update'} {dialogType != null && capitalizeFirstLetter(dialogType)}</DialogTitle>
                <Description>Note: updating Profile will not affect current orders.</Description>
                <form onSubmit={(e)=>formSubmitAddress(e,dialogType,userID,selectedAddress.addressID)} className='flex flex-col gap-2'>
                    <label>Please Enter New {dialogType != null && capitalizeFirstLetter(dialogType)}</label>
                    <div className='flex flex-col'>
                        <div className='flex gap-3 justify-center'>
                        <input type="radio" id="work" name="addresstype" value="WORK" defaultChecked={selectedAddress.addressType==='WORK'}/>
                        <label htmlFor="work">Work</label>
                        <input type="radio" id="home" name="addresstype" value="HOME" defaultChecked={selectedAddress.addressType==='HOME'}/>
                        <label htmlFor="home">Home</label>
                        </div>
                        
                        <label>Name</label>
                        <input defaultValue={selectedAddress.userName} required id='name' type='text' minLength={4} maxLength={64} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Contact Number</label>
                        <input defaultValue={selectedAddress.contactNumber} required id='contactnumber' type='text' minLength={10} maxLength={10} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Address Line 1</label>
                        <input defaultValue={selectedAddress.addressLine1} required id='addressline1' type='text' minLength={2} maxLength={128} className='border-[1px] w-[300px] rounded-md py-1 mx-auto'/>
                        <label>Address Line 2</label>
                        <input defaultValue={selectedAddress.addressLine2} required id='addressline2' type='text' minLength={2} maxLength={128} className='border-[1px] w-[300px] rounded-md py-1 mx-auto'/>
                        <label>City</label>
                        <input defaultValue={selectedAddress.city}  required id='city' type='text' minLength={2} maxLength={60} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>State</label>
                        <input defaultValue={selectedAddress.state}  required id='state' type='text' minLength={2} maxLength={16} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Country</label>
                        <input defaultValue={selectedAddress.country}  required id='country' type='text' minLength={2} maxLength={56} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Postal Code</label>
                        <input defaultValue={selectedAddress.postalCode}  required id='postalcode' type='number' minLength={6} maxLength={8} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                    </div>
                    <div className="flex justify-center gap-4">
                    <button type='button' className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>Cancel</button>
                    <button type='submit' className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl'>Submit</button>
                    </div>
                </form>
            </DialogPanel>
            </div>
        </Dialog>
    </div>}
    {(menuType==='address' && dialogType==='newaddress') && <div>
        <Dialog open={dialogType!=null} onClose={() => setdialogType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 drop-shadow-custom-xl">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-xl text-center">
                <DialogTitle className="font-bold">Add New Address</DialogTitle>
                <Description>Note: updating Profile will not affect current orders.</Description>
                <form onSubmit={(e)=>formSubmitAddress(e,dialogType,userID)} className='flex flex-col gap-2'>
                    <label>Please Enter New Address</label>
                    <div className='flex flex-col'>
                        <div className='flex gap-3 justify-center'>
                        <input type="radio" id="work" name="addresstype" value="WORK"/>
                        <label htmlFor="work">Work</label>
                        <input type="radio" id="home" name="addresstype" value="HOME" defaultChecked/>
                        <label htmlFor="home">Home</label>
                        </div>
                        <label>Name</label>
                        <input required id='name' type='text' minLength={4} maxLength={64} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Contact Number</label>
                        <input required id='contactnumber' type='text' minLength={10} maxLength={10} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Address Line 1</label>
                        <input required id='addressline1' type='text' minLength={2} maxLength={128} className='border-[1px] w-[300px] rounded-md py-1 mx-auto'/>
                        <label>Address Line 2</label>
                        <input required id='addressline2' type='text' minLength={2} maxLength={128} className='border-[1px] w-[300px] rounded-md py-1 mx-auto'/>
                        <label>City</label>
                        <input  required id='city' type='text' minLength={2} maxLength={60} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>State</label>
                        <input  required id='state' type='text' minLength={2} maxLength={16} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Country</label>
                        <input required id='country' type='text' minLength={2} maxLength={56} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                        <label>Postal Code</label>
                        <input required id='postalcode' type='number' minLength={6} maxLength={8} className='border-[1px] w-[200px] rounded-md py-1 mx-auto'/>
                    </div>
                    <div className="flex justify-center gap-4">
                    <button type='button' className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>Cancel</button>
                    <button type='submit' className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl' >Submit</button>
                    </div>
                </form>
            </DialogPanel>
            </div>
        </Dialog>
    </div>}
    {(menuType==='address' && dialogType==='deleteaddress') && 
    <div>
        <Dialog open={dialogType==='deleteaddress'} onClose={() => setdialogType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border  p-6 rounded-xl text-center drop-shadow-custom-xl bg-red-400 text-white">
                <DialogTitle className="font-bold">Confirmation</DialogTitle>
                <Description>Are you sure, you want to delete the Address?</Description>
                <div className="flex justify-center gap-4">
                <button className='border-[1.5px] text-black hover:bg-red-200 bg-white transition-colors duration-300 hover:text-black py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>Cancel</button>
                    <button className='border-[1.5px] hover:bg-white transition-colors duration-300 hover:text-black py-2 px-6 rounded-xl' onClick={() => {deleteAddress(userID,selectedAddress.addressID);setdialogType(null)}}>Delete</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
    </div>
    }
    <div>
    <Dialog open={dialogType==='defaultAddressError'} onClose={() => setdialogType(null)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border  p-6 rounded-xl text-center drop-shadow-custom-xl bg-red-400 text-white">
            <DialogTitle className="font-bold">Server Error</DialogTitle>
            <Description>We're facing downtime currently. Please try again lator.</Description>
            <div className="flex justify-center gap-4">
            <button className='border-[1.5px] text-black hover:bg-red-200 bg-white transition-colors duration-300 hover:text-black py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>OK</button>
            </div>
        </DialogPanel>
        </div>
    </Dialog>
    </div>

    </>
  )

}

export default SettingDialogs