"use client"

import React, { createContext, useContext, useState } from "react"
import { cn } from "../../lib/utils"

const SheetContext = createContext({})

const Sheet = ({ children }) => {
  const [open, setOpen] = useState(false)

  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>
}

const SheetTrigger = ({ children, asChild }) => {
  const { setOpen } = useContext(SheetContext)

  const handleClick = () => {
    setOpen(true)
  }

  if (asChild) {
    return React.cloneElement(children, {
      onClick: handleClick,
    })
  }

  return <button onClick={handleClick}>{children}</button>
}

const SheetContent = ({ children, side = "right", className }) => {
  const { open, setOpen } = useContext(SheetContext)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div
        className={cn(
          "fixed inset-y-0 bg-background p-6 shadow-lg transition ease-in-out",
          side === "left" ? "left-0 border-r" : "right-0 border-l",
          "w-3/4 sm:max-w-sm",
          className,
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  )
}

export { Sheet, SheetTrigger, SheetContent }

// Placeholder icon for the sheet
function X(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

