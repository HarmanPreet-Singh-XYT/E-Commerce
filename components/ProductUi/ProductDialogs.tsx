import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { reviewCreateHandler, reviewDeleteHandler, reviewEditHandler } from '@/app/api/reviews';
import { useAppSelector } from '@/app/hooks';
import WarningDialogs from './Product/WarningDialogs';
interface Review {
  reviewid: number;
  userid: number;
  rating: number;
  title:string;
  comment: string;
  username: string;
  createdat: string;
}
  
  // Interface for images in imgcollection
interface ProductImage {
  imageid: number;
  imglink: string;
  imgalt: string;
}

// Interface for sizes
interface ProductSize {
  sizeid: number;
  sizename: string;
  instock: boolean;
}

// Interface for colors
interface ProductColor {
  colorid: number;
  colorname: string;
  colorclass: string;
}

// Interface for categories
interface Categories {
  subcategory: string;
  maincategory: string;
}

// Main interface for the product
interface Product {
  productid:number,
  title: string;
  description: string;
  stock: number;
  discountedprice: string;
  price: string;
  stars: number;
  seller: string;
  reviewcount: number;
  categories: Categories;
  imglink: string;
  imgalt: string;
  imgcollection: ProductImage[] | [];
  colors: ProductColor[] | [];
  sizes: ProductSize[] | [];
  reviews: Review[] | [];
}
const ProductDialogs = ({dialogType,setdialogType,setloading,productID,selectedReview,selectedRating,setselectedRating}:{dialogType:string | null,setdialogType:React.Dispatch<React.SetStateAction<string | null>>,setloading:React.Dispatch<React.SetStateAction<boolean>>,productID:number,selectedReview:Review|null,selectedRating:number,setselectedRating:React.Dispatch<React.SetStateAction<number>>}) => {
    const [stars, setstars] = useState(5);
    const defaultAccount = useAppSelector((state) => state.userState.defaultAccount);
    const [starWarning, setstarWarning] = useState(false);
    const [WarningType, setWarningType] = useState<string | null>(null);
    async function createForm(e:any){
        e.preventDefault();
        setloading(true);
        if(stars<1) {
            setstarWarning(true);
            return;
        }
        const values = {
            title:e.target.title.value,
            description:e.target.description.value,
        }
        const response = await reviewCreateHandler({userID:defaultAccount.userID,productID,rating:stars,title:values.title,comment:values.description})
        switch (response.status) {
            case 200:
                setdialogType(null);
                setloading(false);
                setWarningType('successful');
                break;
            case 205:
                setdialogType(null);
                setloading(false);
                setWarningType('exists');
                break;
            case 210:
                setdialogType(null);
                setloading(false);
                setWarningType('noOrder');
                break;
            case 500:
                setdialogType(null);
                setloading(false);
                setWarningType('error');
                break;
        }
    }
    async function editForm(e:any){
        e.preventDefault();
        setloading(true);
        const values = {
            title:e.target.title.value,
            description:e.target.description.value,
        }
        if(selectedReview != null){
            const response = await reviewEditHandler({reviewID:selectedReview.reviewid, userID:defaultAccount.userID, productID, rating:selectedRating, title:values.title, comment:values.description})
            switch (response.status) {
                case 200:
                    setdialogType(null);
                    setloading(false);
                    setWarningType('successful');
                    break;
                case 205:
                    setdialogType(null);
                    setloading(false);
                    setWarningType('notExists');
                    break;
                case 500:
                    setdialogType(null);
                    setloading(false);
                    setWarningType('error');
                    break;
            }
        }else{
            setdialogType(null);
            setloading(false);
            setWarningType('error');
        }
        
    }
    async function deleteForm(e:any){
        setloading(true);
        if(selectedReview != null){
            const response = await reviewDeleteHandler({reviewID:selectedReview.reviewid,userID:defaultAccount.userID,productID})
            switch (response.status) {
                case 200:
                    setdialogType(null);
                    setloading(false);
                    setWarningType('deleted');
                    break;
                case 205:
                    setdialogType(null);
                    setloading(false);
                    setWarningType('notExists');
                    break;
                case 500:
                    setdialogType(null);
                    setloading(false);
                    setWarningType('error');
                    break;
            }
        }else{
            setdialogType(null);
            setloading(false);
            setWarningType('error');
        }
        
    }
    return (
    <>
    <WarningDialogs WarningType={WarningType} setWarningType={setWarningType} setloading={setloading}/>
    <div>
        <Dialog open={dialogType==='create'} onClose={() => setdialogType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 drop-shadow-custom-xl">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-xl text-center">
                <DialogTitle className="font-bold">Write a Review</DialogTitle>
                <Description>Share your Review</Description>
                <form onSubmit={createForm} className='flex flex-col gap-2'>
                    <div className='flex flex-col items-center'>
                        <label>Stars</label>
                        {starWarning && <p className='text-red-500'>Rate Atleast 1 Star to Proceed</p>}
                        <ReactStars
                            count={5}
                            onChange={(new_rating)=>setstars(new_rating)}
                            value={stars}
                            size={50}
                            edit={true}
                            color2={'#ffd700'} />
                        <label>Title</label>
                        <input placeholder='Review Title in 50 characters' required id='title' type='text' minLength={2} maxLength={50} className='border-[1px] w-[300px] rounded-md py-1 mx-auto'/>
                        <label>Description</label>
                        <textarea placeholder='Review Description in 500 characters' required id="description" minLength={2} maxLength={1500} rows={4} cols={40} className='border-[1px] rounded-md py-1 mx-auto'>
                        </textarea>
                    </div>
                    <div className="flex justify-center gap-4">
                    <button type='button' className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>Cancel</button>
                    <button type='submit' className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl'>Submit</button>
                    </div>
                </form>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={dialogType==='edit'} onClose={() => setdialogType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 drop-shadow-custom-xl">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-8 rounded-xl text-center">
                <DialogTitle className="font-bold">Edit Review</DialogTitle>
                <Description>Share your Review</Description>
                <form onSubmit={editForm} className='flex flex-col gap-2'>
                    <div className='flex flex-col items-center'>
                        <label>Stars</label>
                        {starWarning && <p className='text-red-500'>Rate Atleast 1 Star to Proceed</p>}
                        <ReactStars
                            count={5}
                            onChange={(new_rating)=>setselectedRating(new_rating)}
                            value={selectedRating}
                            size={50}
                            edit={true}
                            color2={'#ffd700'} />
                        <label>Title</label>
                        <input defaultValue={selectedReview!=null ? selectedReview.title : ''} placeholder='Review Title in 50 characters' required id='title' type='text' minLength={2} maxLength={50} className='border-[1px] w-[300px] rounded-md py-1 mx-auto'/>
                        <label>Description</label>
                        <textarea defaultValue={selectedReview!=null ? selectedReview.comment : ''} placeholder='Review Description in 500 characters' required id="description" minLength={2} maxLength={1500} rows={4} cols={40} className='border-[1px] rounded-md py-1 mx-auto'>
                        </textarea>
                    </div>
                    <div className="flex justify-center gap-4">
                    <button type='button' className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>Cancel</button>
                    <button type='submit' className='bg-primary-600 text-white py-2 hover:bg-primary-800 transition-colors duration-300 px-8 rounded-xl'>Submit</button>
                    </div>
                </form>
            </DialogPanel>
            </div>
        </Dialog>
        <Dialog open={dialogType==='delete'} onClose={() => setdialogType(null)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border  p-6 rounded-xl text-center drop-shadow-custom-xl bg-red-400 text-white">
                <DialogTitle className="font-bold">Confirmation</DialogTitle>
                <Description>Are you sure, you want to delete the Review?</Description>
                <div className="flex justify-center gap-4">
                <button className='border-[1.5px] text-black hover:bg-red-200 bg-white transition-colors duration-300 hover:text-black py-2 px-6 rounded-xl' onClick={() => setdialogType(null)}>Cancel</button>
                    <button className='border-[1.5px] hover:bg-white transition-colors duration-300 hover:text-black py-2 px-6 rounded-xl' onClick={deleteForm}>Delete</button>
                </div>
            </DialogPanel>
            </div>
        </Dialog>
    </div>
    </>
  )
}

export default ProductDialogs