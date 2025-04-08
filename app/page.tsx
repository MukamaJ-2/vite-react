import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { Baby } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Baby className="h-6 w-6 text-primary" />
          <span className="text-xl">Daystar Daycare</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Register</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-slate-50 py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Manage Your Daycare Center with Ease
              </h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive solution for babysitter management, child care, financial tracking, and more.
              </p>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Button size="lg" className="font-medium">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Daycare management dashboard"
                  width={500}
                  height={400}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <div className="rounded-lg bg-white/90 p-4 shadow-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Dashboard preview"
                      width={300}
                      height={200}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Testimonials />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
