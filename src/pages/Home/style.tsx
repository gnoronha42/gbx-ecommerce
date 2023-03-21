import styled from 'styled-components';


export const  ContentStyle = styled.div`
  display:  grid;
`

export const ContentBlank = styled.div`
  display: grid;
  flex-direction: row;
  height: 50vh;
  background-color: #a068ff;
  align-content: flex-end;
  gap: 20%;

  .circle {
    display: grid;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }
  
`;


export  const Main = styled.div`
    width: 100%;  
    height: 80px; /* change the height of the waves here */
    position: relative;
    overflow-x: hidden;


 
  .wave {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E");
    position: absolute;
    width: 200%;
    height: 100%;
    animation: wave 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
  }

  .wave:nth-of-type(2) {
    animation: wave 18s linear reverse infinite;
    opacity: 0.5;
  }

  .wave:nth-of-type(3) {
    bottom: 0;
    animation: wave 20s -1s linear infinite;
    opacity: 0.5;
  }

  @keyframes wave {
    0% {transform: translateX(0);}
    50% {transform: translateX(-25%);}
    100% {transform: translateX(-50%);}
  }
  
`;

