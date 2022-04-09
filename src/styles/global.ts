import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 160%;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    user-select: none;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.text};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamily.raleway};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 1900px) { html { font-size: 100%; } }
  @media (max-width: 1800px) { html { font-size: 95%; } }
  @media (max-width: 1700px) { html { font-size: 90%; } }
  @media (max-width: 1600px) { html { font-size: 85%; } }
  @media (max-width: 1500px) { html { font-size: 84%; } }
  @media (max-width: 1400px) { html { font-size: 83%; } }
  @media (max-width: 1300px) { html { font-size: 82%; } }
  @media (max-width: 1200px) { html { font-size: 80%; } }
  @media (max-width: 1100px) { html { font-size: 75%; } }
  @media (max-width: 1000px) { html { font-size: 70%; } }
  @media (max-width: 900px)  { html { font-size: 70%; } }
  @media (max-width: 800px)  { html { font-size: 65%; } }
  @media (max-width: 700px)  { html { font-size: 65%; } }
  @media (max-width: 600px)  { html { font-size: 65%; } }


  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(91, 124, 107, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(91, 124, 107, 0.4);
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(91, 124, 107, 1);
  }
`
