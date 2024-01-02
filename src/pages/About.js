import React from 'react';
import Layout from '../components/Layout/Layout';

function About() {
    return (
        <Layout title={"About us - Ecommerce App"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img
                        src="/images/about.jpeg"
                        alt="conatctus"
                        style={{ width: "100%" }} />
                </div>
                <div className="col md-4">
                    <h1
                        className="bg-dark p-2 text-white text-center">
                        ABOUT US
                    </h1>
                    <p className="text-justify mt-2">
                        Hello Everyone, Welocme to the Ecommerce Web Applicaton. This Application is Built with React.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;