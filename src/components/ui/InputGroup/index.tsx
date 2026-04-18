import { renderElementIfTrue } from "~helpers";
import * as S from "./styles";
import type { InputGroupProps } from "./types";

export const InputGroup = ({ id, label, error, ...rest }: InputGroupProps) => (
    <S.StyledBox>
        <S.StyledText
            as="label"
            htmlFor={id}
        >
            {label}
        </S.StyledText>
        <S.StyledInput
            id={id}
            autoComplete="off"
            $isError={!!error}
            {...rest}
        />
        {renderElementIfTrue(
            error,
            <S.StyledText
                $isError
                $color="error"
                $fontSize="xs"
            >
                {error}
            </S.StyledText>
        )}
    </S.StyledBox>
);
