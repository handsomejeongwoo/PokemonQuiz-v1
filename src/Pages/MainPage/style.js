import styled from "styled-components";
import PokemonLogo from "../../imgs/pokemonLogo.png";
export const Container = styled.div`
  height: 100vh;
  width: 720px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const KokemonLogo = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url(${PokemonLogo});
  background-position-x: 50%;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
`;

export const Dlwjddn = styled.div`
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  border: 5px solid black;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
