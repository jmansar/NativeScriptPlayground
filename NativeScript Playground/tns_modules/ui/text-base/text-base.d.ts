declare module "ui/text-base" {
    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");
    import formattedString = require("text/formatted-string");

    /**
     * Dependency property used to support binding operations for the text of the current text-base instance.
     */
    export var textProperty: dependencyObservable.Property;

    /**
     * Dependency property used to support binding operations for the formatted text of the current text-base instance.
     */
    export var formattedTextProperty: dependencyObservable.Property;

    /**
     * Represents the base class for all text views.
     */
    export class TextBase extends view.View {
        constructor(options?: Options);
        
        /**
         * Gets or sets the text.
         */
        text: string;

        /**
         * Gets or sets a formatted string.
         */
        formattedText: formattedString.FormattedString;
    }

    /**
     * Defines interface for an optional parameter used to create a text-base component.
     */
    export interface Options extends view.Options {
        /**
         * Gets or sets the text.
         */
        text?: string;
    }
}