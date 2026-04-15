import * as S from "./styles";
import type { ErrorPageProps } from "./types";

export const ErrorPage = ({ title, description, link }: ErrorPageProps) => (
    <S.StyledBox
        as="section"
        $direction="column"
        $gap={10}
    >
        <S.StyledBox
            $direction="column"
            $gap={2}
        >
            <S.StyledText
                as="h1"
                $color="primary"
                $fontWeight="black"
                $fontSize="7xl"
            >
                {title}
            </S.StyledText>
            <S.StyledText>{description}</S.StyledText>
        </S.StyledBox>
        <S.StyledLink to={link.href}>{link.label}</S.StyledLink>
    </S.StyledBox>
);
