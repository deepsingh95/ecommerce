import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
// import { Toaster } from 'react-hot-toast';
import '../../styles/AuthStyles.css';


function Layout({ children, title, description, keywords, author }) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                {/* <Toaster /> */}

                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.defaultProps = {
    title: "Ecommerce App - Shop now",
    description: "Mern Stack Project",
    keywords: "mern,react,node,mongodb",
    author: "Deeptech"
};

export default Layout;