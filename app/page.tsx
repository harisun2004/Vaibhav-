'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function CoverPage() {
  const router = useRouter()

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b"
        alt="Smart City Landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Welcome to SmartSphere
        </h1>
        <p className="text-xl md:text-2xl text-center mb-4">
          Where innovation meets urban living!
        </p>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
          Discover a city designed for sustainability, connectivity, and convenience.
        </p>
        <Button 
          onClick={() => router.push('/auth')}
          className="bg-white text-primary hover:bg-primary hover:text-white"
        >
          Login / Sign Up
        </Button>
      </div>
    </div>
  )
}

