import React from 'react';

interface InputProps {
    placeholder?: string;
    icon?: string;
    onChange?: () => void;
    type?: string;
    mode?: string;
    className?: string;
}
const Input = ({
    placeholder = '',
    mode = 'search',
    type = 'text',
    ...props
}: InputProps) => {
    return (
        <div className={`input ${props.className}`}>
            <input placeholder={placeholder} type="text" {...props} />
            <span className="icon-hover">
                <i className={props.icon} onClick={props.onChange}></i>
            </span>
        </div>
    );
};

export default Input;
