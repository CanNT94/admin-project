export interface SubMenu {
    id: number;
    iconClassName?: string;
    label?: string;
    url?: string;
}
export interface Menu {
    id: number;
    iconClassName?: string;
    label?: string;
    subMenu?: SubMenu[];
}
