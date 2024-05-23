import ExpoModulesCore

public class ZebraStripedModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ZebraStriped")
        
        Function("getBase64Code") { (value: String, format: String, size: CGSize, onColor: CGColor?, offColor: CGColor?) in
            let barcodeFormat = ZebraFactory.parseToBarcodeFormat(codeFormat: CodeFormat(rawValue: format)!)
            
            return ZebraFactory.generateCodeImage(value: value, format: barcodeFormat, size: size, onColor: onColor, offColor: offColor).pngData()?.base64EncodedString()
        }
        
        View(ZebraCodeView.self) {
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
