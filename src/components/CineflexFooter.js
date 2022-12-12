import styled from "styled-components"

export default function CineflexFooter() {
    return (
        <CineFooter>
            <ImgContainer>
                <img src="" alt=""/>
            </ImgContainer>
            <p>Enola Holmes</p>
        </CineFooter>
    )
}

const CineFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 117px;
    display: flex;
    align-items:center;
    gap: 14px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    p {
        font-family: 'Roboto',sans-serif;
        font-size: 26px;
        color:#293845;
    }
`

const ImgContainer = styled.div`
    padding:8px;
    background-color: #FFF;
    img {
        width: 48px;
        height: 72px;
    }
`