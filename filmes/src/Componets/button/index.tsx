import React, {ButtonHTMLAttributes} from 'react';
import './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    send: string;
}

const Button: React.FC<ButtonProps> = ({send }) =>{
    return(
        <div className="btn">
            <button>
                {send}
            </button>
        </div>
    );
}

export default Button;