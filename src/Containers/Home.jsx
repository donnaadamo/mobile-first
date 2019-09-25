import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from './index';
import Header from '../Components/Header';
import Data from '../Components/Data';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Data />
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
