import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='border-t-[1px]'>
        <div className="container mx-auto px-4 py-8 w-[80%] border-[1px] rounded-xl mt-5">
            <h1 className="text-4xl font-bold border-b-[1px] border-gray-300 pb-2 mb-8">Contact Us</h1>

            <section className="mb-8">
                <p className='max-w-[1000px]'>We're here to help! At [Your E-commerce Site Name], we value open communication and are committed to providing you with the best possible service. Whether you have a question, need assistance, or want to share feedback, we encourage you to get in touch with us.</p>
            </section>

            <section className="mb-8 flex flex-col gap-5">
                <h2 className="text-2xl font-semibold mb-2">How to Reach Us</h2>
                <div>
                    <h3 className="text-xl font-semibold mb-1">Customer Support:</h3>
                    <p className='max-w-[1000px]'>Our dedicated customer support team is ready to assist you with any inquiries you may have. You can reach us via the following methods:</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-1">Email:</h4>
                    <p>For general inquiries, order status, and support:
                        <a href="mailto:support@yourwebsite.com" className="text-blue-500">support@yourwebsite.com</a>
                    </p>
                    <p>For returns and refunds:
                        <a href="mailto:returns@yourwebsite.com" className="text-blue-500">returns@yourwebsite.com</a>
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-1">Social Media:</h4>
                    <p className='max-w-[1000px]'>Connect with us on our social media channels for the latest updates, promotions, and support:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li><a href="https://www.facebook.com/yourpage" className="text-blue-500" target="_blank">Facebook</a></li>
                        <li><a href="https://www.twitter.com/yourhandle" className="text-blue-500" target="_blank">Twitter</a></li>
                        <li><a href="https://www.instagram.com/yourhandle" className="text-blue-500" target="_blank">Instagram</a></li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions (FAQ)</h2>
                <p>For quick answers to common questions, visit our <a href="#" className="text-blue-500">FAQ</a> page. You might find the information you need without waiting for a response.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
                <p className='max-w-[1000px]'>We are always looking for ways to improve and would love to hear your thoughts. Whether it’s about our products, services, or website, your feedback is invaluable to us. Please send your comments and suggestions to <a href="mailto:feedback@yourwebsite.com" className="text-blue-500">feedback@yourwebsite.com</a>.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Help Center</h2>
                <p className='max-w-[1000px]'>Explore our <a href="#" className="text-blue-500">Help Center</a> for detailed guides, how-tos, and troubleshooting tips. It's a comprehensive resource designed to assist you with everything from account setup to order tracking.</p>
            </section>
            <p>Thank you for choosing [Your E-commerce Site Name]. We look forward to assisting you!</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default Contact