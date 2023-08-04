import React from 'react'
import products from '../product'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
const Home = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products?.map(product => (
                    <Col sm={12} md={6} xl={3} key={product?._id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home