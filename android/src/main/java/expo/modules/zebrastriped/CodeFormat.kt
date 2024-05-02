package expo.modules.zebrastriped

enum class CodeFormat(val value: String) {
    EAN8("ean-8"),
    EAN13("ean-13"),
    UPCA("upc-a"),
    UPCE("upc-e"),
    CODE39("code-39"),
    CODE93("code-93"),
    CODE128("code-128"),
    ITF("itf"),
    CODABAR("codabar"),
    QRCODE("qr"),
    PDF417("pdf-417"),
    DATAMATRIX("data-matrix"),
    AZTEC("aztec")
}