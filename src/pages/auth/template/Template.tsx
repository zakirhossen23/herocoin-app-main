import { FunctionComponent } from 'react';
import './Template.css';

export const AuthTemplate: FunctionComponent<{className?: string}> = ({children, className}) => {
    return (
        <div className={`page auth ${className}`}>
            <div className="background">
                <div className="top"></div>
                <div className="bottom"></div>
            </div>
            <span style={{flex: 1}}></span>
            <div className="card">
                {children}
            </div>
            <span style={{flex: 2}}></span>
        </div>
    );
}
  