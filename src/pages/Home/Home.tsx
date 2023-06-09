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
  const [isModalOpenSkills, setIsModalOpenSkills] = useState(false);
  ///change something here
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalSkills = () => {
    setIsModalOpenSkills(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleOkSkills = () => {
    setIsModalOpenSkills(false);
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

  useEffect(() => {}, [data]);

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
                <Button type="primary" onClick={showModalSkills}>
                  {t("skills")}
                </Button>
                <Modal
                  title={t("skills")}
                  open={isModalOpenSkills}
                  onOk={handleOkSkills}
                >
                  <List>
                    <h2>{t("skills_list.front_end_skills.title")}</h2>
                    <List.Item>
                      {t("skills_list.front_end_skills.front_end_skills_list")}
                    </List.Item>
                    <h2>{t("skills_list.back_end_skills.title")}</h2>
                    <List.Item>
                      {t("skills_list.back_end_skills.back_end_skills_list")}
                    </List.Item>
                    <h2>{t("skills_list.other_skills.title")}</h2>
                    <List.Item>
                      {t("skills_list.other_skills.other_skills_list")}
                    </List.Item>
                  </List>
                </Modal>
                <Button type="primary" onClick={handleDownload}>
                  {t("resume")}
                </Button>
                <Modal
                  title={t("repos.title")}
                  open={isModalOpen}
                  onOk={handleOk}
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
