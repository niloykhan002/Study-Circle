const Footer = () => {
  return (
    <div>
      <footer className="footer bg-rare text-base-content p-10">
        <aside>
          <h2 className="text-3xl font-bold">
            Study <span className="text-4xl text-primary">Circle</span>
          </h2>
          <p>Make Study Easier For All</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Zoom Meeting</a>
          <a className="link link-hover">Discord Server Support</a>
          <a className="link link-hover">Community Events</a>
          <a className="link link-hover">Own Study Universe</a>
        </nav>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Tutors & Supporters</a>
          <a className="link link-hover">Latest News and Releases</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
