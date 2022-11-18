import { Footer } from 'antd/lib/layout/layout';
import { LaptopOutlined, NotificationOutlined, UserOutlined,FacebookFilled,HomeOutlined,InstagramOutlined,TwitterOutlined,CaretRightOutlined  } from '@ant-design/icons';
import { Menu, Layout, Card, Col, Row, Dropdown, Button, Input, Carousel } from 'antd';
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import './index.css';
import LoginIndex from '../Product/Login/Login';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Allproduct from '../Product/All Product/Allproduct';
import Unisex from '../Product/Unisex/Unisex';
const { Search } = Input;
const { Meta } = Card;
const onSearch = (value) => console.log(value);
const contentStyle = {
  width: '85%',
  height: '500px',
  background: '#364d79',
  margin: 'auto',
  overflow: 'hidden',
  padding: 0,
  color: '#ffcc00'
};
export default function Index() {
  let history = useNavigate ();
  function handleClick(){
     history("/signin")
  }
  const navigate = useNavigate();
  const gridStyle = {
    width: '25%',
  };
  const gridStyle2 = {
    width: '50%',
    position: 'relative',
    left: '0'
  };
  const { Header, Sider, Content } = Layout;
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );
  return (

    <Layout>
      <Menu theme="light" mode="horizontal" style={{ backgroundColor: '#f5f5f5' }}>
        <img src='https://images.cooltext.com/5628070.gif' style={{
          height: 50, width: 100, objectFit: 'contain', backgroundColor: '#f5f5f5', marginLeft: 30, marginTop: 6
        }} />
        <Dropdown overlay={menu}>
          <a style={{ position: 'absolute', right: '20%', top: 1, font: 10, fontWeight: 300, zIndex: 10 }} onClick={(e) => e.preventDefault()}>
            Help
          </a>
        </Dropdown>
        <span style={{ position: 'absolute', right: '19%', top: 1, color: 'black', font: 10, fontWeight: 300 }}>|</span>
        <span style={{ position: 'absolute', right: '15%', top: 1, color: 'black', font: 10, fontWeight: 300 }} >Join Us</span>
        <span style={{ position: 'absolute', right: '14%', top: 1, color: 'black', font: 10, fontWeight: 300 }}>|</span>
        <Button onClick={
           handleClick
        } type="text" style={{ position: 'absolute', right: '8.8%', top: 7.5, color: 'black', font: 10, background: 'transparent', fontWeight: 300 }} >Sign in</Button>
      </Menu>

      {/* <Header className="header"
        style={{
          padding: 0,
        }}
      > */}
      <Menu onClick={({ key }) => {
              navigate(key);
            }}
            mode="inline"
            items={[
              {
                label: "Home",
                key: "/index",
              },
              {
                label: "Product",
                key: "/unisex",
              }
            ]} style={{ 
          paddingLeft: 20,
        height: 70, display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 9,
        marginBottom: 20,
      }}
      >
      </Menu>
      <Search
        className='Search__menu'
        placeholder="input search text"
        style={{

          width: 200,
          height: 30,
          padding: 0,
          position: 'absolute',
          right: '13%',
          top: '11%',
          zIndex: '10',
        }}
        onSearch={onSearch}
      />
      <HeartOutlined style={{
        position: 'absolute',
        right: '9%',
        top: '12.5%',
        zIndex: 10,
        fontSize: 20,
      }} />
      <ShoppingOutlined
        style={{
          position: 'absolute',
          right: '5%',
          top: '12.5%',
          zIndex: 10,
          fontSize: 20,
        }}
      />
      {/* </Header> */}



      <Layout>

        {/* <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider> */}
        <Layout

          style={{
            padding: '0 24px 24px',
          }}
        >
          <Carousel style={{}} autoplay>
            <div style={{ objectFit: 'cover', height: '80%', width: '80%' }}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxA6VM9pMTPpgaDOQE-0knBHMYnc39G8hY91m_n5Ewvorapxq_HT8jWgpAGb_q_JS2BzY&usqp=CAU' style={contentStyle}>
              </img>
            </div>
            <div style={{ objectFit: 'cover', height: '70%', width: '70%' }}>
              <img src='https://fado.vn/blog/wp-content/uploads/2019/10/Victoria%E2%80%99s-Secret-Bombshell2.jpg' style={contentStyle}>
              </img>
            </div>
            <div style={{ objectFit: 'cover', height: '70%', width: '70%' }}>
              <img src='https://www.talkbeauty.vn/public/assets/user_dir/Dangxuan/nuoc-hoa-nuoc-hoa-nu-sexy-little-things-noir-tease-cua-hang-victoria-s-secret-564df02fb6b06.jpg' style={contentStyle}>
              </img>
            </div>
            <div style={{ objectFit: 'cover', height: '70%', width: '70%' }}>
              <img src='https://www.datrangdep.vn/wp-content/uploads/2019/08/nuoc-hoa-victoria-secret-love.1.jpg' style={contentStyle}>
              </img>
            </div>

          </Carousel>
          {/* <Breadcrumb
            style={{
              marginTop: 30,
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}

          <Content
            className="site-layout-background"
            style={{
              padding: 30,
              marginTop: 50,

            }}
          >
            <div className="site-card-wrapper" style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '70%', overflowX: 'auto' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          {/* <Pagination style={{ display: 'flex', margin: 'auto', }} defaultCurrent={1} total={50} />; */}
          <div style={{
            display: 'flex',
            margin: '40px 0',
          }}>
          <Card.Grid style={gridStyle}>
              <img src='https://topbrands.vn/wp-content/uploads/2021/08/thuong-hieu-nuoc-hoa-noi-tieng-2.jpg'/>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
            <img src='https://vn-test-11.slatic.net/p/fb0370ec25d0f0ae1164aca0fc11cb6d.jpg'/>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
            <img src='https://topbrands.vn/wp-content/uploads/2021/08/thuong-hieu-nuoc-hoa-noi-tieng-2.jpg'/>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
            <img src='https://vn-test-11.slatic.net/p/fb0370ec25d0f0ae1164aca0fc11cb6d.jpg'/>
            </Card.Grid>
          </div>
            <div style={{display:'flex' , flexWrap: 'wrap' }}>
            <Card.Grid style={gridStyle2}>
            <img src='https://vn-test-11.slatic.net/p/3c7a1924390b531757a03af151e459bb.jpg_800x800Q100.jpg'/>
            </Card.Grid>
            <Card.Grid style={gridStyle2}>
            <img src='https://vn-test-11.slatic.net/p/3c7a1924390b531757a03af151e459bb.jpg_800x800Q100.jpg'/>
            </Card.Grid>
            <Card.Grid style={gridStyle2}>
            <img src='https://vn-test-11.slatic.net/p/3c7a1924390b531757a03af151e459bb.jpg_800x800Q100.jpg'/>
            </Card.Grid>
            <Card.Grid style={gridStyle2}>
            <img src='https://vn-test-11.slatic.net/p/3c7a1924390b531757a03af151e459bb.jpg_800x800Q100.jpg'/>
            </Card.Grid>
            </div>
        </Layout>
      </Layout>
      <Footer
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          lineHeight: 2,
          letterSpacing: 1,
        }}
      >
        <div style={{ float: "left", fontSize: 15 }}>
          <span>
            Contact
            <div>
              <HomeOutlined />
            </div>
          </span>
          <p>VIET NAM</p>
          <p>012940122</p>
          <p>cskh@gmail.com</p>
          <div style={{ border: "1px solid #ddd", margin: "12px 0" }}></div>
        </div>
        <div
          style={{
            float: "right",
            fontSize: 25,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>
            <FacebookFilled />
          </span>
          <span>
            <InstagramOutlined />
          </span>
          <span>
            <TwitterOutlined />
          </span>
          <div style={{ border: "1px solid #ddd", margin: "12px 0" }}></div>
        </div>

        <img
          style={{
            height: 300,
            width: 200,
            objectFit: "cover",
            display: "flex",
            margin: "auto",
          }}
          src="https://i.pinimg.com/550x/d0/29/8c/d0298c78f9a927f1409e14176e2f67d2.jpg"
        />
        <div style={{ border: "1px solid #ddd", margin: "12px 0" }}></div>
        <h4
          style={{
            textAlign: "center",
            color: "wheat",
            fontSize: 23,
            marginTop: 20,
          }}
        >
          Via @2022
        </h4>
      </Footer>
    </Layout>
  );
  function navgative(){
    <Router>
    <Routes>
      <Route exact="/signin" element={<LoginIndex/>}>
      </Route>
      <Route path="/unisex" element={<Unisex/>} >
      </Route>
    </Routes>
    </Router>
  }
}

