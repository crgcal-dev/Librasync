export interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems?: Array<{ label: string; onClick: () => void }>;
}