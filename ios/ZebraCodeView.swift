import ExpoModulesCore
import ZXingObjC


class ZebraCodeView: ExpoView {
    
    let imageView = UIImageView()
    let factory = ZebraFactory()
    
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
        switch format {
            case .ean8:
                _format = kBarcodeFormatEan8
            case .ean13:
                _format = kBarcodeFormatEan13
            case .upcA:
                _format = kBarcodeFormatUPCA
            case .upcE:
                _format = kBarcodeFormatUPCE
            case .code39:
                _format = kBarcodeFormatCode39
            case .code93:
                _format = kBarcodeFormatCode93
            case .code128:
                _format = kBarcodeFormatCode128
            case .itf:
                _format = kBarcodeFormatITF
            case .codabar:
                _format = kBarcodeFormatCodabar
            case .qrcode:
                _format = kBarcodeFormatQRCode
            case .pdf417:
                _format = kBarcodeFormatPDF417
            case .dataMatrix:
                _format = kBarcodeFormatDataMatrix
            case .aztec:
                _format = kBarcodeFormatAztec
        }
        
        renderImage()
    }
    
    func renderImage() {
        
        guard let codeValue = value, let codeSize = size, let format = _format else {
            return;
        }
        
        let image = factory.generateCodeImage(value: codeValue, format: format, size: codeSize, onColor: onColor, offColor: offColor)
        imageView.image = image
        imageView.frame = CGRect(x: 0, y: 0, width: codeSize.width, height: codeSize.height)
    }
  
}
