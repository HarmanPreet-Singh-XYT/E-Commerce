import { title } from "process";

const topCat = [{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg',
    name:"DRESS & FROCK",
    quantity:53,
    showLink:"/sub-category/fashion/dress-&-frock"
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/coat.svg',
    name:"INNERWEAR",
    quantity:58,
    showLink:"/sub-category/fashion/innerwear"
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg ',
    name:"SUNGLASSES",
    quantity:32,
    showLink:"/sub-category/men/sunglasses"
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shorts.svg',
    name:"SHORTS & JEANS",
    quantity:42,
    showLink:"/sub-category/fashion/shorts-&-jeans"
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/tee.svg',
    name:"T-SHIRTS",
    quantity:12,
    showLink:"/sub-category/fashion/TShirt"
},
{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/jacket.svg',
    name:"JACKET",
    quantity:63,
    showLink:"/sub-category/men/jacket"
},
{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/watch.svg',
    name:"SMART WATCH",
    quantity:42,
    showLink:"/sub-category/electronics/smart-watch"
},{
    imgLink:'https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/hat.svg',
    name:"HAIR GEL",
    quantity:29,
    showLink:"/sub-category/cosmetics/hair-gel"
}];
const navBtns = [
    {name:"Home",isExtendable:false,extendables:[],catLink:'/'},
    {name:"Categories",isExtendable:false,extendables:[],catLink:''},
    {name:"Men's",isExtendable:true,extendables:[
        {
          title: "Shirt",
          link: "/sub-category/men/shirt",
        },
        {
          title: "Shorts & Jeans",
          link: "/sub-category/fashion/shorts-&-jeans",
        },
        {
          title: "Safety Shoes",
          link: "/sub-category/footwear/safety-shoes",
        },
        {
          title: "Wallet",
          link: "/sub-category/men/wallet",
        },
      ],catLink:'/categories/men'},
    {name:"Women's",isExtendable:true,extendables:[
        {
            title: "Dress & Frock", // Combined Dress and Frock
            link: "/sub-category/women/dress-&-frock",
          },
          {
            title: "Earrings",
            link: "/sub-category/women/earrings",
          },
          {
            title: "Necklace",
            link:"/sub-category/women/necklace",
          },
          {
            title: "Makeup Kit",
            link: "/sub-category/women/makeup-kit",
          },
    ],catLink:'/categories/women'},
    {name:"Jewelry",isExtendable:true,extendables:[
        {
            title: "Necklace",
            link: "/sub-category/jewellery/necklace",
          },
          {
            title: "Earrings",
            link: "/sub-category/jewellery/earrings",
          },
          {
            title: "Couple Rings",
            link: "/sub-category/jewellery/couple-rings",
          },
          {
            title: "Bracelets",
            link: "/sub-category/jewellery/bracelets",
          },
    ],catLink:'/categories/jewellery'},
    {name:"Perfume",isExtendable:true,extendables:[
          {
            title: "Clothes Perfume",
            link: "/sub-category/perfume/clothes-perfume",
          },
          {
            title: "Deodorant",
            link: "/sub-category/perfume/deodorant",
          },
          {
            title: "Flower Fragrance",
            link: "/sub-category/perfume/flower-fragrance",
          },
          {
            title: "Air Freshener",
            link: "/sub-category/perfume/air-freshener",
          },
    ],catLink:'/categories/perfume'},
    {
        name: "Cosmetics",
        isExtendable: true,
        extendables: [
          {
            title: "Body Soap",
            link: "/sub-category/cosmetics/body-soap",
          },
          {
            title: "Shampoo",
            link: "/sub-category/cosmetics/shampoo",
          },
          {
            title: "Perfume",
            link: "/sub-category/cosmetics/perfume",
          },
          {
            title: "Body Wash",
            link: "/sub-category/cosmetics/bodywash",
          }
        ],
        catLink: "/categories/cosmetics"
      },
      {
        name: "Footwear",
        isExtendable: true,
        extendables: [
          {
            title: "Long Shoes",
            link: "/sub-category/footwear/long-shoes",
          },
          {
            title: "First Copy",
            link: "/sub-category/footwear/firstcopy",
          },
          {
            title: "Cowboy Shoes",
            link: "/sub-category/footwear/cowboy-shoes",
          },
          {
            title: "Safety Shoes",
            link: "/sub-category/footwear/safety-shoes",
          }
        ],
        catLink: "/categories/footwear"
      },
      {
        name: "Fashion",
        isExtendable: true,
        extendables: [
          {
            title: "Innerwear",
            link: "/sub-category/fashion/innerwear",
          },
          {
            title: "Shirts",
            link: "/sub-category/fashion/shirts",
          },
          {
            title: "Dress & Frock",
            link: "/sub-category/fashion/dress-&-frock",
          },
          {
            title: "Jacket",
            link: "/sub-category/fashion/jacket",
          }
        ],
        catLink: "/categories/fashion"
      },
    {name:"Blog",isExtendable:false,extendables:[],catLink:'/blog'}
];
const leftStatus = [
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg",
        title:"Clothes",
        links:[
            {
                title:"Shirt",
                link:"/sub-category/clothes/shirt",
                quantity:50,
            },
            {
                title:"Shorts & Jeans",
                link:"/sub-category/clothes/shorts-&-jeans",
                quantity:50,
            },
            {
                title:"Jacket",
                link:"/sub-category/clothes/jacket",
                quantity:50,
            },
            {
                title:"Dress & Frock",
                link:"/sub-category/clothes/dress-&-frock",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shoes.svg",
        title:"Footwear",
        links:[
            {
                title:"Sport",
                link:"/sub-category/footwear/sport",
                quantity:50,
            },
            {
                title:"Formal",
                link:"/sub-category/footwear/formal",
                quantity:50,
            },
            {
                title:"Casual",
                link:"/sub-category/footwear/casual",
                quantity:50,
            },
            {
                title:"Safety Shoes",
                link:"/sub-category/footwear/safety-shoes",
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
                link:"/sub-category/jewellery/earrings",
                quantity:50,
            },
            {
                title:"Couple Rings",
                link:"/sub-category/jewellery/couple-rings",
                quantity:50,
            },
            {
                title:"Necklace",
                link:"/sub-category/jewellery/necklace",
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
                link:"/sub-category/perfume/clothes-perfume",
                quantity:50,
            },
            {
                title:"Deodorant",
                link:"/sub-category/perfume/deodorant",
                quantity:50,
            },
            {
                title:"Air Freshener",
                link:"/sub-category/perfume/air-freshener",
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
                link:"/sub-category/cosmetics/shampoo",
                quantity:50,
            },
            {
                title:"Sunscreen",
                link:"/sub-category/cosmetics/sunscreen",
                quantity:50,
            },
            {
                title:"Body Wash",
                link:"/sub-category/cosmetics/bodywash",
                quantity:50,
            },
            {
                title:"Makeup Kit",
                link:"/sub-category/cosmetics/makeup-kit",
                quantity:50,
            }
        ]
    },
    {
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg",
        title:"Men",
        links:[
            {
                title:"Sunglasses",
                link:"/sub-category/men/sunglasses",
                quantity:50,
            },
            {
                title:"Casual",
                link:"/sub-category/men/casual",
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
                link:"/sub-category/women/bags",
                quantity:50,
            },
            {
                title:"Gym Backpack",
                link:"/sub-category/women/bags",
                quantity:50,
            },
            {
                title:"Purse",
                link:"/sub-category/women/bags",
                quantity:50,
            },
            {
                title:"Wallet",
                link:"/sub-category/men/wallet",
                quantity:50,
            }
        ]
    }
]
const footerCategories = [
    {
        name: 'FASHION',
        subcategories: [
            { name: 'T-Shirt', subcatLink: '/sub-category/fashion/TShirt' },
            { name: 'Shirts', subcatLink: '/sub-category/fashion/shirts' },
            { name: 'Shorts & Jeans', subcatLink: '/sub-category/fashion/shorts-&-jeans' },
            { name: 'Jacket', subcatLink: '/sub-category/fashion/jacket' },
            { name: 'Dress & Frock', subcatLink: '/sub-category/fashion/dress-&-frock' },
            { name: 'Innerwear', subcatLink: '/sub-category/fashion/innerwear' },
            { name: 'Hosiery', subcatLink: '/sub-category/fashion/hosiery' }
        ]
    },
    {
        name: 'FOOTWEAR',
        subcategories: [
            { name: 'Sport', subcatLink: '/sub-category/footwear/sport' },
            { name: 'Formal', subcatLink: '/sub-category/footwear/formal' },
            { name: 'Boots', subcatLink: '/sub-category/footwear/boots' },
            { name: 'Casual', subcatLink: '/sub-category/footwear/casual' },
            { name: 'Cowboy Shoes', subcatLink: '/sub-category/footwear/cowboy-shoes' },
            { name: 'Safety Shoes', subcatLink: '/sub-category/footwear/safety-shoes' },
            { name: 'Party Wear Shoes', subcatLink: '/sub-category/footwear/party-wear-shoes' },
            { name: 'Branded', subcatLink: '/sub-category/footwear/branded' },
            { name: 'Firstcopy', subcatLink: '/sub-category/footwear/firstcopy' },
            { name: 'Long Shoes', subcatLink: '/sub-category/footwear/long-shoes' }
        ]
    },
    {
        name: 'JEWELLERY',
        subcategories: [
            { name: 'Necklace', subcatLink: '/sub-category/jewellery/necklace' },
            { name: 'Earrings', subcatLink: '/sub-category/jewellery/earrings' },
            { name: 'Couple Rings', subcatLink: '/sub-category/jewellery/couple-rings' },
            { name: 'Pendants', subcatLink: '/sub-category/jewellery/pendants' },
            { name: 'Crystal', subcatLink: '/sub-category/jewellery/crystal' },
            { name: 'Bangles', subcatLink: '/sub-category/jewellery/bangles' },
            { name: 'Bracelets', subcatLink: '/sub-category/jewellery/bracelets' },
            { name: 'Nosepin', subcatLink: '/sub-category/jewellery/nosepin' },
            { name: 'Chain', subcatLink: '/sub-category/jewellery/chain' },
            { name: 'Earrings', subcatLink: '/sub-category/jewellery/earrings' },
            { name: 'Couple Rings', subcatLink: '/sub-category/jewellery/couple-rings' }
        ]
    },
    {
        name: 'COSMETICS',
        subcategories: [
            { name: 'Shampoo', subcatLink: '/sub-category/cosmetics/shampoo' },
            { name: 'Bodywash', subcatLink: '/sub-category/cosmetics/bodywash' },
            { name: 'Facewash', subcatLink: '/sub-category/cosmetics/facewash' },
            { name: 'Makeup Kit', subcatLink: '/sub-category/cosmetics/makeup-kit' },
            { name: 'Liner', subcatLink: '/sub-category/cosmetics/liner' },
            { name: 'Lipstick', subcatLink: '/sub-category/cosmetics/lipstick' },
            { name: 'Perfume', subcatLink: '/sub-category/cosmetics/perfume' },
            { name: 'Body Soap', subcatLink: '/sub-category/cosmetics/body-soap' },
            { name: 'Scrub', subcatLink: '/sub-category/cosmetics/scrub' },
            { name: 'Hair Gel', subcatLink: '/sub-category/cosmetics/hair-gel' },
            { name: 'Hair Colors', subcatLink: '/sub-category/cosmetics/hair-colors' },
            { name: 'Hair Dye', subcatLink: '/sub-category/cosmetics/hair-dye' },
            { name: 'Sunscreen', subcatLink: '/sub-category/cosmetics/sunscreen' },
            { name: 'Skin Lotion', subcatLink: '/sub-category/cosmetics/skin-lotion' },
            { name: 'Liner', subcatLink: '/sub-category/cosmetics/liner' },
            { name: 'Lipstick', subcatLink: '/sub-category/cosmetics/lipstick' }
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
            // {
            //     title: "New Products",
            //     link: "products/new-products"
            // },
            {
                title: "Blog",
                link: "/blog"
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
const categoryDropDown = [
    {
        title:'Electronics',
        catLink:"/electronics",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-1.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Desktop",
                link:"/sub-category/electronics/desktop",
            },
            {
                title:"Laptop",
                link:"/sub-category/electronics/laptop",
            },
            {
                title:"Camera",
                link:"/sub-category/electronics/camera",
            },
            {
                title:"Tablet",
                link:"/sub-category/electronics/tablet",
            },
            {
                title:"Headphone",
                link:"/sub-category/electronics/headphone",
            },
        ]
    },
    {
        title:"Men's",
        catLink:"/men",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/mens-banner.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Formal",
                link:"/sub-category/men/formal",
            },
            {
                title:"Casual",
                link:"/sub-category/men/casual",
            },
            {
                title:"Sport",
                link:"/sub-category/men/sports", 
            },
            {
                title:"Jacket",
                link:"/sub-category/men/jacket",
            },
            {
                title:"Sunglasses",
                link:"/sub-category/men/sunglasses",
            },
        ]
    },
    {
        title:"Women's",
        catLink:"/women",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/womens-banner.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Formal",
                link:"/sub-category/women/formal",
            },
            {
                title:"Casual",
                link:"/sub-category/women/casual", 
            },
            {
                title:"Perfume",
                link:"/sub-category/women/perfume",
            },
            {
                title:"Cosmetics",
                link:"/sub-category/women/cosmetics",
            },
            {
                title:"Bags",
                link:"/sub-category/women/bags",
            },
        ]
    },
    {
        title:'Electronics',
        catLink:"/electronics",
        imgLink:"https://codewithsadee.github.io/anon-ecommerce-website/assets/images/electronics-banner-2.jpg",
        imgAlt:"",
        imgRedirectLink:"",
        subCategories:[
            {
                title:"Smart Watch",
                link:"/sub-category/electronics/smart-watch",
            },
            {
                title:"Smart TV",
                link:"/sub-category/electronics/smart-TV",
            },
            {
                title:"Keyboard",
                link:"/sub-category/electronics/keyboard",
            },
            {
                title:"Mouse",
                link:"/sub-category/electronics/mouse",
            },
            {
                title:"Microphone",
                link:"/sub-category/electronics/microphone",
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
const availableCategories = [
    {
        title: 'fashion',
        banners:["https://i.pinimg.com/736x/71/c0/90/71c090c1ee401a79f7b84c086fa04063.jpg","https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg","https://assets.vogue.com/photos/614a24383c6a255bbac856d8/master/w_2560%2Cc_limit/00_story.jpg"],
        subcategories: [
            { title: 'T-Shirt', link: '/TShirt' },
            { title: 'Shirts', link: '/shirts' },
            { title: 'Shorts & Jeans', link: '/shorts-&-jeans' },
            { title: 'Jacket', link: '/jacket' },
            { title: 'Dress & Frock', link: '/dress-&-frock' },
            { title: 'Innerwear', link: '/innerwear' },
            { title: 'Hosiery', link: '/hosiery' },
        ]
    },
    {
        title: 'footwear',
        banners:["https://www.india.com/wp-content/uploads/2017/08/footwear.jpg","https://images.moneycontrol.com/static-mcnews/2020/04/footwear-28042020.jpg?impolicy=website&width=1600&height=900","https://www.airwavesf.com/wp-content/uploads/2022/06/79589-645-collecting-sneakers-and-photography-a-collection-of-limited-editions-and-exclusive-models-combination_t20_Op1ydp.jpg"],
        subcategories: [
            { title: 'Sport', link: '/sport' },
            { title: 'Formal', link: '/formal' },
            { title: 'Boots', link: '/boots' },
            { title: 'Casual', link: '/casual' },
            { title: 'Cowboy Shoes', link: '/cowboy-shoes' },
            { title: 'Safety Shoes', link: '/safety-shoes' },
            { title: 'Party Wear Shoes', link: '/party-wear-shoes' },
            { title: 'Branded', link: '/branded-footwear' },
            { title: 'Firstcopy', link: '/firstcopy' },
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
        ]
    },
    {
        title: 'electronics',
        banners:["https://i.pinimg.com/originals/d2/b9/40/d2b940959caadeaf591041c70ab7a0ab.png","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gaming-computer-banner-sale-design-template-4eee9f783ef62e0f7122e9ae7828bec1_screen.jpg?ts=1659604125","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/computer-accessories-template-design-129534fcc8ab7b353cd7627bac2ec34e_screen.jpg?ts=1659516861"],
        subcategories: [
            { title: 'Laptops', link: '/laptop' },
            { title: 'Tablets', link: '/tablet' },
            { title: 'Headphones', link: '/headphone' },
            { title: 'Cameras', link: '/cameras' },
            { title: 'Smartwatches', link: '/smart-watch' },
            { title: 'Smart TV', link: '/smart-TV' },
        ]
    },
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
export {topCat, allCategories, serviceFeatures, loginFeatures,  navBtns,  aboutUS, availableCategories, paymentSecure, leftStatus, categoryDropDown,  footerCategories, footerSections, featuresSec, currentEvent, testimonial};