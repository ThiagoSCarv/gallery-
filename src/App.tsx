import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagePhotoDetails from "./pages/page-details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<LayoutMain />}>
						<Route path="/components" element={<PageComponents />} />
						<Route index element={<PageHome />} />
						<Route path="/fotos/:id" element={<PagePhotoDetails />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
