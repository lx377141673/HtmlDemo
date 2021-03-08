 // 随机获取颜色信息
 function getRandomColor() {
     var colorNum = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
     var colorArray = colorNum.split(",");
     var color = "#";
     for (var i = 0; i < 6; i++) {
         var index = parseInt(Math.random() * colorArray.length);
         color += colorArray[index];
     }
     return color;
 }

 //除法函数，用来得到精确的除法结果 
 //说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。 
 //调用：accDiv(arg1,arg2) 
 //返回值：arg1除以arg2的精确结果

 function accDiv(arg1, arg2) {
     var t1 = 0,
         t2 = 0,
         r1, r2;
     try {
         t1 = arg1.toString().split(".")[1].length
     } catch (e) {}
     try {
         t2 = arg2.toString().split(".")[1].length
     } catch (e) {}
     with(Math) {
         r1 = Number(arg1.toString().replace(".", ""))
         r2 = Number(arg2.toString().replace(".", ""))
         return (r1 / r2) * pow(10, t2 - t1);
     }
 }
 //给Number类型增加一个div方法，调用起来更加方便。 
 Number.prototype.div = function(arg) {
     return accDiv(this, arg);
 }

 //乘法函数，用来得到精确的乘法结果 
 //说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。 
 //调用：accMul(arg1,arg2) 
 //返回值：arg1乘以arg2的精确结果 

 function accMul(arg1, arg2) {
     var m = 0,
         s1 = arg1.toString(),
         s2 = arg2.toString();
     try {
         m += s1.split(".")[1].length
     } catch (e) {}
     try {
         m += s2.split(".")[1].length
     } catch (e) {}
     return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
 }
 //给Number类型增加一个mul方法，调用起来更加方便。 
 Number.prototype.mul = function(arg) {
     return accMul(arg, this);
 }


 function ctxOnload(ctx, h, w) {
     h = h ? h : 10;
     w = w ? w : 10;
     ctx.beginPath();
     var h = 10;
     while (h < ctx.canvas.height) {
         ctx.moveTo(0, h);
         ctx.lineTo(ctx.canvas.width, h);
         h += 10;
     }

     var w = 10;
     while (w < ctx.canvas.width) {
         ctx.moveTo(w, 0);
         ctx.lineTo(w, ctx.canvas.height);
         w += 10;
     }
     ctx.strokeStyle = getRandomColor();
     ctx.strokeStyle = "#e9c616";
     ctx.stroke();
 }

 /** 将 ImageData 转换成 base64*/
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
         return canvas.toDataURL("image/png", 1);
     } catch (error) {
         return error;
     } finally {
         delete canvas;
     }
 }