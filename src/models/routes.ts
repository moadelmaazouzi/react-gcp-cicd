import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";



interface RouteModele {
    path: string;
    component: React.ComponentType;
}

  const routes: RouteModele[] = [
    {
        path: "Home",
        component:Home
    },
    {
        path: "About",
        component:About
    },
    {
        path: "Contact",
        component:Contact
    }
];
export{ routes} ;