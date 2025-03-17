"use client"

import React, { createContext, useContext, useState } from "react"
import { cn } from "../../lib/utils"

const PopoverContext = createContext({})

const Popover = ({ children }) => {
  const [open, setOpen] = useState(false)
  return <PopoverContext.Provider value={{ open, setOpen }}>{children}</PopoverContext.Provider>
}

const PopoverTrigger = ({ children, asChild }) => {
  const { setOpen } = useContext(PopoverContext)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  if (asChild) {
    return React.cloneElement(children, {
      onClick: handleClick,
    })
  }

  return <button onClick={handleClick}>{children}</button>
}

const PopoverContent = ({ className, children, ...props }) => {
  const { open } = useContext(PopoverContext)

  if (!open) return null

  return (
    <div
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Popover, PopoverTrigger, PopoverContent }

