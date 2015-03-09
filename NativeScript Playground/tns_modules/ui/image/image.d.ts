/**
 * Contains the Image class, which represents an image widget.
 */
declare module "ui/image" {

    import imageSource = require("image-source");
    import view = require("ui/core/view");

    /**
     * Represents a class that provides functionality for loading and streching image(s).
     */
    export class Image extends view.View {
        /**
         * Gets the native [android widget](http://developer.android.com/reference/android/widget/ImageView.html) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: android.widget.ImageView;

        /**
         * Gets the native iOS [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) that represents the user interface for this component. Valid only when running on iOS.
         */
        ios: UIImageView;

        /**
         * Gets or sets the image source of the image.
         */
        source: imageSource.ImageSource;

        /**
         * Gets or sets the URL of the image.
         */
        url: string;

        /**
         * Gets a value indicating if the image is currently loading
         */
        isLoading: boolean;

        /**
         * Gets or sets the image stretch mode.
         */
        stretch: string;
    }

    /**
     * Provides common options for creating an image.
     */
    export interface Options extends view.Options {
        /**
         * Gets or sets the image source of the image.
         */
        source: imageSource.ImageSource;

        /**
         * Gets or sets the URL of the image.
         */
        url: string;

        /**
         * Gets or sets the image stretch mode.
         */
        stretch: string;
    }
}
