import React from "react";
import profilePicture from "../../assets/eu.png";
import {ContentBlank, ContentStyle, Main} from "./style";
const Home: React.FC = () => {
    return (
        <div
        style={{
            width: "100%",
            height: "100%",
        }}
        >

            <ContentStyle>
                <ContentBlank>
                    <img className="circle"
                    src={profilePicture}
                    />
                       {/*<p>Full-Stack Developer</p>*/}
                       {/*<p>Gabriel Ximenes</p>*/}
                    <Main>
                            <div className="wave"/>
                            <div className="wave"/>
                            <div className="wave"/>
                    </Main>
                </ContentBlank>
            </ContentStyle>

        </div>
    );
};

export default Home;
