import { Footer } from "antd/lib/layout/layout";
import {
  CaretRightOutlined,
  CaretUpOutlined,
  HomeOutlined,
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  Menu,
  Layout,
  Card,
  Breadcrumb,
  Pagination,
  Col,
  Row,
  Dropdown,
  Button,
  Input,
  Checkbox,
  Slider,
  BackTop,
} from "antd";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./unisex.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Female from "../Female/Female";
import Male from "../Male/Male";
import Dior from "../Dior/Dior";
import VS from "../Victoria Sercet/VS";
import AD from "../AD/AD";
import Product from "../../page/product/Product";
import Index from "../../Index/Index";
const { Search } = Input;
const { Meta } = Card;
export default function Unisex() {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("api/product");
      console.log(result)
      setProduct(result.data);
    };
    fetchData();
  }, []);
    console.log(product);

  const navigate = useNavigate();
  const onChangePrince = (value) => {
    console.log("onChange: ", value);
  };
  const onAfterChangePrince = (value) => {
    console.log("onAfterChange: ", value);
  };
  const onChangeCapa = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const formatter = (value) => `${value}$`;
  const options = [
    {
      label: "5 ml",
      value: "5 ml",
    },
    {
      label: "55 ml",
      value: "55 ml",
    },
    {
      label: "60 ml",
      value: "60 ml",
    },
  ];
  const onSearch = (value) => console.log(value);
  const { Header, Sider, Content } = Layout;
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              2nd menu item
            </a>
          ),
        },
        {
          key: "3",
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
      <Menu
        theme="light"
        mode="horizontal"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <img
          className="logo_img"
          src="https://i.pinimg.com/564x/23/33/2c/23332cdb8c8812bc73d727c3540ec1df.jpg"
          style={{
            height: 70,
            width: 90,
            objectFit: "contain",
            marginLeft: 30,
          }}
        />
        <Dropdown overlay={menu}>
          <a
            style={{
              position: "absolute",
              right: "20%",
              top: "2%",
              font: 10,
              fontWeight: 300,
              zIndex: 10,
            }}
            onClick={(e) => e.preventDefault()}
          >
            Help
          </a>
        </Dropdown>
        <span
          style={{
            position: "absolute",
            right: "19%",
            top: "2%",
            color: "black",
            font: 10,
            fontWeight: 300,
          }}
        >
          |
        </span>
        <span
          style={{
            position: "absolute",
            right: "15%",
            top: "2%",
            color: "black",
            font: 10,
            fontWeight: 300,
          }}
        >
          Join Us
        </span>
        <span
          style={{
            position: "absolute",
            right: "14%",
            top: "2%",
            color: "black",
            font: 10,
            fontWeight: 300,
          }}
        >
          |
        </span>
        <Button
          type="text"
          style={{
            position: "absolute",
            right: "8.8%",
            top: "2.99%",
            color: "black",
            font: 10,
            background: "transparent",
            fontWeight: 300,
          }}
        >
          Sign In
        </Button>
      </Menu>

      {/* <Header className="header"
          style={{
            padding: 0,
          }}
        > */}
      <Menu
       onClick={({ key }) => {
              navigate(key);
            }}
            mode="inline"
            defaultOpenKeys={["gender"]}
            defaultSelectedKeys={["/unisex"]}
            items={[
              {
                label: "Home",
                key: "/index",
              },
              {
                label: "Product",
                key: "/product",
              }
            ]} 
        style={{
          paddingLeft: 20,
          height: 70,
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 9,
          marginBottom: 20,
        }}
      ></Menu>
      <Search
        className="Search__menu"
        placeholder="input search text"
        style={{
          width: 200,
          height: 30,
          padding: 0,
          position: "absolute",
          right: "13%",
          top: "13.5%",
          zIndex: "10",
        }}
        onSearch={onSearch}
      />
      <HeartOutlined
          style={{
            position: "absolute",
        right: "9%",
        top: "14.5%",
        zIndex: 10,
        fontSize: 20,
          }
          }
      />
      <ShoppingOutlined
         style={{
            position: "absolute",
        right: "9%",
        top: "14.5%",
        zIndex: 10,
        fontSize: 20,
          }
          }
      />
      {/* </Header> */}
      <Layout>
        <Sider theme="light" width={260}>
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            mode="inline"
            defaultOpenKeys={["gender"]}
            defaultSelectedKeys={["/unisex"]}
            items={[
              { label: 'Home', key: 'home', icon: <CaretRightOutlined /> ,children: [
                  { label: 'All product', key: '/product' },
                ]},
              {
                label: "Brand",
                key: "/brand",
                icon: <CaretRightOutlined />,
                children: [
                  { label: "Victoria Secret", key: "/victoriasercet" },
                  { label: "Dior", key: "/dior" },
                  { label: "Alexandria", key: "/alexandria" },
                ],
              },
              {
                label: "Gender",
                key: "/gender",
                icon: <CaretRightOutlined />,
                children: [
                  { label: "Unisex", key: "/unisex" },
                  { label: "Female", key: "/female" },
                  { label: "Male", key: "/male" },
                ],
              },
              {
                label: "Capacity",
                key: "capacity",
              },
            ]}
          ></Menu>
          <Checkbox.Group
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
            options={options}
            defaultValue={["capacity"]}
            onChange={onChangeCapa}
          />
          <span
            style={{
              marginLeft: 20,
              borderBottom: "1px solid #ddd",
              fontSize: 15,
            }}
          >
            Prince
          </span>
          <Slider
            tooltip={{
              formatter,
            }}
            style={{ marginTop: 40 }}
            range
            step={10}
            defaultValue={[20, 50]}
            onChange={onChangePrince}
            onAfterChange={onAfterChangePrince}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              marginTop: 30,
              fontSize: 35,
              fontWeight: 400,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Breadcrumb.Item>Unisex</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 30,
              marginTop: 50,
            }}
          >
          {
           
           // product?.map(item=>{
            <div className="site-card-wrapper" style={{}}>
              <Row style={{ marginTop: 15 }} gutter={16}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 270,
                      height: 350,
                    }}
                    cover={<img alt="example" src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/03/nuoc-hoa-mini-christian-dior-rose-gipsy-7-5ml-6242ddc6282b8-29032022172158.jpg" />}
                  >
                    <Meta title="nuoc hoa 1" description="45$" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 270,
                      height: 350,
                    }}
                    cover={<img alt="example" src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/03/6242d9fa190b7-29032022170546.jpg" />}
                  >
                    <Meta title="Mini Chirstian Dior Balade Sauvage" description="75$" />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 270,
                      height: 350,
                    }}
                    cover={<img alt="example" src="https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/03/nuoc-hoa-mini-christian-dior-the-cachemire-7-5ml-6242df50ea7a1-29032022172832.jpg" />}
                  >
                    <Meta title="Mini Christian Dior Lucky" description="45$" />
                  </Card>
                </Col>
              </Row>
              
            </div>
       //   })
          }
          </Content>
          <BackTop>
            <div
              style={{
                backgroundColor: "#ddd",
                height: 50,
                width: 50,
                padding: "0 11px",
                borderRadius: "11px",
                fontSize: 29,
              }}
            >
              <CaretUpOutlined />
            </div>
          </BackTop>
          <Pagination
            style={{ display: "flex", margin: "auto" }}
            defaultCurrent={1}
            total={50}
          />
          ;
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
  function navgative() {
    <Routes>
          <Route path="/index" element={<Index />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/female" element={<Female />}></Route>
      <Route path="/male" element={<Male />}></Route>
      <Route path="/dior" element={<Dior />}></Route>
      <Route path="/victoriasercet" element={<VS />}></Route>
      <Route path="/alexandria" element={<AD />}></Route>
    </Routes>;
  }
}
