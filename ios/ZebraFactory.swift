//
//  ZebraFactory.swift
//  ZebraStriped
//
//  Created by Dawid Zawada on 25/04/2024.
//

import ZXingObjC

struct ZebraFactory {
    
    let DEFAULT_ON_COLOR = UIColor.black.cgColor
    let DEFAULT_OFF_COLOR = UIColor.white.cgColor
    let FALLBACK_COLOR = CGColor(red: 111, green: 111, blue: 111, alpha: 1)
    
    func generateCodeImage(value: String, format: ZXBarcodeFormat, size: CGSize, onColor _onColor: CGColor?, offColor _offColor: CGColor?) -> UIImage {
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
    
}
