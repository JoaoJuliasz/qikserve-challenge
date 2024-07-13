interface Image {
    id: number;
    image: string;
}

interface ModifierItem {
    id: number;
    name: string;
    price: number;
    maxChoices: number;
    position: number;
    visible: number;
    availabilityType: string;
    qty?: number;
    available: boolean;
}

interface Modifier {
    id: number;
    name: string;
    minChoices: number;
    maxChoices: number;
    items: ModifierItem[];
}

interface MenuItem {
    id: number;
    name: string;
    description?: string;
    alcoholic: number;
    price: number;
    position: number;
    visible: number;
    availabilityType: string;
    sku: string;
    modifiers?: Modifier[];
    images: Image[];
    available: boolean;
}

interface Section {
    id: number;
    name: string;
    description?: string;
    position: number;
    visible: number;
    images: Image[];
    items: MenuItem[];
}

interface Menu {
    id: number;
    name: string;
    type: string;
    collapse: number;
    sections: Section[];
}