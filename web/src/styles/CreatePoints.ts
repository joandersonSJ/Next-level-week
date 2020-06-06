import styled from 'styled-components';

export const PageCreatePoint = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  header{
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header a{
    color:${(props) => props.theme.colors.texts.title_color};
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;
  }

  header a svg{
    margin-right: 16px;
    color:${(props) => props.theme.colors.background.primary_color};
  }
`;
export const Form = styled.form`

    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: #FFF;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

  h1{
    font-size: 36px;
  }

  fieldset{
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }

  legend{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  legend h2 {
    font-size: 24px;
  }

  legend span {
    font-size: 14px;
    font-weight: normal;
    color: ${(props) => props.theme.colors.texts.text_color};
  }

  .field-check {
    flex-direction: row;
    align-items: center;
  }

  .field-check input[type=checkbox] {
    background: ${(props) => props.theme.colors.background.secondary_color};
  }

  .field-check label {
    margin: 0 0 0 8px;
  }

  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  button {
    width: 260px;
    height: 56px;
    background: var(--primary-color);
    border-radius: 8px;
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  button:hover {
    background: #2FB86E;
  }

`;
export const FieldGroup = styled.div`

    flex: 1;
    display: flex;

    .field {
    flex: 1;

    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    }

    .field input[type=text],
    .field input[type=email],
    .field input[type=number] {
      flex: 1;
      background: ${(props) => props.theme.colors.background.secondary_color};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${(props) => props.theme.colors.texts.text_color};
    }
  
    .field select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      flex: 1;
      background: ${(props) => props.theme.colors.background.secondary_color};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${(props) => props.theme.colors.texts.text_color};
    }
  

    .field input::placeholder {
      color: ${(props) => props.theme.colors.texts.texts_suport};
    }

    .field label {
      font-size: 14px;
      margin-bottom: 8px;
  }

    .field :disabled {
      cursor: not-allowed;
    }

    .field + .field {
      margin-left: 24px;
    }
    input + input {
      margin-left: 24px;
    }    
    
 
`;
export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: ${(props) => props.theme.colors.background.secondary_color};
    border: 2px solid ${(props) => props.theme.colors.background.secondary_color};
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;
  }

  li span {
    flex: 1;
    margin-top: 12px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.texts.title_color}

  }

  li.selected {
    background: ${(props) => props.theme.colors.others.desaturado};
    border: 2px solid ${(props) => props.theme.colors.background.primary_color};
  }


`;
