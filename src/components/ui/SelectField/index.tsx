import { renderElementIfTrue } from "~helpers";
import * as S from "./styles";
import type { SelectFieldProps } from "./types";

export const SelectField = ({ id, label, options, error, ...rest }: SelectFieldProps) => (
    <S.StyledBox $isContainer>
        <S.StyledText
            as="label"
            htmlFor={id}
            $fontWeight="semiBold"
        >
            {label}
        </S.StyledText>
        <S.StyledBox
            as="select"
            id={id}
            defaultValue=""
            $isSelect
            $isError={!!error}
            $bgColor="base"
            {...rest}
        >
            <S.StyledText
                as="option"
                value=""
                disabled
                hidden
            >
                Select a category
            </S.StyledText>
            {options.map((option) => (
                <S.StyledText
                    as="option"
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </S.StyledText>
            ))}
        </S.StyledBox>
        {renderElementIfTrue(
            error,
            <S.StyledText
                $isError
                $color="error"
                $fontWeight="semiBold"
                $fontSize="xs"
            >
                {error}
            </S.StyledText>
        )}
    </S.StyledBox>
);
