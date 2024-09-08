import React from 'react';

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Enterprise', 'Security', 'Trust', 'Customer Stories', 'Pricing', 'Demos']
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Developer API', 'Status']
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press', 'Investor Relations', 'Legal']
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-blue-900">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-purple-600">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Connect with Us</h3>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                <a key={index} href="#" className="text-gray-600 hover:text-purple-600">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>&copy; 2024 Zendesk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;