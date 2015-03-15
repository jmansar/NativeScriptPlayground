import frameModule = require("ui/frame");

export function navigateToBindingsTestPage() {
    frameModule.topmost().navigate("app/views/bindings-test-page");
}