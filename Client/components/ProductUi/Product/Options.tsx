import React from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
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
interface propType {
    sizes:ProductSize[];
    colors:ProductColor[];
    selectedColor:ProductColor;
    setSelectedColor:any;
    selectedSize:ProductSize;
    setSelectedSize:any;
    colRef:any;
    sizeRef:any;
    cartItemData:any;
}

const Options = ({sizes,colors,selectedColor,setSelectedColor,selectedSize,setSelectedSize,colRef,sizeRef,cartItemData}:propType) => {
    function classNames(...classes:string[]) {
        return classes.filter(Boolean).join(' ')
      }
  return (
    <section aria-labelledby="options-heading">
        <h3 id="options-heading" className="sr-only">
        Product options
        </h3>

        <form>
        {/* Colors */}
        {colors.length > 0 && <fieldset aria-label="Choose a color">
            <legend className="text-sm font-medium text-gray-900">Color</legend>

            <RadioGroup
            onClick={()=>colRef.current=selectedColor.colorname}
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-2 flex items-center space-x-3"
            >
            {colors.map((color) => (
                <Radio
                onClick={()=>cartItemData}
                key={color.colorname}
                value={color}
                aria-label={color.colorname}
                className={({ focus, checked }) =>
                    classNames(
                    color.colorclass,
                    focus && checked ? 'ring ring-offset-1' : '',
                    !focus && checked ? 'ring-2' : '',
                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                    )
                }
                >
                <span
                    aria-hidden="true"
                    className={classNames(
                    color.colorclass,
                    'h-8 w-8 rounded-full border border-black border-opacity-10'
                    )}
                />
                </Radio>
            ))}
            </RadioGroup>
        </fieldset>}

        {/* Sizes */}
        {sizes.length > 0 && <fieldset className="mt-4" aria-label="Choose a size">
            <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-900">Size</div>
            {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Size guide
            </a> */}
            </div>

            <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            className="mt-2 grid grid-cols-4 gap-4"
            >
            {sizes.map((size) => (
                <Radio
                onClick={()=>sizeRef.current=selectedSize.sizename}
                key={size.sizename}
                value={size}
                disabled={!size.instock}
                className={({ focus }) =>
                    classNames(
                    size.instock
                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                    focus ? 'ring-2 ring-indigo-500' : '',
                    'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                    )
                }
                >
                {({ checked, focus }) => (
                    <>
                    <span>{size.sizename}</span>
                    {size.instock ? (
                        <span
                        className={classNames(
                            checked ? 'border-indigo-500' : 'border-transparent',
                            focus ? 'border' : 'border-2',
                            'pointer-events-none absolute -inset-px rounded-md'
                        )}
                        aria-hidden="true"
                        />
                    ) : (
                        <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                        <svg
                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                        >
                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                        </svg>
                        </span>
                    )}
                    </>
                )}
                </Radio>
            ))}
            </RadioGroup>
        </fieldset>}
        </form>
    </section>
  )
}

export default Options