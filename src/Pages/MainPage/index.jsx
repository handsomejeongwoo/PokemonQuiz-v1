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
  const randomNumber = parseInt(Math.random() * 152);
  const [middel, setMiddle] = useState(true);
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
      "오박사님은 약간의 힌트를 알려주십니다. 힌트를 받으시겠습니까?"
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
      setPoint(point - 1);

      setPokemonInput("");
    }
  };

  useEffect(() => {
    getPokemon();
    whoPokemon();
  }, []);

  return (
    <div>
      {/* <S.Container>
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
              
            />
          )}
          {hideElement && (
            <div>
              <S.PokemonNameSubmitButton
                onClick={() => {
                }}
              >
                {`${pokemonInput}`} 넌내꺼야!
              </S.PokemonNameSubmitButton>
            </div>
          )}
        </S.AnserWrap>
        <S.CallPokemonDoctor>
          <S.CallBtn
            onClick={() => {
              
            }}
          >
            박사님 ~
          </S.CallBtn>
        </S.CallPokemonDoctor>
      </S.Container> */}
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
        <S.UpBall>
          <S.WrapPoint>
            <S.Point>점수 : {point}</S.Point>
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
                오박사 부르기
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
    </div>
  );
};

export default MainPage;
