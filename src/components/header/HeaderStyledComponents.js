import styled from 'styled-components'
import treasureMap from '../../fonts/treasure-map-40513/Treasuremap-Ea1vj.ttf';

const HeaderBox = styled.div`
    display: flex;
    @font-face {
        font-family: 'Treasure-Map';
        src: url(${treasureMap}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    border-radius: 200px 10px 200px 10px;
    background-color: #f8f5de;
    background-image: linear-gradient(to right, rgba(255,210,0,0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0,0,0,0) 35%, rgba(200, 160, 0, 0.1) 65%);
    border: 2px double #f0a308;
    font-family: 'Treasure-Map';
    width: 60%;
    min-width: 370px;
    height: 20vh;
    max-height: 100px;
    font-size: calc(20px + 1.0vw);
    align-items: center;
    margin-top: 20px;
    justify-content: center;
`

const HeaderText = styled.div`
    display: flex;
    color: rgba(0,0,0,0.7);
    justify-content: center;
`

export{
    HeaderBox,
    HeaderText
}
