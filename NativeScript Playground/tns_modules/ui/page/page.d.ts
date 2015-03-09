/**
 * Contains the Page class, which represents a logical unit for navigation inside a Frame. 
 */
declare module "ui/page" {
    import observable = require("data/observable");
    import view = require("ui/core/view");
    import contentView = require("ui/content-view");
    import frame = require("ui/frame");
    

    /**
     * Defines the data for the Page.navigatedTo event.
     */
    export interface NavigatedData extends observable.EventData {
        /**
         * The navigation context (optional, may be undefined) passed to the Page.onNavigatedTo method.
         */
        context: any;
    }

    /**
     * Encapsulates the known event names for the page module.
     */
    export module knownEvents {
        /**
         * The event raised when the Page.onNavigatedTo method is called.
         */
        export var navigatedTo: string;
    }

    /**
     * Represents a logical unit for navigation (inside Frame).
     */
    export class Page extends contentView.ContentView {

        constructor(options?: Options)

        /**
         * A valid css string which will be applied for all nested UI components (based on css rules).
         */
        css: string;

        /**
         * Adds a new values to current css.
         * @param cssString - A valid css which will be added to current css. 
         */
        addCss(cssString: string): void;

        /**
         * Adds the content of the file to the current css.
         * @param cssFileName - A valid file name (from the application root) which contains a valid css.
         */
        addCssFile(cssFileName: string): void;

        /**
         * A property that is used to pass a data from another page (while navigate to).
         */
        navigationContext: any;

        /**
         * Gets the Frame object controlling this instance.
         */
        frame: frame.Frame;

        /**
         * A method called before navigating to the page.
         * @param context - The data passed to the page through the NavigationEntry.context property.
         */
        onNavigatingTo(context: any): void;

        /**
         * A method called after navigated to the page.
         * @param context - The data passed to the page through the NavigationEntry.context property.
         */
        onNavigatedTo(context: any): void;

        /**
         * A method called before navigating from the page.
         */
        onNavigatingFrom(): void;

        /**
         * A method called after navigated from the page.
         * @param isBackNavigation - True if the Page is being navigated from using the Frame.goBack() method, false otherwise.
         */
        onNavigatedFrom(isBackNavigation: boolean): void;

        

        on(event: string, callback: (data: observable.EventData) => void);

        /**
         * Raised when navigation to the page is finished.
         */
        on(event: "navigatedTo", callback: (args: NavigatedData) => void);
    }

    /**
     * Provides a set with most common option used to create a page instance.
     */
    export interface Options extends view.Options {
        /**
         * Gets or sets the page module.
         */
        module?: any;

        /**
         * Gets or sets the page module file name.
         */
        filename?: string;

        /**
         * Gets or sets the page module exports.
         */
        exports?: any;
    }
} 