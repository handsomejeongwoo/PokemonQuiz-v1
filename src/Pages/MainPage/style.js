import styled from "styled-components";
import PokemonLogo from "../../imgs/pokemonLogo.png";
import pokemonMaster from "../../imgs/pokemonMaster.png";
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

export const PokemonImg = styled.img`
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
  &:hover {
    background-color: #ff6464;
    transition: ease-in-out 0.5s;
  }
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

export const WrapPoint = styled.div`
  position: absolute;
  left: 30px;
`;

export const Point = styled.p`
  font-size: 30px;
  color: #fff;
`;

export const HintWrqp = styled.div`
  width: 100%;
  position: relative;
  bottom: 0px;
`;

export const PokemonMaster = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${pokemonMaster});
  background-repeat: no-repeat;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const HintTitle = styled.div`
  width: 400px;
  height: 300px;
  position: absolute;
  bottom: 10%;
  left: 20px;
  z-index: 9999999999;
  border: 4px solid #000;
  border-radius: 20px;
  background-color: #fff;
  box-sizing: border-box;
  text-align: center;
`;

export const ReturnMainBtn = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 25px;
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

export const PokemonInfoTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const PokemonInfo = styled.p`
  font-size: 20px;
`;

export const CallPokemonDoctor = styled.div`
  position: absolute;
  z-index: 99999999;
  top: 51%;
  right: 2%;
`;

export const CallBtn = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
