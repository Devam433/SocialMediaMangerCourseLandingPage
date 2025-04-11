import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
    <Layout>
        <Routes > 
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
