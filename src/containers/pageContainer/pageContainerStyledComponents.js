import styled from 'styled-components';

const PageBox = styled.div`
    background-color: #f8f5de;
    background-image: linear-gradient(to right, rgba(255,210,0,0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0,0,0,0) 35%, rgba(200, 160, 0, 0.1) 65%);
    box-shadow: inset 0 0 75px rgba(255,210,0,0.3), inset 0 0 20px rgba(255,210,0,0.4), inset 0 0 30px rgba(220,120,0,0.8);
    color: rgba(0,0,0,0.5);
    font-family: "AustralisProSwash-Italic";
    width: calc(8.5in - 15em);
    letter-spacing: 0.05em;
    line-height: 1.8;
    height: 60vh;
    margin-top: 20px;
    border-radius: 50px 0px 50px 0px;
    width: 60%;
    min-width: 370px;
}
`

export {
    PageBox
};
