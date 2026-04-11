import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="...">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-cyan-400" />
            <h2 className="text-lg font-semibold">SafeClick</h2>
          </div>

          <p className="text-gray-400 text-sm">
            SafeClick is an AI-powered cybersecurity platform helping users detect phishing, unsafe URLs, and digital threats in real-time.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Tools</li>
            <li className="hover:text-white cursor-pointer">Dashboard</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email Analysis</li>
            <li>URL Scanning</li>
            <li>Threat Intelligence</li>
            <li>Cyber Training</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Mail size={16} />
            support@safeclick.com
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Phone size={16} />
            +91 98765 43210
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin size={16} />
            India
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-gray-500 text-sm">
        © 2026 SafeClick. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;