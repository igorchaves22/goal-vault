import { AUTHOR_CREDITS } from "./constants";
import { useHook } from "./hooks";
import * as S from "./styles";

export const Footer = () => {
    const { themeMode } = useHook();

    return (
        <S.StyledBox
            as="footer"
            $isContainer
            $bgColor="neutral-1"
        >
            <S.StyledBox
                $isSubContainer
                $gap={8}
            >
                <S.StyledBox
                    as="ul"
                    $isList
                >
                    {AUTHOR_CREDITS.map((credit) => (
                        <S.StyledBox
                            as="li"
                            key={credit.label}
                            $width="max-content"
                        >
                            <S.StyledLink
                                href={credit.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <S.StyledImage
                                    src={typeof credit.src === "object" ? credit.src[themeMode] : credit.src}
                                    alt={credit.alt}
                                    loading="eager"
                                />
                                <S.StyledText
                                    $color="primary"
                                    $fontWeight="medium"
                                >
                                    {credit.label}
                                </S.StyledText>
                            </S.StyledLink>
                        </S.StyledBox>
                    ))}
                </S.StyledBox>
                <S.StyledText
                    as="small"
                    $isCopyright
                    $fontSize="xs"
                >
                    © 2026 GoalVault
                </S.StyledText>
            </S.StyledBox>
        </S.StyledBox>
    );
};
