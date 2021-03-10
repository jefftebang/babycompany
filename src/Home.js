import styled from "styled-components";

const Section1 = styled.div`
  width: 100vw;
  height: 70vh;
  background-image: url("./images/light-yellow.png");
  background-position: center;
  background-size: cover;
  margin-top: 162px;
  @media (max-width: 480px) {
    height: 110vh;
    width: 100vw;
    margin-top: 70px;
  }
`;

const StarsHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const Stars = styled.img`
  width: 90%;
  height: 350px;
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Baby1Holder = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Baby1 = styled.img`
  margin-top: -230px;
  width: 412px;
  height: 478px;
  @media (max-width: 480px) and (min-width: 415px) {
    margin-top: -120px;
    width: 320px;
    height: auto;
  }
  @media (max-width: 414px) and (min-width: 376px) {
    margin-top: -100px;
    width: 280px;
    height: auto;
  }
  @media (max-width: 375px) and (min-width: 361px) {
    margin-top: -80px;
    width: 250px;
    height: auto;
  }
  @media (max-width: 360px) and (min-width: 321px) {
    margin-top: -70px;
    width: 235px;
    height: auto;
  }
  @media (max-width: 320px) {
    margin-top: -55px;
    width: 215px;
    height: auto;
  }
`;

const Baby2Holder = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Baby2 = styled.img`
  margin-top: -370px;
  width: 464px;
  height: 369px;
  @media (max-width: 480px) and (min-width: 415px) {
    margin-top: 320px;
    width: 340px;
    height: auto;
  }
  @media (max-width: 414px) and (min-width: 376px) {
    margin-top: 300px;
    width: 300px;
    height: auto;
  }
  @media (max-width: 375px) and (min-width: 361px) {
    margin-top: 295px;
    width: 280px;
    height: auto;
  }
  @media (max-width: 360px) and (min-width: 321px) {
    margin-top: 280px;
    width: 265px;
    height: auto;
  }
  @media (max-width: 320px) {
    margin-top: 270px;
    width: 230px;
    height: auto;
  }
`;

const H1Holder = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  @media (max-width: 480px) and (min-width: 415px) {
    margin-top: 150px;
  }
  @media (max-width: 414px) and (min-width: 376px) {
    margin-top: 160px;
  }
  @media (max-width: 375px) and (min-width: 361px) {
    margin-top: 175px;
  }
  @media (max-width: 360px) and (min-width: 321px) {
    margin-top: 170px;
  }
  @media (max-width: 320px) {
    margin-top: 180px;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #32355d;
  @media (max-width: 414px) and (min-width: 376px) {
    font-size: 2rem;
  }
  @media (max-width: 375px) and (min-width: 361px) {
    font-size: 1.8rem;
  }
  @media (max-width: 360px) and (min-width: 321px) {
    font-size: 1.6rem;
  }
  @media (max-width: 320px) {
    font-size: 1.45rem;
  }
`;

const Paragraph1Holder = styled.div`
  width: 700px;
  margin-top: -30px;
  @media (max-width: 480px) and (min-width: 415px) {
    width: 400px;
  }
  @media (max-width: 414px) and (min-width: 376px) {
    width: 400px;
  }
  @media (max-width: 375px) and (min-width: 361px) {
    width: 340px;
  }
  @media (max-width: 360px) and (min-width: 321px) {
    width: 330px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`;

const Paragraph1 = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const LMHolder = styled.div`
  display: flex;
`;

const LM = styled.div`
  width: 200px;
  height: 60px;
  background-color: #e16d00;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const LMButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: #cd6402;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;

const LMRArrow = styled.img`
  height: 30px;
  width: 20px;
`;

const Section2 = styled.div`
  width: 100vw;
  height: 50vh;
  margin-top: 80px;
`;

const Title1 = styled.div`
  height: 150px;
  color: #32355d;
  font-size: 2.2rem;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) and (min-width: 415px) {
    margin-top: -20px;
    font-size: 2rem;
  }
  @media (max-width: 414px) and (min-width: 376px) {
    margin-top: 10px;
    font-size: 1.7rem;
  }
  @media (max-width: 375px) and (min-width: 361px) {
    margin-top: 100px;
    font-size: 1.5rem;
  }
  @media (max-width: 360px) and (min-width: 321px) {
    margin-top: 100px;
    font-size: 1.4rem;
  }
  @media (max-width: 320px) {
    margin-top: 120px;
    font-size: 1.2rem;
  }
`;

const BoxWrapper1 = styled.div`
  height: 300px;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) and (min-width: 415px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  @media (max-width: 414px) and (min-width: 376px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  @media (max-width: 375px) and (min-width: 361px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  @media (max-width: 360px) and (min-width: 321px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

const Box1 = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 15px 0 15px;
  background-color: #c2e2ff;
  :before {
    background: none;
    border: dashed 2px #2c96f5;
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    pointer-events: none;
  }
  @media (max-width: 480px) {
    margin: 0 0 25px 0;
  }
`;

const Box2 = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 15px 0 15px;
  background-color: #fff5dd;
  :before {
    background: none;
    border: dashed 2px #efc96c;
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    pointer-events: none;
  }
  @media (max-width: 480px) {
    margin: 0 0 25px 0;
  }
`;

const Box3 = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 15px 0 15px;
  background-color: #fcdcdd;
  :before {
    background: none;
    border: dashed 2px #f8a2a5;
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    pointer-events: none;
  }
  @media (max-width: 480px) {
    margin: 0 0 25px 0;
  }
`;

const Box4 = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 15px 0 15px;
  background-color: #cff69c;
  :before {
    background: none;
    border: dashed 2px #8fd82e;
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    pointer-events: none;
  }
  @media (max-width: 480px) {
    margin: 0 0 25px 0;
  }
`;

const InnerWrapper = styled.div`
  height: 75%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoxImg = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 30px;
`;

const BoxTitle = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const BoxParagraph = styled.div`
  color: #000;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

const Section3 = styled.div`
  width: 100vw;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxWrapper2 = styled.div`
  width: 1090px;
  height: 392px;
  background-color: #dadaf7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const InnerWrapper2 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoxTitle2 = styled.div`
  color: #32355d;
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const BoxParagraph2 = styled.div`
  color: #000;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin: 15px 0 15px 0;
`;

const Baby3 = styled.img`
  width: 683px;
  height: auto;
  position: absolute;
  right: 120px;
  top: 1271px;
  z-index: 2;
`;

const SkyObjects = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 170px;
`;

const Stars2 = styled.img`
  width: 639px;
  height: 232px;
`;

export default function Home() {
  return (
    <>
      <Section1>
        <StarsHolder>
          <Stars src="./images/stars.png" />
        </StarsHolder>
        <Baby1Holder>
          <Baby1 src="./images/baby1.png" />
        </Baby1Holder>
        <Baby2Holder>
          <Baby2 src="./images/baby2.png" />
        </Baby2Holder>
        <H1Holder>
          <Heading1>
            Lorem Ipsum Dolor <br /> Sit Amet Consectetur
          </Heading1>
          <Paragraph1Holder>
            <Paragraph1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              adipisci amet, culpa esselaborum ut quaerat quos et ratione.
            </Paragraph1>
          </Paragraph1Holder>
          <LMHolder>
            <LM>Learn More</LM>
            <LMButton>
              <LMRArrow src="./images/right-arrow.png" />
            </LMButton>
          </LMHolder>
        </H1Holder>
      </Section1>
      <Section2>
        <Title1>Explore by Category</Title1>
        <BoxWrapper1>
          <Box1>
            <InnerWrapper>
              <BoxImg src="./images/moon.png" />
              <BoxTitle>Baby Sleep</BoxTitle>
              <BoxParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </BoxParagraph>
            </InnerWrapper>
          </Box1>
          <Box2>
            <InnerWrapper>
              <BoxImg src="./images/bodysuit.png" />
              <BoxTitle>Baby Wear</BoxTitle>
              <BoxParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </BoxParagraph>
            </InnerWrapper>
          </Box2>
          <Box3>
            <InnerWrapper>
              <BoxImg src="./images/rattle.png" />
              <BoxTitle>Baby Play</BoxTitle>
              <BoxParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </BoxParagraph>
            </InnerWrapper>
          </Box3>
          <Box4>
            <InnerWrapper>
              <BoxImg
                src="./images/feeding-bottle.png"
                style={{ width: "30px" }}
              />
              <BoxTitle>Baby Eat</BoxTitle>
              <BoxParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </BoxParagraph>
            </InnerWrapper>
          </Box4>
        </BoxWrapper1>
      </Section2>
      <Section3>
        <BoxWrapper2>
          <InnerWrapper2>
            <BoxTitle2>
              Lorem Ipsum Dolor <br /> Sit Amet Consectetur
            </BoxTitle2>
            <BoxParagraph2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
              sed do eiusmod tempor incididunt ut labore et dolore.
            </BoxParagraph2>
            <LMHolder>
              <LM style={{ backgroundColor: "#e1187f" }}>Inquire Now</LM>
              <LMButton style={{ backgroundColor: "#ba156a" }}>
                <LMRArrow src="./images/right-arrow2.png" />
              </LMButton>
            </LMHolder>
          </InnerWrapper2>
          <Baby3 src="./images/baby3.png" />
          <SkyObjects>
            <Stars2 src="./images/stars-cloud-moon.png" />
          </SkyObjects>
        </BoxWrapper2>
      </Section3>
    </>
  );
}
