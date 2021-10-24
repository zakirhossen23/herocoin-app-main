import './Input.css';

export const Input = ({type, placeholder}: {type?: string, placeholder?: string}) => {
    return (
        <div className="input">
           <input placeholder={placeholder} type={type} autoComplete="false" />
        </div>
    );
}
  