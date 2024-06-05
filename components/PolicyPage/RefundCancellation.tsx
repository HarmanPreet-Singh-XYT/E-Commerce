import React from 'react'

const RefundCancellation = () => {
  return (
    <div className='border-t-[1px]'>
      <div className="container mx-auto px-4 py-8 w-[80%]">
          <h1 className="text-4xl font-bold border-b-2 border-gray-300 pb-2 mb-8">Refund and Cancellation Policy</h1>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
              <p>Our Refund and Cancellation Policy is designed to ensure customer satisfaction with our products and services. Please read this policy carefully to understand your rights and obligations. By placing an order with us, you agree to the terms outlined in this policy.</p>
          </section>

          <section className="mb-8 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold mb-2">2. Cancellation Policy</h2>
              <h3 className="text-xl font-semibold mb-1">Order Cancellation</h3>
              <p>You may cancel an order before it is shipped. To cancel an order, please contact our customer support team immediately at <a href="mailto:support@yourwebsite.com" className="text-blue-500">support@yourwebsite.com</a>. If the order has already been shipped, you will need to follow our return process to receive a refund.</p>
              <h3 className="text-xl font-semibold mb-1">Subscription Cancellation</h3>
              <p>If you have subscribed to a service, you may cancel your subscription at any time by logging into your account or contacting our customer support team. Please note that any fees paid for the subscription period will not be refunded, and the cancellation will take effect at the end of the current billing cycle.</p>
          </section>

          <section className="mb-8 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold mb-2">3. Refund Policy</h2>
              <h3 className="text-xl font-semibold mb-1">Eligibility for Refunds</h3>
              <p>To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Several types of goods are exempt from being returned, such as perishable goods, customized products, and digital downloads.</p>
              <h3 className="text-xl font-semibold mb-1">Refund Process</h3>
              <p>To initiate a refund, please contact our customer support team at <a href="mailto:support@yourwebsite.com" className="text-blue-500">support@yourwebsite.com</a>. Include your order number, proof of purchase, and the reason for the refund request. We will review your request and notify you of the approval or rejection of your refund.</p>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">4. Return Shipping</h2>
              <p>If your refund request is approved, you will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
              <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary. We recommend using a trackable shipping service or purchasing shipping insurance for items of significant value.</p>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">5. Non-Refundable Items</h2>
              <p>Certain items are non-refundable, including:</p>
              <ul className="list-disc list-inside ml-4 flex flex-col gap-1">
                  <li>Gift cards</li>
                  <li>Downloadable software products</li>
                  <li>Some health and personal care items</li>
                  <li>Clearance items</li>
                  <li>Special order items</li>
              </ul>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">6. Exchanges</h2>
              <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <a href="mailto:support@yourwebsite.com" className="text-blue-500">support@yourwebsite.com</a> and send your item to: 123 Your Street, Your City, Your State, Your ZIP Code, Your Country.</p>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">7. Late or Missing Refunds</h2>
              <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company; it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:support@yourwebsite.com" className="text-blue-500">support@yourwebsite.com</a>.</p>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">8. Sale Items</h2>
              <p>Only regular priced items may be refunded; unfortunately, sale items cannot be refunded.</p>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">9. Gifts</h2>
              <p>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you. If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver, and they will find out about your return.</p>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">10. International Shipping</h2>
              <p>We currently ship internationally, and our refund and cancellation policies apply to all international orders. Please note that shipping times may vary depending on the destination, and you will be responsible for any import duties and taxes incurred.</p>
          </section>

          <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">11. Contact Information</h2>
              <p>If you have any questions about our Refund and Cancellation Policy, please contact us:</p>
              <address className="not-italic">
                  Your Company Name<br></br>
                  123 Your Street<br></br>
                  Your City, Your State, Your ZIP Code<br></br>
                  Your Country<br></br>
                  Email: <a href="mailto:support@yourwebsite.com" className="text-blue-500">support@yourwebsite.com</a><br></br>
                  Phone: (123) 456-7890
              </address>
          </section>

      </div>
    </div>
  )
}

export default RefundCancellation