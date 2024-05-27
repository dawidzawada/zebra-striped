package expo.modules.zebrastriped

import android.graphics.Bitmap
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.io.ByteArrayOutputStream
import java.lang.Exception
import java.util.Base64

class ZebraStripedModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ZebraStriped")

    Function("getBase64Code") { value: String, format: String, size: Pair<Int, Int>, onColor: String?, offColor: String? ->
      val factory = ZebraFactory()
      val barcodeFormat = factory.parseToBarcodeFormat(CodeFormat.valueFromString(format))

      val bos = ByteArrayOutputStream()
      val bitmap = factory.generateCodeBitmap(value, barcodeFormat, size, onColor, offColor)
      bitmap?.compress(Bitmap.CompressFormat.PNG, 100, bos);

      return@Function Base64.getEncoder().encodeToString(bos.toByteArray())
    }

    View(ZebraCodeView::class) {
      Prop("value") { view: ZebraCodeView, value: String ->
        view.value = value
      }

      Prop("format") { view: ZebraCodeView, formatString: String ->
        view.updateFormat(CodeFormat.valueFromString(formatString))
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
