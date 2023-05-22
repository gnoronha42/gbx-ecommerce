import React, { useState } from "react";
import { Layout, Menu, Select } from "antd";
import { LogoContainer, Main, SiteLayoutContent } from "./style";
import logo from "../../assets/G.svg";
import { availableLanguages } from "../i18n";
import { useTranslation } from "react-i18next";
import { BraFlag, EuaFlag } from "../../assets";
import { Link } from "react-router-dom";
const { Header, Content } = Layout;
interface IComponentBase {
  children: React.ReactNode;
}

const LayoutMain: React.FC<IComponentBase> = ({ children, ...props }) => {
  const { i18n } = useTranslation();
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
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </LogoContainer>
          <Menu theme="dark" mode="horizontal">
            {/* <Menu.Item>
              <Link to="/ecommerce">Ecommerce</Link>
            </Menu.Item> */}
            <Menu.Item>
              <Select
                style={{
                  width: 120,
                }}
                onChange={(e) => handleChange(e)}
              >
                {availableLanguages.map((language: any, key: any) => (
                  <option value={language} key={key}>
                    {languageN.get(language)}
                  </option>
                ))}
              </Select>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <SiteLayoutContent>{children}</SiteLayoutContent>
        </Content>
      </Layout>
    </Main>
  );
};

export default LayoutMain;
