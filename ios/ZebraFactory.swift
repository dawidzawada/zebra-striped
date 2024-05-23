//
//  ZebraFactory.swift
//  ZebraStriped
//
//  Created by Dawid Zawada on 25/04/2024.
//

import ZXingObjC

struct ZebraFactory {
    
    static let DEFAULT_ON_COLOR = UIColor.black.cgColor
    static let DEFAULT_OFF_COLOR = UIColor.white.cgColor
    
    static func generateCodeImage(value: String, format: ZXBarcodeFormat, size: CGSize, onColor _onColor: CGColor?, offColor _offColor: CGColor?) -> UIImage {
        let writer = ZXMultiFormatWriter();
        let hints = ZXEncodeHints()
        hints.margin = 0
        
        do {
            let result = try writer.encode(value, format: format, width: Int32(size.width), height: Int32(size.height), hints: hints)
            let onColor = _onColor ?? DEFAULT_ON_COLOR
            let offColor = _offColor ?? DEFAULT_OFF_COLOR
            return UIImage(cgImage: ZXImage(matrix: result, on: onColor, offColor: offColor).cgimage)
        } catch {
            return UIImage()
        }
        
    }
    
    static func parseToBarcodeFormat(codeFormat: CodeFormat) -> ZXBarcodeFormat {
        switch codeFormat {
        case .ean8:
            return kBarcodeFormatEan8
        case .ean13:
            return kBarcodeFormatEan13
        case .upcA:
            return kBarcodeFormatUPCA
        case .upcE:
            return kBarcodeFormatUPCE
        case .code39:
            return kBarcodeFormatCode39
        case .code93:
            return kBarcodeFormatCode93
        case .code128:
            return kBarcodeFormatCode128
        case .itf:
            return kBarcodeFormatITF
        case .codabar:
            return kBarcodeFormatCodabar
        case .qrcode:
            return kBarcodeFormatQRCode
        case .pdf417:
            return kBarcodeFormatPDF417
        case .dataMatrix:
            return kBarcodeFormatDataMatrix
        case .aztec:
            return kBarcodeFormatAztec
        }
    }
    
}
