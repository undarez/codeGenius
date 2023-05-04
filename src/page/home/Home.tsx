import React, { useState } from 'react';
import Barcode from 'react-barcode';
import { QRCodeSVG } from 'qrcode.react';
import './_home.scss';

const Home = () => {
      //function telechargement qrcode
      const handleDllQrcode = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
            e.preventDefault();
            const qrCodeSvg = document.getElementById(
                  'qr-code-svg'
            ) as HTMLElement;
            const svgData = new XMLSerializer().serializeToString(qrCodeSvg);
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
            const svgUrl = URL.createObjectURL(svgBlob);

            const downloadWindow = window.open(svgUrl, '_blank');
            downloadWindow!.document.write(`
              <html>
                <head>
                  <style>
                    #qr-code-svg {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%,-50%);
                      width: 180px;
                      height: 180px;
                      margin: 0;
                      padding: 0;
                    }
                  </style>
                </head>
                <body>
                  ${qrCodeSvg.outerHTML}
                </body>
              </html>
            `);
            downloadWindow!.focus();
            downloadWindow!.document.title = 'QR Code';
            downloadWindow!.document.body.appendChild(
                  qrCodeSvg.cloneNode(true)
            );
            downloadWindow!.document.body.style.margin = '0';
            downloadWindow!.document.body.style.padding = '0';

            qrCodeSvg.style.display = ''; // Réinitialiser le display après le téléchargement
            qrCodeSvg.style.justifyContent = ''; // Réinitialiser le justify-content après le téléchargement
      };

      //function print qrcode
      const handlePrintQrcode = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
            e.preventDefault();
            const qrCodeSvg = document.getElementById(
                  'qr-code-svg'
            ) as HTMLElement;
            const qrcodeplacement = document.createElement('div');
            qrcodeplacement.appendChild(qrCodeSvg);

            const printWindow = window.open('', 'PrintWindow');
            //structure html permettant de positionner le qrcode au centre lors de l'impression
            printWindow!.document.write(`
              <html>
                <head>
                  <style>
                    @media print {
                      #qr-code-svg {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                        width: 180px;
                        height: 180px;
                        margin: 0;
                        padding: 0;
                      }
                    }
                  </style>
                </head>
                <body>
                  ${qrCodeSvg.outerHTML}
                </body>
              </html>
            `);

            printWindow!.print();
            printWindow!.close();

            qrCodeSvg.style.display = ''; // Réinitialiser le display après l'impression
            qrCodeSvg.style.justifyContent = ''; // Réinitialiser le justify-content après l'impression
      };

      //function dll code barre
      const handleDllBarcode = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
            e.preventDefault();
            const barcodeSvg = document.getElementById('barcode-svg');
            const svgData = new XMLSerializer().serializeToString(barcodeSvg!);
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
            const svgUrl = URL.createObjectURL(svgBlob);
            const downloadWindow = window.open(svgUrl, '_blank');
            downloadWindow!.document.write(`
            <html>
                <head>
                  <style>
                    #barcode-svg {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%,-50%);
                      width: 180px;
                      height: 180px;
                      margin: 0;
                      padding: 0;
                    }
                  </style>
                </head>
                <body>
                  ${barcodeSvg!.outerHTML}
                </body>
              </html>
            `);
            downloadWindow!.focus();
            downloadWindow!.document.title = 'Code-Barre';
            downloadWindow!.document.body.appendChild(
                  barcodeSvg!.cloneNode(true)
            );
            downloadWindow!.document.body.style.margin = '0';
            downloadWindow!.document.body.style.padding = '0';

            barcodeSvg!.style.display = ''; // Réinitialiser le display après le téléchargement
            barcodeSvg!.style.justifyContent = ''; // Réinitialiser le justify-content après le téléchargement
      };

      //function print code barre
      const handlePrintBarcode = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
            e.preventDefault();
            const barcodeSvg = document.getElementById(
                  'barcode-svg'
            ) as HTMLElement;
            const codeBarrePlacement = document.createElement('div');
            codeBarrePlacement.appendChild(barcodeSvg);
            const printWindow = window.open('', 'PrintWindow');
            //structure html permettant de positionner le code barre au centre lors de l'impression
            printWindow!.document.write(`
            
            <html>
                <head>
                  <style>
                    @media print {
                      #barcode-svg {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                        width: 180px;
                        height: 180px;
                        margin: 0;
                        padding: 0;
                      }
                    }
                  </style>
                </head>
                <body>
                  ${barcodeSvg!.outerHTML}
                </body>
              </html>
            `);
            printWindow!.print();
            printWindow!.close();
      };

      //useState pour qrCode
      const [text, settext] = useState('exemple');
      const [sizeState, setsizeState] = useState(180);
      const [bgColorState, setbgColorState] = useState('#ffffff');
      const [colorState, setColorState] = useState('#000000');
      return (
            <div className="container-qrcode" id="image-Qrcode">
                  <form action="" method="get" className="container-form">
                        <label className="labelCss" htmlFor="sizeQrCode">
                              Entrée la taille en px de votre Qr-Code par
                              default (180px):
                        </label>
                        <input
                              className="inputCss"
                              type="number"
                              onChange={(e) =>
                                    setsizeState(Number(e.target.value))
                              }
                              id="sizeQrCode"
                        />
                        <br />
                        <label className="labelCss" htmlFor="lienQrCode">
                              Entrée le lien de votre Qr-Code ou de votre
                              texte/lien de Code-Barre:
                        </label>
                        <input
                              className="inputCss"
                              type="string"
                              onChange={(e) => settext(e.target.value)}
                              id="lienQrCode"
                        />
                        <br />
                        <label
                              className="labelCss"
                              htmlFor="bgQrCode colorQrCode "
                        >
                              veuillez choisir le background color par default
                              (blanc)
                        </label>
                        <input
                              className="bgcolorCss"
                              type="color"
                              id="bgQrCode"
                              onChange={(e) => setbgColorState(e.target.value)}
                        />
                        <br />
                        <label className="labelCss" htmlFor="colorQrCode">
                              Veuillez choisir la couleur du Qr-code par
                              default(noir)
                        </label>
                        <input
                              className="bgcolorCss"
                              type="color"
                              id="colorQrCode"
                              onChange={(e) => setColorState(e.target.value)}
                        />
                        <br />

                        <QRCodeSVG
                              //création d'un Id pour que l'utilisateur puisse imprimé le QRcode et ou le code barre.
                              id="qr-code-svg"
                              value={text}
                              size={sizeState}
                              bgColor={bgColorState}
                              fgColor={colorState}
                              level="Q"
                              includeMargin={false}
                              // image settings permet d'ajouter un filigrame sur le QRCODE
                              // imageSettings={{
                              //       // src: 'https://static.zpao.com/favicon.png',
                              //       x: undefined,
                              //       y: undefined,
                              //       height: 24,
                              //       width: 24,
                              //       excavate: true,
                              // }}
                        />
                        <div className="container-button">
                              <button
                                    className="buttonCss"
                                    onClick={handleDllQrcode}
                              >
                                    Download
                              </button>
                              <button
                                    className="buttonCss"
                                    onClick={handlePrintQrcode}
                              >
                                    Print
                              </button>
                        </div>
                        <br />
                        <div id="barcode-svg">
                              <Barcode
                                    value={text}
                                    background={bgColorState}
                                    lineColor={colorState}
                              />
                        </div>
                        <div className="container-button">
                              <button
                                    className="buttonCss"
                                    onClick={handleDllBarcode}
                              >
                                    Download
                              </button>
                              <button
                                    className="buttonCss"
                                    onClick={handlePrintBarcode}
                              >
                                    Print
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default Home;
