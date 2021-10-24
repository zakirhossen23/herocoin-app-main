import { FunctionComponent, MouseEventHandler } from "react";

import './Button.css';

export const Button: FunctionComponent<{onClick?: MouseEventHandler<any>}> = ({children, onClick}) => {
    return (
        <div onClick={onClick} className="btn">{children}</div>
    );
}
  