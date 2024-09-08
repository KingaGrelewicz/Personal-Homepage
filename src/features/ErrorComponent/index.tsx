import { 
    ErrorButton, 
    ErrorWarning, 
    ErrorWarningImage, 
    ErrorWarningText, 
    ErrorWarningWrapper 
} from "./styled";
import DangerIcon from "../../image/Danger.png";

const ErrorComponent = () => (
    <ErrorWarningWrapper>
        <ErrorWarningImage src={DangerIcon} alt="Danger Icon" />
        <ErrorWarning>Ooops! Something went wrong... </ErrorWarning>
        <ErrorWarningText>Sorry, failed to load Github projects.
            You can check them directly on Github.
        </ErrorWarningText>
        <ErrorButton
            href="https://github.com/KingaGrelewicz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
        >
            Go to GitHub
        </ErrorButton>
    </ErrorWarningWrapper>
);

export default ErrorComponent;