import {useLocation} from 'react-router-dom';

import {Header} from "../components/Header";
import {BackButton} from "../components/BackButton";

import './DefaultLayout.css'

export const DefaultLayout = ({children}) => {
  const location = useLocation();

  return (
    <div className="default-layout">
      <Header
        left={location.pathname !== '/' ? <BackButton/> : null}
        center={<h2 style={{textAlign: "center"}}>Memory</h2>}/>
      <div className="default-layout__content">
        {children}
      </div>
    </div>
  );
}