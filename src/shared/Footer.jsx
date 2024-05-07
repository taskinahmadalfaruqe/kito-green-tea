import logo from "../assets/eshopbdlogo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer p-10 bg-Primary_Color text-base-content">
        <aside>
         <img className="w-20 h-12 rounded-xl"
          src={logo} alt="Logo" />
          <p className="font-semibold">
            E-ShopBD
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr className="w-fit" />
      <footer className="footer footer-center p-4 bg-Primary_Color text-base-content">
        <aside>
          <p>Copyright &copy; {year} - All right reserved by E-Shop BD</p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
