import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Pushpak Harish Palod",
      credentials: "MBBS, MD, (Ped) Fellowship in Neonatology (IAP)",
      specialty: "Pediatrician and Neonatologist",
      bio: "Dr. Pushpak Harish Palod is a highly skilled pediatrician and neonatologist with extensive training in the care of newborns and children. With his Fellowship in Neonatology from the Indian Academy of Pediatrics, he specializes in the treatment of premature and critically ill newborns.",
      areas: ["Neonatal Intensive Care", "Pediatric Critical Care", "Newborn Emergencies", "Developmental Pediatrics"],
    },
    {
      name: "Dr. Nikita Sanjay Gadakh-Tarle",
      credentials: "BAMS, MD",
      specialty: "Pediatrician and Neonatologist",
      bio: "Dr. Nikita Sanjay Gadakh-Tarle combines her training in both traditional Ayurvedic medicine (BAMS) and modern medical practices (MD) to provide comprehensive care for children. She specializes in neonatology and has a particular interest in integrative approaches to pediatric healthcare.",
      areas: ["Neonatal Care", "Integrative Pediatrics", "Preventive Healthcare", "Child Development"],
    },
    {
      name: "Dr. Sunil Vishwanath Sabale",
      credentials: "BAMS, CCH",
      specialty: "Pediatric Specialist",
      bio: "With more than 10 years of experience in the pediatric field, Dr. Sunil Vishwanath Sabale brings valuable expertise to our team. His background in Ayurvedic medicine (BAMS) and certification in clinical homeopathy (CCH) allows him to offer complementary approaches to conventional pediatric care.",
      areas: ["Pediatric Ayurveda", "Homeopathic Pediatrics", "Chronic Disease Management", "Preventive Care"],
    },
    {
      name: "Dr. Rakesh Sheshrao Pawar",
      credentials: "BAMS, DIPCH",
      specialty: "Pediatric Specialist",
      bio: "Dr. Rakesh Sheshrao Pawar has dedicated more than a decade to pediatric care. With his training in Ayurvedic medicine (BAMS) and diploma in clinical homeopathy (DIPCH), he offers a holistic approach to treating common childhood ailments and promoting overall wellness.",
      areas: ["Pediatric Homeopathy", "Ayurvedic Pediatrics", "Childhood Allergies", "Immune System Support"],
    },
    {
      name: "Dr. Tushar Vitthal Yeole",
      credentials: "BHMS, CCH, CCMP",
      specialty: "Pediatric Specialist",
      bio: "Dr. Tushar Vitthal Yeole brings over 10 years of pediatric experience to Sai Anand Hospital. His background in homeopathic medicine (BHMS) and certifications in clinical homeopathy (CCH) and clinical medical practice (CCMP) enable him to provide alternative therapeutic options for children.",
      areas: ["Homeopathic Pediatrics", "Behavioral Issues", "Developmental Concerns", "Constitutional Treatment"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Medical Directors</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Meet our team of experienced specialists dedicated to providing exceptional pediatric care
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Profiles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {doctors.map((doctor, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-card shadow-sm">
                <div className="grid gap-6 p-6 sm:grid-cols-[250px_1fr] md:gap-12">
                  <div className="mx-auto h-64 w-full max-w-[250px] overflow-hidden rounded-lg bg-muted sm:h-full">
                    <img
                      src={`https://placehold.co/300x400/e6f7ff/1e88e5?text=${doctor.name.split(" ")[0]}`}
                      alt={doctor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-primary">{doctor.name}</h2>
                    <p className="text-sm font-medium text-blue-600">{doctor.credentials}</p>
                    <p className="mt-1 font-medium">{doctor.specialty}</p>
                    <p className="mt-4 text-muted-foreground">{doctor.bio}</p>
                    <div className="mt-4">
                      <h3 className="font-medium">Areas of Expertise:</h3>
                      <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                        {doctor.areas.map((area, areaIndex) => (
                          <li key={areaIndex} className="flex items-center">
                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Schedule a Consultation with Our Specialists</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Our doctors are ready to provide personalized care for your child
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorsPage

