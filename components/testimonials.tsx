import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Daystar Daycare has completely transformed how we manage our center. The time we save on administrative tasks allows us to focus more on the children.",
      author: "Sarah Johnson",
      role: "Daycare Owner",
      avatar: "SJ",
    },
    {
      quote:
        "The parent communication features are incredible. Parents love getting updates throughout the day, and it's made our center stand out from competitors.",
      author: "Michael Chen",
      role: "Center Director",
      avatar: "MC",
    },
    {
      quote:
        "The financial tracking alone is worth the investment. We've reduced billing errors by 95% and parents appreciate the transparency.",
      author: "Lisa Rodriguez",
      role: "Administrative Manager",
      avatar: "LR",
    },
  ]

  return (
    <section className="bg-slate-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by Daycare Centers Everywhere
          </h2>
          <p className="max-w-[85%] text-lg text-muted-foreground sm:text-xl">
            See what daycare professionals are saying about our platform
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
