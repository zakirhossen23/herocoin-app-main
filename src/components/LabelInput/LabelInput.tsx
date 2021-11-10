import './LabelInput.css';

export const LabelInput = ({ type, placeholder, label, id }: { type?: string, placeholder?: string, label: string, id?: string }) => {
    return (
        <div className="label-input">
            <label>{label}</label>
            <input id={id} placeholder={placeholder} type={type} autoComplete="false" />
        </div>
    );
}
