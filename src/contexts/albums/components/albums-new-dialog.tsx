import React from "react";
import ImagePreview from "../../../components/image-preview";
import {
	Dialog,
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "../../../components/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";

interface AlbumNewDialogProps {
	trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
	const photos: Photo[] = [
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
	const isLoadingPhotos = false;

	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>Criar álbum</DialogHeader>
				<DialogBody className="flex flex-col gap-5">
					<InputText placeholder="Adicione um título" />
					<div className="space-y-3">
						<Text as="div" variant="label-small" className="mb-3">
							Fotos cadastradas
						</Text>
						{!isLoadingPhotos && photos.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{photos.map((photo) => (
									<ImagePreview
										key={photo.id}
										src={`/images/${photo.imageId}`}
										title={photo.title}
										className="w-20 h-20 rounded"
									/>
								))}
							</div>
						)}
						{isLoadingPhotos && (
							<div className="flex flex-wrap gap-2">
								{Array.from({ length: 4 }).map((_, index) => (
									<Skeleton
										key={`albums-loading-${index}`}
										className="w-20 h-20 rounded"
									/>
								))}
							</div>
						)}
						{!isLoadingPhotos && photos.length === 0 && (
							<div className="w-full flex flex-col justify-center items-center gap-3">
								<SelectCheckboxIllustration />
								<Text variant="paragraph-medium" className="text-center">
									Nenhuma foto disponível para seleção
								</Text>
							</div>
						)}
					</div>
				</DialogBody>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="secondary">Cancelar</Button>
					</DialogClose>
					<Button>Criar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
