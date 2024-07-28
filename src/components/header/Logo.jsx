import { Link } from "react-router-dom";

function Logo({ logoSrc }) {
  return (
    <div className="font-bold text-2xl relative">
      <Link to={"/"}>
        <img
          src={logoSrc}
          alt="Light Academy College of Engineering Logo"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}

export default Logo;
