import React from 'react'

export interface FeatureGridProps {
  sectionTitle: string
  sectionDescription?: string | null
  features: {
    title: string
    description: string
    icon?: string | null
    id?: string | null
  }[]
}

export const FeatureGridBlockComponent: React.FC<FeatureGridProps> = ({
  sectionTitle,
  sectionDescription,
  features,
}) => {
  return (
    <section
      style={{
        padding: '64px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#f7f8f8',
            marginBottom: '12px',
          }}
        >
          {sectionTitle}
        </h2>
        {sectionDescription && (
          <p
            style={{
              fontSize: '16px',
              color: '#8a8f98',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {sectionDescription}
          </p>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {features.map((feature, idx) => (
          <div
            key={feature.id || idx}
            style={{
              padding: '24px',
              backgroundColor: '#101113',
              border: '1px solid #232528',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {feature.icon && (
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: '#18191d',
                  border: '1px solid #282a2e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  fontSize: '14px',
                  color: '#8a8f98',
                }}
              >
                {feature.icon.slice(0, 2).toUpperCase()}
              </div>
            )}
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#f7f8f8',
                marginBottom: '8px',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#8a8f98',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
