import { Download, Globe, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import "./style-header.css";

export const Header = () => {
  const location = useLocation();
  
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Download className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SaveVido</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={location.pathname === "/" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
            >
              Youtube
            </Link>
            <Link 
              to="/tiktok" 
              className={location.pathname === "/tiktok" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
            >
              TikTok
            </Link>
            <Link 
              to="/sora" 
              className={location.pathname === "/sora" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
            >
              Sora
            </Link>
          </nav>

          <div className="flex items-center space-x-8">
            <div className="sidebar-btn">
              <Button variant="ghost" size="icon">
                <Blocks className="w-5 h-5" />
              </Button>
            </div>
            <div className="w-5 h-5 px-5 mx-5 rect"></div>
            <Button variant="ghost" size="icon">
              <Globe className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "text-primary font-medium nav-link" : "text-muted-foreground hover:text-foreground transition-colors nav-link"}
          >
            Youtube
          </Link>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "text-primary font-medium nav-link" : "text-muted-foreground hover:text-foreground transition-colors nav-link"}
          >
            TikTok
          </Link>
          <Link 
            to="/" 
            className={location.pathname === "/" ? "text-primary font-medium nav-link" : "text-muted-foreground hover:text-foreground transition-colors nav-link"}
          >
            Sora
          </Link>
        </div>
      </div>
    </header>
  );
};
