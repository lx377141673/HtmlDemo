/**
 * base64 转成 Image 对象
 * @param {String} base64 base64 字符串
 * @param {int} width  Image 对象宽度
 * @param {int} height  Image 对象高度
 * @returns Image 对象
 */
function base64ToImg(base64, width, height) {
    let img = new Image();
    img.src = base64;
    if (width) {
        img.width = width;
    }
    if (height) {
        img.height = height;
    }
    return img;
}

/**
 * 将画布转换成 Base64 字符创
 * @param {HTMLCanvasElement} canvas 画布对象
 * @returns base64 字符串
 */
function canvasToBase64(canvas) {
    return canvas.toDataURL("img/png", 1);
}

/**
 *  将 画布 , 转换成 图片对象
 * @param {HTMLCanvasElement} canvas 画布对象
 * @returns  图片对象
 */
function canvasToImg(canvas) {
    return base64ToImg(canvasToBase64(canvas), canvas.width, canvas.heigh);
}

/**
 *  将 img  转换成 Canvas 画布
 * 需要确定 img 已加载, 建议在 img.onload 方法中使用该函数
 * @param {Image} img Image 对象
 * @returns 画布对象
 */
function imgToCanvas(img) {
    // 获取 画布对象
    let canvas = document.createElement("canvas");
    canvas.height = img.height;
    canvas.width = img.width;
    // 获取画布上下文
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    return canvas;
}


/**
 * 将 ImageData 转换成 base64
 * @param {ImageData} imageData  imageData对象
 * @returns base64 字符串
 */
function imageDataToBaseDataURL(imageData) {
    if (typeof(imageData) == 'undefined' || imageData === null) {
        throw new Error("imageData is null");
        return;
    }
    let canvas;
    try {
        canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        // 将 ImageData 渲染至 canvas中
        canvas.getContext("2d").putImageData(imageData, 0, 0);
        // 将 canvas 转换成 base64 图片地址
        return canvasToBase64(canvas);
    } catch (error) {
        return error;
    } finally {
        delete canvas;
    }
}

/**
 * ImageData 对象转换成 Image 对象
 * @param {ImageData} imageData  imageData对象
 * @returns Image 对象
 */
function imageDataToImg(imageData) {
    return base64ToImg(imageDataToBaseDataURL(imageData), imageData.width, imageData.height);
}