import { Link } from "react-router-dom"
import { Heart, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Sai Anand Hospital</span>
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link to="/doctors" className="text-sm font-medium hover:text-primary">
              Doctors
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 py-6">
                  <Link to="/" className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">Sai Anand Hospital</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <Link to="/" className="text-sm font-medium hover:text-primary">
                      Home
                    </Link>
                    <Link to="/about" className="text-sm font-medium hover:text-primary">
                      About
                    </Link>
                    <Link to="/services" className="text-sm font-medium hover:text-primary">
                      Services
                    </Link>
                    <Link to="/doctors" className="text-sm font-medium hover:text-primary">
                      Doctors
                    </Link>
                    <Link to="/contact" className="text-sm font-medium hover:text-primary">
                      Contact
                    </Link>
                    <Button asChild size="sm" className="mt-2">
                      <Link to="/appointment">Book Appointment</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <Link to="/" className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Sai Anand Hospital</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Specialized pediatric care with a gentle touch. Your child's health is our priority.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/doctors" className="text-muted-foreground hover:text-primary">
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary">
                    Pediatric Emergency
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary">
                    Neonatal Intensive Care
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary">
                    Pediatric Surgery
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary">
                    Outpatient Clinics
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary">
                    Child Life Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Sai Anand Hospital, [Hospital Address], India</li>
                <li className="text-muted-foreground">Phone: +91 1234567890</li>
                <li className="text-muted-foreground">Email: info@saianand.example.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Sai Anand Hospital. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

