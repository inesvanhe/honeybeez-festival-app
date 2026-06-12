import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRootRoute, createRoute } from "@tanstack/react-router";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ImpressumPage from "./pages/Impressum";
import LineupPage from "./pages/Lineup";
import ArtistDetailPage from "./pages/ArtistDetail";
import SchedulePage from "./pages/Schedule";
import FestivalPage from "./pages/Festival";

// Root Route
const rootRoute = createRootRoute();

// Routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const impressumRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/impressum",
  component: ImpressumPage,
});

const lineupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lineup",
  component: LineupPage,
});

const artistDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lineup/$artistId",
  component: ArtistDetailPage,
});

const scheduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/schedule",
  component: SchedulePage,
});

const festivalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/festival",
  component: FestivalPage,
});

// Router
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  impressumRoute,
  lineupRoute,
  artistDetailRoute,
  scheduleRoute,
  festivalRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
