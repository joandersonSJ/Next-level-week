import styled from 'styled-components';

export const Container = styled.div`

#container-centralizar{
  /* align-items: center; */
  display: flex;
  justify-content: space-between;
}

#page-home {
  height: 100vh;
}

#page-home .content {
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#page-home .content header {
  margin: 44px 0 0;
  display: flex;
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
}

#page-home .content main {
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

#page-home .content main h1 {
  font-size: 54px;
  color: ${(props) => props.theme.colors.texts.title_color};
}

#page-home .content main p {
  font-size: 24px;
  margin-top: 24px;
  line-height: 38px;
}

#page-home .content main a {
  width: 100%;
  max-width: 360px;
  height: 72px;
  background: ${(props) => props.theme.colors.background.primary_color};
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 40px;
}

#page-home .content main a span {
  display: block;
  background: rgba(0, 0, 0, 0.08);
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

#page-home .content main a span svg {
  color: #FFF;
  width: 20px;
  height: 20px;
}

#page-home .content main a strong {
  flex: 1;
  text-align: center;
  color: #FFF;
}

#page-home .content main a:hover {
  background: #2FB86E;
}

@media(max-width: 900px) {
  #page-home .content {
    align-items: center;
    text-align: center;
  }

  #page-home .content header {
    margin: 48px auto 0;
  }

  #page-home .content main {
    align-items: center;
  }

  #page-home .content main h1 {
    font-size: 42px;
  }

  #page-home .content main p {
    font-size: 24px;
  }
}

`;

export const Button = styled.button`
  background: none;
  border:none;
  cursor: pointer;

  svg{
    color: ${(props) => props.theme.colors.texts.text_color};
    height: 38px;
    width: 38px;
    transition: filter 0.4s;
  }

  svg:hover{
    filter: brightness(50%);
  }
`;
