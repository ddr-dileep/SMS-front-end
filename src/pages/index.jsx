import { lazy, Suspense } from "react";

// Lazy loading of the components
const AboutLazy = lazy(() => import("./about-page/About"));
const ContactLazy = lazy(() => import("./contact-page/Contact"));
const HomeLazy = lazy(() => import("./home-page/Home"));
const LoginLazy = lazy(() => import("./login-page/Login"));
const RegisterLazy = lazy(() => import("./register-page/Register"));

const LazyLoadComponent = (Component) => (props) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

export const About = LazyLoadComponent(AboutLazy);
export const Contact = LazyLoadComponent(ContactLazy);
export const Home = LazyLoadComponent(HomeLazy);
export const Login = LazyLoadComponent(LoginLazy);
export const Register = LazyLoadComponent(RegisterLazy);
