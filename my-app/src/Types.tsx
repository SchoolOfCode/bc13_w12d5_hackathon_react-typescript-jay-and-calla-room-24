export interface t_UserInputProps {
    setInput: Function;
    citiesMatch: object[];
}

export interface t_DisplayListProps {
    citiesMatch: object[];
    resolvedAddress?: string;
}

export interface t_DisplayItemProps {
    city: object;
}