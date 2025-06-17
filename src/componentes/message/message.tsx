import "./message.css";

interface MessageProps {
  children: React.ReactNode
  className?: string
}

export default function Message({children="", className=""}: MessageProps) {
  return (
    <span className={`span ${className}`}>{children}</span>
  );
}