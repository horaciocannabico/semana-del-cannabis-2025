import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Activities from "@/pages/Activities";
import Speakers from "@/pages/Speakers";
import News from "@/pages/News";
import Location from "@/pages/Location";
import March from "@/pages/March";
import Organizers from "@/pages/Organizers";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/actividades" component={Activities} />
      <Route path="/exponentes" component={Speakers} />
      <Route path="/nota" component={News} />
      <Route path="/ubicacion" component={Location} />
      <Route path="/marcha" component={March} />
      <Route path="/organizadores" component={Organizers} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
