import React from 'react';
/*import Footer from './Footer'*/
import Header from './Header'


function PageWrapper({ children }) {
  return (
    <PageWrapper>
      <Header />
      {children}
      {/*<Footer />*/}
    </PageWrapper>
  )
}

export default PageWrapper
