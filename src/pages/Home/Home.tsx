import React, {useEffect} from "react";
import profilePicture from "../../assets/eu.png";
import {ContentBlank, ContentStyle, Main} from "./style";
import {useQuery} from "react-query";




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
                         alt={'profile'}/>
                    <div
                        className={'profileTitle'}
                    >Gabriel Ximenes<br/> Full-Stack Developer</div>
                    <Main>
                        <div className="wave"/>
                        <div className="wave"/>
                        <div className="wave"/>
                    </Main>
                </ContentBlank>
                <div>
                    <div>
                        <h1>Contact</h1>
                         Email: gabrielnoronha.developer@gmail.com
                         Phone: +55 11 9 9999-9999
                         Linkedin: https://www.linkedin.com/in/gabriel-ximenes-9b5b3b1b3/
                    </div>
                </div>
            </ContentStyle>

        </div>
    );
};

export default Home;
