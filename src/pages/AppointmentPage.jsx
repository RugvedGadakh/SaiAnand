"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import { Input } from "../components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Textarea } from "../components/ui/textarea"
import { toast } from "../lib/toast"

function AppointmentPage() {
  const [date, setDate] = useState()
  const [formData, setFormData] = useState({
    name: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    doctor: "",
    department: "",
    time: "",
    reason: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.childName || !formData.phone || !date || !formData.time || !formData.department) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Form submission would go here
    toast({
      title: "Appointment requested",
      description: "We'll contact you shortly to confirm your appointment.",
    })

    // Reset form
    setFormData({
      name: "",
      childName: "",
      childAge: "",
      phone: "",
      email: "",
      doctor: "",
      department: "",
      time: "",
      reason: "",
    })
    setDate(undefined)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Book an Appointment</h1>
            <p className="mt-4 text-xl text-muted-foreground">Schedule a consultation with our pediatric specialists</p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-lg border bg-card p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Parent/Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="childName"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Child's Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Child's full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="childAge"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Child's Age
                  </label>
                  <Input
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="Age in years or months"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contact number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) => handleSelectChange("department", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-pediatrics">General Pediatrics</SelectItem>
                      <SelectItem value="neonatology">Neonatology</SelectItem>
                      <SelectItem value="pediatric-emergency">Pediatric Emergency</SelectItem>
                      <SelectItem value="pediatric-surgery">Pediatric Surgery</SelectItem>
                      <SelectItem value="child-development">Child Development</SelectItem>
                      <SelectItem value="pediatric-rehabilitation">Pediatric Rehabilitation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Preferred Doctor
                  </label>
                  <Select value={formData.doctor} onValueChange={(value) => handleSelectChange("doctor", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select doctor (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-palod">Dr. Pushpak Harish Palod</SelectItem>
                      <SelectItem value="dr-gadakh">Dr. Nikita Sanjay Gadakh-Tarle</SelectItem>
                      <SelectItem value="dr-sabale">Dr. Sunil Vishwanath Sabale</SelectItem>
                      <SelectItem value="dr-pawar">Dr. Rakesh Sheshrao Pawar</SelectItem>
                      <SelectItem value="dr-yeole">Dr. Tushar Vitthal Yeole</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                      <SelectItem value="evening">Evening (3:00 PM - 6:00 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="reason"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Reason for Visit
                  </label>
                  <Textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Please briefly describe the reason for your visit"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Button type="submit" className="w-full">
                  Book Appointment
                </Button>
              </div>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Fields marked with <span className="text-red-500">*</span> are required
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppointmentPage

