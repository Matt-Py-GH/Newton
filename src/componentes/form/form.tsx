import { Link } from "react-router-dom";
import Button from "../button/button";
import Message from "../message/message";
import "./form.css"

interface InputField {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps {
    fields: InputField[];
    buttonClick: (event: React.SyntheticEvent) => void;
    buttonText: string;
    mensaje?: string;
    link?: string;
    linkText?: string;
    linkClassName?: string;
    title?: string
}


export default function Form({
    fields,
    buttonClick,
    buttonText,
    mensaje,
    link,
    linkText,
    linkClassName,
    title
}: FormProps) {
    return (
        <form className="form">
            <div>
                <h2>{title}</h2>
            </div>

            <div>
                {fields.map((field) => (
                    <div key={field.id} className="inputs">
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={`Tu ${field.label.toLowerCase()}`}
                        />
                    </div>
                ))}
            </div>

            <div>
                {mensaje && <Message>{mensaje}</Message>}
                <div>
                    <Button type="submit" onClick={buttonClick} className="button" text={buttonText} />
                </div>
                {link && linkText && (
                    <Link to={link} className={linkClassName}>{linkText}</Link>
                )}
            </div>

        </form>
    );
}
