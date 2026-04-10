import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagePhotoDetails from "./pages/page-details";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route path="/components" element={<PageComponents />} />
					<Route index element={<PageHome />} />
					<Route path="/fotos/:id" element={<PagePhotoDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
