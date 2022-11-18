import { LockOutlined, UserOutlined, FacebookFilled, GoogleOutlined, GithubOutlined} from '@ant-design/icons';
import { LoginFormPage,  ProFormCheckbox, ProFormText, } from '@ant-design/pro-components';
import {  Divider, Space, Tabs } from 'antd';
import { useState } from 'react';
const iconStyles = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};
export default () => {
      
    const [loginType, setLoginType] = useState('account');
    return (<div style={{ backgroundColor: 'white', height: 'calc(100vh - 60px)', margin: -24, width: '80%' , margin:'20px 125px' ,boxShadow: '-3px 1px 10px 3px #e9e0e0' }}>
      <LoginFormPage backgroundImageUrl="https://image.shutterstock.com/image-photo/still-life-black-perfume-on-260nw-1509540794.jpg" logo="" title="Login" activityConfig={{
        }} actions={<div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
            <Divider plain>
              <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                Login with
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: 40,
                width: 40,
                border: '1px solid #D4D8DD',
                borderRadius: '50%',
            }}>
                <FacebookFilled  style={Object.assign(Object.assign({}, iconStyles), { color: '#1677FF' })}/>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: 40,
                width: 40,
                border: '1px solid #D4D8DD',
                borderRadius: '50%',
            }}>
                <GoogleOutlined style={Object.assign(Object.assign({}, iconStyles), { color: '#FF6A10' })}/>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: 40,
                width: 40,
                border: '1px solid #D4D8DD',
                borderRadius: '50%',
            }}>
                <GithubOutlined style={Object.assign(Object.assign({}, iconStyles), { color: '#333333' })}/>
              </div>
            </Space>
          </div>}>
        <Tabs centered activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey)}>
          <Tabs.TabPane key={'account'}/>
        </Tabs>
        {loginType === 'account' && (<>
            <ProFormText name="username" fieldProps={{
                size: 'small',
                prefix: <UserOutlined className={'prefixIcon'}/>,
            }} placeholder={'Usename'} rules={[
                {
                    required: true,
                    message: 'Username is not empty!',
                },
            ]}/>
            <ProFormText.Password name="password" fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'}/>,
            }} placeholder={'Password'} rules={[
                {
                    required: true,
                    message: 'Password is not empty！',
                },
            ]}/>
          </>)}
        <div style={{
            marginBlockEnd: 24,
        }}>
          <ProFormCheckbox noStyle name="autoLogin">
            Remember Password
          </ProFormCheckbox>
          <a style={{
            float: 'right',
        }}>
            No accout <a href=''>Register</a>
          </a>
        </div>
      </LoginFormPage>
    </div>);
    
};