/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// #region images
declare module "*.jpeg" {
  const url: string;
  export default url;
}
declare module "*.png" {
  const url: string;
  export default url;
}
// #endregion

interface ImportMeta {
  readonly env: any;
}
