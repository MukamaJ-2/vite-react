import { Baby, BarChart3, Calendar, Clock, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Staff Management",
      description: "Easily manage your staff schedules, qualifications, and performance reviews in one place.",
    },
    {
      icon: <Baby className="h-10 w-10 text-primary" />,
      title: "Child Profiles",
      description:
        "Keep detailed records of each child, including emergency contacts, allergies, and developmental milestones.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Attendance Tracking",
      description: "Track daily attendance with check-in/check-out features and generate reports for billing.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Financial Management",
      description: "Streamline billing, payments, and financial reporting to keep your business running smoothly.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Parent Communication",
      description: "Keep parents updated with real-time notifications, daily reports, and secure messaging.",
    },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Everything You Need to Run Your Daycare
        </h2>
        <p className="max-w-[85%] text-lg text-muted-foreground sm:text-xl">
          Our comprehensive platform simplifies daycare management so you can focus on what matters most - the children.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center shadow-sm">
            <div className="mb-3">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
