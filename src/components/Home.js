import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Home() {
  const lists = [
    'Travel and Tourism Apps',
    'Loading/Offloading Services',
    'Parking Location Tracker',
    'eCommerce Stores',
    'Payment App',
    'Cloud Based App',
    'Interior Designing Website',
    'Ai-Browser Cookies',
    'Safety Alert Web App',
    'Online Disguise Resolution',
    'Astrology Web App',
    'Conclusion',
  ];
  const content = [
    'It’s no longer feasible to run a business, even a brick-and-mortar one, without a web presence. Consumers turn to the internet for everything from product research to location and operating hours. Even just a simple, well-designed website can give you an edge in your field, and if you have products to sell, your site can open up new markets and expand your business cheaply and easily',
    'Website design software has evolved to be easy for anyone to use. You don’t need to know coding to develop an attractive and functional site. No matter what program you use, you just need to follow some basic rules and tips to give your website a professional look, make it easy to find, and show your company in the best light.',
    'A business website generally serves as a space to provide general information about your company or a direct platform for e-commerce. Whether you create a simple website that tells a little about your company or a more complex e-commerce site, the most important thing you must do is say what your company does – on the homepage in plain terms. Don’t make customers root around to discover if your company can do what they need, warned Erin Pheil of website design company Followbright. ',
  ];
  return (
    <div>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col sm={4}>
            <Sidebar lists={lists} />
          </Col>
          <Col sm={8}>
            <Content content={content} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
