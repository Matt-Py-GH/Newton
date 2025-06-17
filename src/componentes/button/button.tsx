import './button.css'

interface MegaButtonProps {
	children: React.ReactNode
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	className?: string
}

export default function MegaButton({ children, onClick, type = 'button', className = "" }: MegaButtonProps) {
	return (
		<button className={`mega-btn ${className}`} onClick={onClick} type={type}>
			{children}
		</button>
	)
}
