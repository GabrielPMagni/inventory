import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginForm } from './components/Login';
import { MainContainer } from './components/MainContainer';
import { SwitchLanguage } from './components/SwitchLanguage';
import AuthContextProvider from './context/auth';
import I18NProvider from './context/i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18NProvider defaultLanguage='ptBR'>
      <MainContainer>
       <SwitchLanguage />
        <LoginForm></LoginForm>
        <AuthContextProvider>
          <App />

        </AuthContextProvider>
      </MainContainer>
    </I18NProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
