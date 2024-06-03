const topCat = [{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg',
    name:"DRESS & FROCK",
    quantity:53,
    showLink:""
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/coat.svg',
    name:"WINTER WEAR",
    quantity:58,
    showLink:""
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg ',
    name:"GLASSES & LENS",
    quantity:32,
    showLink:""
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shorts.svg',
    name:"SHORTS & JEANS",
    quantity:42,
    showLink:""
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/tee.svg',
    name:"T-SHIRTS",
    quantity:12,
    showLink:""
},
{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/jacket.svg',
    name:"JACKET",
    quantity:63,
    showLink:""
},
{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/watch.svg',
    name:"WATCH",
    quantity:42,
    showLink:""
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/hat.svg',
    name:"HAT & CAPS",
    quantity:29,
    showLink:""
}];
const navBtns = [
    {name:"Home",isExtendable:false,extendables:[]},
    {name:"Categories",isExtendable:true,extendables:[],catLink:''},
    {name:"Men's",isExtendable:true,extendables:[
        {
          title: "Shirt",
          link: "",
        },
        {
          title: "Shorts & Jeans",
          link: "",
        },
        {
          title: "Safety Shoes",
          link: "",
        },
        {
          title: "Wallet",
          link: "",
        },
      ],catLink:''},
    {name:"Women's",isExtendable:true,extendables:[
        {
            title: "Dress & Frock", // Combined Dress and Frock
            link: "",
          },
          {
            title: "Earrings",
            link: "",
          },
          {
            title: "Necklace",
            link:"",
          },
          {
            title: "Makeup Kit",
            link: "",
          },
    ],catLink:''},
    {name:"Jewelry",isExtendable:true,extendables:[
        {
            title: "Necklace",
            link: "",
          },
          {
            title: "Earrings",
            link: "",
          },
          {
            title: "Couple Rings",
            link: "",
          },
          {
            title: "Bracelets",
            link: "",
          },
    ],catLink:''},
    {name:"Perfume",isExtendable:true,extendables:[
          {
            title: "Clothes Perfume",
            link: "",
          },
          {
            title: "Deodorant",
            link: "",
          },
          {
            title: "Flower Fragrance",
            link: "",
          },
          {
            title: "Air Freshener",
            link: "",
          },
    ],catLink:''},
    {name:"Blog",isExtendable:false,extendables:[],catLink:''},
    {name:"Hot Offers",isExtendable:false,extendables:[],catLink:''}
];
const leftStatus = [
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg",
        title:"Clothes",
        links:[
            {
                title:"Shirt",
                link:"",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shoes.svg",
        title:"Footwear",
        links:[
            {
                title:"Shirt",
                link:"",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/jewelry.svg",
        title:"Jewelry",
        links:[
            {
                title:"Shirt",
                link:"",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/perfume.svg",
        title:"Perfume",
        links:[
            {
                title:"Shirt",
                link:"",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/cosmetics.svg",
        title:"Cosmetics",
        links:[
            {
                title:"Shirt",
                link:"",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg",
        title:"Glasses",
        links:[
            {
                title:"Shirt",
                link:"",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/bag.svg",
        title:"Bags",
        links:[
            {
                title:"Shirt",
                link:"",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"",
                quantity:50,
            }
        ]
    }
]
const bestSell = [
    {
        title:"Baby Fabric Shoes",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/1.jpg",
        basePrice:5.00,
        discountPrice:4.00,
        ratingCount:56,
        stars:5,
        productLink:"",
    },
    {
        title:"Men's Hoodies T-Shirt",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/2.jpg",
        basePrice:5.00,
        discountPrice:4.00,
        ratingCount:32,
        stars:4.5,
        productLink:"",
    },
    {
        title:"Girls T-Shirt",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/3.jpg",
        basePrice:5.00,
        discountPrice:4.00,
        ratingCount:65,
        stars:4.5,
        productLink:"",
    },
    {
        title:"Woolen Hat For Men",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/4.jpg",
        basePrice:5.00,
        discountPrice:4.00,
        ratingCount:123,
        stars:5,
        productLink:"",
    }
];
const trendings = {
    newArrivals:{
        primary:[
            {
            
                title:"Relaxed Short Full Sleeves",
                category:"Clothes",
                imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg",
                productLink:"",
                catLink:"",
                discountPrice:12.00,
                basePrice:45.00,
            },
            {
                title: "Girls Pink Embro Design Top",
                category: "Clothes",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-2.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 9.00,
                basePrice: 61.00
            },
            {
                title: "Black Floral Wrap Midi Skirt",
                category: "Clothes",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-3.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 25.00,
                basePrice: 76.00
            },
            {
                title: "Pure Garment Dyed Cotton Shirt",
                category: "Mens Fashion",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 31.00,
                basePrice: 68.00
            },
        ],
        secondary:[
            {
                title: "MEN Yarn Fleece Full-Zip Jacket",
                category: "Winter Wear",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-5.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 11.00,
                basePrice: 61.00
            },
            {
                title: "Mens Winter Leathers Jackets",
                category: "Winter Wear",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 20.00,
                basePrice: 32.00
            },
            {
                title: "Mens Winter Leathers Jackets",
                category: "Jackets",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-3.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 25.00,
                basePrice: 50.00
            },
            {
                title: "Better Basics French Terry Sweatshorts",
                category: "Shorts",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shorts-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 10.00,
                basePrice: 20.00
            }
        ]
    },
    trending:{
        primary:[
            {
                title: "Running & Trekking Shoes - White",
                category: "Sports",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 15.00,
                basePrice: 49.00
            },
            {
                title: "Trekking & Running Shoes - Black",
                category: "Sports",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-2.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 36.00,
                basePrice: 78.00
            },
            {
                title: "Womens Party Wear Shoes",
                category: "Party Wear",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/party-wear-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 42.00,
                basePrice: 94.00
            },
            {
                title: "Sports Claw Women's Shoes",
                category: "Sports",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-3.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 65.00,
                basePrice: 54.00
            },
        ],
        secondary:[
            {
                title: "Air Trekking Shoes - White",
                category: "Sports",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-6.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 55.00,
                basePrice: 52.00
            },
            {
                title: "Boot With Suede Detail",
                category: "Boots",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-3.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 30.00,
                basePrice: 20.00
            },
            {
                title: "Men's Leather Formal Wear Shoes",
                category: "Formal",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 78.00,
                basePrice: 56.00
            },
            {
                title: "Casual Men's Brown Shoes",
                category: "Casual",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-2.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 55.00,
                basePrice: 50.00
            }
        ],
    },
    topRated:{
        primary:[
            {
                title: "Pocket Watch Leather Pouch",
                category: "Watches",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-3.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 34.00,
                basePrice: 50.00
            },
            {
                title: "Silver Deer Heart Necklace",
                category: "Jewellery",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-3.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 30.00,
                basePrice: 84.00
            },
            {
                title: "Titan 100 Ml Womens Perfume",
                category: "Perfume",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/perfume.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 10.00,
                basePrice: 42.00
            },
            {
                title: "Men's Leather Reversible Belt",
                category: "Belt",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/belt.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 10.00,
                basePrice: 24.00
            },
        ],
        secondary:[
            {
                title: "Platinum Zircon Classic Ring",
                category: "Jewellery",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-2.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 65.00,
                basePrice: 62.00
            },
            {
                title: "Smart Watche Vital Plus",
                category: "Watches",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 78.00,
                basePrice: 56.00
            },
            {
                title: "Shampoo Conditioner Packs",
                category: "Cosmetics",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 30.00,
                basePrice: 20.00
            },
            {
                title: "Rose Gold Peacock Earrings",
                category: "Jewellery",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-1.jpg",
                productLink:"",
                catLink: "",
                discountPrice: 30.00,
                basePrice: 20.00
            }
        ],
    }
}
const footerCategories = [
    {
        name: 'FASHION',
        subcategories: [
            { name: 'T-Shirt', subcatLink: '' },
            { name: 'Shirts', subcatLink: '' },
            { name: 'Shorts & Jeans', subcatLink: '' },
            { name: 'Jacket', subcatLink: '' },
            { name: 'Dress & Frock', subcatLink: '' },
            { name: 'Innerwear', subcatLink: '' },
            { name: 'Hosiery', subcatLink: '' }
        ]
    },
    {
        name: 'FOOTWEAR',
        subcategories: [
            { name: 'Sport', subcatLink: '' },
            { name: 'Formal', subcatLink: '' },
            { name: 'Boots', subcatLink: '' },
            { name: 'Casual', subcatLink: '' },
            { name: 'Cowboy Shoes', subcatLink: '' },
            { name: 'Safety Shoes', subcatLink: '' },
            { name: 'Party Wear Shoes', subcatLink: '' },
            { name: 'Branded', subcatLink: '' },
            { name: 'Firstcopy', subcatLink: '' },
            { name: 'Long Shoes', subcatLink: '' }
        ]
    },
    {
        name: 'JEWELLERY',
        subcategories: [
            { name: 'Necklace', subcatLink: '' },
            { name: 'Earrings', subcatLink: '' },
            { name: 'Couple Rings', subcatLink: '' },
            { name: 'Pendants', subcatLink: '' },
            { name: 'Crystal', subcatLink: '' },
            { name: 'Bangles', subcatLink: '' },
            { name: 'Bracelets', subcatLink: '' },
            { name: 'Nosepin', subcatLink: '' },
            { name: 'Chain', subcatLink: '' },
            { name: 'Earrings', subcatLink: '' },
            { name: 'Couple Rings', subcatLink: '' }
        ]
    },
    {
        name: 'COSMETICS',
        subcategories: [
            { name: 'Shampoo', subcatLink: '' },
            { name: 'Bodywash', subcatLink: '' },
            { name: 'Facewash', subcatLink: '' },
            { name: 'Makeup Kit', subcatLink: '' },
            { name: 'Liner', subcatLink: '' },
            { name: 'Lipstick', subcatLink: '' },
            { name: 'Perfume', subcatLink: '' },
            { name: 'Body Soap', subcatLink: '' },
            { name: 'Scrub', subcatLink: '' },
            { name: 'Hair Gel', subcatLink: '' },
            { name: 'Hair Colors', subcatLink: '' },
            { name: 'Hair Dye', subcatLink: '' },
            { name: 'Sunscreen', subcatLink: '' },
            { name: 'Skin Lotion', subcatLink: '' },
            { name: 'Liner', subcatLink: '' },
            { name: 'Lipstick', subcatLink: '' }
        ]
    }
];
const footerSections = [
    {
        sectionName: 'Popular Categories',
        items: ['Fashion', 'Electronic', 'Cosmetic', 'Health', 'Watches']
    },
    {
        sectionName: 'Products',
        items: ['Prices Drop', 'New Products', 'Best Sales', 'Contact Us', 'Sitemap']
    },
    {
        sectionName: 'Our Company',
        items: ['Delivery', 'Legal Notice', 'Terms And Conditions', 'About Us', 'Secure Payment']
    },
    {
        sectionName: 'Services',
        items: ['Prices Drop', 'New Products', 'Best Sales', 'Contact Us', 'Sitemap']
    },
    {
        sectionName: 'Contact',
        items: [
            '419 State 414 Rte Beaver Dams, New York(NY), 14812, USA',
            '(607) 936-8058',
            'Example@Gmail.Com'
        ]
    }
];
const featuresSec = [
    {
        title: "Worldwide Delivery",
        description: "For Order Over $100",
        siteLink:"",
        icon:'fa-solid fa-ship fa-2xl',
    },
    {
        title: "Next Day Delivery",
        description: "UK Orders Only",
        siteLink:"",
        icon:'fa-solid fa-rocket fa-2xl',
    },
    {
        title: "Best Online Support",
        description: "Hours: 8AM - 11PM",
        siteLink:"",
        icon:'fa-solid fa-phone fa-2xl',
    },
    {
        title: "Return Policy",
        description: "Easy & Free Return",
        siteLink:"",
        icon:'fa-solid fa-backward fa-2xl',
    },
    {
        title: "30% Money Back",
        description: "For Order Over $100",
        siteLink:"",
        icon:'fa-solid fa-gift fa-2xl',
    }
];
const currentEvent = {
    discount:25,
    titleFirst:"Summer",
    titleLast:"Collection",
    starting:10,
    isDiscount:true,
    eventLink:''
}
const testimonial = {
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/testimonial-1.jpg',
    name:'ALAN DOE',
    position:'CEO & Founder Invision',
    description:'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.'
}
const cards = [
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-1.jpg",
        category: "Fashion",
        title: "Clothes Retail KPIs 2021 Guide for Clothes Executives",
        postDate: "Apr 06, 2022",
        poster: "Mr Admin",
        cardLink: "",
        categoryLink:""
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-2.jpg",
        category: "Clothes",
        title: "Curbside fashion Trends: How to Win the Pickup Battle",
        postDate: "Jan 18, 2022",
        poster: "Mr Robin",
        cardLink: "",
        categoryLink:""
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-3.jpg",
        category: "Shoes",
        title: "EBT vendors: Claim Your Share of SNAP Online Revenue",
        postDate: "Feb 10, 2022",
        poster: "Mr Selsa",
        cardLink: "",
        categoryLink:""
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/blog-4.jpg",
        category: "Electronics",
        title: "Curbside fashion Trends: How to Win the Pickup Battle",
        postDate: "Mar 15, 2022",
        poster: "Mr Pawar",
        cardLink: "",
        categoryLink:""
    }
];
const deals = [
    {
        productLink:"",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg",
        stars:3,
        ratingCount:56,
        title:"SHAMPOO, CONDITIONER & FACEWASH PACKS",
        description:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
        price:{basePrice:200.00,discountPrice:150.00},
        availability:{sold:20,avilable:40},
        endTime:{date:5,month:10,year:2024,time:12,minute:0}
    },
    {
        productLink:"",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-1.jpg",
        stars:3,
        ratingCount:26,
        title:"ROSE GOLD DIAMONDS EARRING",
        description:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
        price:{basePrice:1990.00,discountPrice:2000.00},
        availability:{sold:15,avilable:40},
        endTime:{date:5,month:10,year:2024,time:12,minute:0}
    }
];
const cartProducts = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]
const products = [
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-4.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S342",
        discount: 15,
        category: "JACKET",
        title: "Mens Winter Leathers Jackets",
        ratingCount: 56,
        stars: 3,
        price: { basePrice: 75.00, discountPrice: 48.00 },
        params: { isSale: false, isNew: false, isDiscount: true },
        colors: [
            { name: "Brown", class: "bg-brown-500", selectedClass: "ring-brown-700" },
            { name: "Black", class: "bg-black", selectedClass: "ring-black" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-2.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S34134",
        discount: 20,
        category: "SHIRT",
        title: "Pure Garment Dyed Cotton Shirt",
        ratingCount: 34,
        stars: 4,
        price: { basePrice: 56.00, discountPrice: 45.00 },
        params: { isSale: true, isNew: false, isDiscount: false },
        colors: [
            { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
            { name: "Blue", class: "bg-blue-500", selectedClass: "ring-blue-700" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-6.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S34245",
        discount: 10,
        category: "JACKET",
        title: "MEN Yarn Fleece Full-Zip Jacket",
        ratingCount: 22,
        stars: 4.5,
        price: { basePrice: 65.00, discountPrice: 58.00 },
        params: { isSale: false, isNew: false, isDiscount: false },
        colors: [
            { name: "Gray", class: "bg-gray-500", selectedClass: "ring-gray-700" },
            { name: "Black", class: "bg-black", selectedClass: "ring-black" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-4.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S34134",
        discount: 28.57,
        category: "SKIRT",
        title: "Black Floral Wrap Midi Skirt",
        ratingCount: 47,
        stars: 4,
        price: { basePrice: 35.00, discountPrice: 25.00 },
        params: { isSale: false, isNew: true, isDiscount: false },
        colors: [
            { name: "Black", class: "bg-black", selectedClass: "ring-black" },
            { name: "Floral", class: "bg-floral", selectedClass: "ring-floral" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-2_1.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S34345",
        discount: 5.71,
        category: "CASUAL",
        title: "Casual Men's Brown Shoes",
        ratingCount: 63,
        stars: 2,
        price: { basePrice: 105.00, discountPrice: 99.00 },
        params: { isSale: false, isNew: false, isDiscount: false },
        colors: [
            { name: "Brown", class: "bg-brown-500", selectedClass: "ring-brown-700" },
            { name: "Black", class: "bg-black", selectedClass: "ring-black" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "6", inStock: true },
            { name: "7", inStock: true },
            { name: "8", inStock: true },
            { name: "9", inStock: true },
            { name: "10", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-4.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S342435",
        discount: 11.76,
        category: "WATCHES",
        title: "Pocket Watch Leather Pouch",
        ratingCount: 29,
        stars: 4,
        price: { basePrice: 170.00, discountPrice: 150.00 },
        params: { isSale: true, isNew: false, isDiscount: false },
        colors: [
            { name: "Black", class: "bg-black", selectedClass: "ring-black" },
            { name: "Brown", class: "bg-brown-500", selectedClass: "ring-brown-700" }
        ],
        isSizeAvailable: false,
        sizes: [
            { name: "Default", inStock: true },
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-2.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S34123",
        discount: 16.67,
        category: "WATCHES",
        title: "Smart Watch Vital Plus",
        ratingCount: 52,
        stars: 5,
        price: { basePrice: 120.00, discountPrice: 100.00 },
        params: { isSale: false, isNew: false, isDiscount: false },
        colors: [
            { name: "Black", class: "bg-black", selectedClass: "ring-black" },
            { name: "Silver", class: "bg-silver-500", selectedClass: "ring-silver-700" }
        ],
        isSizeAvailable: false,
        sizes: [
            { name: "Default", inStock: true },
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/party-wear-2.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S344325",
        discount: 16.67,
        category: "PARTY WEAR",
        title: "Womens Party Wear Shoes",
        ratingCount: 37,
        stars: 4,
        price: { basePrice: 30.00, discountPrice: 25.00 },
        params: { isSale: true, isNew: false, isDiscount: false },
        colors: [
            { name: "Red", class: "bg-red-500", selectedClass: "ring-red-700" },
            { name: "Black", class: "bg-black", selectedClass: "ring-black" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "6", inStock: true },
            { name: "7", inStock: true },
            { name: "8", inStock: true },
            { name: "9", inStock: true },
            { name: "10", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-2.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S34324",
        discount: 28.89,
        category: "JACKET",
        title: "Mens Winter Leathers Jackets",
        ratingCount: 48,
        stars: 3,
        price: { basePrice: 45.00, discountPrice: 32.00 },
        params: { isSale: false, isNew: false, isDiscount: false },
        colors: [
            { name: "Brown", class: "bg-brown-500", selectedClass: "ring-brown-700" },
            { name: "Black", class: "bg-black", selectedClass: "ring-black" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-4.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S3445",
        discount: 9.38,
        category: "SPORTS",
        title: "Trekking & Running Shoes - Black",
        ratingCount: 41,
        stars: 5,
        price: { basePrice: 64.00, discountPrice: 58.00 },
        params: { isSale: true, isNew: false, isDiscount: false },
        colors: [
            { name: "Black", class: "bg-black", selectedClass: "ring-black" },
            { name: "Gray", class: "bg-gray-500", selectedClass: "ring-gray-700" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "6", inStock: true },
            { name: "7", inStock: true },
            { name: "8", inStock: true },
            { name: "9", inStock: true },
            { name: "10", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-1_1.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S342345",
        discount: 23.08,
        category: "FORMAL",
        title: "Men's Leather Formal Wear Shoes",
        ratingCount: 53,
        stars: 4,
        price: { basePrice: 65.00, discountPrice: 50.00 },
        params: { isSale: false, isNew: false, isDiscount: false },
        colors: [
            { name: "Black", class: "bg-black", selectedClass: "ring-black" },
            { name: "Brown", class: "bg-brown-500", selectedClass: "ring-brown-700" }
        ],
        isSizeAvailable: true,
        sizes: [
            { name: "6", inStock: true },
            { name: "7", inStock: true },
            { name: "8", inStock: true },
            { name: "9", inStock: true },
            { name: "10", inStock: false }
        ]
    },
    {
        imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shorts-2.jpg",
        secImglink: "",
        imgCollection:[""],
        imgAlt:"",
        productID: "i34S34345",
        discount: 8.24,
        category: "SHORTS",
        title: "Better Basics French Terry Sweatshorts",
        ratingCount: 39,
        stars: 4,
        price: { basePrice: 85.00, discountPrice: 78.00 },
        params: { isSale: true, isNew: false, isDiscount: false },
        colors: [
            { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
            { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
            { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" }
        ],
        isSizeAvailable: false,
        sizes: [
            { name: "Default", inStock: true },
        ]
    }
]
const defaultData = {
    imgLink: "",
    secImglink: "",
    imgCollection:[""],
    imgAlt:"",
    productID: "",
    discount: 0,
    category: "",
    title: "",
    ratingCount: 0,
    stars: 0,
    price: { basePrice: 0, discountPrice: 0 },
    params: { isSale: false, isNew: false, isDiscount: false },
    colors: [
        { name: "", class: "", selectedClass: "" },
    ],
    isSizeAvailable: false,
    sizes: [
        { name: "Default", inStock: true },
    ]
}
export {topCat, navBtns, leftStatus, bestSell, trendings, footerCategories, footerSections, defaultData, products, featuresSec, currentEvent, testimonial, cards, deals, cartProducts};