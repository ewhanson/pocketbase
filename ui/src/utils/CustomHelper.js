import loadImage from "blueimp-load-image";

/**
 * Fixes exif-related orientation issues when uploading images from Safari on iOS
 *
 * @param {File} file
 * @returns {Promise<File>}
 */
export function fixRotationOfFile(file) {
    return new Promise((resolve) => {
        loadImage(file, (img) => {
            img.toBlob((blob) => {
                const newFile = new File([blob], file.name, {type: file.type});
                resolve(newFile);
            });
        }, { canvas: true, orientation: true });
    });
}