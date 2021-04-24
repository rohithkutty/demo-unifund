import React, { useState } from 'react';
import { Row, Col, Card, Tag, Rate, Switch } from 'antd';
import ErrorBoundary from '../ErrorBoundary';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { productList } from './data';

const Products = (props) => {
  const [showStock, setShowStock] = useState(false);
  const [products, setProducts] = useState(productList);
  const [showRate, setShowRate] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { Meta } = Card;

  const handleSearchInput = ({ target: { value } }) => {
    setSearchInput(value);
  };

  React.useEffect(() => {
    const filteredProducts = productList.filter(({ name }) =>
      name.toLowerCase().includes(searchInput.trim().toLocaleLowerCase())
    );
    setProducts(filteredProducts);
  }, [searchInput]);

  return (
    <div>
      <ErrorBoundary>
        <h1>Mobile Phones</h1>
        <p style={{ margin: '10px 50px', fontSize: '14px' }}>
          Mobile phones are no more merely a part of our lives. Whether it's to
          stay connected with friends and family or to keep abreast of important
          developments around the world, mobiles are no longer for sending a
          text or making a call. From budget to state-of-the-art smartphones;
          indigenous names to global big-wigs - a whole universe of mobiles
          await you on UNIFUND.
        </p>
        <Row>
          <Col span={8} offset={10}>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '10px' }}>
                <Switch
                  size='small'
                  checked={showStock}
                  onChange={() => setShowStock(!showStock)}
                />
                &nbsp;<span>Stock availability</span>
              </div>
              <div style={{ margin: '10px' }}>
                <Switch
                  size='small'
                  checked={showRate}
                  onChange={() => setShowRate(!showRate)}
                />
                &nbsp;<span>Customer ratings</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={8}>
            <div style={{ display: 'flex', width: '100%', margin: '20px 0' }}>
              <Input
                size='large'
                placeholder='Search products'
                prefix={<SearchOutlined />}
                onChange={handleSearchInput}
                value={searchInput}
                style={{ width: '100%' }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            <Row>
              {products.map((item, index) => {
                return (
                  <Col span={6} key={index}>
                    <Card
                      hoverable
                      style={{ margin: 10 }}
                      cover={
                        <img
                          height='300'
                          alt='trending smartphone'
                          src={item.imgLink}
                        />
                      }
                    >
                      <Meta
                        title={item.name}
                        description={`Rs. ${item.price}/-`}
                      />
                      {showStock && (
                        <>
                          {item.availability ? (
                            <Tag
                              style={{ marginTop: '10px', fontSize: '10px' }}
                              color='#017b33'
                            >
                              IN STOCK
                            </Tag>
                          ) : (
                            <Tag
                              style={{ marginTop: '10px', fontSize: '10px' }}
                              color='#d2000b'
                            >
                              OUT OF STOCK
                            </Tag>
                          )}
                        </>
                      )}
                      <br />
                      {showRate && (
                        <>
                          <Rate
                            style={{ fontSize: '10px' }}
                            disabled
                            allowHalf
                            defaultValue={item.rating}
                          />
                          <span style={{ fontSize: '10px' }}>
                            &nbsp;({item.rating})
                          </span>
                        </>
                      )}
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </ErrorBoundary>
    </div>
  );
};

export default Products;
