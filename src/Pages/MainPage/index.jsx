import * as S from "./style";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import PokemonLogo from "../../imgs/pokemonLogo.png";
import pokemonMaster from "../../imgs/pokemonMaster.png";

const MainPage = () => {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [dlwjddn, setDlwjddn] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInput, setPokemonInput] = useState("");
  const [hideElement, setHideElement] = useState(true);
  const randomNumber = parseInt(Math.random() * 500);
  const [middel, setMiddle] = useState(true);
  const [hint, setHint] = useState(false);
  const [callPokemon, setCallPokemon] = useState(false);
  const [point, setPoint] = useState(0);

  const getPokemon = async () => {
    const { data } = await axios({
      url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`,

      method: "get",
    });
    setPokemonInfo(data);
    setIsLoad(true);
    setPokemonInput("");
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
    setHideElement(false);
    setCallPokemon(true);
  };

  const checkAnswer = async () => {
    if (pokemonName.names[2].name === pokemonInput) {
      toast.success(`${pokemonInput}을 잡았다!`);
      whoPokemon();
      getPokemon();
      setPoint(point + 1);
      localStorage.setItem("id", point);

      console.log("응인;애", point);
    } else {
      toast.error(`앗 야생 포켓몬이 도망가버렸다!`);
      whoPokemon();
      getPokemon();
      setPokemonInput("");
      if (point > 0) {
        setPoint(point - 1);
        localStorage.setItem("id", point);
      }
    }
  };

  useEffect(() => {
    setPoint(localStorage.getItem("id"));
    getPokemon();
    whoPokemon();
  }, []);

  useEffect(() => {
    localStorage.setItem("id", point);
  }, [point]);

  return (
    <dic className="lllll">
      <S.Container>
        {middel && (
          <S.PokemonWrap>
            {isLoad && (
              <>
                <S.PokemonImg
                  src={pokemonInfo.sprites.front_default}
                ></S.PokemonImg>
              </>
            )}
          </S.PokemonWrap>
        )}
        {callPokemon && (
          <S.IsHint>
            <S.HintGuide>안녕 힌트가 필요해? 오박사님을 불러봐!</S.HintGuide>
            <S.GuideButtonWrap>
              <S.GuideButton
                backGroundCl="red"
                color="white"
                onClick={() => {
                  setHideElement(true);
                  setCallPokemon(false);
                }}
              >
                됐어요~
              </S.GuideButton>
              <S.GuideButton
                backGroundCl="red"
                color="white"
                onClick={() => {
                  setHint(true);
                  setCallPokemon(false);
                }}
              >
                박사님!
              </S.GuideButton>
            </S.GuideButtonWrap>
          </S.IsHint>
        )}
        <S.UpBall>
          <S.WrapPoint>
            <S.Point>점수 : {localStorage.getItem("id")}</S.Point>
          </S.WrapPoint>
          <S.UpHeader>
            <S.Logo src={PokemonLogo} />
            <S.MainTitle>포켓몬의 이름을 입력하자!</S.MainTitle>
          </S.UpHeader>
        </S.UpBall>
        <S.DownBall>
          {hint && (
            <>
              <S.HintTitle>
                <S.CloseButton
                  onClick={() => {
                    setHideElement(true);
                    setHint(false);
                  }}
                >
                  알겠어요 박사님
                </S.CloseButton>
                <S.PokemonHintContent>
                  <S.PokemonHint>안녕 난 오박사야</S.PokemonHint>
                  <S.PokemonHint>
                    {" "}
                    도감번호 NO.{pokemonName.id} 인 이포켓몬은{" "}
                  </S.PokemonHint>
                  <S.PokemonHint>
                    {" "}
                    {pokemonName.genera[1].genus} 이고{" "}
                  </S.PokemonHint>
                  <S.PokemonHint>
                    포켓몬 타입은 {pokemonInfo.types[0].type.name} 이구나.
                  </S.PokemonHint>
                </S.PokemonHintContent>
              </S.HintTitle>
            </>
          )}

          {hint && <S.PokemonMaster src={pokemonMaster} />}
          {hideElement && (
            <S.CallOboxa>
              <S.OboxaTitle
                onClick={() => {
                  showHint();
                }}
              >
                힌트?
              </S.OboxaTitle>
            </S.CallOboxa>
          )}
          {hideElement && (
            <S.DownBallContent>
              <S.PokemonNameInput
                placeholder="포켓몬의 이름은?"
                value={pokemonInput}
                onChange={(e) => {
                  setPokemonInput(e.target.value);
                }}
              />
              <S.PokemonNameSubmitButton
                onClick={() => {
                  checkAnswer();
                }}
              >
                {pokemonInput} 넌 내꺼야!
              </S.PokemonNameSubmitButton>
            </S.DownBallContent>
          )}
        </S.DownBall>
      </S.Container>
    </dic>
  );
};

export default MainPage;
