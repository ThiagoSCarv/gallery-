import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";

export default function PageHome() {
	return (
		<Container>
			<div className="grid grid-cols-4">
				<PhotoWidget
					photo={{
						id: "123",
						title: "Ola Mundo",
						imageId: "portrait-tower.png",
						albums: [
							{
								id: "321",
								title: "Album 2",
							},
							{
								id: "421",
								title: "Album 3",
							},
							{
								id: "221",
								title: "Album 1",
							},
						],
					}}
				/>
				<PhotoWidget
					photo={{
						id: "123",
						title: "Ola Mundo",
						imageId: "portrait-tower.png",
						albums: [
							{
								id: "321",
								title: "Album 2",
							},
							{
								id: "421",
								title: "Album 3",
							},
							{
								id: "221",
								title: "Album 1",
							},
						],
					}}
				/>
				<PhotoWidget
					photo={{
						id: "123",
						title: "Ola Mundo",
						imageId: "portrait-tower.png",
						albums: [
							{
								id: "321",
								title: "Album 2",
							},
							{
								id: "421",
								title: "Album 3",
							},
							{
								id: "221",
								title: "Album 1",
							},
						],
					}}
				/>
				<PhotoWidget
					photo={{
						id: "123",
						title: "Ola Mundo",
						imageId: "portrait-tower.png",
						albums: [
							{
								id: "321",
								title: "Album 2",
							},
							{
								id: "421",
								title: "Album 3",
							},
							{
								id: "221",
								title: "Album 1",
							},
						],
					}}
				/>
			</div>
		</Container>
	);
}
