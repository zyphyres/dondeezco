import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import RoomDetail from './pages/RoomDetail';
import NotFound from './pages/NotFound';
import AllRooms from "@/pages/AllRooms";
import Dining from "@/pages/Dining";
import Payment from "@/pages/Payment";
import Contact from "@/pages/Contact";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/room/:roomId" element={<RoomDetail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/allrooms" element={<AllRooms />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;