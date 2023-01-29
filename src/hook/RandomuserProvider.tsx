import {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from "react";
import { RandomuserType } from "../@type/RandomuserType";
import { Api } from "../services/api";

interface IRandomuserProps {
  randomusers: RandomuserType[];
  isLoading: boolean;
  getRandomusers: () => void;
}

interface IRandomuserProviderProps {
  children: React.ReactElement;
}

export const RandomuserContext = createContext<IRandomuserProps>(
  {} as IRandomuserProps
);

export const useRandomuser = (): IRandomuserProps => {
  const context = useContext(RandomuserContext);

  if (!context) {
    throw new Error("useRandomuser must be within RandomuserProvider");
  }

  return context;
};

export const RandomuserProvider: React.FC<IRandomuserProviderProps> = ({
  children,
}) => {
  const [randomusers, setRandomusers] = useState<RandomuserType[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getRandomusers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await Api.get(`/?results=10`);
      setRandomusers(response.data.results);
    } catch (e) {
      setRandomusers([]);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const providerValue = useMemo(
    () => ({
      randomusers,
      isLoading,
      getRandomusers,
    }),
    [randomusers, isLoading, getRandomusers]
  );

  return (
    <RandomuserContext.Provider value={providerValue}>
      {children}
    </RandomuserContext.Provider>
  );
};
