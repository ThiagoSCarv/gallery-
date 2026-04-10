import Text from "../components/text";
import { useParams } from "react-router";

export default function PagePhotoDetails() {
	const { id } = useParams();
	return (
		<>
			<Text variant="heading-large">Pagina detalhes da foto</Text>
			<Text variant="heading-large">id: {id}</Text>
		</>
	);
}
