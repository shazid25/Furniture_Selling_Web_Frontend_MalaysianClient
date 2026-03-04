import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter,
  Clock 
} from "lucide-react";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
    { icon: MessageCircle, href: "https://wa.me/60123456789", label: "WhatsApp", color: "hover:bg-[#25D366]" },
  ];

  return (
    /* Change 1: Updated to bg-slate-50 for a softer, lighter base */
    <div className="min-h-screen bg-indigo-50 rounded-4xl py-16 px-4 md:px-8 lg:px-16 mt-5 overflow-hidden relative">
      {/* Change 2: Softer Background Accents using increased transparency */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or need assistance with our furniture? Reach out to our team in Malaysia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Change 3: Utilizing rounded-[32px] for all cards */}
            <motion.div variants={itemVariants} className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full" />
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Our Showroom</p>
                    <p className="text-gray-600 leading-relaxed">
                      123 Jalan Ampang, <br />
                      50450 Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-green-50 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">WhatsApp & Call</p>
                    <p className="text-gray-600">+60 12-345 6789</p>
                    <p className="text-gray-600">+60 3-9876 5432</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Email Us</p>
                    <a href="mailto:hello@ecohome.com.my" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      hello@ecohome.com.my
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Opening Hours</p>
                    <p className="text-gray-600 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p className="text-red-500 text-sm font-medium">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants} className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect with us</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gray-50 rounded-2xl text-gray-500 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Map with "Find Us" heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Find Us</h2>
            </div>
            {/* Change 4: Map outer border is bg-white */}
            <div className="bg-white rounded-[40px] p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
              <div className="w-full h-[450px] rounded-[32px] overflow-hidden bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.1662994464!2d101.701314!3d3.158054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c41%3A0xf992e573e67042a3!2sKuala%20Lumpur%20City%20Centre%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1709560000000!5m2!1sen!2smy"
                  className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eco Home Solutions Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;