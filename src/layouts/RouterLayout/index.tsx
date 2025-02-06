import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "../../contexts/Theme/ThemeProvider";
import DeveloperInfoPage from "../../pages/DeveloperInfoPage";
import PageLayout from "../PageLayout";
import Title from "../../components/Title";

export default function RouterLayout() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<DeveloperInfoPage />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="flex flex-col justify-center items-center min-h-screen">
                <Title variant="h1">This page isn't found</Title>
                <Link className="text-2xl underline" to="/">
                  Go home
                </Link>
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
