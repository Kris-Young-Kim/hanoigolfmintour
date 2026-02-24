'use client'

import { ReactNode } from 'react'

interface GolfButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
}

export function GolfButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  href,
  target,
}: GolfButtonProps) {
  const baseClasses = 'golf-button font-bold rounded-lg relative overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-golf-gold to-fairway-green text-white shadow-lg hover:shadow-xl hover:shadow-golf-gold/50',
    secondary: 'bg-gradient-to-r from-fairway-green to-golf-green text-white shadow-lg hover:shadow-xl hover:shadow-fairway-green/50',
    outline: 'border-2 border-golf-gold text-golf-gold hover:bg-golf-gold hover:text-white',
    ghost: 'text-golf-gold hover:bg-golf-gold/10',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}
