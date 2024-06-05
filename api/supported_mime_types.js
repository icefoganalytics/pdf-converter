// https://en.wikipedia.org/wiki/LibreOffice#Supported_file_formats
const MIME_TYPE_WHITELIST = new Set([
    'application/x-abiword',  // AbiWord
    'application/x-shockwave-flash',  // Adobe Flash
    'application/x-pagemaker',  // Adobe PageMaker
    'application/vnd.apple.keynote',  // Apple Keynote
    'application/vnd.apple.numbers',  // Apple Numbers
    'application/vnd.apple.pages',  // Apple Pages
    'application/vnd.palm',  // AportisDoc (Palm)
    'application/dxf',  // AutoCAD DXF
    'image/bmp',  // BMP file format
    'text/csv',  // Comma-separated values
    'text/plain',  // Plain text
    'image/gif',  // Graphics Interchange Format
    'text/html',  // HTML
    'image/jpeg',  // JPEG
    'application/vnd.lotus-1-2-3',  // Lotus 1-2-3
    'application/vnd.ms-excel',  // Microsoft Excel
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',  // Microsoft Excel 2007-2021
    'application/vnd.ms-powerpoint',  // Microsoft PowerPoint
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',  // Microsoft PowerPoint 2007-2021
    'application/vnd.ms-publisher',  // Microsoft Publisher
    'application/rtf',  // Microsoft RTF
    'application/msword',  // Microsoft Word
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',  // Microsoft Word 2007-2021
    'application/vnd.visio',  // Microsoft Visio
    'image/png',  // Portable Network Graphics
    'application/pdf',  // Portable Document Format
    'application/vnd.oasis.opendocument.text',  // OpenDocument Text
    'application/vnd.oasis.opendocument.spreadsheet',  // OpenDocument Spreadsheet
    'application/vnd.oasis.opendocument.presentation',  // OpenDocument Presentation
    'application/vnd.oasis.opendocument.graphics',  // OpenDocument Graphics
    'application/x-cdr',  // CorelDRAW
    'application/epub+zip',  // EPUB
    'image/x-xbitmap',  // X BitMap
    'image/x-xpixmap',  // X PixMap
    'image/tiff',  // Tag Image File Format
    'image/vnd.adobe.photoshop',  // Photoshop
    'image/svg+xml',  // Scalable vector graphics
    'image/x-tga',  // Truevision TGA (Targa)
    'application/x-gnumeric',  // Gnumeric
    'application/vnd.sun.xml.calc',  // StarOffice StarCalc
    'application/vnd.sun.xml.draw',  // StarOffice StarDraw
    'application/vnd.sun.xml.writer',  // StarOffice StarWriter
    'application/x-602',  // Software602 (T602)
    'application/x-sylk',  // SYLK
    'application/vnd.wordperfect',  // WordPerfect
]);

/**
 * Checks if a given mimeType is supported for PDF Conversion
 * @param {string} mimeType
 * @returns {boolean}
 */
export function isSupportedMimeType(mimeType){
    return MIME_TYPE_WHITELIST.has(mimeType);
}

