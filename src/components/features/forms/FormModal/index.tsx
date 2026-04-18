import { Icon, Modal } from "~components/ui";
import { renderElementIfTrue } from "~helpers";
import { useHook } from "./hooks";
import * as S from "./styles";
import type { FormModalProps } from "./types";

export const FormModal = <T,>({ triggerButton, form, children }: FormModalProps<T>) => {
    const { isFormModalOpen, handleFormModal, handleFormSubmit, handleFormClose } = useHook<T>(form);

    return (
        <>
            <S.StyledButton
                type="button"
                aria-label="Open form modal"
                onClick={() => handleFormModal(true, 0)}
                $isRadius
                $isPadding={triggerButton.isTriggerVariant}
                $bgColor={triggerButton.isTriggerVariant ? "brand" : "transparent"}
            >
                <Icon
                    icon={triggerButton.icon}
                    strokeWidth={3}
                    $color={triggerButton.isTriggerVariant ? "base" : "primary"}
                    $size="sm"
                />
                {renderElementIfTrue(
                    triggerButton.label,
                    <S.StyledText
                        $color={triggerButton.isTriggerVariant ? "base" : "primary"}
                        $fontWeight="semiBold"
                    >
                        {triggerButton.label}
                    </S.StyledText>
                )}
            </S.StyledButton>
            <Modal
                render={isFormModalOpen}
                onClose={handleFormClose}
            >
                <S.StyledBox
                    as="form"
                    onSubmit={handleFormSubmit}
                    $isForm
                    $isShow={isFormModalOpen.immediate}
                    $height="auto"
                    $direction="column"
                    $wrap="nowrap"
                    $bgColor="neutral-1"
                >
                    <S.StyledBox $wrap="nowrap">
                        <S.StyledText
                            as="h2"
                            $fontWeight="bold"
                            $fontSize="xl"
                            $textAlign="start"
                        >
                            {form.title}
                        </S.StyledText>
                        <S.StyledButton
                            type="button"
                            aria-label="Close form modal"
                            onClick={handleFormClose}
                        >
                            <Icon
                                icon="X"
                                strokeWidth={3}
                            />
                        </S.StyledButton>
                    </S.StyledBox>
                    <S.StyledBox
                        $isBody
                        $height="auto"
                        $grow={1}
                        $direction="column"
                        $wrap="nowrap"
                        $gap={8}
                    >
                        <S.StyledBox
                            $isChildren
                            $height="auto"
                            $grow={1}
                            $direction="column"
                            $gap={8}
                        >
                            {children}
                        </S.StyledBox>
                        <S.StyledBox>
                            <S.StyledButton
                                type="submit"
                                $isRadius
                                $isPadding
                                $width="100%"
                                $grow={1}
                                $basis={10}
                                $bgColor="brand"
                                $color="base"
                            >
                                {form.submitLabel}
                            </S.StyledButton>
                            <S.StyledButton
                                type="reset"
                                onClick={handleFormClose}
                                $isBorder
                                $isRadius
                                $isPadding
                                $width="100%"
                                $grow={1}
                                $basis={10}
                            >
                                Cancel
                            </S.StyledButton>
                        </S.StyledBox>
                    </S.StyledBox>
                </S.StyledBox>
            </Modal>
        </>
    );
};
