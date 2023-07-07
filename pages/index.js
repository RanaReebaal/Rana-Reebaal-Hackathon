import React, { useEffect, useState } from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner, ImgSlider } from '../components'
import ReactPaginate from "react-paginate"

const Home = ({ products, bannerData }) => {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 16

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(products.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(products.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length
    setItemOffset(newOffset)
  }

  return (
    <div>
      <ImgSlider />
      
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Lorem ipsum dolor sit amet, consectetur eli</p>
      </div>

      <div className="products-container">
        {currentItems?.map((currentItems) => <Product key={currentItems._id} product={currentItems} />)}
      </div>

      { products.length > itemsPerPage && (<div className="products-pagination">
        <ReactPaginate
          nextLabel={">>"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={3}
          pageCount={pageCount}
          previousLabel={"<<"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLabel={"..."}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          activeClassName={"active"}
          renderOnZeroPageCount={null}
        />
      </div>)}

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home