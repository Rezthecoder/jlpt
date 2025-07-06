"use client"

import { useEffect, useState } from "react"

interface SakuraPetal {
  id: number
  x: number
  y: number
  rotation: number
  speed: number
  size: number
  color: string
  opacity: number
}

const colors = [
  "#FF69B4", // Hot Pink
  "#FF1493", // Deep Pink
  "#FFB6C1", // Light Pink
  "#FFC0CB", // Pink
  "#FF6347", // Tomato
  "#FF4500", // Orange Red
  "#FFD700", // Gold
  "#FF8C00", // Dark Orange
  "#FF00FF", // Magenta
  "#DA70D6", // Orchid
  "#BA55D3", // Medium Orchid
  "#9370DB", // Medium Purple
]

export function SakuraBackground() {
  const [petals, setPetals] = useState<SakuraPetal[]>([])

  useEffect(() => {
    const updatePetals = () => {
      const petalCount = window.innerWidth < 768 ? 25 : window.innerWidth < 1024 ? 35 : 50
      const initialPetals: SakuraPetal[] = []
      for (let i = 0; i < petalCount; i++) {
        initialPetals.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight - window.innerHeight,
          rotation: Math.random() * 360,
          speed: Math.random() * 2 + 1,
          size: window.innerWidth < 768 ? Math.random() * 10 + 6 : Math.random() * 15 + 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.8 + 0.2,
        })
      }
      setPetals(initialPetals)
    }

    updatePetals()

    const handleResize = () => {
      updatePetals()
    }

    window.addEventListener("resize", handleResize)

    const animatePetals = () => {
      setPetals((prevPetals) =>
        prevPetals.map((petal) => {
          let newY = petal.y + petal.speed
          let newX = petal.x + Math.sin(newY * 0.01) * 0.5
          const newRotation = petal.rotation + 1

          if (newY > window.innerHeight + 50) {
            newY = -50
            newX = Math.random() * window.innerWidth
            return {
              ...petal,
              x: newX,
              y: newY,
              rotation: 0,
              color: colors[Math.floor(Math.random() * colors.length)],
              opacity: Math.random() * 0.8 + 0.2,
            }
          }

          return {
            ...petal,
            x: newX,
            y: newY,
            rotation: newRotation,
          }
        }),
      )
    }

    const interval = setInterval(animatePetals, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-pulse"
          style={{
            left: `${petal.x}px`,
            top: `${petal.y}px`,
            transform: `rotate(${petal.rotation}deg)`,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C12 2 8 6 8 10C8 14 10.5 16 12 16C13.5 16 16 14 16 10C16 6 12 2 12 2Z"
              fill={petal.color}
              fillOpacity="0.8"
            />
            <path
              d="M12 16C12 16 16 12 20 12C24 12 22 14.5 22 16C22 17.5 20 20 16 20C12 20 12 16 12 16Z"
              fill={petal.color}
              fillOpacity="0.6"
            />
            <path
              d="M12 16C12 16 8 12 4 12C0 12 2 14.5 2 16C2 17.5 4 20 8 20C12 20 12 16 12 16Z"
              fill={petal.color}
              fillOpacity="0.6"
            />
            <path
              d="M12 16C12 16 16 20 16 24C16 28 13.5 26 12 26C10.5 26 8 28 8 24C8 20 12 16 12 16Z"
              fill={petal.color}
              fillOpacity="0.7"
            />
            <path
              d="M12 16C12 16 8 20 8 24C8 28 10.5 26 12 26C13.5 26 16 28 16 24C16 20 12 16 12 16Z"
              fill={petal.color}
              fillOpacity="0.7"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
