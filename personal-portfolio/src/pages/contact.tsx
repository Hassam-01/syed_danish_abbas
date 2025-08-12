import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaCheck } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS integration
    emailjs.send(
      'service_el0wddg', // Service ID
      'template_exutd6t', // Template ID
      {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
        message: formData.message
      },
      'xx0abR11clcqsHJ5V' // Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, (err) => {
      console.log('FAILED...', err);
      setIsSubmitting(false);
      // Handle error state if needed
    });
  };

  const copyToClipboard = (text: string, field: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="py-16 px-4 sm:px-8 min-h-screen ">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center text-white">
            Contact Me
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </motion.div>

        <motion.div 
          className="h-1 w-full rounded-full bg-gray-800 mb-12"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Combined Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-xl"
          style={{
            background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Contact Info Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => copyToClipboard("ali.hassam1@outlook.com", "email")}
              >
                <div className="p-3 rounded-full bg-gray-800 text-cyan-400">
                  <SiMinutemailer size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-200">Email</h4>
                  <p className="text-gray-400">danishabbas7131@gmail.com</p>
                </div>
                <div className="text-cyan-400">
                  {copiedField === "email" ? <FaCheck /> : <FaEnvelope />}
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => copyToClipboard("+92 333 8748850", "phone")}
              >
                <div className="p-3 rounded-full bg-gray-800 text-purple-400">
                  <FaPhone size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-200">Phone</h4>
                  <p className="text-gray-400">+92 333 8748850</p>
                </div>
                <div className="text-purple-400">
                  {copiedField === "phone" ? <FaCheck /> : <FaPhone />}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form Section */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-green-900/30 border border-green-500 text-green-400"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaUser size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaPhone size={18} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone (Optional)"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-200"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all ${
                  isSubmitting
                    ? "bg-gray-700 text-gray-400"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;