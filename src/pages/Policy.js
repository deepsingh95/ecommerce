import React from 'react'
import Layout from '../components/Layout/Layout'

function Policy() {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img
                        src="/images/contactus.jpeg"
                        alt="conatctus"
                        style={{ width: "100%" }} />
                </div>
                <div className="col md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                    <p>add privacy policy</p>
                </div>
            </div>
        </Layout>
    )
}

export default Policy