import styled from "styled-components";

export const FooterWrapper = styled.div``;

export const FooterParagraph = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 12px;
    font-weight: 700;
`;

export const FooterMail = styled.span`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 32px;
    font-weight: 900;
    margin: 24px 0;
`;

export const FooterContent = styled.p`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 18px;
    font-weight: 400;
`;