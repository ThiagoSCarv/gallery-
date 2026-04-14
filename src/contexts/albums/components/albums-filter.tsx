import type { Album } from "../models/album";
import Text from "../../../components/text";
import Button from "../../../components/button";
import type React from "react";
import cx from "classnames";
import Skeleton from "../../../components/skeleton";

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
	albums: Album[];
	loading?: boolean;
}

export default function AlbumsFilter({
	albums,
	loading,
	className,
	...props
}: AlbumsFilterProps) {
	return (
		<div
			className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
			{...props}
		>
			<Text variant="heading-small">Álbuns</Text>
			<div className="flex gap-3">
				{!loading ? (
					<>
						<Button size="sm" variant="primary" className="cursor-pointer">
							Todos
						</Button>
						{albums.map((album) => (
							<Button
								size="sm"
								key={album.id}
								variant="ghost"
								className="cursor-pointer"
							>
								{album.title}
							</Button>
						))}{" "}
					</>
				) : (
					Array.from({ length: 5 }).map((_, index) => {
						return (
							<Skeleton
								className="w-28 h-7"
								key={`album-button-loading-${index}`}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}
