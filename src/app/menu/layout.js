'use client'
import MenuNavbar from '@/components/MenuNavbar'

export default function MenuLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Only shows MenuNavbar */}
      <MenuNavbar />
      <main className="flex-grow pt-28"> {/* pt-28 matches navbar height */}
        {children}
      </main>
    </div>
  )
}