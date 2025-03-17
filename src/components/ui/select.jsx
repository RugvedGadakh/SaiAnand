"use client"

import { createContext, useContext, useState } from "react"
import { cn } from "../../lib/utils"

const SelectContext = createContext({})

const Select = ({ children, value, onValueChange }) => {
  const [open, setOpen] = useState(false)

  return <SelectContext.Provider value={{ open, setOpen, value, onValueChange }}>{children}</SelectContext.Provider>
}

const SelectTrigger = ({ children, className }) => {
  const { open, setOpen, value } = useContext(SelectContext)

  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
}

const SelectValue = ({ placeholder }) => {
  const { value } = useContext(SelectContext)
  return <span>{value || placeholder}</span>
}

const SelectContent = ({ children, className }) => {
  const { open } = useContext(SelectContext)

  if (!open) return null

  return (
    <div
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        className,
      )}
    >
      <div className="max-h-[var(--radix-select-content-available-height)] overflow-auto">{children}</div>
    </div>
  )
}

const SelectItem = ({ children, value, className }) => {
  const { onValueChange, setOpen } = useContext(SelectContext)

  const handleSelect = () => {
    onValueChange(value)
    setOpen(false)
  }

  return (
    <div
      onClick={handleSelect}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }

// Placeholder icon for the select
function ChevronDown(props) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

