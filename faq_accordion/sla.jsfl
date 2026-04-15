var lib = fl.getDocumentDOM().library;
var items = lib.items;

for (var i = 0; i < items.length; i++) {
    if (items[i].itemType == "bitmap") {
        items[i].compressionType = "lossless"; // ou "lossless"
        
        items[i].allowSmoothing = false;
    }
}