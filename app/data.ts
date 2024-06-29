import { title } from "process";

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
    {name:"Home",isExtendable:false,extendables:[],catLink:'/'},
    {name:"Categories",isExtendable:false,extendables:[],catLink:''},
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
      ],catLink:'/categories/men'},
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
    ],catLink:'/categories/women'},
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
    ],catLink:'/categories/jewellery'},
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
    ],catLink:'/categories/perfume'},
    {name:"Blog",isExtendable:false,extendables:[],catLink:'/blog'},
    {name:"Hot Offers",isExtendable:false,extendables:[],catLink:'/offers'}
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
                title:"Sports",
                link:"",
                quantity:50,
            },
            {
                title:"Formal",
                link:"",
                quantity:50,
            },
            {
                title:"Casual",
                link:"",
                quantity:50,
            },
            {
                title:"Safety Shoes",
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
                title:"Earrings",
                link:"",
                quantity:50,
            },
            {
                title:"Couple Rings",
                link:"",
                quantity:50,
            },
            {
                title:"Necklace",
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
                title:"Clothes Perfume",
                link:"",
                quantity:50,
            },
            {
                title:"Deodorant",
                link:"",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"",
                quantity:50,
            },
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/cosmetics.svg",
        title:"Cosmetics",
        links:[
            {
                title:"Shampoo",
                link:"",
                quantity:50,
            },
            {
                title:"Sunscreen",
                link:"",
                quantity:50,
            },
            {
                title:"Body Wash",
                link:"",
                quantity:50,
            },
            {
                title:"Makeup Kit",
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
                title:"Sunglasses",
                link:"",
                quantity:50,
            },
            {
                title:"Lenses",
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
                title:"Shopping Bag",
                link:"",
                quantity:50,
            },
            {
                title:"Gym Backpack",
                link:"",
                quantity:50,
            },
            {
                title:"Purse",
                link:"",
                quantity:50,
            },
            {
                title:"Wallet",
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
        productID:"dfsg453",
    },
    {
        title:"Men's Hoodies T-Shirt",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/2.jpg",
        basePrice:5.00,
        discountPrice:4.00,
        ratingCount:32,
        stars:4.5,
        productID:"sdfg4325",
    },
    {
        title:"Girls T-Shirt",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/3.jpg",
        basePrice:5.00,
        discountPrice:4.00,
        ratingCount:65,
        stars:4.5,
        productID:"sdfg45",
    },
    {
        title:"Woolen Hat For Men",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/4.jpg",
        basePrice:5.00,
        discountPrice:4.00,
        ratingCount:123,
        stars:5,
        productID:"sdfg245",
    }
];
const trendings = {
    newArrivals:{
        primary:[
            {
            
                title:"Relaxed Short Full Sleeves",
                category:"Clothes",
                imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-1.jpg",
                productID:"xcvbb2435",
                catLink:"",
                discountPrice:12.00,
                basePrice:45.00,
            },
            {
                title: "Girls Pink Embro Design Top",
                category: "Clothes",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-2.jpg",
                productID:"sdfg2345",
                catLink: "",
                discountPrice: 9.00,
                basePrice: 61.00
            },
            {
                title: "Black Floral Wrap Midi Skirt",
                category: "Clothes",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-3.jpg",
                productID:"fdgh253",
                catLink: "",
                discountPrice: 25.00,
                basePrice: 76.00
            },
            {
                title: "Pure Garment Dyed Cotton Shirt",
                category: "Mens Fashion",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-1.jpg",
                productID:"asdfgs524",
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
                productID:"sadgf124",
                catLink: "",
                discountPrice: 11.00,
                basePrice: 61.00
            },
            {
                title: "Mens Winter Leathers Jackets",
                category: "Winter Wear",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-1.jpg",
                productID:"sagsdf1234",
                catLink: "",
                discountPrice: 20.00,
                basePrice: 32.00
            },
            {
                title: "Mens Winter Leathers Jackets",
                category: "Jackets",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-3.jpg",
                productID:"sadfg124",
                catLink: "",
                discountPrice: 25.00,
                basePrice: 50.00
            },
            {
                title: "Better Basics French Terry Sweatshorts",
                category: "Shorts",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shorts-1.jpg",
                productID:"sdaf213",
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
                productID:"sdfghvcx1234",
                catLink: "",
                discountPrice: 15.00,
                basePrice: 49.00
            },
            {
                title: "Trekking & Running Shoes - Black",
                category: "Sports",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-2.jpg",
                productID:"dfshg124",
                catLink: "",
                discountPrice: 36.00,
                basePrice: 78.00
            },
            {
                title: "Womens Party Wear Shoes",
                category: "Party Wear",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/party-wear-1.jpg",
                productID:"asd2143",
                catLink: "",
                discountPrice: 42.00,
                basePrice: 94.00
            },
            {
                title: "Sports Claw Women's Shoes",
                category: "Sports",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-3.jpg",
                productID:"asfdas1243",
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
                productID:"asfzcvx134",
                catLink: "",
                discountPrice: 55.00,
                basePrice: 52.00
            },
            {
                title: "Boot With Suede Detail",
                category: "Boots",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-3.jpg",
                productID:"asd2134",
                catLink: "",
                discountPrice: 30.00,
                basePrice: 20.00
            },
            {
                title: "Men's Leather Formal Wear Shoes",
                category: "Formal",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-1.jpg",
                productID:"12443asd",
                catLink: "",
                discountPrice: 78.00,
                basePrice: 56.00
            },
            {
                title: "Casual Men's Brown Shoes",
                category: "Casual",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-2.jpg",
                productID:"23452345t",
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
                productID:"2341y",
                catLink: "",
                discountPrice: 34.00,
                basePrice: 50.00
            },
            {
                title: "Silver Deer Heart Necklace",
                category: "Jewellery",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-3.jpg",
                productID:"123421yu",
                catLink: "",
                discountPrice: 30.00,
                basePrice: 84.00
            },
            {
                title: "Titan 100 Ml Womens Perfume",
                category: "Perfume",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/perfume.jpg",
                productID:"213423",
                catLink: "",
                discountPrice: 10.00,
                basePrice: 42.00
            },
            {
                title: "Men's Leather Reversible Belt",
                category: "Belt",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/belt.jpg",
                productID:"2134234",
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
                productID:"2134231",
                catLink: "",
                discountPrice: 65.00,
                basePrice: 62.00
            },
            {
                title: "Smart Watche Vital Plus",
                category: "Watches",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/watch-1.jpg",
                productID:"23412",
                catLink: "",
                discountPrice: 78.00,
                basePrice: 56.00
            },
            {
                title: "Shampoo Conditioner Packs",
                category: "Cosmetics",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg",
                productID:"4235",
                catLink: "",
                discountPrice: 30.00,
                basePrice: 20.00
            },
            {
                title: "Rose Gold Peacock Earrings",
                category: "Jewellery",
                imgLink: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-1.jpg",
                productID:"23434",
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
        sectionName: "Popular Categories",
        items: [
            {
                title: "Fashion",
                link: "/categories/fashion"
            },
            {
                title: "Electronic",
                link: "/categories/electronics"
            },
            {
                title: "Cosmetic",
                link: "/categories/cosmetics"
            },
            {
                title: "Footwear",
                link: "/categories/footwear"
            },
            {
                title: "Perfume",
                link: "/categories/perfume"
            }
        ]
    },
    {
        sectionName: "Products",
        items: [
            // {
            //     title: "Prices Drop",
            //     link: "products/price-drop"
            // },
            {
                title: "New Products",
                link: "products/new-products"
            },
            {
                title: "Best Sales",
                link: "products/best-sales"
            },
            {
                title: "Contact Us",
                link: "/contact"
            },
            {
                title: "Our Services",
                link: "/our-services"
            }
        ]
    },
    {
        sectionName: "Our Company",
        items: [
            {
                title: "About Us",
                link: "/about"
            },
            {
                title: "Privacy Policy",
                link: "/policy/privacypolicy"
            },
            {
                title: "Secure Payment",
                link: "/securepayment"
            },
            {
                title: "Terms And Conditions",
                link: "/policy/terms&conditions"
            },
            {
                title: "Refund & Cancellation",
                link: "/policy/refund&cancellation"
            }
        ]
    },
    {
        sectionName: 'Contact',
        items: [
            {title:'419 State 414 Rte Beaver Dams, New York(NY), 14812, USA',link:"#"},
            {title:'(607) 936-8058',link:"#"},
            {title:'Example@Gmail.Com',link:"#"}
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
        description: "Tier-1 City Orders Only",
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
        productID:"134",
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
        productID:"245",
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
    productID: "dsf34",
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
const banners = [
    {
        topTitle:"Trending Item",
        middleTitle:"Women's Latest Fashion Sale",
        bottomTitle:"starting at $",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-1.jpg",
        startPrice:20.00,
        buttonTitle:"Shop Now"
    },
    {
        topTitle:"Trending Accesssories",
        middleTitle:"Modern Sunglasses",
        bottomTitle:"starting at $",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-2.jpg",
        startPrice:15.00,
        buttonTitle:"Shop Now"
    },
    {
        topTitle:"Sale Offer",
        middleTitle:"New Fashion Summer Sale",
        bottomTitle:"starting at $",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-3.jpg",
        startPrice:29.99,
        buttonTitle:"Shop Now"
    }
]
const categoryDropDown = [
    {
        title:'Electronics',
        catLink:"",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-1.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Desktop",
                link:"",
            },
            {
                title:"Laptop",
                link:"",
            },
            {
                title:"Camera",
                link:"",
            },
            {
                title:"Tablet",
                link:"",
            },
            {
                title:"Headphone",
                link:"",
            },
        ]
    },
    {
        title:"Men's",
        catLink:"",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/mens-banner.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Formal",
                link:"",
            },
            {
                title:"Casual",
                link:"",
            },
            {
                title:"Sports",
                link:"", 
            },
            {
                title:"Jacket",
                link:"",
            },
            {
                title:"Sunglasses",
                link:"",
            },
        ]
    },
    {
        title:"Women's",
        catLink:"",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/womens-banner.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Formal",
                link:"",
            },
            {
                title:"Casual",
                link:"", 
            },
            {
                title:"Perfume",
                link:"",
            },
            {
                title:"Cosmetics",
                link:"",
            },
            {
                title:"Bags",
                link:"",
            },
        ]
    },
    {
        title:'Electronics',
        catLink:"",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-2.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Smart Watch",
                link:"",
            },
            {
                title:"Smart TV",
                link:"",
            },
            {
                title:"Keyboard",
                link:"",
            },
            {
                title:"Mouse",
                link:"",
            },
            {
                title:"Microphone",
                link:"",
            },
        ]
    },
];
const paymentSecure = [
    {
        title:'Secure Payment',
        description:"We prioritize the security of your payment information. We understand the importance of ensuring that every transaction you make with us is safe and protected. That's why we have implemented robust security measures to safeguard your payment details and provide you with peace of mind throughout your shopping experience.",
        imgLink:'securepayment.jpg',
        imgAlt:'',
    },
    {
        title:'Cutting-Edge Encryption Technology',
        description:"We utilize cutting-edge encryption technology to protect your sensitive payment information. Our secure sockets layer (SSL) encryption ensures that all data transmitted between your browser and our servers remains encrypted and confidential. This means that your credit card details, personal information, and transaction data are shielded from unauthorized access by third parties.",
        imgLink:'securepayment-1.jpg',
        imgAlt:'',
    },
    {
        title:'PCI Compliance',
        description:"We are fully compliant with Payment Card Industry Data Security Standard (PCI DSS) requirements. This industry-standard framework sets forth stringent guidelines for securely handling credit card information during payment transactions. By adhering to PCI DSS standards, we maintain a secure environment for processing payment information, reducing the risk of data breaches and fraud.",
        imgLink:'securepayment-2.jpg',
        imgAlt:'',
    },
    {
        title:'Trusted Payment Partners',
        description:"We partner with trusted payment service providers that adhere to the highest security standards in the industry. Whether you choose to pay by credit card, debit card, or alternative payment methods, rest assured that your transaction is processed securely and efficiently.",
        imgLink:'securepayment-3.jpg',
        imgAlt:'',
    },
    {
        title:'Continuous Monitoring and Assessment',
        description:"Our dedicated security team continuously monitors and assesses our payment systems to identify and mitigate any potential vulnerabilities or threats. We stay vigilant against emerging security risks and implement proactive measures to ensure the ongoing security of your payment information.",
        imgLink:'securepayment-4.jpg',
        imgAlt:'',
    },
    {
        title:'Your Peace of Mind is Our Priority',
        description:"We are committed to providing you with a seamless and secure payment experience. Your peace of mind is our top priority, and we spare no effort in upholding the highest standards of security to protect your valuable information. Shop with confidence knowing that your payment details are in safe hands.",
        imgLink:'securepayment-5.jpg',
        imgAlt:'',
    },
]
const aboutUS= {
    section1:[
        {
            title:"About Us",
            description:"Welcome to [Your E-commerce Site Name], your ultimate destination for all things [your niche or industry]. Founded [year], we are passionate about delivering exceptional products and unparalleled shopping experiences to our customers worldwide.",
            imgLink:"about.jpg",
            imgAlt:""
        },
        {
            title:"Our Story",
            description:"At [Your E-commerce Site Name], our journey began with a simple yet powerful vision: to redefine the online shopping experience. What started as a small venture has grown into a thriving e-commerce platform, serving customers across the globe with a diverse range of high-quality products.",
            imgLink:"about-1.jpg",
            imgAlt:""
        },
        {
            title:"Our Mission",
            description:"Our mission is to empower individuals and communities by providing access to top-notch products that enhance their lives. We strive to create a seamless and enjoyable shopping environment where customers can discover new trends, find their favorite brands, and make informed purchasing decisions.",
            imgLink:"about-2.jpg",
            imgAlt:""
        },
        {
            title:"What Sets Us Apart",
            description:"What sets us apart is our unwavering commitment to excellence in every aspect of our business. From curating the finest selection of products to ensuring prompt and reliable delivery, we go above and beyond to exceed our customers' expectations.",
            imgLink:"about-3.jpg",
            imgAlt:""
        }

    ],
    section2:{
        title:"Our Values",
        imgLink:"about-5.jpg",
        imgAlt:"",
        listPoints:[
            {
                title:"Customer Satisfaction",
                description:"Your satisfaction is our top priority. We are dedicated to providing exceptional customer service and personalized support to ensure a smooth and enjoyable shopping experience."
            },
            {
                title:"Quality Assurance",
                description:"We stand behind the quality and authenticity of every product we offer. Each item undergoes rigorous quality control checks to meet our stringent standards of excellence."
            },
            {
                title:"Innovation",
                description:"We embrace innovation and continuously seek new ways to enhance our platform and elevate the shopping experience for our customers."
            },
            {
                title:"Sustainability",
                description:"We are committed to promoting sustainability and ethical practices throughout our supply chain. We prioritize eco-friendly products and strive to minimize our environmental footprint."
            }
        ],
    },
    section3:{
        title:"Get in Touch",
        description:[
            "We value transparency and open communication with our customers. If you have any questions, feedback, or inquiries, we encourage you to reach out to our dedicated customer support team. We are here to assist you every step of the way.",
            "Thank you for choosing [Your E-commerce Site Name]. We look forward to serving you and helping you discover the joy of shopping online."
        ]
    }
}
const orders = [
  {
    orderNumber: "WU88191111",
    datePlaced: "July 6, 2021",
    totalAmount: 160.00,
    isDelivered:true,
    item: 
      {
        name: "Micro Backpack",
        imgLink:"https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg",
        type: "Fashion",
        price: 70.00,
        description: "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        deliveryDate: "July 12, 2021"
      },
    links: {
      productID: "sdfg34",
      buyLink: "#",
      orderLink: "#",
      invoiceLink: "#"
    }
  },
  {
    orderNumber: "WU12345678",
    datePlaced: "March 15, 2021",
    totalAmount: 120.00,
    isDelivered: false,
    item: {
      name: "Compact Leather Wallet",
      imgLink: "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-02.jpg",
      type: "Accessories",
      price: 40.00,
      description: "A sleek and minimalist leather wallet that fits perfectly in your pocket. It has multiple compartments for cards and cash.",
      deliveryDate: "March 20, 2021"
    },
    links: {
      productID: "dfsg54",
      buyLink: "#",
      orderLink: "#",
      invoiceLink: "#"
    }
  },
  {
    orderNumber: "WU98765432",
    datePlaced: "May 10, 2021",
    totalAmount: 250.00,
    isDelivered: true,
    item: {
      name: "Wireless Earbuds",
      imgLink: "https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-03.jpg",
      type: "Electronics",
      price: 100.00,
      description: "High-quality wireless earbuds with noise cancellation and long battery life. Perfect for music lovers on the go.",
      deliveryDate: "May 15, 2021"
    },
    links: {
      productID: "dsfg345",
      buyLink: "#",
      orderLink: "#",
      invoiceLink: "#"
    }
  },
  {
    orderNumber: "WU11112222",
    datePlaced: "February 20, 2021",
    totalAmount: 180.00,
    isDelivered: true,
    item: {
      name: "Stainless Steel Water Bottle",
      imgLink: "https://ezahk.com/cdn/shop/products/31nP68i4GeL.jpg?v=1669706120",
      type: "Home & Kitchen",
      price: 30.00,
      description: "A durable stainless steel water bottle with double-wall insulation to keep your drinks cold or hot for hours.",
      deliveryDate: "February 25, 2021"
    },
    links: {
      productID: "sdfg2435",
      buyLink: "#",
      orderLink: "#",
      invoiceLink: "#"
    }
  }
];
const availableCategories = [
    {
        title: 'fashion',
        banners:["https://i.pinimg.com/736x/71/c0/90/71c090c1ee401a79f7b84c086fa04063.jpg","https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg","https://assets.vogue.com/photos/614a24383c6a255bbac856d8/master/w_2560%2Cc_limit/00_story.jpg"],
        subcategories: [
            { title: 'T-Shirt', link: '/t-shirts' },
            { title: 'Shirts', link: '/shirts' },
            { title: 'Shorts & Jeans', link: '/shorts-jeans' },
            { title: 'Jacket', link: '/jackets' },
            { title: 'Dress & Frock', link: '/dresses-frocks' },
            { title: 'Innerwear', link: '/innerwear' },
            { title: 'Hosiery', link: '/hosiery' },
        ]
    },
    {
        title: 'footwear',
        banners:["https://www.india.com/wp-content/uploads/2017/08/footwear.jpg","https://images.moneycontrol.com/static-mcnews/2020/04/footwear-28042020.jpg?impolicy=website&width=1600&height=900","https://www.airwavesf.com/wp-content/uploads/2022/06/79589-645-collecting-sneakers-and-photography-a-collection-of-limited-editions-and-exclusive-models-combination_t20_Op1ydp.jpg"],
        subcategories: [
            { title: 'Sport', link: '/sport-footwear' },
            { title: 'Formal', link: '/formal-footwear' },
            { title: 'Boots', link: '/boots' },
            { title: 'Casual', link: '/casual-footwear' },
            { title: 'Cowboy Shoes', link: '/cowboy-shoes' },
            { title: 'Safety Shoes', link: '/safety-shoes' },
            { title: 'Party Wear Shoes', link: '/party-wear-shoes' },
            { title: 'Branded', link: '/branded-footwear' },
            { title: 'Firstcopy', link: '/firstcopy-footwear' },
            { title: 'Long Shoes', link: '/long-shoes' },
        ]
    },
    {
        title: 'jewellery',
        banners:["https://www.mygoldguide.in/sites/default/files/Indo-wester_%20look_Cocktail_parties_01.jpg","https://kiyajewellery.in/cdn/shop/files/351494422_600067025526915_1828569725887026248_n_copy.jpg?v=1713783276&width=3840","https://www.truesilver.co.in/cdn/shop/articles/6_Stunning_Jewellery_for_Western_Wear.jpg?v=1695726468"],
        subcategories: [
            { title: 'Necklace', link: '/necklace' },
            { title: 'Earrings', link: '/earrings' },
            { title: 'Couple Rings', link: '/couple-rings' },
            { title: 'Pendants', link: '/pendants' },
            { title: 'Crystal', link: '/crystal' },
            { title: 'Bangles', link: '/bangles' },
            { title: 'Bracelets', link: '/bracelets' },
            { title: 'Nosepin', link: '/nosepin' },
            { title: 'Chain', link: '/chain' },
            { title: 'Earrings', link: '/earrings' },
            { title: 'Couple Rings', link: '/couple-rings' },
        ]
    },
    {
        title: 'cosmetics',
        banners:["https://www.cosmeticsdesign.com/var/wrbm_gb_food_pharma/storage/images/media/images/news-photogalleries/786041/color-cosmetics/15607895-1-eng-GB/Color-cosmetics.jpg","https://img.etimg.com/thumb/width-1600,height-900,imgsize-55008,resizemode-75,msid-102292994/industry/cons-products/fashion-/-cosmetics-/-jewellery/indians-spent-over-rs-5000-cr-on-cosmetics-sector-may-gain-as-more-women-go-to-work-study.jpg","https://lh3.googleusercontent.com/proxy/9nWZ4LOknTOPQgXzTZ0Q9VT6_WzLd8dmLgIkfZYiQgWuuOWXc7Gk6cfdzfjdUpbpiwPD6nIdy6jlIas_EUBibRUWWwxlvZxrNMJmFcSqdF1YB943"],
        subcategories: [
            { title: 'Shampoo', link: '/shampoo' },
            { title: 'Bodywash', link: '/bodywash' },
            { title: 'Facewash', link: '/facewash' },
            { title: 'Makeup Kit', link: '/makeup-kit' },
            { title: 'Liner', link: '/liner' },
            { title: 'Lipstick', link: '/lipstick' },
            { title: 'Perfume', link: '/perfume' },
            { title: 'Body Soap', link: '/body-soap' },
            { title: 'Scrub', link: '/scrub' },
            { title: 'Hair Gel', link: '/hair-gel' },
            { title: 'Hair Colors', link: '/hair-colors' },
            { title: 'Hair Dye', link: '/hair-dye' },
            { title: 'Sunscreen', link: '/sunscreen' },
            { title: 'Skin Lotion', link: '/skin-lotion' },
            { title: 'Liner', link: '/liner' },
            { title: 'Lipstick', link: '/lipstick' },
        ]
    },
    {
        title: 'electronics',
        banners:["https://i.pinimg.com/originals/d2/b9/40/d2b940959caadeaf591041c70ab7a0ab.png","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gaming-computer-banner-sale-design-template-4eee9f783ef62e0f7122e9ae7828bec1_screen.jpg?ts=1659604125","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/computer-accessories-template-design-129534fcc8ab7b353cd7627bac2ec34e_screen.jpg?ts=1659516861"],
        subcategories: [
            { title: 'Mobile Phones', link: '/mobile-phones' },
            { title: 'Laptops', link: '/laptops' },
            { title: 'Tablets', link: '/tablets' },
            { title: 'Headphones', link: '/headphones' },
            { title: 'Cameras', link: '/cameras' },
            { title: 'Smartwatches', link: '/smartwatches' },
            { title: 'Televisions', link: '/televisions' },
            { title: 'Speakers', link: '/speakers' },
            { title: 'Gaming Consoles', link: '/gaming-consoles' },
            { title: 'Wearable Tech', link: '/wearable-tech' },
        ]
    },
    {
        title: 'health',
        banners:["https://www.proquestnutrition.com/blog/wp-content/uploads/2023/12/Best-Bodybuilding-Supplements.jpg","https://www.shutterstock.com/image-vector/minimalistic-ad-banner-vitamin-d3-260nw-2260391737.jpg","https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-healthy-drink-recipe-for-fruit-juices-image_13157966.jpg"],
        subcategories: [
            { title: 'Vitamins & Supplements', link: '/vitamins-supplements' },
            { title: 'Personal Care', link: '/personal-care' },
            { title: 'Fitness Equipment', link: '/fitness-equipment' },
            { title: 'Health Monitors', link: '/health-monitors' },
            { title: 'First Aid', link: '/first-aid' },
            { title: 'Health Drinks', link: '/health-drinks' },
            { title: 'Protein & Nutrition', link: '/protein-nutrition' },
            { title: 'Yoga & Meditation', link: '/yoga-meditation' },
            { title: 'Medical Devices', link: '/medical-devices' },
        ]
    },
    {
        title: 'watches',
        banners:["https://d1csarkz8obe9u.cloudfront.net/posterpreviews/smart-watch-banner-design-template-1c7faa8b6c6f040f15486ac8464e6f9f_screen.jpg?ts=1665736035","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fe213f37352801.573d3df297da5.jpg","https://cytwatch.my/resources/link/20211022/1634891530/banner001_2.jpg"],
        
        subcategories: [
            { title: 'Analog Watches', link: '/analog-watches' },
            { title: 'Digital Watches', link: '/digital-watches' },
            { title: 'Smartwatches', link: '/smartwatches' },
            { title: 'Fitness Trackers', link: '/fitness-trackers' },
            { title: 'Luxury Watches', link: '/luxury-watches' },
            { title: 'Chronograph Watches', link: '/chronograph-watches' },
            { title: 'Diving Watches', link: '/diving-watches' },
            { title: 'Quartz Watches', link: '/quartz-watches' },
            { title: 'Mechanical Watches', link: '/mechanical-watches' },
            { title: 'Dress Watches', link: '/dress-watches' },
        ]
    }
];
const loginFeatures = [
    {
        title: 'Track Your Orders',
        description: 'Keep tabs on your purchases with real-time order tracking and updates.',
        iconType: 'search',
    },
    {
        title: 'Personalized Recommendations',
        description: 'Log in to receive product suggestions tailored to your shopping preferences.',
        iconType: 'star',
    },
    {
        title: 'Wishlist Management',
        description: 'Save your favorite items to your wishlist for quick and easy future purchases.',
        iconType: 'heart',
    },
    {
        title: 'Secure Checkout',
        description: 'Enjoy a fast, secure, and hassle-free checkout process every time you shop with us.',
        iconType: 'lock',
    },
];
const addresses = [
    {
        addressType: 'HOME',  // 'HOME' or 'OFFICE' or other types
        userName: 'Random User',
        contactNumber: '3429524795',
        addressLine1: 'Random House',
        addressLine2: 'Washington DC',  // Optional field, can be left empty if not needed
        city: 'Washington',
        state: 'DC',
        country: 'United States of America',
        postalCode: '123123',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        addressType: 'HOME',  // 'HOME' or 'OFFICE' or other types
        userName: 'Random User',
        contactNumber: '3429524795',
        addressLine1: 'Random House',
        addressLine2: 'Washington DC',  // Optional field, can be left empty if not needed
        city: 'Washington',
        state: 'DC',
        country: 'United States of America',
        postalCode: '123123',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        addressType: 'HOME',  // 'HOME' or 'OFFICE' or other types
        userName: 'Random User',
        contactNumber: '3429524795',
        addressLine1: 'Random House',
        addressLine2: 'Washington DC',  // Optional field, can be left empty if not needed
        city: 'Washington',
        state: 'DC',
        country: 'United States of America',
        postalCode: '123123',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];
const giftCards = [
    {
        cardID: 'gc001',
        cardName: 'Birthday Gift Card',
        cardCode: 'BIRTHDAY2024',
        description: 'A special gift card for birthdays, valid for one year.',
        balance: 100.00,
        currency: 'USD',
        expiryDate: '2025-06-08',
        recipientName: 'John Doe',
        recipientEmail: 'john.doe@example.com',
        senderName: 'Jane Smith',
        senderEmail: 'jane.smith@example.com',
        message: 'Happy Birthday, John! Enjoy your special day!',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'Active',  // Other possible statuses: 'Used', 'Expired', 'Cancelled'
    },
    {
        cardID: 'gc001',
        cardName: 'Birthday Gift Card',
        cardCode: 'BIRTHDAY2024',
        description: 'A special gift card for birthdays, valid for one year.',
        balance: 100.00,
        currency: 'USD',
        expiryDate: '2025-06-08',
        recipientName: 'John Doe',
        recipientEmail: 'john.doe@example.com',
        senderName: 'Jane Smith',
        senderEmail: 'jane.smith@example.com',
        message: 'Happy Birthday, John! Enjoy your special day!',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'Active',  // Other possible statuses: 'Used', 'Expired', 'Cancelled'
    }
];
const serviceFeatures = [
    {
        title: 'Worldwide Delivery',
        description: "Enjoy our comprehensive global shipping services, designed to bring your favorite products right to your doorstep, no matter where you are. We partner with top logistics companies to ensure your order reaches you safely and promptly, providing you with a seamless shopping experience from anywhere in the world.",
        imgLink: 'https://cdn.pixabay.com/photo/2014/04/03/11/55/globe-312563_640.png',
        imgAlt: 'Globe with delivery arrows',
    },
    {
        title: 'Free Shipping on Orders Over $100',
        description: "Shop to your heart's content and take advantage of our special offer: free shipping on all orders over $100. Whether you're buying gifts for loved ones or treating yourself, you'll save on shipping costs, making your shopping experience even more enjoyable. Spend more, save more with us!",
        imgLink: 'https://img.freepik.com/premium-vector/delivery-order-illustration-modern-flat-style_529804-22.jpg',
        imgAlt: 'Shipping box with dollar sign',
    },
    {
        title: 'Next Day Delivery',
        description: "Need your items in a hurry? With our next day delivery service, you can receive your order the very next day! This service is available for orders in tier-1 cities, ensuring that you never have to wait long for your essential items. Fast, reliable, and convenient delivery right to your door.",
        imgLink: 'https://cdn-icons-png.freepik.com/512/1254/1254262.png',
        imgAlt: 'Clock with delivery truck',
    },
    {
        title: 'Next Day Delivery for Tier-1 Cities',
        description: "Our next day delivery service is exclusively available for customers in tier-1 cities. This means you can enjoy the speed and convenience of receiving your orders within 24 hours, perfect for those last-minute needs or urgent purchases. Experience the ultimate in fast delivery with our premium service.",
        imgLink: 'https://img.freepik.com/free-vector/gradient-international-trade_23-2149150716.jpg',
        imgAlt: 'Map highlighting tier-1 cities',
    },
    {
        title: 'Best Online Support',
        description: "Our customer support team is dedicated to providing you with the best service possible. Available from 8AM to 11PM, our knowledgeable and friendly representatives are here to assist you with any inquiries or issues you may have. We're committed to ensuring your shopping experience is smooth and enjoyable.",
        imgLink: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-omnichannel-illustration_23-2149360245.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718496000&semt=ais_user',
        imgAlt: 'Headset with customer service icon',
    },
    {
        title: 'Easy & Free Return',
        description: "Shop with confidence knowing that our easy and free return policy has you covered. If you're not completely satisfied with your purchase, you can return it hassle-free. We aim to make the return process as straightforward as possible, giving you peace of mind with every order.",
        imgLink: 'https://atlanticcourier.net/static/images/testimonials-atlantic-courier.jpg',
        imgAlt: 'Return package with arrow',
    },
    {
        title: '30% Money Back Guarantee',
        description: "Enjoy added assurance with our 30% money back guarantee on orders over $100. If you're not fully satisfied with your purchase, we'll refund 30% of your order value. This guarantee underscores our commitment to your satisfaction and ensures that you can shop with complete confidence.",
        imgLink: 'https://cdni.iconscout.com/illustration/premium/thumb/cashback-3465499-2912113.png?f=webp',
        imgAlt: 'Money back symbol',
    },
];
const allCategories = [{name:"Men's",link:'/categories/MEN'},{name:"Women's",link:'/categories/WOMEN'},{name:'Cosmetics',link:'/categories/Cosmetics'},{name:'Electronics',link:'/categories/electronics'},{name:'Perfume',link:'/categories/perfume'},{name:'Jewellery',link:'/categories/jewellery'},{name:'Footwear',link:'/categories/footwear'},{name:'Fashion',link:'/categories/fashion'}]
export {topCat, allCategories, serviceFeatures, giftCards, loginFeatures, addresses, navBtns, orders, aboutUS, availableCategories, paymentSecure, leftStatus, bestSell, categoryDropDown, trendings, footerCategories, footerSections, banners, defaultData, products, featuresSec, currentEvent, testimonial, cards, deals, cartProducts};