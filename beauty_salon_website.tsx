import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageCircle, Instagram, Facebook, Mail, Menu, X, ChevronRight } from 'lucide-react';

const BeautySalonWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    staff: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });

  const services = [
    { name: 'Haircut & Styling', price: 'From $45', duration: '45 min' },
    { name: 'Hair Coloring', price: 'From $85', duration: '90 min' },
    { name: 'Manicure', price: '$35', duration: '30 min' },
    { name: 'Pedicure', price: '$45', duration: '45 min' },
    { name: 'Facial Treatment', price: 'From $65', duration: '60 min' },
    { name: 'Massage', price: 'From $75', duration: '60 min' }
  ];

  const staff = [
    { name: 'Sarah Johnson', role: 'Senior Stylist', specialty: 'Hair & Color' },
    { name: 'Maria Garcia', role: 'Nail Technician', specialty: 'Manicure & Pedicure' },
    { name: 'Emma Wilson', role: 'Esthetician', specialty: 'Facial & Skincare' }
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const galleryImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400',
    'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=400',
    'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400'
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleBookingSubmit = () => {
    if (!bookingData.name || !bookingData.phone || !bookingData.email || !bookingData.date || !bookingData.time) {
      alert('Please fill in all fields');
      return;
    }
    alert(`Booking confirmed!\n\nService: ${bookingData.service}\nStaff: ${bookingData.staff}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\nName: ${bookingData.name}\n\nWe'll send you a confirmation via WhatsApp shortly!`);
    setBookingStep(1);
    setBookingData({
      service: '',
      staff: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-pink-600">Elegance Salon</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-600 transition">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-600 transition">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-pink-600 transition">Gallery</button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-pink-600 transition">Book Now</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-pink-600">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-pink-600">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-pink-600">Gallery</button>
              <button onClick={() => scrollToSection('booking')} className="block w-full text-left py-2 text-gray-700 hover:text-pink-600">Book Now</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-pink-600">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Beauty, Our Passion
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience luxury beauty treatments in a relaxing atmosphere. Book your appointment today and let us bring out your natural beauty.
          </p>
          <button 
            onClick={() => scrollToSection('booking')}
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition inline-flex items-center"
          >
            Book Appointment <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <div className="flex justify-between items-center text-gray-600 mb-4">
                  <span className="text-pink-600 font-semibold">{service.price}</span>
                  <span className="flex items-center"><Clock size={16} className="mr-1" /> {service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover hover:scale-110 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Book Your Appointment</h2>
          
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg shadow-lg">
            <div>
              {/* Step 1: Service Selection */}
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Select Service</h3>
                  {services.map((service, index) => (
                    <label key={index} className="flex items-center p-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition">
                      <input
                        type="radio"
                        name="service"
                        value={service.name}
                        checked={bookingData.service === service.name}
                        onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
                        className="mr-3 text-pink-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm text-gray-600">{service.price} • {service.duration}</div>
                      </div>
                    </label>
                  ))}
                  <button
                    type="button"
                    onClick={() => bookingData.service && setBookingStep(2)}
                    disabled={!bookingData.service}
                    className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Next: Select Staff
                  </button>
                </div>
              )}

              {/* Step 2: Staff Selection */}
              {bookingStep === 2 && (
                <div className="space-y-4">
                  <button type="button" onClick={() => setBookingStep(1)} className="text-pink-600 mb-4">← Back</button>
                  <h3 className="text-xl font-semibold mb-4">Select Staff Member</h3>
                  {staff.map((member, index) => (
                    <label key={index} className="flex items-center p-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition">
                      <input
                        type="radio"
                        name="staff"
                        value={member.name}
                        checked={bookingData.staff === member.name}
                        onChange={(e) => setBookingData({...bookingData, staff: e.target.value})}
                        className="mr-3 text-pink-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{member.name}</div>
                        <div className="text-sm text-gray-600">{member.role} • {member.specialty}</div>
                      </div>
                    </label>
                  ))}
                  <button
                    type="button"
                    onClick={() => bookingData.staff && setBookingStep(3)}
                    disabled={!bookingData.staff}
                    className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Next: Date & Time
                  </button>
                </div>
              )}

              {/* Step 3: Date, Time & Contact */}
              {bookingStep === 3 && (
                <div className="space-y-4">
                  <button type="button" onClick={() => setBookingStep(2)} className="text-pink-600 mb-4">← Back</button>
                  <h3 className="text-xl font-semibold mb-4">Choose Date & Time</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Time Slot</label>
                    <select
                      value={bookingData.time}
                      onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleBookingSubmit}
                    className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
                  >
                    Confirm Booking
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="mx-auto mb-4 text-pink-600" size={32} />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-pink-600">+1 (234) 567-890</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MessageCircle className="mx-auto mb-4 text-pink-600" size={32} />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">Chat with us</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mail className="mx-auto mb-4 text-pink-600" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@elegancesalon.com" className="text-gray-600 hover:text-pink-600">info@elegancesalon.com</a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition">
                <Instagram size={32} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition">
                <Facebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 Elegance Salon. All rights reserved.</p>
          <p className="text-gray-400 mt-2">123 Beauty Street, Your City, ST 12345</p>
        </div>
      </footer>
    </div>
  );
};

export default BeautySalonWebsite;