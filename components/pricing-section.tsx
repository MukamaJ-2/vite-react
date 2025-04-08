import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small daycares just getting started",
      features: [
        "Up to 30 child profiles",
        "Basic attendance tracking",
        "Staff management",
        "Parent portal access",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for established daycare centers",
      features: [
        "Up to 100 child profiles",
        "Advanced attendance tracking",
        "Staff scheduling & management",
        "Financial reporting",
        "Parent communication tools",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "For large centers with multiple locations",
      features: [
        "Unlimited child profiles",
        "Multi-location management",
        "Advanced financial tools",
        "Custom reporting",
        "API access",
        "Dedicated account manager",
      ],
    },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
        <p className="max-w-[85%] text-lg text-muted-foreground sm:text-xl">
          Choose the plan that's right for your daycare center
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={plan.popular ? "border-primary shadow-lg" : "border shadow"}>
            {plan.popular && (
              <div className="absolute right-4 top-0 rounded-b-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div>
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
