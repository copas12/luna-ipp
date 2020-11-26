const ipp = require("ipp");

const doPrint = async (printerUrl, data = null) => {
  return new Promise((resolve, reject) => {
    console.log({ printerUrl });
    const printer = ipp.Printer(printerUrl, { version: "2.0" });
    const msg = {
      "operation-attributes-tag": {
        "requesting-user-name": "Urip",
        "job-name": "My Test Job",
        "document-format": "application/vnd.cups-raw",
      },
      data: Buffer.from(data, "utf8"),
    };
    printer.execute("Print-Job", msg, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = {doPrint}
