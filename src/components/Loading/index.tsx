import { TailSpin } from "react-loader-spinner";
import { IsLoadingCarousel } from "./styles";

export const Loading: React.FC = () => {
  return (
    <IsLoadingCarousel className="d-flex justify-content-center align-items-center w-100">
      <TailSpin ariaLabel="loading-indicator" color="#83ba43" />
    </IsLoadingCarousel>
  );
};
