import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Nunito Sans;
    transition: all 0.25s linear;
  }
  .card,.card-body{
    background: ${({ theme }) => theme.element};
    color: ${({ theme }) => theme.text};
  }
  .input-group-text , .form-control{
    border:none;
    color: ${({ theme }) => theme.grayText};
    background: ${({ theme }) => theme.element};
  }
  .form-control::placeholder{
    color: ${({ theme }) => theme.text};
  }
  .lightGray{
    color: hsl(0, 0%, 52%);
    font-weight: 700;
  }
  select, .dropdown option, .dropdown option:hover,.dropdown option:active{
      background-color:  ${({ theme }) => theme.element} !important;
      color: ${({ theme }) => theme.text} !important;
      border: none;
  }
  .detail-view button{
    background-color:  ${({ theme }) => theme.element} !important;
    color: ${({ theme }) => theme.text} !important;
    border: none;
  }
  .list-group-item span{
    color: ${({ theme }) => theme.grayText} !important;
  }
  .list-group-item, .detail-view h4{
    color: ${({ theme }) => theme.text} !important;
  }
  `
