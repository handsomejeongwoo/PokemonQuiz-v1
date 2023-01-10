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
  const [hideElement, setHideElement] = useState(true);
  const randomNumber = parseInt(Math.random() * 600);
  const [hint, setHint] = useState(false);

  const [point, setPoint] = useState(0);

  const getPokemon = async () => {
    const { data } = await axios({
      url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`,

      method: "get",
    });
    setPokemonInfo(data);
    setIsLoad(true);
    setPokemonInput("");
    console.log(pokemonInput);
  };

  const whoPokemon = async () => {
    const { data } = await axios({
      url: `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}/`,
      method: "get",
    });

    setPokemonName(data);
    setDlwjddn(true);
  };

  const showHint = () => {
    const isShow = window.confirm(
      "오박사님은 약간의 힌트를 알려주십니다. 힌트를 받겠습니까?"
    );
    if (isShow) {
      setHint(true);
      setHideElement(false);
    } else {
      window.alert("화이팅!");
    }
  };

  const checkAnswer = () => {
    if (pokemonName.names[2].name === pokemonInput) {
      toast.success(`${pokemonInput}을 잡았다!`);
      whoPokemon();
      getPokemon();
      setPoint(point + 1);
    } else {
      toast.error(`앗 야생 포켓몬이 도망가버렸다!`);
      whoPokemon();
      getPokemon();
      setPokemonInput("");
    }
  };

  useEffect(() => {
    getPokemon();
    whoPokemon();
  }, []);

  return (
    <>
      <S.Container>
        {hint && (
          <S.HintWrqp>
            <S.PokemonMaster></S.PokemonMaster>
            <S.HintTitle>
              <S.ReturnMainBtn
                onClick={() => {
                  setHideElement(true);
                  setHint(false);
                }}
              >
                X
              </S.ReturnMainBtn>
              {hint && (
                <S.PokemonInfoTitle>
                  <S.PokemonInfo>안녕 난 오박사야</S.PokemonInfo>
                  <S.PokemonInfo>
                    도감번호 NO.{pokemonName.id} 인 이포켓몬은{" "}
                  </S.PokemonInfo>
                  <S.PokemonInfo>
                    {" "}
                    {pokemonName.genera[1].genus} 이고{" "}
                  </S.PokemonInfo>
                  <S.PokemonInfo>
                    포켓몬 타입은 {pokemonInfo.types[0].type.name} 이구나.
                  </S.PokemonInfo>
                </S.PokemonInfoTitle>
              )}
            </S.HintTitle>
          </S.HintWrqp>
        )}
        <S.WrapPoint>
          <S.Point>점수 : {point}</S.Point>
        </S.WrapPoint>
        <S.KokemonLogo />
        <S.Dlwjddn>
          {isLoad && (
            <S.PokemonImg
              src={pokemonInfo.sprites.front_default}
            ></S.PokemonImg>
          )}
        </S.Dlwjddn>
        <S.AnserWrap>
          {hideElement && (
            <S.PokemonNameInput
              placeholder="포켓몬의 이름은?"
              value={pokemonInput}
              onChange={(e) => {
                setPokemonInput(e.target.value);
              }}
            />
          )}
          {hideElement && (
            <div>
              <S.PokemonNameSubmitButton
                onClick={() => {
                  checkAnswer();
                }}
              >
                {`${pokemonInput}`} 넌내꺼야!
              </S.PokemonNameSubmitButton>
            </div>
          )}
        </S.AnserWrap>
        {hideElement && (
          <S.CallPokemonDoctor>
            <S.CallBtn
              onClick={() => {
                showHint();
              }}
            >
              박사님 ~
            </S.CallBtn>
          </S.CallPokemonDoctor>
        )}
      </S.Container>
    </>
  );
};

export default MainPage;
