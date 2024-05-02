import ExpoModulesCore

public class ZebraStripedModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ZebraStriped')` in JavaScript.
    Name("ZebraStriped")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of the
    // view definition: Prop, Events.
    View(ZebraCodeView.self) {
      // Defines a setter for the `name` prop.
      Prop("value") { (view: ZebraCodeView, value: String) in
          view.value = value
      }
        
      Prop("format") { (view: ZebraCodeView, format: String) in
          view.updateFormat(CodeFormat(rawValue: format)!)
      }
        
      Prop("size") { (view: ZebraCodeView, size: CGSize) in
          view.size = size
      }
        
      Prop("onColor") { (view: ZebraCodeView, color: CGColor?) in
          view.onColor = color
      }
        
      Prop("offColor") { (view: ZebraCodeView, color: CGColor?) in
          view.offColor = color
      }
    }
  }
}
