import React from 'react';
/*import Footer from './Footer'*/
import Header from './Header'


function StockPage({ children }) {
  return (
    <StockPage>
      <Header />
      {children}
      <Header />
      {/*<Footer />*/}
    </StockPage>
  )
}

export default StockPage
