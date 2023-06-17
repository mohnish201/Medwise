import React from "react";
import { useContext, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box } from "@chakra-ui/react";

function Appointment() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [bookedAppointments, setBookedAppointments] = useState([]);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setCustomerEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      date: selectedDate,
      time: selectedTime,
      service: selectedService,
      name: customerName,
      email: customerEmail,
    };

    setBookedAppointments([...bookedAppointments, newAppointment]);

    // Reset form fields
    setSelectedDate("");
    setSelectedTime("");
    setSelectedService("");
    setCustomerName("");
    setCustomerEmail("");

    // Show success message or perform any other actions
    alert("Appointment booked successfully!");
  };

  const eventSources = [
    {
      events: bookedAppointments.map((appointment) => ({
        title: appointment.service,
        start: appointment.date,
      })),
    },
  ];

  return (
    <div>
      <h1>Appointment Booking System</h1>
      <div>
        <Box w={{base: "300px", sm: "400px", md: "500px", lg: "600px", xl: "700px"}}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            dateClick={handleDateClick}
            events={eventSources}
          />
        </Box>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Select Time:
          <select value={selectedTime} onChange={handleTimeChange} required>
            <option value="">Select a time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            {/* Add more time options as needed */}
          </select>
        </label>
        <br />
        <label>
          Select Service:
          <select
            value={selectedService}
            onChange={handleServiceChange}
            required
          >
            <option value="">Select a service</option>
            <option value="haircut">Haircut</option>
            <option value="massage">Massage</option>
            <option value="facial">Facial</option>
            {/* Add more service options as needed */}
          </select>
        </label>
        <br />
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
        <label>
          Customer Email:
          <input
            type="email"
            value={customerEmail}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;
