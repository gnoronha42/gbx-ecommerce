import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {LogoContainer, Main, SiteLayoutContent} from "./style";
import logo from '../../assets/G.svg';
const { Header, Content, Footer } = Layout;



interface IComponentBase {
    children: React.ReactNode;
}

const LayoutMain: React.FC<IComponentBase> = ({children,...props}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Main>
            <Layout className="layout">
                <Header>
                    <LogoContainer>
                        <img src={logo} alt="logo" style={{width: '100%',height: '100%'}}  />
                    </LogoContainer>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(2).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `nav ${key}`,
                            };
                        })}
                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <SiteLayoutContent>
                        {children}
                    </SiteLayoutContent>
                </Content>
                {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>*/}
            </Layout>
        </Main>
    );
};


export default LayoutMain;
