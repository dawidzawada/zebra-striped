import ExpoModulesCore
import ZXingObjC


class ZebraCodeView: ExpoView {
    
    let imageView = UIImageView()
    
    private var _format: ZXBarcodeFormat?
    
    var value: String? {
        didSet {
            renderImage()
        }
    }
    
    var size: CGSize? {
        didSet {
            renderImage()
        }
    }
    
    var onColor: CGColor? {
        didSet {
            renderImage()
        }
    }
    
    var offColor: CGColor? {
        didSet {
            renderImage()
        }
    }
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        clipsToBounds = true
        imageView.image = UIImage()
        addSubview(imageView)
    }
    
    
    func updateFormat(_ format: CodeFormat){
        _format = ZebraFactory.parseToBarcodeFormat(codeFormat: format)
        
        renderImage()
    }
    
    func renderImage() {
        
        guard let codeValue = value, let codeSize = size, let format = _format else {
            return;
        }
        
        let image = ZebraFactory.generateCodeImage(value: codeValue, format: format, size: codeSize, onColor: onColor, offColor: offColor)
        imageView.image = image
        imageView.frame = CGRect(x: 0, y: 0, width: codeSize.width, height: codeSize.height)
    }
  
}
