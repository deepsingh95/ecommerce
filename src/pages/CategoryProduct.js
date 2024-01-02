import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/CategoryProductStyles.css";

function CategoryProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (params?.slug) getProductsByCat();
    }, [params?.slug])


    const getProductsByCat = async () => {
        try {
            const { data } = await axios.get(
                `https://deepak-lfxu.onrender.com/api/v1/product/product-category/${params.slug}`);
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="container mt-3 category">
                <h4 className='text-center'>
                    Category - {category?.name}
                </h4>
                <h6 className='text-center'>
                    {products?.length} result found
                </h6>
                <div className="row">
                    <div className="col-md-9 offset-1">
                        <div className="d-flex flex-wrap">
                            {products?.map((p) => (
                                <div className="card m-2" key={p._id}>
                                    <img
                                        src={`https://deepak-lfxu.onrender.com/api/v1/product/product-photo/${p._id}`}
                                        class="card-img-top"
                                        alt={p.name}
                                    />
                                    <div className="card-body">
                                        <div className="card-name-price">
                                            <h5 className="card-title">{p.name}</h5>
                                            <h5 className="card-title ">
                                                {p.price.toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency: "USD",
                                                })}
                                            </h5>
                                        </div>
                                        <p className="card-text">
                                            {p.description.substring(0, 60)} ...
                                        </p>
                                        <div className="card-name-price">
                                            <button
                                                class="btn btn-info ms-1"
                                                onClick={() => navigate(`/product/${p.slug}`)}
                                            >
                                                More Detail
                                            </button>
                                            {/* <button
                                                class="btn btn-secondary ms-1">
                                                ADD TO CART
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            ))};
                        </div>
                        {/* <div className='m-2 p-3'>
                            {products && products.length < total && (
                                <button className='btn btn-warning'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(page + 1);
                                    }}
                                >
                                    {loading ? "Loading ..." : "Loadmore"}
                                </button>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout >
    )
};

export default CategoryProduct;