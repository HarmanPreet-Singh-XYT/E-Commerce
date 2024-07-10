import React,{useState,useLayoutEffect,useRef} from 'react'
import Loading from '../Loading';
import ProductDialogs from '../ProductUi/ProductDialogs';
import ReviewSection from '../ProductUi/Product/ReviewSection';
import { useParams } from 'next/navigation';
import { reviewGetHandler } from '@/app/api/reviews';
import ProductNotFound from '../ProductUi/Product/ProductNotFound';
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
const AllReview = () => {
    const found = useRef<boolean>(true);
    const [selectedRating, setselectedRating] = useState<number>(1);
    const dataVar = useRef<Review[]>([]);
    const [selectedReview, setselectedReview] = useState<null|Review>(null)
    const data = dataVar.current;
    const params = useParams<{ productID: string }>()
    const [dataChecked, setdataChecked] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false);
    const [dialogType, setdialogType] = useState<null|string>(null)
    async function dataRequest(){
        const response = await reviewGetHandler({productID:params.productID})
        switch (response.status) {
          case 200:
            dataVar.current = response.data.data;
            setdataChecked(true);
            setloading(false);
            break;
          case 500:
            found.current = false;
            setdataChecked(true);
            setloading(false);
            break;
          }
    }
      async function dataInitializer(){
        !dataChecked && await dataRequest();
      }
      useLayoutEffect(() => {
        dataInitializer();
      }, [dataChecked])
  return (
    <>
    {loading && <div className='w-full h-[500px]'>{loading && <div className='absolute left-0 right-0 top-[30%] z-50'><Loading/></div>}</div> }
    {!dataChecked && <Loading/>}
    <ProductDialogs dialogType={dialogType} setdialogType={setdialogType} setloading={setloading} productID={parseInt(params.productID)} selectedReview={selectedReview} selectedRating={selectedRating} setselectedRating={setselectedRating}/>
    {(dataChecked && data!=undefined) && <>{found.current && <ReviewSection data={data} setdialogType={setdialogType} setloading={setloading} reviewCount={data.length} setselectedReview={setselectedReview}  setselectedRating={setselectedRating} allReview={true} productID={parseInt(params.productID)}/>}</>}
    {(dataChecked && !found.current) && <ProductNotFound/>}
    </>
  )
}

export default AllReview;