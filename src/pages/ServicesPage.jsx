import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"

function ServicesPage() {
  const services = [
    {
      title: "Pediatric Emergency Department",
      description:
        "Our 24/7 emergency department is staffed with pediatric specialists trained to handle all types of medical emergencies for children. We provide immediate care in a child-friendly environment designed to reduce anxiety and fear.",
      features: [
        "Trained nursing staff",
        "Child-friendly examination rooms",
        "Rapid assessment protocols",
        "24/7 availability",
      ],
    },
    {
      title: "Neonatal Intensive Care Unit (NICU)",
      description:
        "Our state-of-the-art NICU provides specialized care for premature and critically ill newborns. Our team of neonatologists, specialized nurses, and support staff work together to provide the highest level of care for our smallest patients.",
      features: [
        "Advanced monitoring equipment",
        "Specialized feeding support",
        "Temperature-controlled environments",
        "Family-centered care approach",
      ],
    },
    {
      title: "Pediatric Intensive Care Unit (PICU)",
      description:
        "For children with life-threatening conditions, our PICU offers advanced monitoring and treatment. Our multidisciplinary team provides comprehensive care for critically ill children requiring intensive observation and specialized treatment.",
      features: [
        "Advanced life support capabilities",
        "Continuous monitoring",
        "Specialized pediatric equipment",
        "Multidisciplinary care team",
      ],
    },
    {
      title: "Outpatient Clinics",
      description:
        "Our outpatient clinics offer comprehensive care for routine check-ups, vaccinations, and treatment of minor illnesses. We provide a comfortable environment where children can receive care without the stress of hospitalization.",
      features: [
        "Well-child visits",
        "Immunizations",
        "Growth and development monitoring",
        "Treatment for common childhood illnesses",
      ],
    },
    {
      title: "Indoor Patient Department",
      description:
        "When hospitalization is necessary, our inpatient facilities provide a comfortable and supportive environment for children and their families. Our rooms are designed to feel less clinical and more welcoming to help ease the stress of hospital stays.",
      features: [
        "Private and semi-private rooms",
        "Parent accommodation options",
        "Child-friendly décor and activities",
        "24/7 nursing care",
      ],
    },
    {
      title: "Surgical Department",
      description:
        "Our pediatric surgical department is equipped with specialized tools and staffed by surgeons trained in performing procedures on children of all ages, from newborns to adolescents. We use minimally invasive techniques whenever possible to reduce recovery time.",
      features: [
        "Pre-operative preparation programs",
        "Child-sized surgical equipment",
        "Pediatric anesthesiologists",
        "Post-operative pain management",
      ],
    },
    {
      title: "Child Life Services",
      description:
        "Our Child Life specialists help children cope with the stress and uncertainty of illness and hospitalization through therapeutic play, preparation for procedures, and emotional support. They work closely with families to promote a positive hospital experience.",
      features: [
        "Therapeutic play activities",
        "Procedure preparation",
        "Emotional support",
        "Sibling support programs",
      ],
    },
    {
      title: "Pediatric Rehabilitation",
      description:
        "Our rehabilitation services include physical, occupational, and speech therapy for children recovering from injury or illness, or those with developmental delays. Our therapists create individualized treatment plans to help each child reach their full potential.",
      features: [
        "Physical therapy",
        "Occupational therapy",
        "Speech therapy",
        "Developmental assessment and intervention",
      ],
    },
    {
      title: "Mental Health Services",
      description:
        "We provide comprehensive mental health services for children dealing with emotional or psychological issues. Our team of child psychologists and psychiatrists offer counseling, therapy, and medication management when appropriate.",
      features: ["Individual therapy", "Family therapy", "Psychological assessment", "Medication management"],
    },
    {
      title: "Play Areas and Child-Friendly Amenities",
      description:
        "Throughout our hospital, we've created spaces where children can play and just be kids. These areas help reduce anxiety and provide a sense of normalcy during hospital visits or stays.",
      features: [
        "Indoor playrooms",
        "Outdoor playground (weather permitting)",
        "Age-appropriate toys and activities",
        "Entertainment options in patient rooms",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Pediatric Facilities</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Comprehensive healthcare services designed specifically for children's unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-primary">{service.title}</h2>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <div className="mb-4">
                  <h3 className="mb-2 font-medium">Key Features:</h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Have Questions About Our Services?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Our team is ready to provide more information and help you schedule an appointment
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

export default ServicesPage

