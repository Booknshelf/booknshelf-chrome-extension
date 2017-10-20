export enum Trigger {
  page_menu,
  selection_menu,
  browser_action,
  hide_iframe,
}

export namespace IFRAME {
  export const id = "booknshelf-popup-frame";
  export const constStyle = "height: 224px; width: 370px; " +
                         "margin: 0px; padding: 0px; " +
                         "position: fixed; right: 5px; top: 5px; " +
                         "z-index: 2147483647; ";
  export const styleVisible = "display: block !important;";
  export const styleGone = "display: none;";
}
