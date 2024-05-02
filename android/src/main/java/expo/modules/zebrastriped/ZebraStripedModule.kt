package expo.modules.zebrastriped

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ZebraStripedModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ZebraStriped')` in JavaScript.
    Name("ZebraStriped")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    View(ZebraCodeView::class) {
      Prop("value") { view: ZebraCodeView, value: String ->
        view.value = value
      }

      Prop("format") { view: ZebraCodeView, format: String ->
        view.updateFormat(format)
      }

      Prop("size") { view: ZebraCodeView, size: Pair<Int, Int> ->
        view.size = size
      }

      Prop("onColor") { view: ZebraCodeView, color: String ->
        view.onColor = color
      }

      Prop("offColor") { view: ZebraCodeView, color: String ->
        view.offColor = color
      }
    }
  }
}
