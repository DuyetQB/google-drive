/**
 * Convert SVG xml to png base64 url
 * @param {any} svgXml
 */
export function getImageDataURL(svgXml) {
  let url =
    "https://media.istockphoto.com/id/1337049301/photo/medical-error-text-on-a-paper-with-pills-and-stethoscope-on-table.webp?b=1&s=612x612&w=0&k=20&c=JxOdJFIQ5qORN4w7X3fPc_hfNrpp0zW9mG4TVSqg8Ss=";
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      var canvas = document.createElement("CANVAS");
      var ctx = canvas.getContext("2d");
      var dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL("image/png", 1);
      resolve(dataURL);
    };

    img.onerror = function () {
      resolve(url);
    };

    img.src =
      "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgXml)));
    if (img.complete || img.complete === undefined) {
      img.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = url;
    }
  });
}

export const svgToBase64 = (svgElement) => {
  const svg = new XMLSerializer().serializeToString(svgElement);
  const base64 = window.btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;charset=utf-8;base64,${base64}`;
};
