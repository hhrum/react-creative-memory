import React from "react";
import { useHistory } from 'react-router-dom';

export const BackButton = ({children}) => {
    const history = useHistory();

    const onClick = (e) => {
        e.preventDefault();

        history.push('/');
    }

    return (
        <div style={{paddingLeft: 16}} onClick={onClick}><span style={{cursor: "pointer"}}>{children || "Назад"}</span></div>
    );
}