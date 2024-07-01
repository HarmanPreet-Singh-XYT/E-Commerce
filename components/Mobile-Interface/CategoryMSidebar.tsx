import React,{useState,useEffect} from 'react'
import CategorySidebar from '../Categories/CategorySidebar';
import FilterSidebar from '../FilterSidebar';
interface categories{
  categoryid: number;
  name: string;
};
interface propsTypes{
  isMenu:boolean;
  setIsMenu:React.Dispatch<React.SetStateAction<boolean>>;
  categoriesData:categories[];
  sidebarLoading:boolean;
  selectedCategoryIndex:number;
  setselectedCategoryIndex:React.Dispatch<React.SetStateAction<number>>;
  dataChecked:boolean;
  filterSubmit:(e:any)=>void;
  toggleClear:()=>void;
}
const CategoryMSidebar = ({isMenu,setIsMenu,categoriesData,sidebarLoading,selectedCategoryIndex,setselectedCategoryIndex,dataChecked,filterSubmit,toggleClear}:propsTypes) => {
  const [overlayColor, setOverlayColor] = useState('rgba(255, 255, 255, 0)');
  useEffect(() => {
    if (isMenu) {
        // After 100ms, change the overlay color to black
        const timer = setTimeout(() => {
            setOverlayColor('rgba(0, 0, 0, 0.5)'); // Change color to semi-transparent black
        }, 100);

        return () => clearTimeout(timer);
    } else {
        // Reset the overlay color to transparent white when sidebar is closed
        setOverlayColor('rgba(255, 255, 255, 0)');
    }
  }, [isMenu]);
  return (
    <>
        {isMenu && (
                <div className="fixed top-0 left-0 h-full w-full z-50">
                    <div 
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundColor: overlayColor,
                            transition: 'background-color 0.3s ease'
                        }}
                        onClick={()=>setIsMenu(false)}
                    ></div>
                </div>
            )}
        <div className={`flex flex-col p-4 items-center fixed w-[320px] bg-white h-full left-0 z-50 gap-5 lg:hidden overflow-y-auto transform transition-transform duration-500 ease-in-out ${isMenu ? 'translate-x-0' : '-translate-x-full'}`}>
            <CategorySidebar categories={categoriesData} loading={sidebarLoading} selectedCategoryIndex={selectedCategoryIndex} setselectedCategoryIndex={setselectedCategoryIndex} mobileMode={true}/>
            <FilterSidebar dataChecked={dataChecked} filterSubmit={filterSubmit} toggleClear={toggleClear} mobileMode={true}/>
        </div>
      </>
  )
}

export default CategoryMSidebar