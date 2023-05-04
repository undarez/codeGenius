import React from 'react';
import '../Propos/_propos.scss';

const Propos = () => {
      return (
            <div className="container-propos">
                  <h1 className="titre-propos">Qui je suis ?</h1>

                  <p className="paragraphe-propos">
                        Je m'appelle Florian Billard, j'ai 34 ans, je suis un
                        développeur passionné. J'ai toujours été fasciné par
                        l'informatique. <br />
                        j'ai décidé de réaliser la formation Developpeur Web
                        front-end chez Openclassroom. <br />
                        J'ai réaliser 7 projets qui mon permit d'acquerir des
                        compétences pour concevoir cette application web. <br />
                        Me voila en temps que junior actuellement, Cette
                        application est l'un de mes dernier projets. <br />
                        j'espère qu'elle sera utile pour de nombreuses
                        personnes.
                  </p>

                  <h2 className="titre-h2-propos"> Pourquoi ?</h2>

                  <p className="paragraphe-propos">
                        Je suis ravi de présenter cette application que j'ai
                        créée avec passion et dévouement. <br />
                        En tant que développeur junior, j'ai souhaité utiliser
                        mes compétences pour construire quelque chose de nouveau
                        et utile pour les autres. <br />
                        L'envie d'apprendre et de découvrir de nouvelles
                        technologies m'a motivé à créer cette application.
                  </p>

                  <h2 className="titre-h2-propos"> à quel utilisation</h2>

                  <p className="paragraphe-propos">
                        {' '}
                        Cette application est destinée à toute personne ou
                        entreprise qui souhaite découvrir et utiliser ses
                        fonctionnalités. Elle peut être dans le cas de générer
                        des code Qr ou bien des code Barre. <br /> Mon objectif
                        est de fournir une application d'une utilisation simple,
                        avec une interface utilisateur intuitive et des
                        fonctionnalités conviviales pour tous les utilisateurs.
                        J'espère que vous apprécierez cette application autant
                        que moi !
                  </p>

                  <h2 className='titre-h2-propos'>Copyright</h2>

                  <p className="paragraphe-propos">
                        Droits d'auteur © 2023 Billard, Florian. Tous droits
                        réservés. Adresse de contact : fortuna77320@gmail.com
                        Conditions d'utilisation : CodeGénius est une
                        application destinée à être utilisée à des fins
                        personnelles et professionnelles. L'utilisation de
                        CodeGénius à des fins frauduleuses n'est pas autorisée.
                        L'utilisateur est entièrement responsable de
                        l'utilisation de CodeGénius. Politique de
                        confidentialité : CodeGénius est une application
                        publique. Toutes les informations générées par
                        l'application restent confidentielles et ne sont pas
                        stockées. Les données personnelles de l'utilisateur ne
                        sont pas collectées. L'utilisateur peut retrouver à tout
                        moment les générateurs de code individuellement sur le
                        net, tels que le composant Barcode disponible en
                        recherchant "react-barcode" et le composant QrcodeSVG
                        disponible en recherchant "qrcode.react". Ces composants
                        sont disponibles au public sur Github.
                  </p>
            </div>
      );
};

export default Propos;
