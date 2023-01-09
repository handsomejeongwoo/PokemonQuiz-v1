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
  background-position-y: 10%;
`;

export const Img = styled.img`
  width: 230px;
  height: 230px;
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
  border: 3px solid black;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AnserWrap = styled.div`
  position: absolute;
  bottom: 25%;
`;

export const PokemonNameInput = styled.input`
  text-align: center;
  width: 10vw;
  height: 3vw;
  font-size: 28px;
  border: none;
  border-bottom: 4px solid gray;
  outline: none;
  &:focus {
    outline: none;
    border-bottom: 4px solid red;
  }
`;

export const PokemonNameSubmitButton = styled.button`
  width: 20vw;
  height: 4vw;
  position: absolute;
  margin-top: 50px;
  font-size: 25px;
  left: 50%;
  color: #fff;
  background-color: red;
  border: none;
  cursor: pointer;
  transform: translateX(-50%);
`;
