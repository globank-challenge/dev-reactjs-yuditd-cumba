
import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element
interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name:string
}

const Home = lazy(() => import(/* webpackChunkName: "Home" */"../modules/pokemon/pages/Home"))

export const routes : Route[] = [
    {
        to: "/",
        path: "",
        Component: Home,
        name: 'home'
    }
]