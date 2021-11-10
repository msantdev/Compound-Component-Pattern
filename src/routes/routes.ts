import { lazy } from "react";

// type JSXComponent =()=>JSX.Element
type JSXComponent = () => JSX.Element;

interface IRoutes {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
  children?: IRoutes[];
}

const Shopping = lazy(
  () =>
    import(
      /* webpackChunkName:"LazyPage1" */ "../component-patterns/pages/ShoppingPage"
    )
);
const LazyPage2 = lazy(
  () => import(/* webpackChunkName:"LazyPage2" */ "../lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () => import(/* webpackChunkName:"LazyPage3" */ "../lazyload/pages/LazyPage3")
);

export const routes: IRoutes[] = [
  {
    path: "/shopping",
    Component: Shopping,
    name: "Shopping",
  },
  {
    path: "/lazy2",
    Component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "LazyPage-3",
  },
];
