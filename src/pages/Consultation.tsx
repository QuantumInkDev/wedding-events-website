import { useState } from 'react';
import { Page } from '../components/Page';
import './Consultation.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  message: string;
}

export const Consultation = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual implementation
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultationContent = `
## What to Expect from Your Consultation

During your complimentary consultation with Brigette, you'll receive:

### **Personalized Event Planning Discussion**
- Review of your vision, preferences, and requirements
- Expert advice on timeline, logistics, and vendor recommendations
- Discussion of our services and how we can support your event

### **Custom Proposal Development**
- Detailed breakdown of services tailored to your needs
- Transparent pricing for your specific requirements
- Flexible package options and add-on services

### **Next Steps Planning**
- Clear timeline for moving forward
- Vendor introduction and coordination planning
- Peace of mind knowing your event is in expert hands

---

## Ready to Get Started?

Fill out the form below and we'll schedule your complimentary consultation within 24 hours. Let's make your dream event a reality!
  `;

  return (
    <Page 
      title="Request a Consultation" 
      subtitle="Let's discuss your dream event - complimentary consultation included"
      markdownContent={consultationContent}
      pageName="consultation"
    >
      <div className="consultation-form-section">
        <div className="form-container">
          <h3>Tell Us About Your Event</h3>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              <h4>Thank you for your submission!</h4>
              <p>We'll contact you within 24 hours to schedule your complimentary consultation.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              <h4>Oops! Something went wrong.</h4>
              <p>Please try again or call us directly at <a href="tel:2012842688">(201) 284-2688</a></p>
            </div>
          )}

          {submitStatus !== 'success' && (
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="graduation">Graduation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">Preferred Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guestCount">Estimated Guest Count</label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                  >
                    <option value="">Select Guest Count</option>
                    <option value="under-25">Under 25</option>
                    <option value="25-50">25-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-150">100-150</option>
                    <option value="150-200">150-200</option>
                    <option value="over-200">Over 200</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Estimated Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget Range</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="over-10000">Over $10,000</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your vision</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Share any details about your event vision, specific requirements, or questions you have..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-button" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </button>
            </form>
          )}
        </div>

        <div className="contact-sidebar">
          <div className="contact-card">
            <h4>Prefer to Call?</h4>
            <p>Speak directly with Brigette</p>
            <a href="tel:2012842688" className="phone-link">(201) 284-2688</a>
            <p className="availability">Available Mon-Fri, 9am-6pm</p>
          </div>

          <div className="contact-card">
            <h4>Email Us</h4>
            <a href="mailto:weddingsnthings22@gmail.com" className="email-link">
              weddingsnthings22@gmail.com
            </a>
            <p className="response-time">We respond within 24 hours</p>
          </div>

          <div className="contact-card">
            <h4>Schedule Online</h4>
            <p>Book a meeting instantly</p>
            <a href="https://calendly.com/weddingsnthings22/30min" className="email-link" target="_blank" rel="noopener noreferrer">
              Schedule a Meeting
            </a>
            <p className="response-time">Available time slots shown</p>
          </div>

          <div className="testimonial-card">
            <blockquote>
              "Brigette made our wedding planning stress-free and absolutely perfect. Her attention to detail and professionalism is unmatched!"
            </blockquote>
            <cite>- Sarah & Michael</cite>
          </div>
        </div>
      </div>
    </Page>
  );
};