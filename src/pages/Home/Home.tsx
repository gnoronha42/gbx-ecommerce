import React, { useEffect, useState } from "react";
import profilePicture from "../../assets/eu.png";
import { ContentBlank, ContentStyle, Main, Information } from "./style";
import { useTranslation } from "react-i18next";
import { LinkedinOutlined } from "@ant-design/icons";
import { GithubOutlined } from "@ant-design/icons";
import { WhatsAppOutlined } from "@ant-design/icons";
import { List, Button, Modal } from "antd";
import { useQuery } from "react-query";
import { CV } from "../../assets";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { data, isLoading, error } = useQuery("repos", () => {
    return fetch("https://api.github.com/users/gnoronha42/repos")
      .then((res) => res.json())
      .then((data) => data);
  });

  const handleDownload = () => {
    const url = CV;
    window.open(url, "_blank");
  };

  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <div>
      <ContentStyle>
        <ContentBlank>
          <Information>
            <img className="circle" src={profilePicture} alt={"profile"} />
            <div className={"profileTitle"}>
              Gabriel Ximenes
              <br /> {t("developer")}
            </div>
            <div className={"contact-info"}>
              <LinkedinOutlined />
              <GithubOutlined />
              <WhatsAppOutlined />
            </div>
            <div>
              <div className="repos">
                <Button type="primary" onClick={showModal}>
                  {t("repos.title")}
                </Button>
                <Modal
                  title={t("repos.title")}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={(item: any) => (
                      <List.Item>{item.name}</List.Item>
                    )}
                  />
                </Modal>
                <Button type="primary" onClick={showModal}>
                  {t("skills")}
                </Button>
                <Modal
                  title={t("repos.title")}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  {/*<List*/}
                  {/*    size="small"*/}
                  {/*    bordered*/}
                  {/*    dataSource={data}*/}
                  {/*    renderItem={(item: any) => <List.Item>{item.name}</List.Item>}*/}
                  {/*/>*/}
                </Modal>
                <Button type="primary" onClick={handleDownload}>
                  {t("resume")}
                </Button>
                <Modal
                  title={t("repos.title")}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={(item: any) => (
                      <List.Item>{item.name}</List.Item>
                    )}
                  />
                </Modal>

                <div></div>
              </div>
            </div>
          </Information>

          <Main>
            <div className="wave" />
            <div className="wave" />
            <div className="wave" />
          </Main>
        </ContentBlank>
      </ContentStyle>
    </div>
  );
};

export default Home;
