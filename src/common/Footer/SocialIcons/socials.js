import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/Github_black.svg";
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIN_black.svg";
import { ReactComponent as FacebookIcon } from "./icons/Facebook_black.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/KingaGrelewicz",
        Icon: styleIcon(GitHubIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kinga-grelewicz/",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/kinga.grelewicz.5/",
        Icon: styleIcon(FacebookIcon),
    }
]