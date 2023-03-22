import React, {useState} from 'react';
import {Layout, Menu, Select} from 'antd';
import {LogoContainer, Main, SiteLayoutContent} from "./style";
import logo from '../../assets/G.svg';
import {availableLanguages} from "../i18n";
import {useTranslation} from "react-i18next";
import {BraFlag,EuaFlag} from "../../assets";
const { Header, Content } = Layout;



interface IComponentBase {
    children: React.ReactNode;
}

const LayoutMain: React.FC<IComponentBase> = ({children,...props}) => {


    const { t, i18n } = useTranslation();
    const arr = [BraFlag, EuaFlag];
    const [languages, setLanguages] = useState<number>(0);
    const languageN = new Map<string, string>([
        ["ptBr", "Português"],
        ["en", "English"],
    ]);
    const handleChange = (e: any) => {
        let value = e === "en" ? 1 : 0;
        i18n.changeLanguage(e);
        setLanguages(value);
    };


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
                    />

                    <Select
                        //float left
                        style={{ width: 120, float: 'right', marginTop: 16 }}
                        onChange={(e) => handleChange(e)}
                    >
                        {availableLanguages.map((language: any, key: any) => (
                            <option value={language} key={key}>
                                {languageN.get(language)}
                            </option>
                        ))}
                    </Select>

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
