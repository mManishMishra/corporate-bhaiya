import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--brand-bg)] text-[var(--brand-text)] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Some text To Provide Information Or Goal About Corporate Bhaiya
          </p>
        </div>

        {/* Column 2 */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/who-we-are" className="hover:text-orange-400">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/what-we-do" className="hover:text-orange-400">
                What We Do
              </Link>
            </li>
            <li>
              <Link to="/impact" className="hover:text-orange-400">
                Our Impact
              </Link>
            </li>
            <li>
              <Link to="/get-involved" className="hover:text-orange-400">
                Get Involved
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect Us </h3>
          <ul className="space-y-2 text-sm">
            {/* <li>Email 📧 contact@corporatebhaiya.com</li>
            <li>Phone☎️ +919289496871</li>
            <li>Address 🌐 Sector 62 Noida india 201301</li> */}
            <li>
              Email 📧{" "}
              <a
                href="mailto:contact@corporatebhaiya.com"
                className="text-blue-500 hover:text-orange-500 underline"
              >
                contact@corporatebhaiya.com
              </a>
            </li>
            <li>
              Phone ☎️{" "}
              <a
                href="tel:+919289496871"
                className="text-blue-500 hover:text-orange-500 underline"
              >
                +91 92894 96871
              </a>
            </li>
            <li>
              Address 🌐{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sector+62+Noida+India+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-orange-500 underline"
              >
                Sector 62, Noida, India 201301
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Corporate Bhaiya . All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
