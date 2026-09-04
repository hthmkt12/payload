import React from 'react'

export interface CallToActionProps {
  title: string
  description?: string | null
  buttonText: string
  buttonLink: string
  theme?: 'dark' | 'light' | 'gradient' | null
}

export const CallToActionBlockComponent: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  theme = 'dark',
}) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return {
          background: '#ffffff',
          color: '#08090a',
          titleColor: '#08090a',
          descColor: '#5c6068',
          border: '1px solid #e1e3e6',
          btnBg: '#08090a',
          btnColor: '#ffffff',
        }
      case 'gradient':
        return {
          background: 'linear-gradient(135deg, #181926 0%, #2b1b3d 50%, #0e111a 100%)',
          color: '#f7f8f8',
          titleColor: '#ffffff',
          descColor: '#b2b7c2',
          border: '1px solid rgba(130, 80, 223, 0.3)',
          btnBg: '#5e6ad2',
          btnColor: '#ffffff',
        }
      case 'dark':
      default:
        return {
          background: '#101113',
          color: '#f7f8f8',
          titleColor: '#f7f8f8',
          descColor: '#8a8f98',
          border: '1px solid #232528',
          btnBg: '#5e6ad2',
          btnColor: '#ffffff',
        }
    }
  }

  const styles = getThemeStyles()

  return (
    <section
      style={{
        padding: '64px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          padding: '48px 32px',
          borderRadius: '6px',
          background: styles.background,
          border: styles.border,
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: styles.titleColor,
            marginBottom: '12px',
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            style={{
              fontSize: '16px',
              color: styles.descColor,
              maxWidth: '560px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        )}
        <a
          href={buttonLink}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 28px',
            fontSize: '15px',
            fontWeight: 600,
            color: styles.btnColor,
            background: styles.btnBg,
            borderRadius: '6px',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(94, 106, 210, 0.3)',
            transition: 'opacity 0.15s ease',
          }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}
