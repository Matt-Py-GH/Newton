import './button.css'

import React from 'react'

interface MegaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	className?: string
}

export default function MegaButton({ text = "", className = "", ...rest }: MegaButtonProps) {
	return (
		<button className={`mega-btn ${className}`} {...rest}>
			{text}
		</button>
	)
}
