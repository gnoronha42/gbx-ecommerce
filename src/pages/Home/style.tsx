import styled from 'styled-components';

const WaveWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

const WaveWrapperInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

const WaveTop = styled(Wave)`
  background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png');
`;

const WaveMiddle = styled(Wave)`
  background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png');
`;

const WaveBottom = styled(Wave)`
  background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png');
`;