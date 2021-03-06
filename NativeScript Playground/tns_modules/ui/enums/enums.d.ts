declare module "ui/enums" {

    /**
     * Represents a soft keyboard flavor.
     */
    module KeyboardType {
        /**
         * Android: [TYPE_CLASS_DATETIME](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_DATETIME) | [TYPE_DATETIME_VARIATION_NORMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_DATETIME_VARIATION_NORMAL)
         * iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
         */
        export var datetime: string;
        
        /**
         * Android: [TYPE_CLASS_PHONE](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_PHONE)
         * iOS:  [UIKeyboardTypePhonePad](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
         */
        export var phone: string;
        
        /**
         * Android: [TYPE_CLASS_NUMBER](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_NUMBER) | android.text.InputType.TYPE_NUMBER_VARIATION_NORMAL | [TYPE_NUMBER_FLAG_SIGNED](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_SIGNED) | [TYPE_NUMBER_FLAG_DECIMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_DECIMAL)
         * iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
         */
        export var number: string;
        
        /**
         * Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_URI](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_URI)
         * iOS:  [UIKeyboardTypeURL](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
         */
        export var url: string;
        
        /**
         * Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_EMAIL_ADDRESS](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_EMAIL_ADDRESS)
         * iOS:  [UIKeyboardTypeEmailAddress](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
         */
        export var email: string;
    }

    /**
     * Represents the flavor of the return key on the soft keyboard.
     */
    module ReturnKeyType {
        /**
         * Android: [IME_ACTION_DONE](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_DONE)
         * iOS: [UIReturnKeyDone](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
         */
        export var done: string;

        /**
         * Android: [IME_ACTION_NEXT](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NEXT)
         * iOS: [UIReturnKeyNext](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
         */
        export var next: string;

        /**
         * Android: [IME_ACTION_GO](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_GO)
         * iOS: [UIReturnKeyGo](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
         */
        export var go: string;
        
        /**
         * Android: [IME_ACTION_SEARCH](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEARCH)
         * iOS: [UIReturnKeySearch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
         */
        export var search: string;
        
        /**
         * Android: [IME_ACTION_SEND](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEND)
         * iOS: [UIReturnKeySend](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
         */
        export var send: string;
    }

    /**
     * Represents a text-align enumeration.
     */
    module TextAlignment {
        /**
         * Represents left text-align.
         */
        export var left: string;

        /**
         * Represents center text-align.
         */
        export var center: string;

        /**
         * Represents right text-align.
         */
        export var right: string;
    }

    /**
     * Orientation indicates a direction of a layout that can exist in a horizontal or vertical state.
     */
    module Orientation {
        /**
         * Layout should be horizontally oriented.
         */
        export var horizontal: string;
        /**
         * Layout should be vertically oriented.
         */
        export var vertical: string;
    }

    /**
     * HorizontalAlignment indicates where an element should be displayed on the horizontal axis relative to the allocated layout slot of the parent element.
     */
    module HorizontalAlignment {
        /**
         * An element should be left aligned.
         */
        export var left: string;

        /**
         * An element should be center aligned.
         */
        export var center: string;

        /**
         * An element should be right aligned.
         */
        export var right: string;

        /**
         * An element should be stretched to fill all the available size.
         */
        export var stretch: string;
    }

    /**
     * VerticalAlignment indicates where an element should be displayed on the horizontal axis relative to the allocated layout slot of the parent element.
     */
    module VerticalAlignment {
        /**
         * An element should be top aligned.
         */
        export var top: string;

        /**
         * An element should be center aligned.
         */
        export var center: string;

        /**
         * An element should be bottom aligned.
         */
        export var bottom: string;

        /**
         * An element should be stretched to fill all the available size.
         */
        export var stretch: string;
    }

    /**
     * Describes how content is resized to fill its allocated space.
     */
    module Stretch {
        /**
         * The image preserves its original size.
         */
        export var none: string;

        /**
         * The image is resized to fit in the destination dimensions while it preserves its native aspect ratio.
         */
        export var aspectFill: string;

        /**
         * The image is resized to fill the destination dimensions while it preserves
         * its native aspect ratio. If the aspect ratio of the destination rectangle differs from the image,
         * the image is clipped to fit in the destination
         */
        export var aspectFit: string;

        /**
         * The image is resized to fill the destination dimensions. The aspect ratio is not preserved.
         */
        export var fill: string;
    }

    /**
     * Represents the visibility mode of a view.
     */
    export module Visibility {
        /**
         * The view is visible.
         */
        export var visible: string;

        /**
         * The view is not visible and won't take place in the layout.
         */
        export var collapsed: string;
    }

    /**
     * A flag enum that represents common font attributes.
     */
    module FontAttributes {
        /**
         * Denotes that text should be drawn in a normal style.
         */
        export var Normal: number;

        /**
         * Denotes that text should be drawn in a bold weight.
         */
        export var Bold: number;

        /**
         * Denotes that text should be drawn in a italic style.
         */
        export var Italic: number;
    }

    /**
     * Describes the type of a device
     */
    module DeviceType {
        /**
         * Indicates a smart-phone device.
         */
        export var Phone: string;

        /**
         * Indicates a tablet device.
         */
        export var Tablet: string;
    }

    /**
     * Represents an enumeration specifying when the text property of an EditableTextBase will be updated.
     */
    module UpdateTextTrigger {
        /**
         * The text property will be udpaded when the widget loses focus.
         */
        export var focusLost: string;

        /**
         * The text property will be udpaded on every single character typed by the user.
         */
        export var textChanged: string;
    }

    /**
     * Specifies common accuracy values.
     */
    module Accuracy {
        /**
         * The default accuracy. About 300 meters.
         */
        export var any: number;

        /**
         * High accuracy. About 3 meters.
         */
        export var high: number;
    }

    /**
     * Specifies the Dock position of a child element that is inside a DockLayout.
     */
    module Dock {
        /**
         * A child element that is positioned on the left side of the DockLayout.
         */
        export var left: string;

        /**
         * A child element that is positioned on the top side of the DockLayout.
         */
        export var top: string;

        /**
         * A child element that is positioned on the right side of the DockLayout.
         */
        export var right: string;

        /**
         * A child element that is positioned on the bottom side of the DockLayout.
         */
        export var bottom: string;
    }
} 
