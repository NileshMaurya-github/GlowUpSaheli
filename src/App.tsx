import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BodyCare from "./pages/BodyCare";
import BodyPartDetail from "./pages/BodyPartDetail";
import Ingredients from "./pages/Ingredients";
import Vitamins from "./pages/Vitamins";
import Learn from "./pages/Learn";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

import ScrollToTop from "./components/layout/ScrollToTop";

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/body-care" element={<BodyCare />} />
            <Route path="/body-care/:partId" element={<BodyPartDetail />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/vitamins" element={<Vitamins />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
