import './LabelInput.css';

export const LabelInput = ({type, placeholder, label}: {type?: string, placeholder?: string, label: string}) => {
    return (
        <div className="label-input">
            <label>{label}</label>
           <input placeholder={placeholder} type={type} autoComplete="false" />
        </div>
    );
}
  