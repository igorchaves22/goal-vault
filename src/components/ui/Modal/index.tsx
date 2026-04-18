import { createPortal } from "react-dom";
import { renderElementIfTrue } from "~helpers";
import { useHook } from "./hooks";
import * as S from "./styles";
import type { ModalProps } from "./types";

export const Modal = ({ render, onClose, exitDelay, children }: ModalProps) => {
    useHook({ render });

    return renderElementIfTrue(
        render.delayed,
        createPortal(
            <S.StyledBox
                onClick={(event) => {
                    if (event.target !== event.currentTarget) return;

                    onClose();
                }}
                $exitDelay={exitDelay}
                $isShow={render.immediate}
            >
                {children}
            </S.StyledBox>,
            document.body
        )
    );
};
