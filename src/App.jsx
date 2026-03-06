import { Navigate, Route, Routes } from "react-router-dom";

import { SiteLayout } from "./components/SiteLayout";
import { deepDiveContent } from "./content/deepDives";
import { OverviewPage } from "./pages/OverviewPage";
import { FrameworkPage } from "./pages/FrameworkPage";
import { DeepDivesPage } from "./pages/DeepDivesPage";
import { DeepDivePage } from "./pages/DeepDivePage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="framework" element={<FrameworkPage />} />
        <Route path="deep-dives" element={<DeepDivesPage />} />
        <Route path="deep-dives/:slug" element={<DeepDivePage />} />
        <Route
          path="*"
          element={<Navigate to={deepDiveContent[0]?.slug ? "/" : "/framework"} replace />}
        />
      </Route>
    </Routes>
  );
}
