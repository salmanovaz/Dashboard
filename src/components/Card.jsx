import React, { memo } from 'react'

const Card = memo(({title, value, color}) => {
  return (
    <div className="stat-card" style={{ borderTop: `4px solid ${color}` }}>
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value" style={{ color: color }}>
        {value} ₼
      </p>
    </div>
  )
})

Card.displayName = 'Card'

export default Card