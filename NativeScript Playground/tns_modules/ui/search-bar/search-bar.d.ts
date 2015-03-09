/**
 * Contains the SearchBar class, which represents a standard search bar component.
 */
declare module "ui/search-bar" {
    import view = require("ui/core/view");
    import observable = require("data/observable");
    import dependencyObservable = require("ui/core/dependency-observable");

    /**
     * Dependency property used to support binding operations related to search-bar text.
     */
    export var textProperty: dependencyObservable.Property;

    /**
     * Known event names.
     */
    module knownEvents {
        /**
         * Raised when search request has been submitted.
         */
        export var submit: string;

        /**
         * Raised when search critea has been cleared.
         */
        export var clear: string;
    }

    /**
     * Represents a search bar component.
     */
    export class SearchBar extends view.View {
        /**
         * Gets the native [android widget](http://developer.android.com/reference/android/widget/SearchView.html) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: android.widget.SearchView;

        /**
         * Gets the native iOS [UISearchBar](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISearchBar_Class/) that represents the user interface for this component. Valid only when running on iOS.
         */
        ios: UISearchBar;

        /**
         * Gets or sets a search bar text.
         */
        text: string;

        on(event: string, callback: (data: observable.EventData) => void);

        /**
         * Raised when a search bar search is submitted.
         */
        on(event: "submit", callback: (args: observable.EventData) => void);

        /**
         * Raised when a search bar search is closed.
         */
        on(event: "close", callback: (args: observable.EventData) => void);
    }
}