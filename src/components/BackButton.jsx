import React from "react";
import { useHistory } from 'react-router-dom';

export const BackButton = ({children}) => {
    const history = useHistory();

    const onClick = (e) => {
        e.preventDefault();

        history.push('/');
    }

    return (
        <div onClick={onClick}>{children || "Назад"}</div>
    );
}