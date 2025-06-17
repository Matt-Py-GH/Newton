import "./title.css"

interface titleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function Title({ title, subtitle, className }: titleProps) {
    return (
        <div className="title-container">
            <h1 className={`title ${className}`}>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
}