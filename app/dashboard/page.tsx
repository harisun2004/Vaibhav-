'use client'

import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import MapComponent from '@/components/map-component'
import AirQualityChart from '../air-quality-chart'
import TrafficUpdates from '../traffic-updates'
import PublicTransportStatus from '../public-transport-status'
import LocalEvents from '../local-events'
import { useUserLocation } from '@/components/use-user-location'
import Link from 'next/link'
import { AppSidebar } from '@/components/app-sidebar'
import { ModeToggle } from '@/components/mode-toggle'
import { LoginButton } from '@/components/login-button'
import { ProtectedRoute } from '@/components/protected-route'
import Image from 'next/image'

export default function DashboardPage() {
  const { location, error } = useUserLocation()

  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 bg-background border-b">
            <div className="container mx-auto p-4">
              <div className="flex justify-end items-center space-x-2">
                <LoginButton />
                <ModeToggle />
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold mb-6 text-primary">Smart City Dashboard</h1>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>City Map</CardTitle>
                    <CardDescription>Interactive map of your area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                      {location ? (
                        <MapComponent center={[location.latitude, location.longitude]} zoom={13} />
                      ) : (
                        <MapComponent center={[51.505, -0.09]} zoom={13} />
                      )}
                    </Suspense>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Air Quality</CardTitle>
                    <CardDescription>Real-time air quality index for your location</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                      <AirQualityChart location={location} />
                    </Suspense>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Updates</CardTitle>
                    <CardDescription>Latest traffic information in your area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                      <TrafficUpdates location={location} />
                    </Suspense>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Public Transport Status</CardTitle>
                    <CardDescription>Current status of public transportation near you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                      <PublicTransportStatus location={location} />
                    </Suspense>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Local Events</CardTitle>
                    <CardDescription>Upcoming events in your area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                      <LocalEvents location={location} />
                    </Suspense>
                  </CardContent>
                </Card>
              </div>
              <Card className="md:col-span-2 mt-6">
                <CardHeader>
                  <CardTitle>Route Optimization</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Link href="/route-optimizer" className="block">
                    <div className="aspect-[16/9] rounded-md bg-muted relative overflow-hidden group">
                      <Image
                        src="https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80"
                        alt="Route Optimization Preview"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold">Open Route Optimizer</span>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}

