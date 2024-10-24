const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
        <p>&copy; 2024 top10stock.in. All Rights Reserved.</p>
        <nav className="mt-2">
          <a href="/about" className="mx-2">About Us</a>
          <a href="/contact" className="mx-2">Contact</a>
          <a href="/terms" className="mx-2">Terms and Conditions</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  