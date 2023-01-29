import { useCallback, useState } from "react";
import { RandomuserType } from "../../@type/RandomuserType";
import { ClearButton, Input, MainContainer, SeachButton } from "./styles";

interface ISearchProps {
  onSearch(searchText: string): void;
  getRandomuser: (randomusers: RandomuserType[]) => void;
  randomusers: RandomuserType[];
}

const Search: React.FC<ISearchProps> = ({
  randomusers,
  onSearch,
  getRandomuser,
}) => {
  const [inputName, setInputName] = useState("");
  const [hasSearch, setHasSearch] = useState(false);
  const [data, setData] = useState<RandomuserType[]>(randomusers);

  const handleSearchTermChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputName(event.target.value);

      const filteredItems = randomusers.filter((item) =>
        item.name.first.toLowerCase().includes(inputName.toLowerCase())
      );
      console.log("here");

      getRandomuser(filteredItems);
      console.log({ filteredItems });
      setHasSearch(true);
    },
    [getRandomuser, inputName, randomusers]
  );

  return (
    <MainContainer className="rounded mb-3">
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col col-md-9">
          <Input
            className="form-control form-input shadow-none h-100 text-white"
            value={inputName}
            type="text"
            placeholder="Digite sua pesquisa"
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="col col-md-3">
          <SeachButton
            type="button"
            onClick={() => handleSearchTermChange}
            className="rounded b-0 w-100 h-100 fw-bold text-white"
          >
            Search
          </SeachButton>
        </div>
      </div>
      {hasSearch && (
        <div className="row row-cols-1 row-cols-sm-2 g-3">
          <div className=" col col-md-9"></div>
          <div className="col col-md-3 text-center pb-0">
            <ClearButton
              className="btn btn-link text-white"
              type="button"
              onClick={() => {
                setInputName("");
                setHasSearch(false);
                getRandomuser(data);
              }}
            >
              Limpar busca
            </ClearButton>
          </div>
        </div>
      )}
    </MainContainer>
  );
};

export default Search;
