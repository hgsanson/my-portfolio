"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code, User, Briefcase, Mail, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", path: "/", icon: <User className="w-4 h-4" /> },
  { name: "Projetos", path: "/projects", icon: <Code className="w-4 h-4" /> },
  { name: "Experiência", path: "/experience", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Contato", path: "/contact", icon: <Mail className="w-4 h-4" /> },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-10 h-10 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-lg blur opacity-30"></div>
            </div>
          </motion.div>
          <span className="font-bold text-xl">
            Dev<span className="text-purple-500">Portfolio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-md flex items-center gap-2 transition-colors relative group",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.icon}
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-md bg-accent z-[-1]"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md hover:bg-accent" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md flex items-center gap-3",
                    isActive
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

