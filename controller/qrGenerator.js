

const qr = require('qrcode');

let data = {
    name: "Jaseem k s",
    email: "jaseem6396jaz@gmail.com",
    mobile: "8086766396",
    qualification: "BE Computer science",
};

exports.qrCode = async (req, res) => {
        const jsonString = JSON.stringify(data);

        qr.toDataURL(jsonString, function (err, url) {
            if (err) {
                console.error(err);
                return res.status(500).send('Error generating QR code');
            }

            res.send({ qrCodeUrl: url });

        });
    
};
