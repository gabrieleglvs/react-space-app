import { styled } from "styled-components"
import banner from "/imagens/banner.png"

const BannerEstilizado = styled.img`
    width: 100%;
    border-radius: 20px;
`

const ParagrafoEstilizado = styled.p`
    position: absolute;
    color: white;
    font-size: 2rem;
    left: 300px;
    width: 230px;
    top: 270px;
`

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`

const Banner = () => {
    return (<>
        <BannerEstilizado src={banner} alt=""  />
        <ParagrafoEstilizado>A galeria mais completa de fotos do espaço!</ParagrafoEstilizado>
        </>
    )
}

export default Banner