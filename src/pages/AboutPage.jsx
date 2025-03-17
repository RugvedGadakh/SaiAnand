import { Link } from "react-router-dom"
import { CheckCircle2 } from "lucide-react"
import { Button } from "../components/ui/button"

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Sai Anand Hospital</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Dedicated to providing exceptional pediatric care with compassion and expertise
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                <p className="mt-4 text-muted-foreground">
                  Sai Anand Hospital was founded with a vision to provide specialized healthcare services for children
                  in a compassionate and child-friendly environment. Our journey began with a commitment to excellence
                  in pediatric care, and today we stand as a trusted healthcare provider for families across the region.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our team of experienced pediatric specialists combines medical expertise with a gentle approach,
                  ensuring that every child receives the highest quality care while feeling safe and comfortable. We
                  understand that treating children requires not just medical knowledge, but also patience,
                  understanding, and a touch of playfulness.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">
                  To provide comprehensive, high-quality pediatric healthcare services in a nurturing environment that
                  promotes healing and wellness for children of all ages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Our Vision</h3>
                <p className="mt-2 text-muted-foreground">
                  To be the leading pediatric healthcare provider known for excellence in clinical care, innovation, and
                  compassionate service to children and their families.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-auto">
              <img
                src="https://placehold.co/800x600/e6f7ff/1e88e5?text=Hospital+Building"
                alt="Hospital building"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground">
              These principles guide our approach to pediatric healthcare and shape our interactions with patients and
              families
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Compassion",
                description: "We provide care with kindness, empathy, and respect for each child and family.",
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in medical care, safety, and service.",
              },
              {
                title: "Innovation",
                description: "We embrace advances in pediatric medicine to provide the best possible care.",
              },
              {
                title: "Integrity",
                description: "We act with honesty, transparency, and ethical responsibility in all we do.",
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary">What Sets Us Apart</h2>
            <p className="mt-4 text-muted-foreground">
              At Sai Anand Hospital, we offer unique advantages that make us the preferred choice for pediatric care
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">Specialized Pediatric Focus</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Dedicated exclusively to children's healthcare needs",
                  "Specialized equipment and facilities designed for pediatric patients",
                  "Child-friendly environment that reduces anxiety and fear",
                  "Comprehensive range of pediatric services under one roof",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">Expert Medical Team</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Team of highly qualified pediatric specialists",
                  "Multidisciplinary approach to complex cases",
                  "Continuous professional development and training",
                  "Combination of modern medicine with traditional approaches",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">Family-Centered Care</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Parents involved as active partners in their child's care",
                  "Clear communication about diagnosis and treatment options",
                  "Support services for families during hospital stays",
                  "Education and resources for home care management",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">Holistic Approach</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Focus on both physical and emotional well-being",
                  "Integration of play therapy and child life services",
                  "Nutritional guidance tailored to children's needs",
                  "Preventive care and health education for families",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Experience the Sai Anand Difference</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Schedule a visit to our hospital and see why families trust us with their children's health
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/appointment">Book an Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white/10"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

