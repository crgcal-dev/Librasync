import { Books } from "./Books";

export interface UpdateBookProps {
    isOpen: boolean;
    onClose: () => void;
    book: Books | null;
}