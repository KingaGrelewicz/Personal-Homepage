import { socials } from "./socials";
import { SocialItem, SocialLink, SocialList } from "./styled";

export const SocialIcons = () => {
    return (
        <SocialList>
            {socials.map(({ name, url, Icon }) => (
                <SocialItem key={name}>
                    <SocialLink href={url} title={name} target="_blank" rel="noreferrer">
                        <Icon />
                    </SocialLink>
                </SocialItem>
            ))}
        </SocialList>
    )
};