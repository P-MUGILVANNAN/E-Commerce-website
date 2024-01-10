import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. 
            E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices. 
            Nearly every imaginable product and service is available through e-commerce transactions, including books, music, plane tickets, and financial services such as stock investing and online banking.
            As such, it is considered a very disruptive technology.</p>
            <p>
                E-commerce websites typically display products or services along with detailed descriptions,images,prices and any available variations(e.g,sizes,colors).Each product usually has its own dedicated page with relevant information.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
