import * as S from "./style";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MainPage = () => {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [dlwjddn, setDlwjddn] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInput, setPokemonInput] = useState("");
  const randomNumber = parseInt(Math.random() * 151);

  const getPokemon = async () => {
    const { data } = await axios({
      url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`,
      method: "get",
    });
    console.log(data);
    setPokemonInfo(data);
    setIsLoad(true);
    setPokemonInput("");
  };

  const whoPokemon = async () => {
    const { data } = await axios({
      url: `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}/`,
      method: "get",
    });
    console.log(data);
    setPokemonName(data);
    setDlwjddn(true);
  };

  useEffect(() => {
    getPokemon();
    whoPokemon();
  }, []);

  return (
    <>
      <S.Container>
        <S.KokemonLogo />
        <S.Dlwjddn>
          {isLoad && <S.Img src={pokemonInfo.sprites.front_default}></S.Img>}
        </S.Dlwjddn>
        <S.AnserWrap>
          <S.PokemonNameInput
            placeholder="포켓몬의 이름은?"
            onChange={(e) => {
              setPokemonInput(e.target.value);
            }}
          />

          <div>
            <S.PokemonNameSubmitButton
              onClick={() => {
                toast.success(`${pokemonInput}을 잡았다!`);
                getPokemon();
              }}
            >
              {`${pokemonInput}`} 넌내꺼야!
            </S.PokemonNameSubmitButton>
          </div>
        </S.AnserWrap>
      </S.Container>
    </>
  );
};

export default MainPage;
