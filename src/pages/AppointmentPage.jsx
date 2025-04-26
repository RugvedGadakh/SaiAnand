import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Input } from "../components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

function AppointmentPage() {
  const [date, setDate] = useState();
  
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
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validation: Trigger form submission only if all required fields are filled
    if (!formData.name || !formData.childName || !formData.phone || !date || !formData.time || !formData.department) {
      // alert("Please fill in all required fields.");
      return;
    }

    try {
      const url = "https://script.google.com/macros/s/AKfycbyTuaDGygyHgsbx--rY7p3fYHYWQmEiFBk-4NHBs5Bi_v6Q_HlnsqT33LvnymgqsLCR/exec";

      const formBody = new URLSearchParams({
        Name: formData.name,
        ChildName: formData.childName,
        ChildAge: formData.childAge,
        Phone: formData.phone,
        Email: formData.email,
        Department: formData.department,
        Doctor: formData.doctor,
        Date: date ? format(date, "PPP") : "",
        Time: formData.time,
        Reason: formData.reason,
      }).toString();

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      const data = await response.text();
      alert(data);

      alert("Appointment requested. We'll contact you shortly to confirm your appointment.");

      // Reset form after successful submission
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
      });
      setDate(undefined);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Book an Appointment
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Schedule a consultation with our pediatric specialists
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-lg border bg-card p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Parent/Guardian Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Parent/Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Full name"
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Child's Name */}
                <div className="space-y-2">
                  <label htmlFor="childName" className="text-sm font-medium leading-none">
                    Child's Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    placeholder="Child's full name"
                    required
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  />
                </div>

                {/* Child's Age */}
                <div className="space-y-2">
                  <label htmlFor="childAge" className="text-sm font-medium leading-none">
                    Child's Age
                  </label>
                  <Input
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    placeholder="Age in years or months"
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Contact number"
                    required
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Your email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) => setFormData({ ...formData, department: value })}
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

                {/* Doctor */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Preferred Doctor
                  </label>
                  <Select
                    value={formData.doctor}
                    onValueChange={(value) => setFormData({ ...formData, doctor: value })}
                  >
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

                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
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
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                        }}
                        initialFocus
                        disabled={(day) => day < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => setFormData({ ...formData, time: value })}
                  >
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

                {/* Reason */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="reason" className="text-sm font-medium leading-none">
                    Reason for Visit
                  </label>
                  <Textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    placeholder="Describe the reason for the appointment"
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" className="mt-6 w-full">Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppointmentPage;
