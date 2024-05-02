package expo.modules.zebrastriped

import android.graphics.Bitmap
import android.graphics.Color
import com.google.zxing.BarcodeFormat
import com.google.zxing.EncodeHintType
import com.google.zxing.MultiFormatWriter
import net.glxn.qrgen.android.MatrixToImageConfig
import net.glxn.qrgen.android.MatrixToImageWriter

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
}