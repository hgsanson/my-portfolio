"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"
 
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [ mounted, setMounted] = useState(false)

  useEffect(() => {
    // When mounted on client, now we can show the UI
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}