import { HomeIcon, PackageIcon, FunctionSquareIcon, BuildingIcon, CreditCardIcon, LogInIcon, UserPlusIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Product from "./pages/Product.jsx";
import Function from "./pages/Function.jsx";
import Enterprise from "./pages/Enterprise.jsx";
import Pricing from "./pages/Pricing.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Product",
    to: "/product",
    icon: <PackageIcon className="h-4 w-4" />,
    page: <Product />,
  },
  {
    title: "Function",
    to: "/function",
    icon: <FunctionSquareIcon className="h-4 w-4" />,
    page: <Function />,
  },
  {
    title: "Enterprise",
    to: "/enterprise",
    icon: <BuildingIcon className="h-4 w-4" />,
    page: <Enterprise />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <CreditCardIcon className="h-4 w-4" />,
    page: <Pricing />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Sign Up",
    to: "/signup",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <SignUp />,
  },
];