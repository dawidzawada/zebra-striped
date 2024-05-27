package expo.modules.zebrastriped

import android.graphics.Bitmap
import android.graphics.Color
import com.google.zxing.BarcodeFormat
import com.google.zxing.EncodeHintType
import com.google.zxing.MultiFormatWriter
import net.glxn.qrgen.android.MatrixToImageConfig
import net.glxn.qrgen.android.MatrixToImageWriter
import java.lang.Exception

class ZebraFactory {

    val DEFAULT_ON_COLOR = Color.BLACK
    val DEFAULT_OFF_COLOR = Color.WHITE

    fun generateCodeBitmap(value: String, format: BarcodeFormat, size: Pair<Int, Int>, onColor: String?, offColor: String?): Bitmap? {

        val (width, height) = size

        if(value.isEmpty()){
            return null
        }

        val writer = MultiFormatWriter()

        val hints: MutableMap<EncodeHintType, Any> = mutableMapOf(
                EncodeHintType.MARGIN to 0
        )

        val matrix = writer.encode(value, format, width, height, hints)
        val _onColor = onColor?.let { Color.parseColor(it) } ?: DEFAULT_ON_COLOR
        val _offColor = offColor?.let { Color.parseColor(it) } ?: DEFAULT_OFF_COLOR


        return MatrixToImageWriter.toBitmap(matrix, MatrixToImageConfig(_onColor, _offColor))
    }

    fun parseToBarcodeFormat(codeFormat: CodeFormat): BarcodeFormat {
        val barcodeFormat = when (codeFormat) {
            CodeFormat.EAN8 -> BarcodeFormat.EAN_8
            CodeFormat.EAN13 -> BarcodeFormat.EAN_13
            CodeFormat.UPCA -> BarcodeFormat.UPC_A
            CodeFormat.UPCE -> BarcodeFormat.UPC_E
            CodeFormat.CODE39 -> BarcodeFormat.CODE_39
            CodeFormat.CODE93 -> BarcodeFormat.CODE_93
            CodeFormat.CODE128 -> BarcodeFormat.CODE_128
            CodeFormat.ITF -> BarcodeFormat.ITF
            CodeFormat.CODABAR -> BarcodeFormat.CODABAR
            CodeFormat.QRCODE -> BarcodeFormat.QR_CODE
            CodeFormat.PDF417 -> BarcodeFormat.PDF_417
            CodeFormat.DATAMATRIX -> BarcodeFormat.DATA_MATRIX
            CodeFormat.AZTEC -> BarcodeFormat.AZTEC
        }

        return barcodeFormat
    }
}