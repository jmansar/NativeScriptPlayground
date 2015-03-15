import observableModule = require("data/observable");
import bindingsTestViewModel = require("../shared/models/bindingsTestViewModel");
import viewModule = require("ui/core/view");

var viewModel = new bindingsTestViewModel();
var page;

export function load(args: observableModule.EventData) {
    page = args.object;
    page.bindingContext = viewModel;
}

export function add() {
    viewModule.getViewById(page, "newItemName").dismissSoftInput();
    viewModule.getViewById(page, "newItemValue").dismissSoftInput();
    viewModel.add();
}

