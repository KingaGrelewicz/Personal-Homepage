import styled from "styled-components";
import { ReactComponent as ToolImage } from "../../image/tools.svg";

export const SectionWrapper = styled.div`
    max-width: 1216px;
    margin: 72px auto;
    background: ${({ theme }) => theme.color.white};
`;

export const SectionTitle = styled.h2`
    margin: 0 32px 0 32px;
    padding: 32px 0 16px 0;
    font-size: 30px;
    font-weight: 900;
    border-bottom: 1px solid ${({ theme }) => theme.color.iron};
    display: grid;
    grid-template-columns: auto 1fr;
`;

export const SectionToolImage = styled(ToolImage)`
    height: 24px;
    width: 24px;
`;

export const SectionList = styled.ul`
    padding: 0 0 32px 16px;
    margin: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    list-style-type: disc;
`;

export const SectionListItem = styled.li`
    color: ${({ theme }) => theme.color.slateGray};
    &::marker {
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;