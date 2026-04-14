import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";
import type { Photo } from "../contexts/photos/models/photo";

const listPhotos: Photo[] = [
	{
		id: "1",
		title: "Olá mundo",
		imageId: "portrait-tower.png",
		albums: [
			{ id: "3421", title: "Album 1" },
			{ id: "421", title: "Album 2" },
			{ id: "321", title: "Album 3" },
		],
	},
	{
		id: "2",
		title: "Olá mundo",
		imageId: "portrait-tower.png",
		albums: [
			{ id: "3421", title: "Album 1" },
			{ id: "421", title: "Album 2" },
			{ id: "321", title: "Album 3" },
		],
	},
	{
		id: "3",
		title: "Olá mundo",
		imageId: "portrait-tower.png",
		albums: [
			{ id: "3421", title: "Album 1" },
			{ id: "421", title: "Album 2" },
			{ id: "321", title: "Album 3" },
		],
	},
	{
		id: "12",
		title: "Olá mundo",
		imageId: "portrait-tower.png",
		albums: [
			{ id: "3421", title: "Album 1" },
			{ id: "421", title: "Album 2" },
			{ id: "321", title: "Album 3" },
		],
	},
	{
		id: "23",
		title: "Olá mundo",
		imageId: "portrait-tower.png",
		albums: [
			{ id: "3421", title: "Album 1" },
			{ id: "421", title: "Album 2" },
			{ id: "321", title: "Album 3" },
		],
	},
];

export default function PageHome() {
	return (
		<Container>
			<AlbumsFilter
				albums={[
					{ id: "3421", title: "Album 1" },
					{ id: "421", title: "Album 2" },
					{ id: "321", title: "Album 3" },
				]}
				className="mb-9"
			/>
			<PhotosList photos={listPhotos} />
		</Container>
	);
}
