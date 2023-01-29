import { ColorHeader } from "./styles";

const Header: React.FC = () => {
  return (
    <ColorHeader>
      <div className="container">
        <h1>
          RandomAPI<span>.</span>
        </h1>
      </div>
    </ColorHeader>
  );
};

export default Header;
