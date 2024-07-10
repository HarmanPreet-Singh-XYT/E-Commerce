import React,{ useEffect, useLayoutEffect, useRef, useState } from 'react'
import Stars from './Stars'
import { ShoppingCartIcon, ReceiptRefundIcon, HeartIcon, CurrencyRupeeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useAppDispatch,useAppSelector } from '@/app/hooks'
import { addItemToCart,addItemToWishlist } from '@/features/UIUpdates/CartWishlist'
import ReviewSection from './Product/ReviewSection'
import ProductNotFound from './Product/ProductNotFound'
import productDataHandler from '@/app/api/product'
import { useParams, useRouter } from 'next/navigation'
import Loading from '../Loading'
import Options from './Product/Options'
import { cartAddHandler,wishlistAddHandler } from '@/app/api/itemLists'
import { useApp } from '@/Helpers/AccountDialog'
import ProductDialogs from './ProductDialogs'
import Link from 'next/link'
// Interface for individual reviews
interface Review {
  reviewid: number;
  userid: number;
  rating: number;
  title:string;
  comment: string;
  username: string;
  createdat: string;
  productstars:number;
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
const defaultData = {
  productid:1,
  title: '',
  description: '',
  stock: 0,
  discountedprice: '',
  price: '',
  stars: 0,
  seller: '',
  reviewcount: 0,
  categories: {subcategory:'',maincategory:''},
  imglink: '',
  imgalt: '',
  imgcollection: [],
  colors: [],
  sizes: [],
  reviews: [],
}
const IDGenerator = ()=>{
  const ID = Math.round(Math.random() * 1000 * 1000 * 100);
  return ID;
}
const ProductPage = () => {
  const { appState } = useApp();
  const router = useRouter();
  const isLogged = appState.loggedIn;
    const [btnLoading, setbtnLoading] = useState(false);
    const ref = useRef<any>(null);
    const colRef = useRef<string>('Default');
    const sizeRef = useRef<string>('Default');
    const totalQuantity = useRef<number>(1);
    const found = useRef<boolean>(true);
    const [selectedRating, setselectedRating] = useState<number>(1);
    const dataVar = useRef<Product>(defaultData);
    const [selectedReview, setselectedReview] = useState<null|Review>(null)
    const data = dataVar.current;
    const [selectedColor, setSelectedColor] = useState<ProductColor>({colorid:0,colorname:'Default',colorclass:'col_default'});
    const [selectedSize, setSelectedSize] = useState<ProductSize>({sizeid:0,sizename:'Default',instock:true});
    const [selectedImage, setselectedImage] = useState({imgLink:'',imgAlt:''});
    const [quantity, setQuantity] = useState<number>(1);
    const params = useParams<{ productID: string }>()
    const [dataChecked, setdataChecked] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false);
    const [dialogType, setdialogType] = useState<null|string>(null)
    const dispatch = useAppDispatch();
    const defaultAccount = useAppSelector((state) => state.userState.defaultAccount)
    const listID = {cartItemID:IDGenerator(),wishlistItemID:IDGenerator()};
    let cartItemData = {
      cartItemID:listID.cartItemID,
      productID:data.productid,
      productImg:data.imglink,
      productAlt:data.imgalt,
      productName:data.title,
      productPrice:parseInt(data.discountedprice),
      productColor:colRef.current,
      productSize:sizeRef.current,
      quantity: quantity,
    };
    let wishlistItem = {
      wishlistItemID:listID.wishlistItemID,
      productID:data.productid,
      productImg:data.imglink,
      productAlt:data.imgalt,
      productName:data.title,
      productPrice:parseInt(data.discountedprice),
    };
    async function dataRequest(){
      const response = await productDataHandler({productID:params.productID});
      
      switch (response.status) {
        case 200:
        dataVar.current = response.data.data;
        if(response.data.data != undefined) totalQuantity.current=response.data.data.stock;
        setdataChecked(true);
        break;
        case 500:
          found.current = false;
          setdataChecked(true);
          break;
        }
      }
    async function setUpData(){
      if(data != undefined){
        data.colors.length > 0 && setSelectedColor(data.colors[0]);
        data.sizes.length > 0 && setSelectedSize(data.sizes[0]);
        setselectedImage({imgLink:data.imglink,imgAlt:data.imgalt})
        if(data.sizes.length > 0 && data.colors.length > 0){
          cartItemData.productColor = data.colors[0].colorname;
          cartItemData.productSize = data.sizes[0].sizename;
        }
      }
    };
    async function dataInitializer(){
      !dataChecked && await dataRequest();
      dataChecked && await setUpData();
    }
    useLayoutEffect(() => {
      dataInitializer();
    }, [dataChecked])
    
    const changeValue = (action:string)=>{
      switch (action) {
        case 'increase':
          (totalQuantity.current > quantity && 9 > quantity) && setQuantity(quantity+1);
          break;
        case 'decrease':
          quantity>1 && setQuantity(quantity-1);
          break;
      }
    }
    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    function percentageDifference(a:number, b:number) {
      const difference = Math.abs(a - b);
      const average = (a + b) / 2;
      const percentageDiff = (difference / average) * 100;
      return Math.round(percentageDiff);
    }
    async function itemStateUpdate(key:string){
      setbtnLoading(true);
      switch (key) {
        case 'cart':
        isLogged && await cartAddHandler({cartItemID:listID.cartItemID,userID:defaultAccount.userID,productID:data.productid,productPrice:parseInt(data.discountedprice),colorID:selectedColor.colorid,sizeID:selectedSize.sizeid,quantity})
        dispatch(addItemToCart(cartItemData));
        setbtnLoading(false)
          break;
        case 'wishlist':
        isLogged && await wishlistAddHandler({wishlistItemID:listID.wishlistItemID,userID:defaultAccount.userID,productID:data.productid})
        dispatch(addItemToWishlist(wishlistItem));
        setbtnLoading(false);
          break;
      }
    }
    function categoryLink(maincategory:string,category:string){
      const splitCat = category.split(' ').join('-');
      return `/sub-category/${maincategory}/${splitCat}`
    }
    return (
      <>
      {loading && <div className='w-full h-[500px]'>{loading && <div className='absolute left-0 right-0 top-[30%] z-50'><Loading/></div>}</div> }
      <ProductDialogs dialogType={dialogType} setdialogType={setdialogType} setloading={setloading} productID={data.productid} selectedReview={selectedReview} selectedRating={selectedRating} setselectedRating={setselectedRating}/>
    <div className='flex flex-col gap-5 border-t-[1px] w-[100%]'>
      {!dataChecked && <Loading/>}
      {(dataChecked && data!=undefined) && <>{found.current && <>
      <div className='flex items-center flex-col justify-center'>
            <div className='w-[80%] mb-5 mt-5'>
                <p>{data.categories.maincategory} {'>'} {data.categories.subcategory}</p>
            </div>
        </div>
        <div className='flex justify-center gap-10 flex-col items-center lg:flex-row'>
            <div className='flex img-wrapper flex-col gap-5 w-[90%] md:w-[60%] px-2 lg:w-[600px] lg:h-[600px] rounded-xl items-center'>
                <img className='border-[1px] rounded-xl w-[100%] lg:w-[600px] lg:h-[600px] hover-zoom' src={selectedImage.imgLink} alt={selectedImage.imgAlt}/>
                <div className='flex gap-5 justify-center'>
                {data.imgcollection.map((each, index) => (
                    <img 
                        key={index}
                        src={each.imglink}
                        alt={each.imgalt}
                        height={75}
                        width={75}
                        className="rounded-md border-[1px] hover:drop-shadow-custom-xl mb-6"
                        onClick={() => {
                            const imageDetails = { imgLink: each.imglink, imgAlt: each.imgalt };
                            setselectedImage(imageDetails);
                        }}
                    />
                ))}
                </div>
            </div>
            <div className='flex flex-col gap-5 border-[1px] py-10 px-10 max-w-[90%] rounded-xl lg:max-w-[50%] w-auto'>
                <div className='border-b-[1px] pb-5 mb-2'>
                    <p className='text-3xl max-w-[600px] font-medium'>{data.title}</p>
                    <p className='text-silver'>By {data.seller}</p>
                    <div className="flex items-center">
                        <p className='mr-1 text-sm'>{data.stars}</p>
                        <Stars stars={data.stars}/>
                        <button onClick={handleClick} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {data.reviewcount} reviews
                        </button>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <p className='font-bold text-3xl'>$ {data.discountedprice}</p>
                    <p className='line-through'>$ {data.price}</p>
                    <p className='text-yellow-500'>{percentageDifference(parseInt(data.discountedprice),parseInt(data.price))}% off</p>
                </div>
                <p><span className='font-semibold'>In stock</span>: Dispatch in 5 working days</p>
                <div className='flex gap-10 items-center'>
                    <p>Quantity</p>
                    <div className='flex items-center justify-center rounded-xl bg-gray-100'>
                        <button onClick={()=>changeValue('decrease')} className='w-[50px] text-4xl bg-gray-100 rounded-l-lg'>-</button>
                        <p className='bg-gray-100 w-[20px]'>{quantity}</p>
                        <button onClick={()=>changeValue('increase')} className='w-[40px] text-4xl bg-gray-100 rounded-r-lg'>+</button>
                    </div>
                    
                </div>
                {/*  */}
                  <Options sizes={data.sizes} colors={data.colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} selectedSize={selectedSize} setSelectedSize={setSelectedSize} colRef={colRef} sizeRef={sizeRef} cartItemData={cartItemData}/>
                {/*  */}
                <div className='flex gap-5'>
                    <button disabled={btnLoading} onClick={()=>itemStateUpdate('cart')} className='w-[200px] h-[50px] bg-yellow-400 rounded-lg hover:border-yellow-400 hover:border-2 hover:bg-white transition-colors duration-300 font-semibold'>
                    {btnLoading ? <div className="relative"><div className=''>
        <div className='drop-shadow-custom-xl rounded-xl w-[120px] mx-auto'>
            <div className="border-gray-300 my-auto mx-auto h-8 w-8 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
        
    </div></div> : "ADD TO CART"}
                      </button>
                    <button onClick={()=>router.push(`/checkout/${data.productid}/${selectedSize.sizeid}/${selectedColor.colorid}`)} className='w-[200px] h-[50px] rounded-lg font-semibold border-yellow-400 hover:bg-yellow-400 transition-colors duration-300 border-[2px]'>BUY NOW</button>
                </div>
                <div className='flex gap-10 text-silver text-sm border-b-[1px] pb-10'>
                    <button disabled={btnLoading} onClick={()=>itemStateUpdate('wishlist')} className='flex hover:text-yellow-400 transition-colors duration-300 items-center gap-1 cursor-pointer'>
                        <HeartIcon width={25}/>
                        <div>{btnLoading ? <div className="relative"><div className=''>
                        <div className='drop-shadow-custom-xl rounded-xl w-[120px] mx-auto'>
                            <div className="border-gray-300 my-auto mx-auto h-8 w-8 animate-spin rounded-full border-8 border-t-blue-600" />
                        </div>
                        
                      </div></div> : "Add to wishlist"}</div>
                    </button>
                    <Link href={categoryLink(data.categories.maincategory,data.categories.subcategory)} className='flex hover:text-yellow-400 transition-colors duration-300 items-center gap-1 cursor-pointer'>
                        <GlobeAltIcon width={25}/>
                        <p>Find alternate products</p>
                    </Link>
                </div>
                {/* <p className='font-semibold mt-5'>Eligible for Delivery?</p>
                <div className='flex items-center gap-10 text-sm'>
                    <input className='bg-gray-100 w-[200px] h-[35px] rounded-md' type='number'/>
                    <p>The product is deliverable to this pincode</p>
                </div> */}
                <div className='flex gap-4 flex-wrap mb-10 border-b-[1px] pb-5 text-sm'>
                    <div className='flex gap-2'>
                        <div className='bg-yellow-300 rounded-full px-2 py-2'>
                        <ShoppingCartIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Get it by Thu, 20 Aug</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='bg-yellow-300 rounded-full px-2 py-2'>
                        <ReceiptRefundIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Easy returns available</p>
                    </div>
                    <div className='flex gap-1'>
                        <div className='bg-yellow-300 rounded-full px-2 py-2'>
                        <CurrencyRupeeIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Cash on delivery available</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='font-semibold'>Description:</p>
                    <p className='w-[600px]'>{data.description}</p>
                </div>
                
            </div>
        </div>
        <div ref={ref}>
        <ReviewSection data={data.reviews} setdialogType={setdialogType} setloading={setloading} reviewCount={data.reviewcount} setselectedReview={setselectedReview}  setselectedRating={setselectedRating} allReview={false} productID={data.productid}/>
        </div></>
        }</>}
        {(dataChecked && !found.current) && <ProductNotFound/>}
    </div>
    </>
  )
}

export default ProductPage