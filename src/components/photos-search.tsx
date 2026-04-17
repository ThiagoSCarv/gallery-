import React from "react";
import SearchIcon from "../assets/icons/search.svg?react";
import InputText from "./input-text";
import { debounce } from "../helpers/utils";
import usePhotos from "../contexts/photos/hooks/usePhotos";

export default function PhotosSearch() {
	const [inputValue, setInputValue] = React.useState("");
	const { filters } = usePhotos();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSetValue = React.useCallback(
		debounce((value: string) => filters.setQ(value), 250),
		[filters.setQ],
	);

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setInputValue(event.target.value);
		debouncedSetValue(event.target.value);
	};

	return (
		<InputText
			icon={SearchIcon}
			placeholder="Buscar fotos"
			className="flex-1"
			value={inputValue}
			onChange={handleInputChange}
		/>
	);
}
