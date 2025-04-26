import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We're here to help with any questions about our pediatric services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Have questions about our services or need to schedule an appointment? Contact us using any of the
                methods below or fill out the contact form.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <a href="https://maps.app.goo.gl/rzbL7zqhVeccdtaUA">
                      <p className="mt-1 text-muted-foreground">4th and 5th floor, of Govind Medicare Building, bus stop, last, Gangapur - Satpur Link Rd, Near Ashoknagar Last Bus Stop, Ashoknagar, Satpur Colony, Nashik, Maharashtra 422012</p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone Numbers</h3>
                    <a href="tel:+917709186911">
                      <p className="mt-1 text-muted-foreground">

                        Main: +91 77091 86911
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:saianandhospital2025@gmail.com">
                      <p className="mt-1 text-muted-foreground">saianandhospital2025@gmail.com</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium">Hours of Operation</h3>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium">Emergency Department:</span> 24 hours, 7 days a week
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-primary">Send Us a Message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Full name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Contact number" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Please type your message here" className="min-h-[120px]" />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="aspect-video w-full bg-muted">
              {/* Map would be embedded here */}
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Map location would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Need Immediate Assistance?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Our emergency department is open 24/7 for urgent pediatric care
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

export default ContactPage

