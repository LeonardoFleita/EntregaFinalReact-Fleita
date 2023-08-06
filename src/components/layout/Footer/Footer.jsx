import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Footer = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <footer className={dark ? "footerDark" : "footerLight"}>
      <h3>Entrega Final React - Leonardo Fleita</h3>
      <div>
        <a href="https://www.linkedin.com/in/leonardo-fleita/" target="_blank">
          <LinkedInIcon className="footerLogo" />
        </a>
        <a href="https://github.com/LeonardoFleita" target="_blank">
          <GitHubIcon className="footerLogo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
