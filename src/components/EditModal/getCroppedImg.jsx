import { createCanvas, Image } from 'canvas';

const getCroppedImg = (imageSrc, croppedAreaPixels) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const canvas = createCanvas(croppedAreaPixels.width, croppedAreaPixels.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );
      resolve(canvas.toDataURL('image/jpeg'));
    };

    image.onerror = (err) => {
      reject(err);
    };
  });
};

export default getCroppedImg;
