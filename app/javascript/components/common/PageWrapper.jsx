import React from 'react';
/*import Footer from './Footer'*/
import Header from './Header'


function PageWrapper({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/*<Footer />*/}
    </div>
  )
}

export default PageWrapper
