import { LoadingSpinner, LoadingWrapper } from "./styled";
import SpinnerIcon from "../../image/icon-spinner.png";

const Loading = () => (
    <>
        <LoadingWrapper>Please wait, projects are being loaded...</LoadingWrapper>
        <LoadingSpinner src={SpinnerIcon} alt="Spiner Icon" />
    </>
);

export default Loading;