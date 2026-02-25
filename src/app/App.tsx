import Layout from "@/components/common/Layout/Layout";
import Index from "@/components/pages/Index";
import { Route, Routes } from "react-router";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
            </Route>
        </Routes>
    );
}

export default App;
