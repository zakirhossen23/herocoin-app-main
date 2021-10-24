import React from "react";
import { KeyboardEvent, ChangeEvent } from "react";

import './Pin.css';

export const Pin = () => {
    const digits = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];
   
    const onChange = (place: number) => {
        return (event: ChangeEvent<HTMLInputElement>) => {
            if(event.target.value) {
                digits[place+1]?.current?.focus();
                event.target.value = event.target.value.substr(0, 1);
            }
        }
    }

    const onKeyUp = (place: number) => {
        return (event: KeyboardEvent<HTMLInputElement>) => {
            if(event.key == 'Backspace') {
                digits[place-1]?.current?.focus();
            }
        }
    }

    return (
        <div className="pin">
            {digits.map(e => (<input key={digits.indexOf(e)} ref={e} className="digit" type="password" autoComplete="false" onChange={onChange(digits.indexOf(e))} onKeyUp={onKeyUp(digits.indexOf(e))} />))}
        </div>
    );
}
  