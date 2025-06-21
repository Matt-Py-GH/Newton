import MegaButton from "../button/button";
import Title from "../title/title";

import "./header.css";

interface HeaderProps {
    textButton: string;
    title?: string;
    subtitle?: string;
    titleClass?: string;
    buttonClass?: string;
    functionButton?: () => void;
}

export default function Header({ textButton, title, titleClass, buttonClass, functionButton }: HeaderProps) {
    return (
        <header className="header-main">
            <Title className={titleClass} title={title} />
            <MegaButton onClick={functionButton} className={`buton-header ${buttonClass}`} text={textButton} />
        </header>
    );
}