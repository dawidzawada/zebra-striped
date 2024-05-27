package expo.modules.zebrastriped

import android.annotation.SuppressLint
import android.widget.ImageView
import android.content.Context
import com.google.zxing.BarcodeFormat
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView
import java.lang.Exception
import kotlin.properties.Delegates

@SuppressLint("ViewConstructor")
class ZebraCodeView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {

    var value: String? by Delegates.observable(null) { _, _, _ ->
        renderImage()
    }

    var size: Pair<Int,Int>? by Delegates.observable(null) { _, _, _ ->
        renderImage()
    }

    var onColor: String? by Delegates.observable(null) { _, _, _ ->
        renderImage()
    }

    var offColor: String? by Delegates.observable(null) { _, _, _ ->
        renderImage()
    }

    private val factory = ZebraFactory()
    private var _format: BarcodeFormat? = null

    private val imageView = ImageView(context).also {
        addView(it)

        it.layoutParams = LayoutParams(
                android.view.ViewGroup.LayoutParams.MATCH_PARENT,
                android.view.ViewGroup.LayoutParams.MATCH_PARENT
        )
    }

    fun updateFormat(format: CodeFormat){
        _format =  factory.parseToBarcodeFormat(format)

        renderImage()
    }

    private fun renderImage(){

        if(value != null && _format != null && size != null){
            val bitmap = factory.generateCodeBitmap(value!!, _format!!, size!!, onColor, offColor)
            imageView.setImageBitmap(bitmap);
        }


    }
}
