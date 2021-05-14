import {useHistory} from "react-router-dom";
import {Button} from "../components/Button";
import {DefaultLayout} from "../layouts/DefaultLayout";

import "./Home.css";
import {SecondaryButton} from "../components/SecondaryButton";

export const Home = () => {
  const history = useHistory();

  const onClickPlayHandler = (e) => {
    e.preventDefault();
    history.push('/memory');
  }

  const onClickHistoryHandler = (e) => {
    e.preventDefault();
    history.push('/history');
  }

  return (
    <DefaultLayout>
      <div className="home">
        <h3 className="home__title">
          Добро пожаловать! <br/> Хотите начать игру?
        </h3>
        <div className="home__btns">
          <Button
            onClick={onClickPlayHandler}
            title="Играть"/>
          <SecondaryButton
            onClick={onClickHistoryHandler}
            title="История игр"/>
        </div>
      </div>
    </DefaultLayout>
  );
};
