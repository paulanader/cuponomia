import { RxUpdate } from "react-icons/rx";
import { useRandomuser } from "../../hook/RandomuserProvider";
import { Button, MainContainer } from "./styles";

export const Update = () => {
  const { getRandomusers } = useRandomuser();
  return (
    <MainContainer>
      <div>
        <Button
          type="button"
          className="rounded b-0 w-100 h-100 fw-bold"
          onClick={getRandomusers}
        >
          <span>Atualizar </span>
          <RxUpdate
            className="text-white justify-content-start"
            color="#ffffff"
          />
        </Button>
      </div>
    </MainContainer>
  );
};
