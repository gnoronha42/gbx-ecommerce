import styled from 'styled-components';


export const SiteLayoutContent = styled.div min-height: 280px; padding: 24px;;


export const LogoContainer = styled.div`
float: left;
width: 120px;
height: 31px;
margin: 16px 24px 16px 0;
background: rgba(255, 255, 255, 0.3);

@media (min-width: 576px) and (max-width: 991px) {
float: none;
margin: 16px auto;
display: block;
}

@media (max-width: 575px) {
float: none;
margin: 16px auto;
display: block;
width: 100%;
text-align: center;
}
`;

export const LogoContainerRTL = styled(LogoContainer) float: right; margin: 16px 0 16px 24px;