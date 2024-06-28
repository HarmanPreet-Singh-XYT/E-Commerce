import React, { useLayoutEffect, useRef, useState } from 'react'
import Loading from '../Loading';
import articlesDataHandler from '@/app/api/articleData';
import formatDate from '@/app/api/dateConvert';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
interface Article {
  article_id: number;
  category: string;
  title: string;
  imglink: string;
  imgalt: string;
  author: string;
  published_date: string;
  content: string;
}
const BlogPage = () => {
  const [loading, setloading] = useState(true);
  const data = useRef<Article[]>([]);
  const [dialog, setdialog] = useState(false);
  const selectedData = useRef<Article>({article_id:0,category:'',title:'',imglink:'',imgalt:'',author:'',published_date:'',content:''});
  async function fetchData(){
    const response = await articlesDataHandler();
    switch (response.status) {
      case 200:
        data.current = response.data.data;
        setloading(false);
        break;
      default:
        break;
    }
  }
  useLayoutEffect(() => {
    fetchData();
  }, [])
  return (
    <>
    <Dialog open={dialog} onClose={() => setdialog(false)} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-5xl space-y-4 overflow-y-auto max-h-screen border bg-white p-8 rounded-xl">
              <DialogTitle className="font-bold text-center text-2xl">{selectedData.current.title}</DialogTitle>
              <img src={selectedData.current.imglink} className='mx-auto rounded-xl font-semibold' width={720} alt={selectedData.current.imgalt}/>
              <p className='font-medium text-end'>By <span className='rounded-xl px-2 py-2 bg-salmon text-white'>{selectedData.current.author}</span></p>
              <Description className='text-center bg-salmon text-white rounded-xl px-2 py-2 tracking-wider'>{selectedData.current.content}</Description>
              <div className="flex justify-center gap-4">
              <button className='border-[1.5px] hover:bg-black transition-colors duration-300 hover:text-white py-2 px-6 rounded-xl' onClick={() => setdialog(false)}>Close</button>
              </div>
          </DialogPanel>
          </div>
      </Dialog>
    <div className='max-w-[85%] h-auto gap-5 flex justify-center mt-10 mb-10 relative'>
      {loading && <div className='w-full h-[300px]'>{loading && <div className='absolute left-0 right-0 z-50'><Loading/></div>}</div> }
      <div className='flex gap-5 relative flex-wrap'>
          {data.current.map((each, index) => (
            <div key={index} className='flex flex-col gap-5 min-w-[300px] snap-center'>
                <img width={300} onClick={()=>{selectedData.current=each;setdialog(true)}} className='rounded-xl cursor-pointer' src={each.imglink} alt={each.title} />
              <div className='flex flex-col max-w-[300px]'>
                <p className='text-salmon'>{each.category}</p>
                <p className='font-semibold tracking-normal text-lg mb-2 cursor-pointer' onClick={()=>{selectedData.current=each;setdialog(true)}}>{each.title}</p>
                <p className='text-silver tracking-wider'>By <span className='text-davysilver'>{each.author}</span> / {formatDate(each.published_date)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  )
}

export default BlogPage