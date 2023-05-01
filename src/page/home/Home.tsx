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
            //1 recuperer l'id creer sur le qrcode
            const qrCodeSvg = document.getElementById('qr-code-svg');
            //recuperer le svg du qrcode
            const svgData = new XMLSerializer().serializeToString(qrCodeSvg!);
            //creation d'un nouveau tableau qui contien le contenu du svg
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
            //creatien du url pour dll
            const url = URL.createObjectURL(svgBlob);
            //creation link
            const link = document.createElement('a');
            link.href = url;
            link.download = 'qr-code-svg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      };

      //function print qrcode
      const handlePrintQrcode = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
            e.preventDefault();
            const qrCodeSvg = document.getElementById('qr-code-svg');
            const printWindow = window.open(
                  '',
                  'PrintWindow',
                  'windowFeatures = left= 320,top=320 '
            );
            printWindow!.document.write(qrCodeSvg!.outerHTML);
            printWindow!.print();
            printWindow!.close();
      };

      //function dll code barre
      const handleDllBarcode = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
            e.preventDefault();
            const barcodeSvg = document.getElementById('barcode-svg');
            const svgData = new XMLSerializer().serializeToString(barcodeSvg!);
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(svgBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'barcode-svg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      };

      //function print code barre
      const handlePrintBarcode = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ): void => {
            e.preventDefault();
            const barcodeSvg = document.getElementById('barcode-svg');
            const printWindow = window.open(
                  '',
                  'PrintWindow',
                  'windowFeatures = left= 320,top=320 '
            );
            printWindow!.document.write(barcodeSvg!.outerHTML);
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
