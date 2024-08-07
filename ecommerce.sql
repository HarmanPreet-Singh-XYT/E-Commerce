PGDMP                      |         	   ecommerce    16.0    16.3 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16622 	   ecommerce    DATABASE     |   CREATE DATABASE ecommerce WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE ecommerce;
                postgres    false            �           0    0    DATABASE ecommerce    ACL     +   GRANT ALL ON DATABASE ecommerce TO harman;
                   postgres    false    5089                       1255    16638    update_updatedat_column()    FUNCTION     �   CREATE FUNCTION public.update_updatedat_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.updatedat = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;
 0   DROP FUNCTION public.update_updatedat_column();
       public          postgres    false            �            1259    16729 	   addresses    TABLE     �  CREATE TABLE public.addresses (
    addressid integer NOT NULL,
    userid integer NOT NULL,
    addresstype character varying(4) NOT NULL,
    username character varying(64) NOT NULL,
    contactnumber character varying(10) NOT NULL,
    addressline1 character varying(128) NOT NULL,
    addressline2 character varying(128),
    city character varying(60) NOT NULL,
    state character varying(16) NOT NULL,
    country character varying(56) NOT NULL,
    postalcode character varying(8) NOT NULL,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_default boolean NOT NULL
);
    DROP TABLE public.addresses;
       public         heap    postgres    false            �            1259    16728    addresses_addressid_seq    SEQUENCE     �   CREATE SEQUENCE public.addresses_addressid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.addresses_addressid_seq;
       public          postgres    false    222            �           0    0    addresses_addressid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.addresses_addressid_seq OWNED BY public.addresses.addressid;
          public          postgres    false    221            �            1259    25267    articles    TABLE     `  CREATE TABLE public.articles (
    article_id integer NOT NULL,
    category character varying(24),
    title character varying(255) NOT NULL,
    imglink character varying(255),
    imgalt character varying(255),
    author character varying(100) NOT NULL,
    published_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    content text
);
    DROP TABLE public.articles;
       public         heap    postgres    false            �            1259    25266    articles_article_id_seq    SEQUENCE     �   CREATE SEQUENCE public.articles_article_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.articles_article_id_seq;
       public          postgres    false    254            �           0    0    articles_article_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.articles_article_id_seq OWNED BY public.articles.article_id;
          public          postgres    false    253                        1259    41634    banners    TABLE     &  CREATE TABLE public.banners (
    bannerid integer NOT NULL,
    toptitle character varying(255) NOT NULL,
    middletitle character varying(255) NOT NULL,
    bottomtitle character varying(255) NOT NULL,
    imglink character varying(255) NOT NULL,
    startprice numeric(10,2) NOT NULL,
    buttontitle character varying(255) NOT NULL,
    redirect_link character varying(255) DEFAULT ''::character varying,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.banners;
       public         heap    postgres    false            �            1259    41633    banners_bannerid_seq    SEQUENCE     �   CREATE SEQUENCE public.banners_bannerid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.banners_bannerid_seq;
       public          postgres    false    256            �           0    0    banners_bannerid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.banners_bannerid_seq OWNED BY public.banners.bannerid;
          public          postgres    false    255            �            1259    25048 	   cartitems    TABLE     @  CREATE TABLE public.cartitems (
    cartitemid integer NOT NULL,
    userid integer,
    productid integer,
    quantity integer NOT NULL,
    sizeid integer,
    colorid integer,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.cartitems;
       public         heap    postgres    false            �            1259    25047    cartitems_cartitemid_seq    SEQUENCE     �   CREATE SEQUENCE public.cartitems_cartitemid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.cartitems_cartitemid_seq;
       public          postgres    false    240            �           0    0    cartitems_cartitemid_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.cartitems_cartitemid_seq OWNED BY public.cartitems.cartitemid;
          public          postgres    false    239            �            1259    16670 
   categories    TABLE     �   CREATE TABLE public.categories (
    categoryid integer NOT NULL,
    name character varying(50) NOT NULL,
    slug character varying(100) NOT NULL,
    maincategory character varying(15)
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    16669    categories_categoryid_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_categoryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.categories_categoryid_seq;
       public          postgres    false    218            �           0    0    categories_categoryid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.categories_categoryid_seq OWNED BY public.categories.categoryid;
          public          postgres    false    217                       1259    41654    contact_queries    TABLE     �   CREATE TABLE public.contact_queries (
    queryid integer NOT NULL,
    name character varying(255),
    email character varying(255),
    number character varying(10),
    method character varying(10),
    message text
);
 #   DROP TABLE public.contact_queries;
       public         heap    postgres    false                       1259    41653    contact_queries_queryid_seq    SEQUENCE     �   CREATE SEQUENCE public.contact_queries_queryid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.contact_queries_queryid_seq;
       public          postgres    false    260            �           0    0    contact_queries_queryid_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.contact_queries_queryid_seq OWNED BY public.contact_queries.queryid;
          public          postgres    false    259            �            1259    16888    coupons    TABLE     �  CREATE TABLE public.coupons (
    couponid integer NOT NULL,
    code character varying(50) NOT NULL,
    description text,
    discountpercentage numeric(5,2),
    maxdiscountamount numeric(10,2),
    minpurchaseamount numeric(10,2),
    validfrom timestamp without time zone,
    validuntil timestamp without time zone,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.coupons;
       public         heap    postgres    false            �            1259    16887    coupons_couponid_seq    SEQUENCE     �   CREATE SEQUENCE public.coupons_couponid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.coupons_couponid_seq;
       public          postgres    false    236            �           0    0    coupons_couponid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.coupons_couponid_seq OWNED BY public.coupons.couponid;
          public          postgres    false    235                       1259    41647    deals    TABLE     �   CREATE TABLE public.deals (
    dealid integer NOT NULL,
    productid integer NOT NULL,
    end_time timestamp without time zone NOT NULL,
    sold integer,
    available integer
);
    DROP TABLE public.deals;
       public         heap    postgres    false                       1259    41646    deals_dealid_seq    SEQUENCE     �   CREATE SEQUENCE public.deals_dealid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.deals_dealid_seq;
       public          postgres    false    258            �           0    0    deals_dealid_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.deals_dealid_seq OWNED BY public.deals.dealid;
          public          postgres    false    257            �            1259    16804 	   giftcards    TABLE     �  CREATE TABLE public.giftcards (
    cardid integer NOT NULL,
    cardname character varying(255) NOT NULL,
    cardcode character varying(100) NOT NULL,
    description text,
    balance numeric(10,2) NOT NULL,
    currency character varying(10) NOT NULL,
    expirydate date NOT NULL,
    recipientname character varying(100),
    recipientemail character varying(100),
    sendername character varying(100),
    senderemail character varying(100),
    message text,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    status character varying(50) DEFAULT 'Active'::character varying
);
    DROP TABLE public.giftcards;
       public         heap    postgres    false            �            1259    16803    giftcards_cardid_seq    SEQUENCE     �   CREATE SEQUENCE public.giftcards_cardid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.giftcards_cardid_seq;
       public          postgres    false    226            �           0    0    giftcards_cardid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.giftcards_cardid_seq OWNED BY public.giftcards.cardid;
          public          postgres    false    225            �            1259    25183 
   orderitems    TABLE     �   CREATE TABLE public.orderitems (
    orderitemid integer NOT NULL,
    orderid integer,
    productid integer,
    quantity integer,
    shippingid integer,
    paymentid integer,
    colorid integer,
    sizeid integer
);
    DROP TABLE public.orderitems;
       public         heap    postgres    false            �            1259    16696    orders    TABLE     t  CREATE TABLE public.orders (
    orderid integer NOT NULL,
    userid integer,
    totalamount numeric(10,2) NOT NULL,
    orderstatus character varying(50) DEFAULT 'Pending'::character varying,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    order_code character varying(4)
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    16695    orders_orderid_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_orderid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.orders_orderid_seq;
       public          postgres    false    220            �           0    0    orders_orderid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.orders_orderid_seq OWNED BY public.orders.orderid;
          public          postgres    false    219            �            1259    16840    payments    TABLE     �  CREATE TABLE public.payments (
    paymentid integer NOT NULL,
    orderid integer,
    paymentmethod character varying(100),
    paymentstatus character varying(50) DEFAULT 'Pending'::character varying,
    amount numeric(10,2) NOT NULL,
    transactionid character varying(100),
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    billingaddress integer,
    paymentgateway_id character varying(255)
);
    DROP TABLE public.payments;
       public         heap    postgres    false            �            1259    16839    payments_paymentid_seq    SEQUENCE     �   CREATE SEQUENCE public.payments_paymentid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.payments_paymentid_seq;
       public          postgres    false    230            �           0    0    payments_paymentid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.payments_paymentid_seq OWNED BY public.payments.paymentid;
          public          postgres    false    229            �            1259    25123    productcolors    TABLE     �   CREATE TABLE public.productcolors (
    colorid integer NOT NULL,
    productid integer,
    colorname character varying(50) NOT NULL,
    colorclass character varying(50)
);
 !   DROP TABLE public.productcolors;
       public         heap    postgres    false            �            1259    25122    productcolors_colorid_seq    SEQUENCE     �   CREATE SEQUENCE public.productcolors_colorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productcolors_colorid_seq;
       public          postgres    false    246            �           0    0    productcolors_colorid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.productcolors_colorid_seq OWNED BY public.productcolors.colorid;
          public          postgres    false    245            �            1259    25100    productimages    TABLE       CREATE TABLE public.productimages (
    imageid integer NOT NULL,
    productid integer,
    imglink character varying(255) NOT NULL,
    imgalt character varying(255),
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    isprimary boolean
);
 !   DROP TABLE public.productimages;
       public         heap    postgres    false            �            1259    25099    productimages_imageid_seq    SEQUENCE     �   CREATE SEQUENCE public.productimages_imageid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productimages_imageid_seq;
       public          postgres    false    244            �           0    0    productimages_imageid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.productimages_imageid_seq OWNED BY public.productimages.imageid;
          public          postgres    false    243            �            1259    25147    productparams    TABLE     �   CREATE TABLE public.productparams (
    productid integer NOT NULL,
    issale boolean,
    isnew boolean,
    isdiscount boolean,
    stars double precision,
    views integer DEFAULT 0,
    sold integer DEFAULT 0,
    rating integer DEFAULT 0
);
 !   DROP TABLE public.productparams;
       public         heap    postgres    false            �            1259    25146    productparams_productid_seq    SEQUENCE     �   CREATE SEQUENCE public.productparams_productid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.productparams_productid_seq;
       public          postgres    false    250            �           0    0    productparams_productid_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.productparams_productid_seq OWNED BY public.productparams.productid;
          public          postgres    false    249            �            1259    25068    products    TABLE     �  CREATE TABLE public.products (
    productid integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    categoryid integer,
    price numeric(10,2) NOT NULL,
    discount numeric(5,2),
    stock integer NOT NULL,
    tags character varying(255),
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    imgid character varying(50),
    seller_id integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    25067    products_productid_seq    SEQUENCE     �   CREATE SEQUENCE public.products_productid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.products_productid_seq;
       public          postgres    false    242            �           0    0    products_productid_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.products_productid_seq OWNED BY public.products.productid;
          public          postgres    false    241            �            1259    25135    productsizes    TABLE     �   CREATE TABLE public.productsizes (
    sizeid integer NOT NULL,
    productid integer,
    sizename character varying(10) NOT NULL,
    instock boolean NOT NULL
);
     DROP TABLE public.productsizes;
       public         heap    postgres    false            �            1259    25134    productsizes_sizeid_seq    SEQUENCE     �   CREATE SEQUENCE public.productsizes_sizeid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.productsizes_sizeid_seq;
       public          postgres    false    248            �           0    0    productsizes_sizeid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.productsizes_sizeid_seq OWNED BY public.productsizes.sizeid;
          public          postgres    false    247            �            1259    16781    reviews    TABLE     �  CREATE TABLE public.reviews (
    reviewid integer NOT NULL,
    userid integer NOT NULL,
    productid integer NOT NULL,
    rating double precision NOT NULL,
    comment text,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title character varying(50) NOT NULL,
    CONSTRAINT reviews_rating_check CHECK (((rating >= (1)::double precision) AND (rating <= (5)::double precision)))
);
    DROP TABLE public.reviews;
       public         heap    postgres    false            �            1259    16780    reviews_reviewid_seq    SEQUENCE     �   CREATE SEQUENCE public.reviews_reviewid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.reviews_reviewid_seq;
       public          postgres    false    224            �           0    0    reviews_reviewid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.reviews_reviewid_seq OWNED BY public.reviews.reviewid;
          public          postgres    false    223            �            1259    16874    savedpaymentcards    TABLE     �  CREATE TABLE public.savedpaymentcards (
    cardid integer NOT NULL,
    userid integer NOT NULL,
    cardnumber character varying(16) NOT NULL,
    cardholdername character varying(100) NOT NULL,
    expirymonth integer NOT NULL,
    expiryyear integer NOT NULL,
    cardtype character varying(50),
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 %   DROP TABLE public.savedpaymentcards;
       public         heap    postgres    false            �            1259    16873    savedpaymentcards_cardid_seq    SEQUENCE     �   CREATE SEQUENCE public.savedpaymentcards_cardid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.savedpaymentcards_cardid_seq;
       public          postgres    false    234            �           0    0    savedpaymentcards_cardid_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.savedpaymentcards_cardid_seq OWNED BY public.savedpaymentcards.cardid;
          public          postgres    false    233            �            1259    25220    sellers    TABLE     �  CREATE TABLE public.sellers (
    seller_id integer NOT NULL,
    name character varying(100),
    email character varying(100),
    password character varying(255),
    phone_number character varying(20),
    company_name character varying(255),
    tax_id character varying(50),
    registration_number character varying(50),
    store_url character varying(255),
    business_description text,
    profile_image_url character varying(255),
    join_date date,
    rating numeric(3,2),
    addressline1 character varying(255),
    addressline2 character varying(255),
    city character varying(100),
    state character varying(100),
    country character varying(100),
    postalcode character varying(20)
);
    DROP TABLE public.sellers;
       public         heap    postgres    false            �            1259    16820    shipping    TABLE     �  CREATE TABLE public.shipping (
    shippingid integer NOT NULL,
    orderid integer,
    addressid integer,
    shippingmethod character varying(100),
    shippingcost numeric(10,2),
    trackingnumber character varying(100),
    shippedat timestamp without time zone,
    deliveredat timestamp without time zone,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.shipping;
       public         heap    postgres    false            �            1259    16819    shipping_shippingid_seq    SEQUENCE     �   CREATE SEQUENCE public.shipping_shippingid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.shipping_shippingid_seq;
       public          postgres    false    228            �           0    0    shipping_shippingid_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.shipping_shippingid_seq OWNED BY public.shipping.shippingid;
          public          postgres    false    227            �            1259    16901    usercoupons    TABLE     5  CREATE TABLE public.usercoupons (
    usercouponid integer NOT NULL,
    userid integer NOT NULL,
    couponid integer NOT NULL,
    usedat timestamp without time zone,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.usercoupons;
       public         heap    postgres    false            �            1259    16900    usercoupons_usercouponid_seq    SEQUENCE     �   CREATE SEQUENCE public.usercoupons_usercouponid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.usercoupons_usercouponid_seq;
       public          postgres    false    238            �           0    0    usercoupons_usercouponid_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.usercoupons_usercouponid_seq OWNED BY public.usercoupons.usercouponid;
          public          postgres    false    237            �            1259    16641    users    TABLE     ^  CREATE TABLE public.users (
    userid integer NOT NULL,
    username character varying(64) NOT NULL,
    email character varying(128) NOT NULL,
    password character varying(255) NOT NULL,
    mobile_number character varying(10) NOT NULL,
    dob character varying(10) NOT NULL,
    creation_ip inet,
    role character varying(50) DEFAULT 'customer'::character varying,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_ip inet,
    otp character varying(4),
    promotional boolean
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16640    users_userid_seq    SEQUENCE     �   CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.users_userid_seq;
       public          postgres    false    216            �           0    0    users_userid_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;
          public          postgres    false    215            �            1259    16856    wishlistitems    TABLE     �   CREATE TABLE public.wishlistitems (
    wishlistitemid integer NOT NULL,
    userid integer NOT NULL,
    productid integer NOT NULL,
    addedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.wishlistitems;
       public         heap    postgres    false            �            1259    16855     wishlistitems_wishlistitemid_seq    SEQUENCE     �   CREATE SEQUENCE public.wishlistitems_wishlistitemid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.wishlistitems_wishlistitemid_seq;
       public          postgres    false    232            �           0    0     wishlistitems_wishlistitemid_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.wishlistitems_wishlistitemid_seq OWNED BY public.wishlistitems.wishlistitemid;
          public          postgres    false    231            �           2604    16732    addresses addressid    DEFAULT     z   ALTER TABLE ONLY public.addresses ALTER COLUMN addressid SET DEFAULT nextval('public.addresses_addressid_seq'::regclass);
 B   ALTER TABLE public.addresses ALTER COLUMN addressid DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    25270    articles article_id    DEFAULT     z   ALTER TABLE ONLY public.articles ALTER COLUMN article_id SET DEFAULT nextval('public.articles_article_id_seq'::regclass);
 B   ALTER TABLE public.articles ALTER COLUMN article_id DROP DEFAULT;
       public          postgres    false    253    254    254            �           2604    41637    banners bannerid    DEFAULT     t   ALTER TABLE ONLY public.banners ALTER COLUMN bannerid SET DEFAULT nextval('public.banners_bannerid_seq'::regclass);
 ?   ALTER TABLE public.banners ALTER COLUMN bannerid DROP DEFAULT;
       public          postgres    false    255    256    256            �           2604    25051    cartitems cartitemid    DEFAULT     |   ALTER TABLE ONLY public.cartitems ALTER COLUMN cartitemid SET DEFAULT nextval('public.cartitems_cartitemid_seq'::regclass);
 C   ALTER TABLE public.cartitems ALTER COLUMN cartitemid DROP DEFAULT;
       public          postgres    false    239    240    240            �           2604    16673    categories categoryid    DEFAULT     ~   ALTER TABLE ONLY public.categories ALTER COLUMN categoryid SET DEFAULT nextval('public.categories_categoryid_seq'::regclass);
 D   ALTER TABLE public.categories ALTER COLUMN categoryid DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    41657    contact_queries queryid    DEFAULT     �   ALTER TABLE ONLY public.contact_queries ALTER COLUMN queryid SET DEFAULT nextval('public.contact_queries_queryid_seq'::regclass);
 F   ALTER TABLE public.contact_queries ALTER COLUMN queryid DROP DEFAULT;
       public          postgres    false    259    260    260            �           2604    16891    coupons couponid    DEFAULT     t   ALTER TABLE ONLY public.coupons ALTER COLUMN couponid SET DEFAULT nextval('public.coupons_couponid_seq'::regclass);
 ?   ALTER TABLE public.coupons ALTER COLUMN couponid DROP DEFAULT;
       public          postgres    false    236    235    236            �           2604    41650    deals dealid    DEFAULT     l   ALTER TABLE ONLY public.deals ALTER COLUMN dealid SET DEFAULT nextval('public.deals_dealid_seq'::regclass);
 ;   ALTER TABLE public.deals ALTER COLUMN dealid DROP DEFAULT;
       public          postgres    false    258    257    258            �           2604    16807    giftcards cardid    DEFAULT     t   ALTER TABLE ONLY public.giftcards ALTER COLUMN cardid SET DEFAULT nextval('public.giftcards_cardid_seq'::regclass);
 ?   ALTER TABLE public.giftcards ALTER COLUMN cardid DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    16699    orders orderid    DEFAULT     p   ALTER TABLE ONLY public.orders ALTER COLUMN orderid SET DEFAULT nextval('public.orders_orderid_seq'::regclass);
 =   ALTER TABLE public.orders ALTER COLUMN orderid DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    16843    payments paymentid    DEFAULT     x   ALTER TABLE ONLY public.payments ALTER COLUMN paymentid SET DEFAULT nextval('public.payments_paymentid_seq'::regclass);
 A   ALTER TABLE public.payments ALTER COLUMN paymentid DROP DEFAULT;
       public          postgres    false    229    230    230            �           2604    25126    productcolors colorid    DEFAULT     ~   ALTER TABLE ONLY public.productcolors ALTER COLUMN colorid SET DEFAULT nextval('public.productcolors_colorid_seq'::regclass);
 D   ALTER TABLE public.productcolors ALTER COLUMN colorid DROP DEFAULT;
       public          postgres    false    245    246    246            �           2604    25103    productimages imageid    DEFAULT     ~   ALTER TABLE ONLY public.productimages ALTER COLUMN imageid SET DEFAULT nextval('public.productimages_imageid_seq'::regclass);
 D   ALTER TABLE public.productimages ALTER COLUMN imageid DROP DEFAULT;
       public          postgres    false    244    243    244            �           2604    25150    productparams productid    DEFAULT     �   ALTER TABLE ONLY public.productparams ALTER COLUMN productid SET DEFAULT nextval('public.productparams_productid_seq'::regclass);
 F   ALTER TABLE public.productparams ALTER COLUMN productid DROP DEFAULT;
       public          postgres    false    249    250    250            �           2604    25071    products productid    DEFAULT     x   ALTER TABLE ONLY public.products ALTER COLUMN productid SET DEFAULT nextval('public.products_productid_seq'::regclass);
 A   ALTER TABLE public.products ALTER COLUMN productid DROP DEFAULT;
       public          postgres    false    242    241    242            �           2604    25138    productsizes sizeid    DEFAULT     z   ALTER TABLE ONLY public.productsizes ALTER COLUMN sizeid SET DEFAULT nextval('public.productsizes_sizeid_seq'::regclass);
 B   ALTER TABLE public.productsizes ALTER COLUMN sizeid DROP DEFAULT;
       public          postgres    false    247    248    248            �           2604    16784    reviews reviewid    DEFAULT     t   ALTER TABLE ONLY public.reviews ALTER COLUMN reviewid SET DEFAULT nextval('public.reviews_reviewid_seq'::regclass);
 ?   ALTER TABLE public.reviews ALTER COLUMN reviewid DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    16877    savedpaymentcards cardid    DEFAULT     �   ALTER TABLE ONLY public.savedpaymentcards ALTER COLUMN cardid SET DEFAULT nextval('public.savedpaymentcards_cardid_seq'::regclass);
 G   ALTER TABLE public.savedpaymentcards ALTER COLUMN cardid DROP DEFAULT;
       public          postgres    false    234    233    234            �           2604    16823    shipping shippingid    DEFAULT     z   ALTER TABLE ONLY public.shipping ALTER COLUMN shippingid SET DEFAULT nextval('public.shipping_shippingid_seq'::regclass);
 B   ALTER TABLE public.shipping ALTER COLUMN shippingid DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    16904    usercoupons usercouponid    DEFAULT     �   ALTER TABLE ONLY public.usercoupons ALTER COLUMN usercouponid SET DEFAULT nextval('public.usercoupons_usercouponid_seq'::regclass);
 G   ALTER TABLE public.usercoupons ALTER COLUMN usercouponid DROP DEFAULT;
       public          postgres    false    238    237    238            �           2604    16644    users userid    DEFAULT     l   ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);
 ;   ALTER TABLE public.users ALTER COLUMN userid DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    16859    wishlistitems wishlistitemid    DEFAULT     �   ALTER TABLE ONLY public.wishlistitems ALTER COLUMN wishlistitemid SET DEFAULT nextval('public.wishlistitems_wishlistitemid_seq'::regclass);
 K   ALTER TABLE public.wishlistitems ALTER COLUMN wishlistitemid DROP DEFAULT;
       public          postgres    false    231    232    232            �          0    16729 	   addresses 
   TABLE DATA           �   COPY public.addresses (addressid, userid, addresstype, username, contactnumber, addressline1, addressline2, city, state, country, postalcode, createdat, updatedat, is_default) FROM stdin;
    public          postgres    false    222   �      �          0    25267    articles 
   TABLE DATA           q   COPY public.articles (article_id, category, title, imglink, imgalt, author, published_date, content) FROM stdin;
    public          postgres    false    254   }	      �          0    41634    banners 
   TABLE DATA           �   COPY public.banners (bannerid, toptitle, middletitle, bottomtitle, imglink, startprice, buttontitle, redirect_link, createdat, updatedat) FROM stdin;
    public          postgres    false    256         �          0    25048 	   cartitems 
   TABLE DATA           s   COPY public.cartitems (cartitemid, userid, productid, quantity, sizeid, colorid, createdat, updatedat) FROM stdin;
    public          postgres    false    240         �          0    16670 
   categories 
   TABLE DATA           J   COPY public.categories (categoryid, name, slug, maincategory) FROM stdin;
    public          postgres    false    218   v      �          0    41654    contact_queries 
   TABLE DATA           X   COPY public.contact_queries (queryid, name, email, number, method, message) FROM stdin;
    public          postgres    false    260   �      �          0    16888    coupons 
   TABLE DATA           �   COPY public.coupons (couponid, code, description, discountpercentage, maxdiscountamount, minpurchaseamount, validfrom, validuntil, createdat, updatedat) FROM stdin;
    public          postgres    false    236   �      �          0    41647    deals 
   TABLE DATA           M   COPY public.deals (dealid, productid, end_time, sold, available) FROM stdin;
    public          postgres    false    258         �          0    16804 	   giftcards 
   TABLE DATA           �   COPY public.giftcards (cardid, cardname, cardcode, description, balance, currency, expirydate, recipientname, recipientemail, sendername, senderemail, message, createdat, updatedat, status) FROM stdin;
    public          postgres    false    226   f      �          0    25183 
   orderitems 
   TABLE DATA           w   COPY public.orderitems (orderitemid, orderid, productid, quantity, shippingid, paymentid, colorid, sizeid) FROM stdin;
    public          postgres    false    251   �      �          0    16696    orders 
   TABLE DATA           m   COPY public.orders (orderid, userid, totalamount, orderstatus, createdat, updatedat, order_code) FROM stdin;
    public          postgres    false    220   �      �          0    16840    payments 
   TABLE DATA           �   COPY public.payments (paymentid, orderid, paymentmethod, paymentstatus, amount, transactionid, createdat, updatedat, billingaddress, paymentgateway_id) FROM stdin;
    public          postgres    false    230   D      �          0    25123    productcolors 
   TABLE DATA           R   COPY public.productcolors (colorid, productid, colorname, colorclass) FROM stdin;
    public          postgres    false    246   �      �          0    25100    productimages 
   TABLE DATA           b   COPY public.productimages (imageid, productid, imglink, imgalt, createdat, isprimary) FROM stdin;
    public          postgres    false    244   �      �          0    25147    productparams 
   TABLE DATA           i   COPY public.productparams (productid, issale, isnew, isdiscount, stars, views, sold, rating) FROM stdin;
    public          postgres    false    250   �!      �          0    25068    products 
   TABLE DATA           �   COPY public.products (productid, title, description, categoryid, price, discount, stock, tags, createdat, updatedat, imgid, seller_id) FROM stdin;
    public          postgres    false    242   �"      �          0    25135    productsizes 
   TABLE DATA           L   COPY public.productsizes (sizeid, productid, sizename, instock) FROM stdin;
    public          postgres    false    248   �*      �          0    16781    reviews 
   TABLE DATA           l   COPY public.reviews (reviewid, userid, productid, rating, comment, createdat, updatedat, title) FROM stdin;
    public          postgres    false    224   G,      �          0    16874    savedpaymentcards 
   TABLE DATA           �   COPY public.savedpaymentcards (cardid, userid, cardnumber, cardholdername, expirymonth, expiryyear, cardtype, createdat, updatedat) FROM stdin;
    public          postgres    false    234   d,      �          0    25220    sellers 
   TABLE DATA             COPY public.sellers (seller_id, name, email, password, phone_number, company_name, tax_id, registration_number, store_url, business_description, profile_image_url, join_date, rating, addressline1, addressline2, city, state, country, postalcode) FROM stdin;
    public          postgres    false    252   �,      �          0    16820    shipping 
   TABLE DATA           �   COPY public.shipping (shippingid, orderid, addressid, shippingmethod, shippingcost, trackingnumber, shippedat, deliveredat, createdat, updatedat) FROM stdin;
    public          postgres    false    228   <.      �          0    16901    usercoupons 
   TABLE DATA           c   COPY public.usercoupons (usercouponid, userid, couponid, usedat, createdat, updatedat) FROM stdin;
    public          postgres    false    238   �.      �          0    16641    users 
   TABLE DATA           �   COPY public.users (userid, username, email, password, mobile_number, dob, creation_ip, role, createdat, updatedat, update_ip, otp, promotional) FROM stdin;
    public          postgres    false    216   H/      �          0    16856    wishlistitems 
   TABLE DATA           S   COPY public.wishlistitems (wishlistitemid, userid, productid, addedat) FROM stdin;
    public          postgres    false    232   
0      �           0    0    addresses_addressid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.addresses_addressid_seq', 1, true);
          public          postgres    false    221            �           0    0    articles_article_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.articles_article_id_seq', 1, false);
          public          postgres    false    253            �           0    0    banners_bannerid_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.banners_bannerid_seq', 1, false);
          public          postgres    false    255            �           0    0    cartitems_cartitemid_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.cartitems_cartitemid_seq', 1, false);
          public          postgres    false    239            �           0    0    categories_categoryid_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categories_categoryid_seq', 1, false);
          public          postgres    false    217            �           0    0    contact_queries_queryid_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.contact_queries_queryid_seq', 1, false);
          public          postgres    false    259            �           0    0    coupons_couponid_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.coupons_couponid_seq', 1, false);
          public          postgres    false    235                        0    0    deals_dealid_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.deals_dealid_seq', 2, true);
          public          postgres    false    257                       0    0    giftcards_cardid_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.giftcards_cardid_seq', 1, false);
          public          postgres    false    225                       0    0    orders_orderid_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orders_orderid_seq', 1, false);
          public          postgres    false    219                       0    0    payments_paymentid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.payments_paymentid_seq', 1, false);
          public          postgres    false    229                       0    0    productcolors_colorid_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.productcolors_colorid_seq', 1, false);
          public          postgres    false    245                       0    0    productimages_imageid_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.productimages_imageid_seq', 1, false);
          public          postgres    false    243                       0    0    productparams_productid_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.productparams_productid_seq', 1, false);
          public          postgres    false    249                       0    0    products_productid_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.products_productid_seq', 1, false);
          public          postgres    false    241                       0    0    productsizes_sizeid_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.productsizes_sizeid_seq', 1, false);
          public          postgres    false    247            	           0    0    reviews_reviewid_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.reviews_reviewid_seq', 1, false);
          public          postgres    false    223            
           0    0    savedpaymentcards_cardid_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.savedpaymentcards_cardid_seq', 1, false);
          public          postgres    false    233                       0    0    shipping_shippingid_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.shipping_shippingid_seq', 1, false);
          public          postgres    false    227                       0    0    usercoupons_usercouponid_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.usercoupons_usercouponid_seq', 1, false);
          public          postgres    false    237                       0    0    users_userid_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_userid_seq', 1, false);
          public          postgres    false    215                       0    0     wishlistitems_wishlistitemid_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.wishlistitems_wishlistitemid_seq', 1, false);
          public          postgres    false    231            �           2606    16738    addresses addresses_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (addressid);
 B   ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_pkey;
       public            postgres    false    222            �           2606    25275    articles articles_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (article_id);
 @   ALTER TABLE ONLY public.articles DROP CONSTRAINT articles_pkey;
       public            postgres    false    254            �           2606    41644    banners banners_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.banners
    ADD CONSTRAINT banners_pkey PRIMARY KEY (bannerid);
 >   ALTER TABLE ONLY public.banners DROP CONSTRAINT banners_pkey;
       public            postgres    false    256            �           2606    25055    cartitems cartitems_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.cartitems
    ADD CONSTRAINT cartitems_pkey PRIMARY KEY (cartitemid);
 B   ALTER TABLE ONLY public.cartitems DROP CONSTRAINT cartitems_pkey;
       public            postgres    false    240            �           2606    16675    categories categories_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (categoryid);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    218            �           2606    16679    categories categories_slug_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_slug_key UNIQUE (slug);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_slug_key;
       public            postgres    false    218                       2606    41661 $   contact_queries contact_queries_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.contact_queries
    ADD CONSTRAINT contact_queries_pkey PRIMARY KEY (queryid);
 N   ALTER TABLE ONLY public.contact_queries DROP CONSTRAINT contact_queries_pkey;
       public            postgres    false    260            �           2606    16899    coupons coupons_code_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_code_key UNIQUE (code);
 B   ALTER TABLE ONLY public.coupons DROP CONSTRAINT coupons_code_key;
       public            postgres    false    236            �           2606    16897    coupons coupons_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_pkey PRIMARY KEY (couponid);
 >   ALTER TABLE ONLY public.coupons DROP CONSTRAINT coupons_pkey;
       public            postgres    false    236            �           2606    41652    deals deals_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.deals
    ADD CONSTRAINT deals_pkey PRIMARY KEY (dealid);
 :   ALTER TABLE ONLY public.deals DROP CONSTRAINT deals_pkey;
       public            postgres    false    258            �           2606    16816     giftcards giftcards_cardcode_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.giftcards
    ADD CONSTRAINT giftcards_cardcode_key UNIQUE (cardcode);
 J   ALTER TABLE ONLY public.giftcards DROP CONSTRAINT giftcards_cardcode_key;
       public            postgres    false    226            �           2606    16814    giftcards giftcards_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.giftcards
    ADD CONSTRAINT giftcards_pkey PRIMARY KEY (cardid);
 B   ALTER TABLE ONLY public.giftcards DROP CONSTRAINT giftcards_pkey;
       public            postgres    false    226            �           2606    25187    orderitems orderitems_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_pkey PRIMARY KEY (orderitemid);
 D   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_pkey;
       public            postgres    false    251            �           2606    16704    orders orders_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (orderid);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    220            �           2606    16848    payments payments_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (paymentid);
 @   ALTER TABLE ONLY public.payments DROP CONSTRAINT payments_pkey;
       public            postgres    false    230            �           2606    25128     productcolors productcolors_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.productcolors
    ADD CONSTRAINT productcolors_pkey PRIMARY KEY (colorid);
 J   ALTER TABLE ONLY public.productcolors DROP CONSTRAINT productcolors_pkey;
       public            postgres    false    246            �           2606    25108     productimages productimages_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.productimages
    ADD CONSTRAINT productimages_pkey PRIMARY KEY (imageid);
 J   ALTER TABLE ONLY public.productimages DROP CONSTRAINT productimages_pkey;
       public            postgres    false    244            �           2606    25152     productparams productparams_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.productparams
    ADD CONSTRAINT productparams_pkey PRIMARY KEY (productid);
 J   ALTER TABLE ONLY public.productparams DROP CONSTRAINT productparams_pkey;
       public            postgres    false    250            �           2606    25077    products products_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (productid);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    242            �           2606    25140    productsizes productsizes_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.productsizes
    ADD CONSTRAINT productsizes_pkey PRIMARY KEY (sizeid);
 H   ALTER TABLE ONLY public.productsizes DROP CONSTRAINT productsizes_pkey;
       public            postgres    false    248            �           2606    16791    reviews reviews_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (reviewid);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    224            �           2606    16881 (   savedpaymentcards savedpaymentcards_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.savedpaymentcards
    ADD CONSTRAINT savedpaymentcards_pkey PRIMARY KEY (cardid);
 R   ALTER TABLE ONLY public.savedpaymentcards DROP CONSTRAINT savedpaymentcards_pkey;
       public            postgres    false    234            �           2606    25226    sellers sellers_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.sellers
    ADD CONSTRAINT sellers_pkey PRIMARY KEY (seller_id);
 >   ALTER TABLE ONLY public.sellers DROP CONSTRAINT sellers_pkey;
       public            postgres    false    252            �           2606    16827    shipping shipping_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.shipping
    ADD CONSTRAINT shipping_pkey PRIMARY KEY (shippingid);
 @   ALTER TABLE ONLY public.shipping DROP CONSTRAINT shipping_pkey;
       public            postgres    false    228            �           2606    16908    usercoupons usercoupons_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.usercoupons
    ADD CONSTRAINT usercoupons_pkey PRIMARY KEY (usercouponid);
 F   ALTER TABLE ONLY public.usercoupons DROP CONSTRAINT usercoupons_pkey;
       public            postgres    false    238            �           2606    41746    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    41748    users users_mobile_number_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_mobile_number_key UNIQUE (mobile_number);
 G   ALTER TABLE ONLY public.users DROP CONSTRAINT users_mobile_number_key;
       public            postgres    false    216            �           2606    16651    users users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    16862     wishlistitems wishlistitems_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.wishlistitems
    ADD CONSTRAINT wishlistitems_pkey PRIMARY KEY (wishlistitemid);
 J   ALTER TABLE ONLY public.wishlistitems DROP CONSTRAINT wishlistitems_pkey;
       public            postgres    false    232                       2620    16744 *   addresses update_address_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_address_updatedat_trigger BEFORE UPDATE ON public.addresses FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 C   DROP TRIGGER update_address_updatedat_trigger ON public.addresses;
       public          postgres    false    261    222                       2620    25066 +   cartitems update_cartitem_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_cartitem_updatedat_trigger BEFORE UPDATE ON public.cartitems FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 D   DROP TRIGGER update_cartitem_updatedat_trigger ON public.cartitems;
       public          postgres    false    261    240                       2620    16817 +   giftcards update_giftcard_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_giftcard_updatedat_trigger BEFORE UPDATE ON public.giftcards FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 D   DROP TRIGGER update_giftcard_updatedat_trigger ON public.giftcards;
       public          postgres    false    226    261                       2620    16710 %   orders update_order_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_order_updatedat_trigger BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 >   DROP TRIGGER update_order_updatedat_trigger ON public.orders;
       public          postgres    false    261    220                       2620    16854 )   payments update_payment_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_payment_updatedat_trigger BEFORE UPDATE ON public.payments FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 B   DROP TRIGGER update_payment_updatedat_trigger ON public.payments;
       public          postgres    false    230    261                       2620    25078 )   products update_product_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_product_updatedat_trigger BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 B   DROP TRIGGER update_product_updatedat_trigger ON public.products;
       public          postgres    false    242    261                       2620    16802 '   reviews update_review_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_review_updatedat_trigger BEFORE UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 @   DROP TRIGGER update_review_updatedat_trigger ON public.reviews;
       public          postgres    false    224    261                       2620    16838 *   shipping update_shipping_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_shipping_updatedat_trigger BEFORE UPDATE ON public.shipping FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 C   DROP TRIGGER update_shipping_updatedat_trigger ON public.shipping;
       public          postgres    false    228    261                       2620    41645     banners update_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_updatedat_trigger BEFORE UPDATE ON public.banners FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 9   DROP TRIGGER update_updatedat_trigger ON public.banners;
       public          postgres    false    256    261                       2620    16656    users update_updatedat_trigger    TRIGGER     �   CREATE TRIGGER update_updatedat_trigger BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.update_updatedat_column();
 7   DROP TRIGGER update_updatedat_trigger ON public.users;
       public          postgres    false    261    216                       2606    16739    addresses addresses_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_userid_fkey;
       public          postgres    false    4813    216    222                       2606    25094 "   cartitems cartitems_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cartitems
    ADD CONSTRAINT cartitems_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid) ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.cartitems DROP CONSTRAINT cartitems_productid_fkey;
       public          postgres    false    242    4845    240                       2606    25056    cartitems cartitems_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cartitems
    ADD CONSTRAINT cartitems_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.cartitems DROP CONSTRAINT cartitems_userid_fkey;
       public          postgres    false    216    240    4813                       2606    25188 "   orderitems orderitems_orderid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.orders(orderid);
 L   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_orderid_fkey;
       public          postgres    false    251    220    4819                       2606    25193 $   orderitems orderitems_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid);
 N   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_productid_fkey;
       public          postgres    false    251    4845    242                       2606    16705    orders orders_userid_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid);
 C   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_userid_fkey;
       public          postgres    false    220    216    4813                       2606    16849    payments payments_orderid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.orders(orderid) ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.payments DROP CONSTRAINT payments_orderid_fkey;
       public          postgres    false    220    230    4819                       2606    25129 *   productcolors productcolors_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productcolors
    ADD CONSTRAINT productcolors_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.productcolors DROP CONSTRAINT productcolors_productid_fkey;
       public          postgres    false    4845    242    246                       2606    25109 *   productimages productimages_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productimages
    ADD CONSTRAINT productimages_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.productimages DROP CONSTRAINT productimages_productid_fkey;
       public          postgres    false    242    4845    244                       2606    25141 (   productsizes productsizes_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productsizes
    ADD CONSTRAINT productsizes_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.productsizes DROP CONSTRAINT productsizes_productid_fkey;
       public          postgres    false    242    248    4845                       2606    25084    reviews reviews_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid) ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_productid_fkey;
       public          postgres    false    242    224    4845                       2606    16792    reviews reviews_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid) ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_userid_fkey;
       public          postgres    false    4813    224    216                       2606    16882 /   savedpaymentcards savedpaymentcards_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.savedpaymentcards
    ADD CONSTRAINT savedpaymentcards_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid);
 Y   ALTER TABLE ONLY public.savedpaymentcards DROP CONSTRAINT savedpaymentcards_userid_fkey;
       public          postgres    false    216    4813    234                       2606    16833     shipping shipping_addressid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.shipping
    ADD CONSTRAINT shipping_addressid_fkey FOREIGN KEY (addressid) REFERENCES public.addresses(addressid) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.shipping DROP CONSTRAINT shipping_addressid_fkey;
       public          postgres    false    222    228    4821                       2606    16828    shipping shipping_orderid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.shipping
    ADD CONSTRAINT shipping_orderid_fkey FOREIGN KEY (orderid) REFERENCES public.orders(orderid) ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.shipping DROP CONSTRAINT shipping_orderid_fkey;
       public          postgres    false    4819    228    220                       2606    16914 %   usercoupons usercoupons_couponid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usercoupons
    ADD CONSTRAINT usercoupons_couponid_fkey FOREIGN KEY (couponid) REFERENCES public.coupons(couponid);
 O   ALTER TABLE ONLY public.usercoupons DROP CONSTRAINT usercoupons_couponid_fkey;
       public          postgres    false    4839    238    236                       2606    16909 #   usercoupons usercoupons_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usercoupons
    ADD CONSTRAINT usercoupons_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid);
 M   ALTER TABLE ONLY public.usercoupons DROP CONSTRAINT usercoupons_userid_fkey;
       public          postgres    false    216    4813    238            	           2606    25089 *   wishlistitems wishlistitems_productid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wishlistitems
    ADD CONSTRAINT wishlistitems_productid_fkey FOREIGN KEY (productid) REFERENCES public.products(productid) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.wishlistitems DROP CONSTRAINT wishlistitems_productid_fkey;
       public          postgres    false    242    4845    232            
           2606    16863 '   wishlistitems wishlistitems_userid_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.wishlistitems
    ADD CONSTRAINT wishlistitems_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid);
 Q   ALTER TABLE ONLY public.wishlistitems DROP CONSTRAINT wishlistitems_userid_fkey;
       public          postgres    false    4813    232    216            �   �   x�-ɱj�0����7�`�;U:�^C�d0)	t�rm(�QB޾������8�lAD\g]/�;�[8�|NW��?�#�g���e�kd<|�)e<j�}�)��>G��,���b�q��k�
qZg^��n����G�zѬ����9(X"rې4�#���@ܒ7o����aA������{�I�T�mUU��9]      �   �  x��W�r�F<S_���]ER"��ś��8�HU�rYC`��.�� �����|Iz E�J�|�Hb3=�݃�蝎��n���TRT?S�ƪ���j~<��o��Z���%o(k�YS�)�qqt���6&�Q�D������#���P櫊BF�-�It�c��L��GK��l�{]�
l]�)���U�8��O����b�zqv>���\�]��s
!��u�2���`s�Wj�e��d3V��)Ĥ]n\��OY�%���Ԫ�R���H��t�!���Ke��B�m�<�5o�M�Q�S�J���<D�+���Ju��\����І��+�0	�YUQ
&�x�����,iNS��7���� 	EN�bK�r,>� ���������+ք�8?�^��U�=�����ܠ��0����P���j=�H�����+V�#����#��٤@.�cl�Rc�*�qJg|�^ZN!��L �#�RJ��L��A'*�9e&bä��`�|�Le� �HVB�]�����X-=�^�BJKcMj���7CG�V
G�p��(�S����CP�o���^�� y���Xz��w�QhZUe%g�K��~�'�Isr>�N�ť�����d����X�bx��V�m�y�cf����JC�F�VEʸq�,��4��6�u+�Y�o��O��ϻF�M��tJ���<�w��{r����{z"���������d.��sd9�4�uFy/	蔵	���gWw�:*�t(�^37]�D譂��R'$�gr��cj-M�Á�>�Cn�5vŮ�&9�8�z�@�[�u���ai�k朴��"��4߻� �P[��ߢ�YW�Vw��*��iD���������d��;pG�'D�h��k���͞��c�dSz$2]�8k]BO�w2��'�|��m2�4c� ^>�*���WP�IB�O���?��� I�� �����ILTP�8C�	��Xj��Al�WhM@6ÓN\Jgt�ڻ�l^6F��!���nJ����Uh�����hS�_y�M�:� o�_^���^����$��Q��@{���ħD�/Nf�W������n���c�����h2c��}����2F�ED\_]���˱���^s�ו��!����Iם'�-s���!�|&��\e��
!\���0ļ��{& W��_�-+�������|S� ��'w\�#ƞ���莈3��5S�U�EK�vax���ZL>��A�#b��tBD DEo�]�~�h���p ���Q��������i�$q\Y��ؤNw�ۡ�~aY%��k��yh�@u�'�_ӝ�\ש~�a�C������|^6B1�"�.<VG�R�#��؂�՞,�����x��v��[9Ϟ���9#Ҡ����Ef09�>�"G���p������+�?����������tv6��6v�a�ޟ�P$��G�M<��5�OvR��L}ɱr��q^�f�m�|��o���3.N�Rŗ����CFv��ny~ٳ������h�w�Om}��컔eQ��a�����4��vo��r<�fqթ���T�J��]��������M�(�+K��O �Orw)�-]��&I(�[x�/�ugҎ�}=�'^��n.��(!���H��h��:y�������Ǧ�      �   �   x���=o�0�g�+<d�@h��%R�6R�Kp��w��_h��l�{ox�{4{Kz�D��{���%@�G�������M��Y�;6M�H��G#�@�4��EiC9t�{H����EB� ekC��k�9�PB)v��Oqar]U�r��R;jT-L]�R���5:�c����u��d/kϴ��a�n%��<�7���Oɶ����;�r�2o]����qc�1g�Y�}�a�_      �   P   x�M���@D�3Ta�X\j��:4ƃ����`!$�"7e%�V���e~p��@�kT�9A�����ƉL��k��"+s      �   0  x�UVKO3I<�_��W�p?|���C�]��^��?���D(�~�� ���q��r��xm���&�E��H4��B7��ۻ���>��� 0�cp�Sӑ���Pk�!DK�i��פ��J�@0���&�u���-�O
�.�S ����#�]���;�����H<�rʉ�t��n)�dOy[	xml��
y��(. ���׷��˅u�ǏnJ�����g<�'�Ql|��\�n8��S=��(��0ua�*���l]����l�1wdT��H�4�ϱ�I���G +_�0' [弋��9�����<e��2dqh��tզf�gd52f�O�������f�v�iYmI� �􏍢����ƥ�8�%*�8����Q���<�\�i���yeݏ�F�������i��v�|td��8���[�ĀݲY-��e�0"�!{��1���Yj�,�1��P��ـ�h�n�5�e��ȶ����n�*5��)���6H!B� u���i#L��g����X��Z4$NBd����U��yD�WP�9�� uO��kU
�������a�z7�@>�,�@���w��d���i�C�	d�P=ߡP_�(�K�h��C�̛���bMH"�w���U�H�&��ż��'���(F�n���3��*�%�bp����ߛ���<N?��������LJZQ����~�&��&b '�v�E[��8>�xK�i���KB'�s�z���G˲�U��F���;T��w��-�g/�V?y������4ݴ͹!Lj��~��0�p��E3���4}T[�y84ü ���}��
����4���/O��x�%��iUQ�8�6���B3��B��+��,�g|2������S����y(��w�6��j^�L�Ƃ"u�&���|��oi=��U�E�:�*[w���S ��ϋ�
���+o�Kjg���>��>��q�P6�)x��0�����Ӷ�1l8��Α�c7\��<w����cD5=�^n�~��]u��\fn�����њ�f%5;�e��-vd� .��a�,
N����E��n�wS��<�D�?��R@���������=Bw��L���;2�Q��2P�[ک ��.�}e9����������\��s>,ƌ�O�@{�?L�!��WL�9�H�ں)�Ȟ��z�;�N��G`&`S}�����#��Fջoq���Cd��v�� (��u�0x���n!ʅ���p'�T���e�:,l�p�c��(y#�Xa�e�Rp��ZP��u�`n�`��-P@�f��������\�������2q�      �      x������ � �      �   3  x���aK�0���S�L�m�SߩiHi������<)�}sw�z^�L�O܏�?���8R�@��~_�8+���
 	V
�5�L�(p�s��L}G�c�n��-��<JN���>%'諸oˮ�Ș�씏�_��
A�f]����e3z&�lie�i�\D�G�t�8l�uD	9����j�&y>_1	�/O�&y���ѕ[��xm��þ���dZ�g�b��!3[i����]2��ó,3�e�h�i�G �Ș�m)��*3Q�Eপ����E]���꥗��]-J��*z�5M�<;��      �   @   x�=ʱ !D����e�����@�gBT��0:V76�H@,ġ��b4��(D:CU?$�i      �   %  x����r�0���)�;hlSH�SdHR&�Z&3�,���ؒGIx�J2���^�0;�������ж�q��l8N�(��n����O��Z>�-l�F��)X���"l���:d�s��(�Q�~������I�����*�Q��T�+��3U��Z¬r��R-����bU��a
!׾? �PZ4Vd���kE�nC_�..��������Rif�3��J�mP�@�����ޑxw�#*i��R�T���#q�1� Ɗ� ܡ����x�� �	S׷�?o��(������o����0~���WJ7�>	�K2P�`6u���9&p �0�
���ו(�0*Q?1�1�|| "r�v�W�Ð�Mk��t 9��{vU�7[�|���1#t�a����Iӆ�ʽ�)�AR��*��+�����f��Z�C�n24��d�����'�a�����o�t �:E�M4���O�iL~��b����`S��w���v�WN:��&��2*�;5�c�|GsܖJ�-�!<�S�W
f��g�H:��ߊ߼�j�%���      �   <   x�E���0�7��s/(���iw��,'9M�ai@�2j)��~wǨO      �   M   x�34347357�43R&��f��z���yi�E��)�FF&�溆�
�fV&V�z�F����<��b���� ���      �   �   x�}̱
�0�����@�]z��t��]����T������&��$��T�����x���a@���)&���K��D��Q=銤ekɂʲ��8/G#�i87�zx�F�\J����z|��N�9���%&      �   �  x����r�0�g�)��b�/+CY9:t��KsuI/@9޾��Òߑ�,��$S��"��3�Ţ��{���6&̊4M� �����B&�! ���=*�M  w�B��p�I�E
D`@�}s1��>R:$�G�@j��o�!>m"d�H���L=(TH�E �,c���Sr���O��8��c�V�V[��j�����Q��O1n� RL��"6� 0�*��"6��;�pg�N,�7H����g>w �vo��ŧ�d��͍�����e�v����yEJ���]���yV9�­ԂòWN�Wi.8����,"I*�e��^���$C�i�H������*�	��ʘTIR1D(2����u�9��b��[�p��J7�v�����-��>��] ���A=ї��o���q�(������v�C*��n��7�����I�����      �   !  x���K��F�Ϟ_Q�͉G�m��<veVh�j��1��v�v{	�>e�fW��`��,���U_���C��ok�>��Z�A�m.ֈ���U_���T��X�)�{\���@�9�| S��|��j]���E�;4�����x��尔�A��0[�9�v���C�Qo��|2&}NF��Nx�^������n^h��B���;�n�1*�Ey���>r��U��_���!A��$�}��V1�w�'�2��9�%�B�J��Z��Q�%,vc`�&�
{�Ov�yAdt+���L�C�_���l#b]����u���",ˏl}�\��}���F���X�B[�?��Γ�B��� �ˑ.��[���-��sX��m�:!��â嗚�>6$�����+ml�>k��d���TdYy:zp*����C'�8�-�˶�W[J�e{i�hF����*�34e�g"�q3��g���WMu�ӕ�2��O7��
�&�o�ܢ;�d���9��p�>����!��� ��~�:�ʖ��ӕVp���d��m(}K�;����^f`1�L8��	�3�����^=�4��,��(���7PF�2rC�wB9��c7ݓ�����;��7ڬ�g��p���rK?҂�_���R~��H��X�F�i�c�G�Hk$ֵ��pV�8���D���ʈu-��Z��ܓ�D��<W�R)�%�w`Q�I�FȤ��Z@մi�e�I��ʇu-�j�}��6n�tV:�k�T��.ۀh�ú6�0IPm-��;��!�|�r����b�R��a]�f���"Ū{Ӳ�m/�m���-�U�Z1+L̿�剖��U�0��� Z����#���D�)|�:���xN�<Q�lj�»�KU7��clz���g��;��V�{�*��L�C��F��,k�!ZZ�����S]�f*�EG%k�S+�{�5���_����-g=���J���V���)��qE?�F���-��)|Rj-iXx�Iy�C�T�O��<c�|�'�gS����J����ss�\�s      �   �   x�m�I� D�x��w�kO����R7���Z$"�p��.
R_ڄ���y��Ǎ��؛�=���M�����ӧ�Ҷ�%�!�E�9�`{�!���|a��o��-�X��%��<�%V/?ņ%K�d,)P�ifL+���%K
��X��p��/�������<Ӗ�=t��$�TE��z�,��k>�n�Q�]��߾m�hڛ_      �   �  x��X]s۶}f~�z_h	 �:���4�婧��Pd�"U�����.v�m5	o�z&N�]�� �qv�4��$>��gU3�����a����T.������ş����ۓRMJ쿨�Vm�6�	�Vu+��m�d{R��L���e���� ������И��P[x�Ӌ(����+^\��%�̒s�8��$iL�nw�b����A-��vچ��U7��ш�Z� q��!�oh�r^+V6K����חA��R�@HD$,��3G�<��_�oeװ�Z��b7�����ښ�ҏ�Z�"�J˿�|�` �헃�"=�^�M� �� \�`�o��f]�e��e�fO�H�"�^7Z�?�U�Z=��>��U	��6�A.���'��G��d��ߏ"E)�x[��n�?=��ڽ�V�V�A���	!�'Q.c!�ct�(\�Q4:�	:/L.����X�Lg��n���=�l~o�(����]GW_�D�i�B�e�-"�=Z�R�|' � $�m����k5�}�ֻ�|L�Ə��q����Y@N��H�޿�T}��!��	�^��g�EF(t0��l؃*;B�9D�{-0q࿀N��I$��#H��$�$ښ�9���z�Ԅ����@p�����S�<��ݮi���e���+tF�޳����.C�X��2H���s�d�L�˭10ӡ����/҈�k�P6�o�n���9��7Z�܏<��E/�<M3>�����Ǳ��ȯՠ���E�n:�@�߫�;�����bШ�ImEj��N�LU�~�q�7"�X�=�3��ﺻ�Oܩ��J�L����fЀ?��r�jgT�l��'U�&�D�!�$5�$����dZK��l ��ԑ��W"��RF���>T]�j���4C�k-�o���Բ��*-���8T���nƣ��uxc��̄�L虙�{��<ayo�b~��x�g�:��
�xH�'y�8�'r^�|��,l�+��J̅$a�А]40	G�p��~b�ᾶ���� �@�j�{��ߊD8$�|�|��ܶ�[g�j�ܣ+�&��AV&a�C�oa'���!s�m"~`)y��k�^�&<b��#w8��ғ�HI,SyXW�
�Oi�~K1����a{�u�$��:��a���Z��#�*�H�,��y�>��@��z@�i'��Ȳ^"Y����J�m�8%��	D��/����M��s�<vM:��M�o벇9��7'�3nv�4N�1�Dh9���[�w������� ��_��~Q�'�5�xO*K��F�ƪdQ*�<�@���$:�q:�Ó�vY�=̦��a��Q����a�Q���R@���vj��{�"���r�|7�m#4�'!p��#�2�P��ݿ�tr^�z�]�>��3�X�����c�mշ1�,MA�q"""�.�vS�;o����\KW$uiZ��dHg/L>"N8�?�<���{}�r4$'�%� ��4��HFGG��=��m��I��_����`k�7\86�sM̳4��F�n�(ͩМ��t�gf�>߸�����}5�ٮ���)��y�a<i=�>p�Ǚ�8�:�����A��z�G�fO��K�J��+-��M�ͫ<�m5�`P��T>L��E�� �=).��i��64��n�Ōd&�f�*%�=�BF�I�7V�I�cսFZ�����b�C#��;˪s히�n����m�qꘝ��RAʪsr�b�G���<J��d��mݳʇ'C<4�[7F�G~�~�����%�X�Q�Gz%�i״��lLB�ƧXz[��v�޶�_��z�,>��Wy�y�$�u9T�n�~���ӖE�i�9�@��Ob�V��$Q+�8�ϙ�9��)�s�A�[�+���ݡ�ޒݓ;xv�����ue�'�l]n�m�޶�JA�h�
C@�3��(Q�t�[Tt�}���2&B��$�� �k{�>����*@����ӑ�Ҳ�*�ZekT�U�@D�8+�3�m��á97�k]O��|�����2      �   u  x�u��n�0Eg�+��D�z�t�K�(PtJ�~})�%,4KN�^ƉaEJy��L=�xX���&�l��9���Sp�u��%4X�E�98X���Ȱ.8�zi
ΰ.x�u	��z����6���r����G��Я��������hY�����gX��+�[����F�v>"7X�;,���;b]�y�İ�8%Xl�2��8I�5L��WX�`}��[�@�8E���v?��!!����
���%d2��+ܼ/d�+��62����:�h�ZP��jA�c��ZP�k=��^��?_̴��4Ӧ�k]�i��
��f_�������0K��g]a�-dp��dp�md���o�˲�@a.      �      x������ � �      �      x������ � �      �   �  x����n� ���O1/`/`{rU�͏�4u+5Ro���l�@k��/f��&J�Z�:��#��P�ս��Z�.�V��7ߛAd�ރ���m)�!��\������h��J6��x�����G���b���l��N����C73HaQo��Ŏ���.{?ia��ʠw�FX�����$ӻ��
k�(�@J܋>h��� ��0��J`����]�nRo"�Z$��jY9�K���^j��.�Y�m�����Ǎ������p6 7�[1 W-��i+�ʿ�^#a)�SJ�u��ˀ�>
?A��+��\5�5>UȦ��Lr����ą����7ob	��郹o�^��m�X�E���������&�K>SF<�4��UҏVd�S��M�*e,��	�G�G�y{�OP�%�i�������8"?�$I� }O�      �   l   x�}�+A�a�9�Tқ׬G`ր\��X���0��~�W��\HC3<�l�����z<��A�E�}��-�η+��?8�� 0�dऱZ�Z�4���!i�����4�"�      �   �   x���[
1��d��רy�e���ҙP�ҡ�K� W$w��6<!	�7b���s�Sm���
��,��{B����ڊ�!�r�(�����W�\]��d�\�����zp}倧���%��Qc      �   �   x�M�=�0E��+Xi�ھ"L�?bD�FX Ab�*I���qp��=7�*�Г�+���â��Ր㧌���n��s�S�ϓ�<�Oq��ۃ�_���Z���5bO����D�
�u+ؽ�;�B"�R� �q�2�E� H�=�n��Ǖ�2 0F=O ��b3>L��3$�{���X)�,���4      �   <   x��I !�w�P�!hY�:��X�IfFy����)}��a��F�(n?�-U�X�
�     