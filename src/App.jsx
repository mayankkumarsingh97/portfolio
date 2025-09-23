import "./index.css";
import ErrorBoundary from "./shared/error/ErrorBoundery";
import Home from "./pages/Home";
//
const App = () => {
  return (
    <ErrorBoundary
      fallback={<p style={{ color: "red" }}>Oops! Product failed to load.</p>}
    >
      <Home />
    </ErrorBoundary>
  );
};

export default App;
