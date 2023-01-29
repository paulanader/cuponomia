import { ColorFooter, Signature } from "./styles";

const Footer: React.FC = () => {
  return (
    <ColorFooter className="mt-auto">
      <div className="container text-center">
        <Signature>
          <span className="me-1">site por</span>
          <span>
            <a
              href="https://www.linkedin.com/in/paulanader/"
              title="Perfil Linked - Paula Nader"
              className="text-white fw-bold"
              target="_blank"
              rel="noreferrer"
            >
              Paula Nader
            </a>
          </span>
        </Signature>
      </div>
    </ColorFooter>
  );
};

export default Footer;
