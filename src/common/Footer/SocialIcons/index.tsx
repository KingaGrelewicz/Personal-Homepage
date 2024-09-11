import { socials } from "./socials";
import { SocialItem, SocialLink, SocialList } from "./styled";

interface Socials {
    name: string;
    url: string;
    Icon: React.FC;
}

export const SocialIcons = () => {
    return (
        <SocialList>
            {socials.map(({ name, url, Icon }: Socials) => (
                <SocialItem key={name}>
                    <SocialLink href={url} title={name} target="_blank" rel="noreferrer">
                        <Icon />
                    </SocialLink>
                </SocialItem>
            ))}
        </SocialList>
    )
};