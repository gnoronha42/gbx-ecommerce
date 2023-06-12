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

  const { data } = useQuery("repos", () => {
    return fetch("https://api.github.com/users/gnoronha42/repos")
      .then((res) => res.json())
      .then((data) => data);
  });

  const handleDownload = () => {
    const url = CV;
    window.open(url, "_blank");
  };

  useEffect(() => {}, [data]);
  useEffect(() => {
    document.title = "Gabriel Ximenes";
  }, []);
  return (
    <div>
      <ContentStyle></ContentStyle>
    </div>
  );
};

export default Home;
