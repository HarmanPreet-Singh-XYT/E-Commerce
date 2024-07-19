# eCommerce Website

Welcome to the repository for our full stack eCommerce website built using the PERN stack (PostgreSQL, Express, React, Node.js). This project demonstrates a comprehensive online shopping experience with a variety of features and pages.

![Desktop](/website-demo-image/desktop.png)
![Mobile](/website-demo-image/mobile.png)
![Showcase1](/website-demo-image/1.png)
![Showcase2](/website-demo-image/2.png)
## Features

### eCommerce Features
- **Categories & Subcategories:** Well-organized categories and subcategories for easy navigation.
- **Products:** Detailed product pages with options for different sizes and colors.
- **Payment Gateway:** Integrated with individual products and cart for secure transactions. ( Stripe )
- **Wishlist:** Option to save favorite products.
- **Special Deals:** Exclusive deals displayed on the homepage.
- **Banners:** Eye-catching banners to highlight promotions.
- **Responsive Design:** Modern and mobile-friendly layout.
- **Quantity Purchase:** Ability to purchase multiple quantities of a product.
- **Homepage Algorithms:** Various algorithms to display products dynamically on the homepage.
- **Filtering & Sorting:** Advanced filtering and sorting options on search and category pages.
- **JWT Session:** Secure user sessions with JWT.
- **Encrypted Passwords:** Enhanced security with password encryption.
- **OAuth Support:** Easy registration and sign-in with OAuth.
- **Payment on Delivery:** Option to pay upon delivery.
- **Order Tracking:** Track orders with a detailed orders page.
- **Order Summary:** Comprehensive order summary page.
- **Custom Checkout:** Tailored checkout experience.
- **Review System:** Post, delete, and edit reviews with a dedicated reviews page.
- **Dynamic Routing:** Smooth navigation with dynamic routing.
- **Product Quickview:** Quickly view product details and add to cart or go to the product page.
- **Active Review & Rating Calculation:** Backend will update variables required for algorithms to work properly, actively calculate rating's & frontend required parameters.

### Other Pages
- **Category Specific Page:** Detailed pages for each category.
- **Subcategory Page:** Dedicated pages for subcategories.
- **Blog:** Informative blog section.
- **Contact Page:** Easy-to-use contact form.
- **Services Page:** Overview of offered services.
- **About Us:** Information about the company.
- **Privacy Policy:** Details on data privacy.
- **Secure Payment Page:** Information on secure payment methods.
- **Terms and Conditions:** Detailed terms and conditions.
- **Refund and Cancellation Policy:** Policies on refunds and cancellations.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/HarmanPreet-Singh-XYT/E-Commerce.git
2. Navigate to the project directory:
   ```sh
   cd ecommerce-website
3. Install dependencies for the server:
   ```sh
   cd Server & npm install
4. Install dependencies for the client:
   ```sh
   cd ../Client & npm install
5. Set up environment variables in a .env file for both server and client.

## Running the Application (Development)

1. Start the Server:
   ```sh
   cd Server & npm run dev
2. Start the client:
    ```sh
   cd Client & npm run dev

## Setting Up PostgreSQL Tables

1. Create a Database named 'ecommerce'.
2. Restore the Database using ecommerce.sql with Given SQL File.
3. Make sure PostgreSQL server is Running, Set up Environment Variables and done.

## Getting Started With Docker
**Dockerfiles can be found for both Client and Server in their respective directories.**
**These docker files can be run individually or together through docker compose.**

## Running Individually

1. Go to any directory whether it is Client or Server.
2. Use Terminal and execute the following command to build and Get image for the following type:
   ```sh
   docker build -t ecommerce-client .
      or
   docker build -t ecommerce-server .
3. These images then can be run through Docker Desktop or through terminal by following command:
   ```sh
   docker run -p 3000:3000 --name your-container-name -e BACKEND_URL=your_backend_url -e AUTH_KEY=your_auth_key -e JWT_KEY=your_jwt_key -e NEXT_PUBLIC_FRONTEND_GOOGLE_CLIENT_ID=your_google_client_id -e NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key -e NEXT_PUBLIC_DOMAIN=your_domain ecommerce-client
      or
   docker run -p 3500:3500 --name your-container-name -e FRONTEND_SERVER_ORIGIN=your_frontend_server_origin -e DB_USER=your_db_user -e DB_PASS=your_db_pass -e DB_HOST=your_db_host -e DB_PORT=your_db_port -e DB_NAME=your_db_name -e SMTP_USER=your_smtp_user -e SMTP_SUPPORT=your_smtp_support -e SMTP_HOST=your_smtp_host -e SMTP_SENDERNAME=your_smtp_sendername -e SMTP_PASS=your_smtp_pass -e JWT_ENCRYPTION_KEY=your_jwt_encryption_key -e JWT_AUTH_KEY=your_jwt_auth_key -e GOOGLE_CLIENT_ID=your_google_client_id -e GOOGLE_CLIENT_SECRET=your_google_client_secret -e STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key ecommerce-server
## Running Together with Docker Compose
1. Go to root directory where docker-compose.yml exists.
2. create a .env file with All the Environment Variables in it including for both Server and Client
3. then Start docker-compose with the following command:
   ```sh
   docker compose up --watch
**As the Compose also contains PostgreSQL server, you also need to connect to the PostgreSQL server and Restore the ecommerce.sql file into the ecommerce database to get all the following tables and product and site data.**
**or**
**Simply remove PostgreSQL service from the following docker-compose.yml file if you have your own PostgreSQL server running.**
## Available Docker Images
**There are two Following images available on Docker hub for Client and Server**
1. Client Image:
   ```sh
   docker pull harmanpreet27/ecommerce-client
2. Server Image:
   ```sh
   docker pull harmanpreet27/ecommerce-backend
## Contributing

**We welcome contributions! Please fork the repository and submit a pull request.**

## License

**This project is licensed under the MIT License. See the LICENSE file for more details.**

## Contact

**For any questions or feedback, please contact us at harmanpreetsingh@programmer.net**

## Environment Variables (Required before Starting)

**For Client**

- **BACKEND_URL** (Cors Requirement)
- **AUTH_KEY** (Authorization key for Secure Frontend & Backend Communication)
- **JWT_KEY** (JWT Key for Decryption and encryption)
- **NEXT_PUBLIC_FRONTEND_GOOGLE_CLIENT_ID** (Google Client ID For OAuth)
- **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY** (Stripe Key for payment Gateway)
- **NEXT_PUBLIC_DOMAIN** (**Optional*** Frontend URL)

**For Server**

- **FRONTEND_SERVER_ORIGIN** (Frontend Server URL)
- **DB_USER** (Database UserName)
- **DB_PASS** (Database Password)
- **DB_HOST** (Database HostName)
- **DB_PORT** (Database Port)
- **DB_NAME** (Database Name)
- **SMTP_USER** (SMTP UserName (email) )
- **SMTP_SUPPORT** (Customer Support Email for Contact)
- **SMTP_HOST** (SMTP HostName)
- **SMTP_SENDERNAME** (SMTP Sender)
- **SMTP_PASS** (SMTP Password)
- **JWT_ENCRYPTION_KEY** (Key for secure encryption and decryption)
- **JWT_AUTH_KEY** (Authorization key for Secure Frontend & Backend Communication)
- **GOOGLE_CLIENT_ID** (Google Client ID for OAuth)
- **GOOGLE_CLIENT_SECRET** (Google Client Secret for OAuth)
- **STRIPE_PUBLISHABLE_KEY** (Stripe Key for Payment Gateway)
