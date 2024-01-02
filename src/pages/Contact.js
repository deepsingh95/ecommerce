import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiSupport, BiVoicemail, BiPhoneCall } from 'react-icons/bi';

function Contact() {
    return (
        <Layout title={"contact us"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img
                        src="/images/contactus.jpeg"
                        alt="conatctus"
                        style={{ width: "100%" }} />
                </div>

                <div className="col md-4">
                    <h1
                        className="bg-dark p-2 text-white text-center">
                        CONTACT US
                    </h1>
                    <p className="text-justify mt-2">
                        Any Query and Info About Product Feel To Call Anytime We 24X7 Avilable.
                    </p>
                    <p
                        className="mt-3">
                        <BiVoicemail /> : www.help@ecommerceApp.com
                    </p>
                    <p
                        className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p
                        className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (Toll free)
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;