import { Link } from "react-router-dom"
import { ChevronRight, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "../components/ui/button"

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                  Sai Anand Hospital
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  Specialized pediatric care with a gentle touch. Your child's health is our priority.
                </p>
              </div>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/appointment">Book an Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-semibold">
                  <Link to="/services">
                    Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:h-full">
              <img
                src="https://placehold.co/800x600/e6f7ff/1e88e5?text=Happy+Children+with+Doctor"
                alt="Happy children with doctor"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <Phone className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-medium">Emergency Contact</h3>
                <p className="text-muted-foreground">+91 1234567890</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <Clock className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-medium">Working Hours</h3>
                <p className="text-muted-foreground">24/7 Emergency Care</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <MapPin className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Sai Anand Hospital, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Pediatric Facilities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Comprehensive healthcare services designed specifically for children
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pediatric Emergency",
                description: "24/7 emergency care with trained nursing staff specialized in pediatric emergencies",
                icon: "🚑",
              },
              {
                title: "Neonatal Intensive Care (NICU)",
                description: "Advanced care for premature or critically ill newborns",
                icon: "👶",
              },
              {
                title: "Pediatric Intensive Care (PICU)",
                description: "Specialized care for children with life-threatening conditions",
                icon: "🏥",
              },
              {
                title: "Outpatient Clinics",
                description: "Routine check-ups, vaccinations, and treatment for minor illnesses",
                icon: "🩺",
              },
              {
                title: "Indoor Patient Department",
                description: "Comfortable inpatient facilities for children requiring hospitalization",
                icon: "🛏️",
              },
              {
                title: "Pediatric Surgery",
                description: "Specialized surgical procedures with equipment designed for children",
                icon: "⚕️",
              },
            ].map((service, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h3 className="mb-2 text-xl font-medium text-primary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Medical Directors</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Experienced specialists dedicated to providing the best pediatric care
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. Pushpak Harish Palod",
                credentials: "MBBS, MD, (Ped) Fellowship in Neonatology (IAP)",
                specialty: "Pediatrician and Neonatologist",
              },
              {
                name: "Dr. Nikita Sanjay Gadakh-Tarle",
                credentials: "BAMS, MD",
                specialty: "Pediatrician and Neonatologist",
              },
              {
                name: "Dr. Sunil Vishwanath Sabale",
                credentials: "BAMS, CCH",
                specialty: "More than 10 years experience in Pediatric field",
              },
              {
                name: "Dr. Rakesh Sheshrao Pawar",
                credentials: "BAMS, DIPCH",
                specialty: "More than 10 years experience in Pediatric field",
              },
              {
                name: "Dr. Tushar Vitthal Yeole",
                credentials: "BHMS, CCH, CCMP",
                specialty: "More than 10 years experience in Pediatric field",
              },
            ].map((doctor, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 h-48 w-full overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={`https://placehold.co/300x300/e6f7ff/1e88e5?text=Dr.`}
                    alt={doctor.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-medium text-primary">{doctor.name}</h3>
                <p className="text-sm font-medium text-blue-600">{doctor.credentials}</p>
                <p className="mt-2 text-muted-foreground">{doctor.specialty}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/doctors">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Choose Sai Anand Hospital
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We provide specialized care in a child-friendly environment
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Child-Centered Care",
                description: "Our facilities and procedures are designed with children's comfort in mind",
              },
              {
                title: "Experienced Specialists",
                description: "Our team consists of highly qualified pediatric specialists",
              },
              {
                title: "Comprehensive Services",
                description: "From emergency care to rehabilitation, we offer complete pediatric healthcare",
              },
              {
                title: "Family Support",
                description: "We involve and support families throughout the treatment process",
              },
            ].map((feature, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <h3 className="mb-2 text-xl font-medium text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Need a Pediatric Consultation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Our team of specialists is ready to provide the best care for your child
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/appointment">Book an Appointment Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

