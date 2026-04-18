import { useCallback, type SyntheticEvent } from "react";
import { useRenderTransition } from "~hooks";
import type { UseHook } from "./types";

export const useHook = <T>({ onSubmit, onReset }: UseHook<T>) => {
    const { render: isFormModalOpen, handleRender: handleFormModal } = useRenderTransition();

    const handleFormClose = useCallback(() => {
        handleFormModal(false);
        onReset();
    }, [handleFormModal, onReset]);
    const handleFormSubmit = useCallback(
        async (event: SyntheticEvent<HTMLFormElement>) => {
            event.preventDefault();

            try {
                const data = new FormData(event.currentTarget);
                await onSubmit(Object.fromEntries(data) as T);

                handleFormClose();
            } catch {
                //
            }
        },
        [handleFormClose, onSubmit]
    );

    return { isFormModalOpen, handleFormModal, handleFormSubmit, handleFormClose };
};
