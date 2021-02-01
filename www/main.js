(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  admin works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/amsnoticias/amsnoticias.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/amsnoticias/amsnoticias.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h2>Noticias</h2>\n    <div id=\"carouselExampleControls\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleControls\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleControls\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleControls\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div *ngFor=\"let noticias of listado;let j=index\" [ngClass]=\"j==0 ?'carousel-item active' : 'carousel-item' \">\n          <img class=\"d-block w-100\" src=\"{{this.urlimgs}}/{{noticias.foto1}}\" alt=\"{{noticias.foto1}}\">\n          <div class=\"p-1 bg-light\"> {{noticias.titulo}}</div>\n        </div>\n      </div>\n      <!--\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n      -->\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<header class=\"navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row bd-navbar\">\n  <a class=\"navbar-brand mr-0 mr-md-2\"  aria-label=\"FSP\" routerLink=\"/\">\n    <img src=\"./assets/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top \" alt=\"\">\n    {{title}}\n  </a>\n  <div class=\"navbar-nav-scroll\">\n    <ul class=\"navbar-nav bd-navbar-nav flex-row\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" routerLink=\"/\">Inicio</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/campeonatos\">Estadísticas</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \" routerLink=\"/boletines\" >Boletines</a>\n      </li>\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/noticias\" s');\">Noticias</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://themes.getbootstrap.com/\" es');\" target=\"_blank\" rel=\"noopener\">Themes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://expo.getbootstrap.com/\" ');\" target=\"_blank\" rel=\"noopener\">Expo</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://blog.getbootstrap.com/\" ');\" target=\"_blank\" rel=\"noopener\">Blog</a>\n      </li>\n      -->\n    </ul>\n  </div>\n\n  <ul class=\"navbar-nav ml-md-auto\">\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"#\" id=\"bd-versions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Federación\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-md-right\" aria-labelledby=\"bd-versions\">\n        <a class=\"dropdown-item \" href=\"https://fspatin.com/actas/\" target=\"_blank\">Actas</a>\n        <a class=\"dropdown-item \" href=\"https://fspatin.com/resoluciones/\" target=\"_blank\">Resoluciones</a>\n        <a class=\"dropdown-item \" href=\"https://fspatin.com/documentos-utiles/\" target=\"_blank\">Docs. Útiles</a>\n        <a class=\"dropdown-item \" href=\"https://fspatin.com/comunicados/\" target=\"_blank\">Comnicados</a>\n        <a class=\"dropdown-item \" href=\"https://fspatin.com/boletines/\" target=\"_blank\">Boletines anteriores</a>\n        <a class=\"dropdown-item \" href=\"https://fspatin.com/tablas-finales/\" target=\"_blank\">Tablas Finales</a>\n\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"https://fspatin.com/autoridades/\">Autoridades</a>\n        <a class=\"dropdown-item\" href=\"https://fspatin.com/sitio/\">Historia</a>\n        <a class=\"dropdown-item\" href=\"https://fspatin.com/techados-de-canchas-nuevo-concurso/\">Techado Canchas</a>\n        <!--\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"/docs/versions/\">All versions</a>\n        -->\n      </div>\n    </li>\n    <!--\n    <li class=\"nav-item\">\n      <a class=\"nav-link p-2\" href=\"https://github.com/twbs/bootstrap\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\" viewBox=\"0 0 512 499.36\" role=\"img\" focusable=\"false\"><title>GitHub</title><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\"></path></svg></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link p-2\" href=\"https://twitter.com/getbootstrap\" target=\"_blank\" rel=\"noopener\" aria-label=\"Twitter\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\" viewBox=\"0 0 512 416.32\" role=\"img\" focusable=\"false\"><title>Twitter</title><path fill=\"currentColor\" d=\"M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92\"></path></svg></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link p-2\" href=\"https://bootstrap-slack.herokuapp.com/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Slack\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\" viewBox=\"0 0 512 512\" role=\"img\" focusable=\"false\"><title>Slack</title><path fill=\"currentColor\" d=\"M210.787 234.832l68.31-22.883 22.1 65.977-68.309 22.882z\"></path><path fill=\"currentColor\" d=\"M490.54 185.6C437.7 9.59 361.6-31.34 185.6 21.46S-31.3 150.4 21.46 326.4 150.4 543.3 326.4 490.54 543.34 361.6 490.54 185.6zM401.7 299.8l-33.15 11.05 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.38-68.36 22.92 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.43-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.5-13.92 2.87-29.06 16.78-33.56l33.12-11.03-22.1-65.9-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.48-13.93 2.89-29.07 16.81-33.58l33.15-11.05-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.46 34.38 68.36-22.92-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.47 34.42 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.87 29.06-16.78 33.56L329.7 194.6l22.1 65.9 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.88 29.07-16.81 33.57z\"></path></svg></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link p-2\" href=\"https://opencollective.com/bootstrap/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Open Collective\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" fill-rule=\"evenodd\" class=\"navbar-nav-svg\" viewBox=\"0 0 40 41\" role=\"img\" focusable=\"false\"><title>Open Collective</title><path fill-opacity=\".4\" d=\"M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z\"></path><path d=\"M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z\"></path></svg></a>\n    </li>\n    -->\n  </ul>\n<!--\n  <a class=\"btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3\" href=\"/docs/4.4/getting-started/download/\">Download</a>\n-->\n</header>\n<div class=\"container-fluid {{colorFondo}}\">\n<router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/boletin/boletin.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boletin/boletin.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <app-loader *ngIf=\"buscando\"></app-loader>\n<nav class=\"nav nav-pills flex-column flex-sm-row padd-r-2\">\n  <div class=\"btn-group btn-block mb-2\" role=\"group\">\n    <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-info dropdown-toggle rounded-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Boletin {{bolSel}} Año {{anioSel}}\n    </button>\n    <div class=\"dropdown-menu btn btn-block\" aria-labelledby=\"btnGroupAnio\">\n\n      <a *ngFor=\"let b of detalleBoletines\" class=\"dropdown-item \" href=\"#\" (click)=\"cargaBoletines(b.anio, b.id);\" >Boletín {{b.nombre}} Año {{b.anio\n      }}</a>\n\n    </div>\n  </div>\n</nav>\n<div class=\"accordion padd-r-2\" id=\"accordionExample\">\n  <div class=\"card\"  *ngFor=\"let item of detalleCamp\">\n    <div class=\"card-header p-2\" id=\"{{item.id}}\">\n      <h2 class=\"mb-0\">\n      <button (click)=\"irDetallePartidos('/partido', item.divi, item.id, item.zona, item.fecha, item.Boletin, item.id)\" class=\"btn btn-link w-100\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + item.id + 'div' + item.divi + 'fec' + item.Fecha + 'zo' + item.zona\"  [attr.aria-controls]=\"'collapse' + item.id + 'div' + item.divi\">\n          <div class=\"row p-0\">\n            <div class=\"col-12 col-md-12 p-0 pl-2\"><h5>{{item.nombre}}</h5></div>\n            <div class=\"col-12 col-md-12 p-0 \">\n              Fecha <span class=\"badge badge-primary\">{{item.Fecha}}</span>\n              División <span class=\"badge badge-primary\">{{item.categ}}</span>\n              Zona <span class=\"badge badge-primary\">{{item.zona}}</span>\n            </div>\n          </div>\n        </button>\n      </h2>\n    </div>\n\n    <div id=\"collapse{{item.id}}div{{item.divi}}fec{{item.Fecha}}zo{{item.zona}}\" class=\"collapse\" [attr.aria-labelledby]=\"'heading' + item.id + 'div' + item.divi + 'fec' + item.Fecha + 'zo' + item.zona\" data-parent=\"#accordionExample\">\n      <div class=\"card-body p-0\">\n        <app-partidoslist  [idCamp]= \"item.id\" [nCamp]=\"item.nombre\" [idDiv]=\"item.divi\" [idFec]=\"item.Fecha\" [idZon]=\"item.zona\" [idBol]=\"item.boletin\" ></app-partidoslist>\n        <!--<div class=\"table responsive\">\n          <table class=\"table\" id=\"DataTables_Table_1\" >\n\n            <thead>\n              <tr>\n                <!--<th>id</th>\n                <th>Fecha</th>\n                <th class=\"text-center\" colspan=\"2\">Loc.</th>\n                <th class=\"text-center\">Res.</th>\n                <th class=\"text-center\" colspan=\"2\">Vis.</th>\n\n                <th>Zo</th>\n                <th>Est</th>\n                <th>Ver</th>\n                <!--<th>Admin</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <!--<td>37600</td>\n\n                <td>2020-03-11</td>\n                <td><img class=\"logoclub\" src=\"/assets/logos/clubes/61.jpg\"></td>\n                <td>MDO</td>\n                <td class=\"text-center bg-info\">0 - 0</td>\n                <td>DUE</td>\n                <td><img class=\"logoclub\" src=\"/assets/logos/clubes/3.jpg\"></td>\n                <td>A</td>\n                <th>Com.\n                </th>\n                <td>\n                  <a class=\"btn btn-warning\" value=\"Detalle\"\n                    onclick=\"window.open('../Ver_detalle_partido.php?partido=37600')\">\n                    <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\n                  </a>\n                </td>\n                <!--<td>\n                  <a class=\"btn btn-info\"\n                    onclick=\"window.open('modificar_arbitros.php?partido=37600&amp;fecha=1&amp;cate=&amp;camp=122')\">\n                    <i class=\"fa fa-gavel\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a class=\"btn btn-success\"\n                    onclick=\"window.open('modificar_partido.php?partido=37600&amp;fecha=1&amp;cate=&amp;camp=122')\">\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <!--<td>37598</td>\n\n                <td>2020-03-11</td>\n                <td><img class=\"logoclub\" src=\"logos/clubes/4.jpg\"></td>\n                <td>OPC</td>\n                <td class=\"text-center bg-info\">0 - 0</td>\n                <td>LDR</td>\n                <td><img class=\"logoclub\" src=\"logos/clubes/6.jpg\"></td>\n                <td>A</td>\n                <th>Com.\n                </th>\n                <td>\n                  <a class=\"btn btn-warning\" value=\"Detalle\"\n                    onclick=\"window.open('../Ver_detalle_partido.php?partido=37598')\">\n                    <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\n                  </a>\n                </td>\n                <!--<td>\n                  <a class=\"btn btn-info\"\n                    onclick=\"window.open('modificar_arbitros.php?partido=37598&amp;fecha=1&amp;cate=&amp;camp=122')\">\n                    <i class=\"fa fa-gavel\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a class=\"btn btn-success\"\n                    onclick=\"window.open('modificar_partido.php?partido=37598&amp;fecha=1&amp;cate=&amp;camp=122')\">\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>-->\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/campeonatos/campeonatos.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campeonatos/campeonatos.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n      <nav class=\"nav nav-pills flex-column flex-sm-row\">\n        <div class=\"btn-group btn-block mb-2\" role=\"group\">\n          <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-info dropdown-toggle rounded-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Estadísticas Año {{anioSel}}\n          </button>\n          <div class=\"dropdown-menu btn btn-block\" aria-labelledby=\"btnGroupAnio\">\n            <a class=\"dropdown-item \" href=\"#\" (click)=\"cargaAnio(2020);\" >2020</a>\n            <a class=\"dropdown-item \" href=\"#\" (click)=\"cargaAnio(2019);\">2019</a>\n            <a class=\"dropdown-item\" href=\"#\" (click)=\"cargaAnio(2018);\">2018</a>\n          </div>\n        </div>\n      </nav>\n\n      <div class=\"accordion\" id=\"accordion\">\n          <div class=\"card bg-varones p-0 m-0\">\n            <div class=\"card-header m-0 p-1\" id=\"headingVaron\">\n              <button class=\"btn btn-link collapsed text-dark\"\n                type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#collapseVarones\" aria-expanded=\"true\"\n                aria-controls=\"collapseVarones\" (click)=\"cargaTorneos(1, false , 13, 'A');\">\n                <h5>\n                  <i id=\"iconVarones\" class=\"fa fa-user\"></i>\n                  Varones\n                </h5>\n              </button>\n            </div>\n            <div id=\"collapseVarones\" class=\"collapse\"\n              aria-labelledby=\"headingVaron\" data-parent=\"#accordion\">\n\n              <div class=\"card-body p-1 \">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                    <button (click)=\"cargaTorneos(1, false, 13, 'A');\" type=\"button\" class=\"btn btn-primary\">Primera</button>\n                    <button (click)=\"cargaTorneos(1, false, 12, 'A');\" type=\"button\" class=\"btn btn-secondary\">Segunda</button>\n                </div>\n                <ul class=\"list-group p-0\" style=\"width: 100%;\">\n\n                  <li *ngFor=\"let camp of detalleCamp\" class=\"list-group-item list-group-item-action p-2\">\n                    <a [routerLink]=\"['/tabla', camp.id, this.muestra, 'A']\" class=\"text-dark\">\n                      <h6>{{camp.campeonato}}</h6>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card bg-damas\">\n            <div class=\"card-header m-0 p-1\" id=\"headingDamas\">\n              <button class=\"btn btn-link collapsed text-dark\"\n                type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#collapseDamas\" aria-expanded=\"false\"\n                aria-controls=\"collapseDamas\" (click)=\"cargaTorneos(1, false, 17, 'A');\">\n                <h5>\n                  <i id=\"iconDamas\" class=\"fa fa-user\"></i>\n                  Damas\n                </h5>\n              </button>\n            </div>\n            <div id=\"collapseDamas\" class=\"collapse\"\n              aria-labelledby=\"headingDamas\" data-parent=\"#accordion\">\n              <div class=\"card-body p-1 \">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                    <button (click)=\"cargaTorneos(1, false, 18, 'A');\" type=\"button\" class=\"btn btn-secondary\">Primera</button>\n                    <button (click)=\"cargaTorneos(1, false, 21, 'A');\" type=\"button\" class=\"btn btn-secondary\">Segunda</button>\n                </div>\n                <ul class=\"list-group p-0\" style=\"width: 100%;\">\n                  <li *ngFor=\"let camp of detalleCampDamas\" class=\"list-group-item list-group-item-action p-2\">\n                      <a [routerLink]=\"['/tabla', camp.id, this.muestra, 'A']\" class=\"text-dark\">\n                        <h6>{{camp.campeonato}}</h6>\n                      </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card bg-infvarones\">\n            <div class=\"card-header m-0 p-1\" id=\"headingInfVaron\">\n              <button class=\"btn btn-link collapsed text-dark\"\n                type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#collapseInfVaron\" aria-expanded=\"false\"\n                aria-controls=\"collapseInfVaron\"\n                (click)=\"cargaTorneos(1, false, 6, 'A');\">\n                <h5>\n                  <i id=\"iconInfVarones\" class=\"fa fa-male\"></i>\n                  Inferior Varones\n                </h5>\n              </button>\n            </div>\n            <div id=\"collapseInfVaron\" class=\"collapse\"\n              aria-labelledby=\"headingInfVaron\" data-parent=\"#accordion\">\n              <div class=\"card-body p-1 \">\n                  <div class=\"row  pl-3 pr-3\" role=\"group\" aria-label=\"Basic example\">\n                      <button (click)=\"cargaTorneos(1, false, 4, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Pre Inf.</button>\n                      <button (click)=\"cargaTorneos(1, false, 5, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Infantil</button>\n                      <button (click)=\"cargaTorneos(1, false, 6, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Pre Cad.</button>\n                      <button (click)=\"cargaTorneos(1, false, 7, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Cadete</button>\n                      <button (click)=\"cargaTorneos(1, false, 8, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Pre Juv.</button>\n                      <button (click)=\"cargaTorneos(1, false, 9, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Juvenil</button>\n                      <button (click)=\"cargaTorneos(1, false, 10, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Pre Jun.</button>\n                      <button (click)=\"cargaTorneos(1, false, 11, 'A');\" type=\"button\" class=\"btn btn-secondary btn-sm p-1 m-1\">Junior</button>\n                  </div>\n                <ul class=\"list-group p-0\" style=\"width: 100%;\">\n                  <li *ngFor=\"let camp of detalleCampInfVarones\" class=\"list-group-item list-group-item-action p-2\">\n                      <a [routerLink]=\"['/tabla', camp.id, this.muestra, 'A']\" class=\"text-dark\">\n                        <h6>{{camp.campeonato}}</h6>\n                      </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card bg-infdamas\">\n              <div class=\"card-header m-0 p-1\" id=\"headingInfDamas\">\n\n                <button class=\"btn btn-link collapsed text-dark\"\n                  type=\"button\" data-toggle=\"collapse\"\n                  data-target=\"#collapseInfDamas\"\n                  aria-expanded=\"false\" aria-controls=\"collapseInfDamas\"\n                  (click)=\"cargaTorneos(1, false, 14, 'A');\">\n                  <h5>\n                    <i id=\"iconInfDamas\" class=\"fa fa-female\"></i>\n                    Inferior Damas\n                  </h5>\n                </button>\n\n              </div>\n              <div id=\"collapseInfDamas\" class=\"collapse\"\n                aria-labelledby=\"headingInfDamas\"\n                data-parent=\"#accordion\">\n                <div class=\"card-body p-1 \">\n\n                  <ul class=\"list-group p-0\" style=\"width: 100%;\">\n                    <li *ngFor=\"let camp of detalleCampInfDamas\" class=\"list-group-item list-group-item-action p-2\">\n                        <a [routerLink]=\"['/tabla', camp.id, this.muestra, 'A']\" class=\"text-dark\">\n                          <h6>{{camp.campeonato}}</h6>\n                        </a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"card bg-qr\">\n                <div class=\"card-header m-0 p-1\" id=\"headingInfQr\">\n\n                  <button class=\"btn btn-link collapsed text-dark\"\n                    type=\"button\" data-toggle=\"collapse\"\n                    data-target=\"#collapseInfQr\"\n                    aria-expanded=\"false\" aria-controls=\"collapseInfQr\"\n                    (click)=\"cargaTorneos(1, false, 14, 'A');\">\n                    <h5>\n                      <i id=\"iconQr\" class=\"fa fa-qrcode\"></i>\n                      Escanea un carnet\n                    </h5>\n                  </button>\n              </div>\n            </div>\n          </div>\n\n      </div>\n      <!-- noticias-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/botonlink/botonlink.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/botonlink/botonlink.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"btn btn-primary\" href=\"{{linkBoton}}\">{{nombreBoton}}</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/botonvolver/botonvolver.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/botonvolver/botonvolver.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"javascript:history.back();\" class=\"bg-light p-1 border ml-2 text-secondary\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/loader/loader.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/loader/loader.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div\n      class=\"d-flex w-100 justify-content-between row\">\n\n        <img class=\"loader col\"\n          src=\"./assets/logo.png\"\n          alt=\"\" width=\"\" />\n          <!--<h6 class=\"text-left col\">Cargando..</h6>-->\n\n\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/loaderchico/loaderchico.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/loaderchico/loaderchico.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"list-group pb-2\">\n  <li\n    class=\"list-group-item\n                pb-2 border-0 bg-light container\">\n    <div\n      class=\"d-flex w-100 justify-content-between row\">\n\n        <img class=\"loader col\"\n          src=\"./assets/logo.png\"\n          alt=\"\" width=\"\" />\n          <h6 class=\"text-left col\">Cargando..</h6>\n\n\n    </div>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/modal/modal.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/modal/modal.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header alert alert-danger\">\n        <h4 class=\"modal-title\">{{tituloModal}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div innerHTML=\"{{bodyModal}}\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <a href=\"http://gobierno.sanjuan.gov.ar/\"\n          class=\"text-center\">Mas Info...</a>\n        <button type=\"button\" class=\"btn btn-outline-danger\"\n          data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" text-center\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"estatus\">\n    {{tituloEstatus}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n    <form #loguinForm=\"ngForm\" (ngSubmit)=\"ngSubmit();\"\n      class=\"form-signin colorFondoLogin colorLetraLogin\">\n      <img class=\"mb-4\" src=\"../../assets/logoams.png\" alt=\"\" width=\"72\" height=\"72\">\n      <h5 class=\"colorFondoLogin colorLetraLogin p-2 m-0\"> {{titulo}}</h5>\n      <div>\n        <label>Login</label>\n        <input type=\"text\" #nombre=\"ngModel\" [(ngModel)]=\"user.nombre\"\n          name=\"nombre\" class=\"form-control\" autocomplete=\"off\"\n          maxlength=\"11\" minlength=\"0\" numbers-only\n          type=\"text\" required autofocus/>\n        <p *ngIf=\"nombre.touched && !nombre.valid\"\n          class=\"alert alert-danger p-1\" role=\"alert\">\n          El login es obligatorio\n        </p>\n      </div>\n      <div>\n        <label>Contraseña</label>\n        <input type=\"password\" #clave=\"ngModel\"\n          [(ngModel)]=\"user.clave\" name=\"clave\"\n          class=\"form-control\" required/>\n        <p *ngIf=\"clave.touched && !clave.valid\"\n          class=\"alert alert-danger p-1\" role=\"alert\">\n          El password es obligatorio\n        </p>\n      </div>\n      <br>\n      <input type=\"submit\" value=\"Acceder\" class=\"btn btn-success\"\n        [disabled]=\"!loguinForm.form.valid\" />\n      <br>\n      <p *ngIf=\"status\" class=\"alert alert-success\">\n        <label>{{mesagge}}</label>\n      </p>\n      <br>\n      <p *ngIf=\"!status && status != null\" class=\"alert alert-danger\">\n        <label>{{mesagge}}</label>\n      </p>\n    </form>\n  <app-loader *ngIf=\"bloquear\"></app-loader>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav *ngIf=\"logueado\" class=\"navbar navbar-expand-md {{tipoNav}} {{colorBarra}} border-bottom shadow\">\n    <a class=\"navbar-brand {{colorLetraBarra}}\" routerLink=\"/\">\n      <img src=\"./assets/{{logo}}\" width=\"30\" height=\"30\" class=\"d-inline-block align-top \" alt=\"\">\n      {{title}}\n    </a>\n    <button class=\"navbar-toggler float-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fa fa-bars text-white\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" *ngFor=\"let sec of detalleMenu\">\n                <a class=\"nav-link colorLetraBarra\" [routerLink]=\"sec.path\" routerLinkActive=\"active\">{{sec.nombre}}</a>\n            </li>\n        </ul>\n\n        <!--form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"buscar\" placeholder=\"buscar\" aria-label=\"buscar\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">buscar</button>\n        </form-->\n    </div>\n\n  </nav>\n  <app-amsnoticias></app-amsnoticias>\n  <div class=\"container d-block d-sm-none\">\n    <div class=\"accordion\" id=\"accordion\">\n      <div class=\"card {{colorMenu}} p-0 m-0\">\n        <div *ngFor=\"let sec of detalleMenu\" class=\"card-header p-1\" id=\"heading\">\n\n          <button class=\"btn btn-link collapsed {{colorFuenteMenu}}\"\n            type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#collapseVarones\" aria-expanded=\"true\"\n            aria-controls=\"collapseVarones\" [routerLink]=\"sec.path\">\n            <h5 class=\"\">\n              <i id=\"iconVarones\" class=\"{{sec.foto}} {{colorIconoMenu}} {{colorFondoIconoMenu}} {{paddingFondoIconoMenu}} badge-pill\"></i>\n              {{sec.nombre}}\n            </h5>\n          </button>\n        </div>\n        <div id=\"collapseVarones\" class=\"collapse\"\n          aria-labelledby=\"headingVaron\" data-parent=\"#accordion\">\n\n          <div class=\"card-body\">\n\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagina/pagina.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagina/pagina.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-amsnoticias></app-amsnoticias>\n<div class=\"container-fluid\">\n  \n  <div class=\"row p-3\">\n\n    <!-- menu partidos-->\n    <div id=\"tablasposicion\" class=\"col-12 col-md-6\">\n      <app-campeonatos></app-campeonatos>\n<!--\n      <div class=\"p-0 pb-2\" >\n        <h4>Noticias</h4>\n        <app-botonlink></app-botonlink>\n        <a href=\"https://www.facebook.com/capatinoficial/?__tn__=%2Cd%2CP-R&eid=ARDggE30qQCLqDobMtAgfRjyAr09Yf5lhBo9GEPRVvnRFsEbNQlkz68fWrRg_aIOJE5OcRmZdWpPENFQ\" target=\"_blank\">\n          <img\n            alt=\"Estadísticas Nito Romero\" class=\"img-fluid\" src=\"./assets/noticias/78aniosfsp.jpeg\"\n            >\n        </a>\n      </div>\n      -->\n    </div>\n    <div class=\"col-12 col-md-6 p-0\">\n\n      <app-boletin></app-boletin>\n\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partido/partido.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partido/partido.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader *ngIf=\"!buscando\"></app-loader>\n<div class=\"container-fluid p-1\">\n  <div class=\"row pl-1\">\n    <div class=\"col-9 col-md-9\">\n      <h6 class=\"mb-0\">{{t.nomCampeonato}}</h6>\n    </div>\n    <div class=\"col-3 col-md-3\">\n      <small class=\"align-text-top text-info\">{{t.estado}}</small>\n    </div>\n    <div class=\"col-6 col-md-12\">\n      <small class=\"text-muted pt-0\">{{t.fechapartido}}</small>\n    </div>\n    <hr>\n</div>\n<div class=\"container-fluid p-1\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <img class=\"logoclub mr-0 pr-0\" src='./assets/logos/clubes/{{t.l}}.jpg'/>\n      <h5 class=\"d-block d-sm-block d-md-none\">{{t.loc}}</h5>\n      <h6 class=\"d-none d-md-block d-lg-block\">{{t.Nomloc}}</h6>\n    </div>\n    <div class=\"col\">\n      <h3 class=\"pt-1\">{{t.TantosLoc}}</h3>\n    </div>\n    <div class=\"col\">\n      <h4 class=\"align-middle\"> - </h4>\n    </div>\n    <div class=\"col\">\n      <h3 class=\"pt-1\">{{t.TantosVis}}</h3>\n    </div>\n    <div class=\"col\">\n      <img class=\"logoclub pl-0 mr-0 \" src='./assets/logos/clubes/{{t.v}}.jpg'/>\n      <h5 class=\"d-block d-sm-block d-md-none\">{{t.visitante}}</h5>\n      <h6 class=\"d-none d-md-block d-lg-block\">{{t.Nomvis}}</h6>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-partidodetalle></app-partidodetalle>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-tabladetalle *ngIf=\"buscando\" [idCampeonato]=\"t.Campeonato\" [idDivision]=\"t.categoria\" [idZona]=\"t.Zona\"></app-tabladetalle>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidodetalle/partidodetalle.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partidodetalle/partidodetalle.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive p-0\">\n\n  <p class=\"Titulo\">Eventos del partido</p>\n  <table class=\"table table-sm\">\n\n    <thead class=\"thead-white\">\n      <tr>\n        <th></th>\n        <th>Apellido</th>\n\n        <th class=\"text-center\">Club</th>\n        <th class=\"text-center\">H.</th>\n        <th class=\"text-center\">T.</th>\n\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let t of detallePartido\">\n        <td *ngIf=\"determinaEvento(t.estado)\">\n          <img  src=\"./assets/imagenes/{{eventoimg}}\" alt=\"gol\" longdesc=\"gol mediosweb\"></td>\n          <td>{{t.Apellido}}, {{t.nomjuga}}</td>\n\n        <td class=\"text-center\">{{t.Nombreclub}}</td>\n        <td class=\"text-center\">{{t.mingol}}:{{t.seggol}}</td>\n        <td class=\"text-center\">{{t.tiempo}}</td>\n      </tr>\n      <!--\n      <tr>\n        <td>\n          <img src=\"./assets/imagenes/amarilla.jpg\" alt=\"gol\" longdesc=\"gol mediosweb\"></td>\n        <td><strong>RECABARREN CANTO, GABRIEL CRUZ</strong></td>\n\n        <td class=\"text-center\">CJR</td>\n        <td class=\"text-center\"><strong>0:0</strong></td>\n        <td class=\"text-center\">0</td>\n      </tr>\n      <tr>\n        <td>\n          <img src=\"./assets/imagenes/azul.jpg\" alt=\"gol\" longdesc=\"gol mediosweb\"></td>\n        <td><strong>RECABARREN CANTO, GABRIEL CRUZ</strong></td>\n\n        <td class=\"text-center\">CJR</td>\n        <td class=\"text-center\"><strong>0:0</strong></td>\n        <td class=\"text-center\">0</td>\n      </tr>\n      <tr>\n        <td>\n          <img src=\"./assets/imagenes/roja.jpg\" alt=\"gol\" longdesc=\"gol mediosweb\"></td>\n        <td><strong>RECABARREN CANTO, GABRIEL CRUZ</strong></td>\n\n        <td class=\"text-center\">CJR</td>\n        <td class=\"text-center\"><strong>0:0</strong></td>\n        <td class=\"text-center\">0</td>\n      </tr>\n      -->\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidoeventos/partidoeventos.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partidoeventos/partidoeventos.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- switch ($row_goles['estado'])\n\t\t{\n\t\tcase 1: echo \"<h1>Goleadores</h1>\";// echo $row_goles['Campeonato'];\n\t\tbreak;\n\t\tcase 2: echo \"<h1>Tarjetas Amarillas</h1>\";// echo $row_goles['Campeonato'];\n\t\tbreak;\n\t\tcase 3: echo \"<h1>Tarjetas Azules</h1>\";// echo $row_goles['Campeonato'];\n\t\tbreak;\n\t\tcase 4: echo \"<h1>Tarjetas Rojas</h1>\";// echo $row_goles['Campeonato'];;\n\t\tbreak;\n\t}\n\n<H4> Divisi&oacute;n:</h4>\n<H3>$row_goles['NombreCate'];</H3>\n-->\n<div class=\"table responsive\">\n  <table class=\"table table-sm\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Club</th>\n        <th>Jugador</th>\n        <th>Cant</th>\n        <!--<th>\n                switch ($row_goles['estado'])\n                {\n                case 1: $est=\"Goles\";\n                break;\n                case 2: $est=\"Amarillas\";\n                break;\n                case 3: $est=\"Azules\";\n                break;\n                case 4: $est=\"Rojas\";\n                break;\n                }\n                echo $est;\n\n              </th>   -->\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let e of detalleEventos\">\n      <!--\n      <?php do { ?>\n      <tr>\n        <?php\n\t\t\t\t\tif ($row_goles['estado']==1) {$img='gol.fw.png';}\n\t\t\t\t\tif ($row_goles['estado']==2) {$img='amarilla.jpg';}\n\t\t\t\t\tif ($row_goles['estado']==3) {$img='azul.fw.png';}\n\t\t\t\t\tif ($row_goles['estado']==4) {$img='roja.fw.png';}\n\t\t\t\t\t$datosjugador='<a href=\"busqueda.php?op=2&idLic='.$row_goles[\"idnumerocarnet\"].'\">'.utf8_encode($row_goles['Apellido']).\", \".utf8_encode($row_goles['NombreJug']).'</a>';\n                 ?>\n        -->\n        <td align=\"left\">\n          <img src=\"./assets/imagenes/{{e.estado}}.png\" />\n        </td>\n        <td><img src=\"./assets/logos/clubes/{{e.idclub}}.jpg\" /></td>\n        <td class=\"text-left\">\n          {{e.Apellido}}, {{e.NombreJug}}\n        </td>\n\n        <!--<?php if ( ( ($row_goles['suma']==9) || ($row_goles['suma']==6) || ($row_goles['suma']==3) ) && ($row_goles['estado']==3) )\n                        {\n                            $clase_gol=\"class= 'tarjeta'\";\n                        }\n                    else\n                        {\n                        $clase_gol=\"class= 'goles'\";\n                        } //echo '<span class=\"gol_norm\">';\n            ?>-->\n        <td class=\"text-center {{clase_gol}}\">{{e.suma}}</td>\n\n\n      </tr>\n\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidos/partidos.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partidos/partidos.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-loader *ngIf=\"!buscando\"></app-loader>\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead class=\"thead bg-primary\">\n      <tr>\n        <th scope=\"col\">Local</th>\n        <th scope=\"col\" class=\"text-center\">Res.</th>\n        <th scope=\"col\">Visitante</th>\n        <th scope=\"col\">Zona</th>\n        <th scope=\"col\">Ficha</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let t of detalleTabla\">\n            <td><img src='./assets/logos/clubes/{{t.l}}.jpg'/> {{t.loc}}</td>\n            <td class='info'><strong>{{t.TantosLoc}} - {{t.TantosVis}}</strong></td>\n            <td>{{t.visitante}}<img src='./assets/logos/clubes/{{t.v}}.jpg'/></td>\n            <td>{{t.zona}}</td>\n            <td>\n              <input *ngIf=\"determinaGanador(t.id, t.TantosLoc, t.TantosVis);\" type='button' class='{{ganador}}' value='Ver'>\n            </td>\n        </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidoslist/partidoslist.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partidoslist/partidoslist.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--p>\n  Campeonato: {{idCamp}} {{nCamp}}\n  div: {{idDiv}}\n  fecha: {{idFec}}\n  zona: {{idZon}}\n  Instancia: {{idIns}}\n  boletin: {{idBol}}\n<p-->\n<app-loader *ngIf=\"!buscando\"></app-loader>\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead class=\"thead\">\n      <tr class=\"table-info\">\n                <!--<th>id</th>-->\n                <th>Fecha</th>\n                <th class=\"text-center\" colspan=\"2\">Loc.</th>\n                <th class=\"text-center\">Res.</th>\n                <th class=\"text-center\" colspan=\"2\">Vis.</th>\n                <th>Zo</th>\n                <th>Est</th>\n                <th>Ver</th>\n                <!--<th>Admin</th>-->\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let t of detalleTabla\">\n            <td class=\"mr-0 pr-0\">{{t.fechapartido}}</td>\n            <td class=\"mr-0 pr-0 pl-0 ml-0\"><img class=\"logoclub mr-0 pr-0\" src='./assets/logos/clubes/{{t.l}}.jpg'/></td>\n            <td class=\"text-center mr-0 pr-0 pl-0 ml-0\">{{t.loc}}</td>\n            <td class=\"text-center mr-0 pr-0 pl-0 ml-0\">\n              <span *ngIf=\"determinaGanador('loc', t.id, t.TantosLoc, t.TantosVis);\" class='{{ganaloc}}'>\n                {{t.TantosLoc}}\n              </span> -\n              <span *ngIf=\"determinaGanador('vis', t.id, t.TantosLoc, t.TantosVis);\" class='{{ganavis}}'>\n                {{t.TantosVis}}\n              </span>\n            </td>\n            <td class=\"text-center mr-0 pr-0 pl-0 ml-0\">{{t.visitante}}</td>\n            <td><img class=\"logoclub pl-0 mr-0\" src='./assets/logos/clubes/{{t.v}}.jpg'/></td>\n            <td class=\"text-center mr-0 pr-0 pl-0 ml-0\">{{t.zona}}</td>\n            <td class=\"mr-0 pr-0 pl-0 ml-0\">{{t.estado}}</td>\n            <td class=\"pl-0 ml-0\">\n              <a type='button' value='Ver' routerLink=\"/partido/{{t.id}}\"\n                >\n                <i class=\"fa fa-angle-right pr-2 pl-2\" aria-hidden=\"true\"></i>\n              </a>\n            </td>\n\n        </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabla/tabla.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabla/tabla.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader *ngIf=\"!buscando\"></app-loader>\n<div class=\"table responsive-sm\">\n  <h5 class=\"text-uppercase p-1 m-0 bg-light\">{{nomCampeonato}}</h5>\n  <h6 class=\"text-uppercase p-1 m-0 bg-light\">Div: <b>{{divCampeonato}}</b> Zona: <b>{{idZona}}</b></h6>\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n    <div class=\"btn-group btn-group-sm pr-1 pb-1\" role=\"group\" aria-label=\"First group\">\n      <button type=\"button\" class=\"btn btn-dark\" (click)=\"cargaUrl(3, 'tabla', this.idCampeonato, this.idDivision, 'A');\">ZONA A</button>\n      <button type=\"button\" class=\"btn btn-dark\" (click)=\"cargaUrl(3, 'tabla', this.idCampeonato, this.idDivision, 'B');\">ZONA B</button>\n   </div>\n\n    <div class=\"btn-group btn-group-sm pb-1\" role=\"group\" aria-label=\"Second group\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"cargaUrl(12, 'partidosevento', this.idCampeonato, this.idDivision, '1');\">\n        Goleadores\n      </button>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"cargaUrl(12, 'partidosevento', this.idCampeonato, this.idDivision, '2');\">\n        Am\n      </button>\n      <button type=\"button\" class=\"btn btn-info\"    (click)=\"cargaUrl(12, 'partidosevento', this.idCampeonato, this.idDivision, '3');\">\n        Az\n      </button>\n      <button type=\"button\" class=\"btn btn-danger\"  (click)=\"cargaUrl(12, 'partidosevento', this.idCampeonato, this.idDivision, '4');\">\n        Ro\n      </button>\n    </div>\n\n  </div>\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <thead class=\"thead bg-primary text-white\">\n      <tr>\n        <th scope=\"col\"></th>\n        <th scope=\"col\">Club</th>\n        <th scope=\"col\" class=\"text-center\">Pts</th>\n        <th scope=\"col\" class=\"text-center\">PJ</th>\n        <th scope=\"col\" class=\"text-center\">PG</th>\n        <th scope=\"col\" class=\"text-center\">PP</th>\n        <th scope=\"col\" class=\"text-center\">PE</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">GF</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">GC</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">DG</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">GA</th>\n      </tr>\n    </thead>\n    <tbody>\n\n        <tr *ngFor=\"let t of detalleTabla\">\n          <td><img class=\"logoclub\" src=\"./assets/logos/clubes/{{t.idclub}}.jpg\" /></td>\n          <th scope=\"row\" class=\"text-left\">{{t.Nombreclub}}</th>\n          <td  class=\"text-center text-info font-weight-bolder\">{{t.Puntos}}</td>\n          <td  class=\"text-center\">{{t.PJ}}</td>\n          <td  class=\"text-center\">{{t.PG}}</td>\n          <td  class=\"text-center\">{{t.PP}}</td>\n          <td  class=\"text-center\">{{t.PE}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.GF}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.GC}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.DG}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.GA}}</td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabladetalle/tabladetalle.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabladetalle/tabladetalle.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader *ngIf=\"!buscando\"></app-loader>\n<div class=\"table responsive-sm\">\n  <h5 class=\"text-uppercase p-1 m-0 bg-light\">{{nomCampeonato}}</h5>\n  <h6 class=\"text-uppercase p-1 m-0 bg-light\">Div: <b>{{idDivision}}</b> Zona: <b>{{idZona}}</b></h6>\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n    <div class=\"btn-group p-1\" role=\"group\" aria-label=\"First group\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cargaUrl(3, this.idCampeonato, this.idDivision, 'A');\">ZONA A</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cargaUrl(3, this.idCampeonato, this.idDivision, 'B');\">ZONA B</button>\n    </div>\n  </div>\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <thead class=\"thead bg-primary\">\n      <tr>\n        <th scope=\"col\"> Club</th>\n        <th scope=\"col\" class=\"text-center\">Pts</th>\n        <th scope=\"col\" class=\"text-center\">PJ</th>\n        <th scope=\"col\" class=\"text-center\">PG</th>\n        <th scope=\"col\" class=\"text-center\">PP</th>\n        <th scope=\"col\" class=\"text-center\">PE</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">GF</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">GC</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">DG</th>\n        <th scope=\"col\" class=\"text-center d-none d-lg-table-cell\">GA</th>\n      </tr>\n    </thead>\n    <tbody>\n\n        <tr *ngFor=\"let t of detalleTabla\">\n          <th scope=\"row\" class=\"text-left\">{{t.Nombreclub}}</th>\n          <td  class=\"text-center\">{{t.Puntos}}</td>\n          <td  class=\"text-center\">{{t.PJ}}</td>\n          <td  class=\"text-center\">{{t.PG}}</td>\n          <td  class=\"text-center\">{{t.PP}}</td>\n          <td  class=\"text-center\">{{t.PE}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.GF}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.GC}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.DG}}</td>\n          <td  class=\"text-center d-none d-lg-table-cell\">{{t.GA}}</td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li>\n  {{userName}}\n</li>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/amsnoticias/amsnoticias.component.css":
/*!*******************************************************!*\
  !*** ./src/app/amsnoticias/amsnoticias.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n@media only screen and (max-width: 768px){\r\n    .container {\r\n      padding-top: 0px!important;\r\n    }\r\n  }\r\n  \r\n.carousel {\r\n  width: 100%;\r\n}\r\n  \r\n.slide-box {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n  \r\n@media (min-width: 576px) and (max-width: 767.98px) {\r\n  .slide-box img {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n}\r\n  \r\n@media (min-width: 768px) and (max-width: 991.98px) {\r\n  .slide-box img {\r\n    flex: 0 0 33.3333%;\r\n    max-width: 33.3333%;\r\n  }\r\n}\r\n  \r\n@media (min-width: 992px)\r\n{\r\n  .slide-box img {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n}\r\n  \r\n.carousel-caption {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  border-radius: .5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1zbm90aWNpYXMvYW1zbm90aWNpYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSTtNQUNFLDBCQUEwQjtJQUM1QjtFQUNGOztBQUVGO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO0lBRUUsYUFBYTtJQUNiLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBOztFQUVFO0lBRUUsYUFBYTtJQUNiLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYW1zbm90aWNpYXMvYW1zbm90aWNpYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbi5jYXJvdXNlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZS1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC5zbGlkZS1ib3ggaW1nIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgNTAlO1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAuc2xpZGUtYm94IGltZyB7XHJcbiAgICAtbXMtZmxleDogMCAwIDMzLjMzMzMlO1xyXG4gICAgZmxleDogMCAwIDMzLjMzMzMlO1xyXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweClcclxue1xyXG4gIC5zbGlkZS1ib3ggaW1nIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMjUlO1xyXG4gICAgZmxleDogMCAwIDI1JTtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/amsnoticias/amsnoticias.component.ts":
/*!******************************************************!*\
  !*** ./src/app/amsnoticias/amsnoticias.component.ts ***!
  \******************************************************/
/*! exports provided: AmsnoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsnoticiasComponent", function() { return AmsnoticiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AmsnoticiasComponent = /** @class */ (function () {
    function AmsnoticiasComponent(http) {
        this.http = http;
        this.buscando = false;
        this.submitted = false;
        this.urlimgs = 'https://fspatin.com/wp-content/uploads';
        this.currentSession = null;
    }
    AmsnoticiasComponent.prototype.ngOnInit = function () {
        this.verNoticias();
        // ("#myCarousel").carousel();
        /*this.currentSession = this.verNoticiasLocales();
        if (this.currentSession) {
          this.listado = this.currentSession;
        } else {
          this.verNoticias();
        }*/
    };
    AmsnoticiasComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.carousel').carousel({
            interval: 3000
        });
    };
    AmsnoticiasComponent.prototype.verNoticiasLocales = function () {
        this.localStorageService = localStorage;
        var noticiasStr = this.localStorageService.getItem('noticias');
        return (noticiasStr) ? JSON.parse(noticiasStr) : null;
    };
    AmsnoticiasComponent.prototype.ultimaNoticiaCargada = function () {
    };
    AmsnoticiasComponent.prototype.verNoticias = function () {
        var _this = this;
        this.buscando = true;
        this.http.getNoticias(118).subscribe(function (data) {
            _this.buscando = false;
            _this.listado = data;
            // this.localStorageService = localStorage;
            // this.localStorageService.setItem('noticias', JSON.stringify(data));
            // console.log(data);
        });
    };
    AmsnoticiasComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] }
    ]; };
    AmsnoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amsnoticias',
            template: __importDefault(__webpack_require__(/*! raw-loader!./amsnoticias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/amsnoticias/amsnoticias.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./amsnoticias.component.css */ "./src/app/amsnoticias/amsnoticias.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"]])
    ], AmsnoticiasComponent);
    return AmsnoticiasComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  top:0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\na.nav-link:active {\r\n  color: white!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxLQUFLO0VBQ0wsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5hLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FSP';
        this.tipoNav = 'navbar-light';
        this.colorFondo = 'bg-white';
        this.colorBarra = 'colorBarra';
        this.colorLetraBarra = 'colorLetraBarra';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./campeonatos/campeonatos.component */ "./src/app/campeonatos/campeonatos.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _componentes_utiles_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/utiles/loader/loader.component */ "./src/app/componentes/utiles/loader/loader.component.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _componentes_utiles_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/utiles/modal/modal.component */ "./src/app/componentes/utiles/modal/modal.component.ts");
/* harmony import */ var _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tabla/tabla.component */ "./src/app/tabla/tabla.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _amsnoticias_amsnoticias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./amsnoticias/amsnoticias.component */ "./src/app/amsnoticias/amsnoticias.component.ts");
/* harmony import */ var _servicios_push_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./servicios/push.service */ "./src/app/servicios/push.service.ts");
/* harmony import */ var _servicios_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./servicios/auth.guard */ "./src/app/servicios/auth.guard.ts");
/* harmony import */ var _componentes_utiles_botonvolver_botonvolver_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/utiles/botonvolver/botonvolver.component */ "./src/app/componentes/utiles/botonvolver/botonvolver.component.ts");
/* harmony import */ var _componentes_utiles_loaderchico_loaderchico_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/utiles/loaderchico/loaderchico.component */ "./src/app/componentes/utiles/loaderchico/loaderchico.component.ts");
/* harmony import */ var _partidos_partidos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./partidos/partidos.component */ "./src/app/partidos/partidos.component.ts");
/* harmony import */ var _boletin_boletin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./boletin/boletin.component */ "./src/app/boletin/boletin.component.ts");
/* harmony import */ var _partidoslist_partidoslist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./partidoslist/partidoslist.component */ "./src/app/partidoslist/partidoslist.component.ts");
/* harmony import */ var _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pagina/pagina.component */ "./src/app/pagina/pagina.component.ts");
/* harmony import */ var _partido_partido_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./partido/partido.component */ "./src/app/partido/partido.component.ts");
/* harmony import */ var _partidodetalle_partidodetalle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./partidodetalle/partidodetalle.component */ "./src/app/partidodetalle/partidodetalle.component.ts");
/* harmony import */ var _tabladetalle_tabladetalle_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tabladetalle/tabladetalle.component */ "./src/app/tabladetalle/tabladetalle.component.ts");
/* harmony import */ var _partidoeventos_partidoeventos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./partidoeventos/partidoeventos.component */ "./src/app/partidoeventos/partidoeventos.component.ts");
/* harmony import */ var _componentes_utiles_botonlink_botonlink_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/utiles/botonlink/botonlink.component */ "./src/app/componentes/utiles/botonlink/botonlink.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// import { routes } from './app.routes';














// import { FocusDirective } from './componentes/utiles/focus/focus.directive';


// import { TruncateModule } from 'ng2-truncate';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"],
                _campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_8__["CampeonatosComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _componentes_utiles_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _componentes_utiles_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"],
                _componentes_utiles_loaderchico_loaderchico_component__WEBPACK_IMPORTED_MODULE_20__["LoaderchicoComponent"],
                _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_14__["TablaComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _amsnoticias_amsnoticias_component__WEBPACK_IMPORTED_MODULE_16__["AmsnoticiasComponent"],
                _componentes_utiles_botonvolver_botonvolver_component__WEBPACK_IMPORTED_MODULE_19__["BotonvolverComponent"],
                _partidos_partidos_component__WEBPACK_IMPORTED_MODULE_21__["PartidosComponent"], _boletin_boletin_component__WEBPACK_IMPORTED_MODULE_22__["BoletinComponent"], _partidoslist_partidoslist_component__WEBPACK_IMPORTED_MODULE_23__["PartidoslistComponent"], _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_24__["PaginaComponent"], _partido_partido_component__WEBPACK_IMPORTED_MODULE_25__["PartidoComponent"], _partidodetalle_partidodetalle_component__WEBPACK_IMPORTED_MODULE_26__["PartidodetalleComponent"],
                _tabladetalle_tabladetalle_component__WEBPACK_IMPORTED_MODULE_27__["TabladetalleComponent"], _partidoeventos_partidoeventos_component__WEBPACK_IMPORTED_MODULE_28__["PartidoeventosComponent"], _componentes_utiles_botonlink_botonlink_component__WEBPACK_IMPORTED_MODULE_29__["BotonlinkComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_7__["ServicioService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"], _servicios_push_service__WEBPACK_IMPORTED_MODULE_17__["PushService"], _servicios_auth_guard__WEBPACK_IMPORTED_MODULE_18__["CanActivateViaAuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campeonatos/campeonatos.component */ "./src/app/campeonatos/campeonatos.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabla/tabla.component */ "./src/app/tabla/tabla.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _amsnoticias_amsnoticias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./amsnoticias/amsnoticias.component */ "./src/app/amsnoticias/amsnoticias.component.ts");
/* harmony import */ var _partidos_partidos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partidos/partidos.component */ "./src/app/partidos/partidos.component.ts");
/* harmony import */ var _boletin_boletin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boletin/boletin.component */ "./src/app/boletin/boletin.component.ts");
/* harmony import */ var _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagina/pagina.component */ "./src/app/pagina/pagina.component.ts");
/* harmony import */ var _partido_partido_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partido/partido.component */ "./src/app/partido/partido.component.ts");
/* harmony import */ var _partidodetalle_partidodetalle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./partidodetalle/partidodetalle.component */ "./src/app/partidodetalle/partidodetalle.component.ts");
/* harmony import */ var _tabladetalle_tabladetalle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabladetalle/tabladetalle.component */ "./src/app/tabladetalle/tabladetalle.component.ts");
/* harmony import */ var _partidoeventos_partidoeventos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./partidoeventos/partidoeventos.component */ "./src/app/partidoeventos/partidoeventos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var appRoutes = [
    { path: '', component: _pagina_pagina_component__WEBPACK_IMPORTED_MODULE_9__["PaginaComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: 'campeonatos', component: _campeonatos_campeonatos_component__WEBPACK_IMPORTED_MODULE_2__["CampeonatosComponent"] },
    { path: 'noticias', component: _amsnoticias_amsnoticias_component__WEBPACK_IMPORTED_MODULE_6__["AmsnoticiasComponent"] },
    { path: 'tabla/:idcamp/:iddiv/:idzona', component: _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__["TablaComponent"] },
    { path: 'partidos/:idcamp/:iddiv/:idzona/:idFecha/:idInst', component: _partidos_partidos_component__WEBPACK_IMPORTED_MODULE_7__["PartidosComponent"], pathMatch: 'full' },
    { path: 'partidosevento/:idcamp/:iddiv/:idevento', component: _partidoeventos_partidoeventos_component__WEBPACK_IMPORTED_MODULE_13__["PartidoeventosComponent"], pathMatch: 'full' },
    { path: 'partido/:idPartido', component: _partido_partido_component__WEBPACK_IMPORTED_MODULE_10__["PartidoComponent"] },
    { path: 'partidodet/:idPartido', component: _partidodetalle_partidodetalle_component__WEBPACK_IMPORTED_MODULE_11__["PartidodetalleComponent"] },
    { path: 'tabladet', component: _tabladetalle_tabladetalle_component__WEBPACK_IMPORTED_MODULE_12__["TabladetalleComponent"] },
    { path: 'boletines', component: _boletin_boletin_component__WEBPACK_IMPORTED_MODULE_8__["BoletinComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/boletin/boletin.component.css":
/*!***********************************************!*\
  !*** ./src/app/boletin/boletin.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-link {\r\n  color: black!important;\r\n}\r\n\r\nth {\r\n  font-size: 11px!important;\r\n  padding: 4px!important;\r\n}\r\n\r\ntd {\r\n  font-size: 11px!important;\r\n  padding: 4px!important;\r\n}\r\n\r\n.table-bordered td, .table-bordered th {\r\n  border: 0px;\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.table thead th {\r\n  border-bottom: none;\r\n}\r\n\r\n.table td, .table th {\r\n  border-top: none;\r\n}\r\n\r\ntablasposicion {\r\n  padding-right: 0px!important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9sZXRpbi9ib2xldGluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9ib2xldGluL2JvbGV0aW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbGluayB7XHJcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtc2l6ZTogMTFweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNHB4IWltcG9ydGFudDtcclxufVxyXG50ZCB7XHJcbiAgZm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA0cHghaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZS1ib3JkZXJlZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIHRoIHtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4udGFibGUgdGhlYWQgdGgge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxudGFibGFzcG9zaWNpb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/boletin/boletin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/boletin/boletin.component.ts ***!
  \**********************************************/
/*! exports provided: BoletinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoletinComponent", function() { return BoletinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BoletinComponent = /** @class */ (function () {
    function BoletinComponent(http, _route, router) {
        this.http = http;
        this._route = _route;
        this.router = router;
        this.muestra = 0;
        this.muestraDetalle = 0;
        this.idSel = 0;
        this.muestra = 0;
        var a = new Date();
        this.anioSel = a.getFullYear();
        this.bolSel = 1;
    }
    BoletinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargaBoletines(this.anioSel, this.bolSel);
        this.http.listadoBoletines().subscribe(function (data) {
            _this.buscando = false;
            _this.detalleBoletines = data;
        }, function (error) {
            alert('error cargando listado boletines');
            // Do stuff whith your error
        }, function () {
            _this.buscando = true;
            // Do stuff after completion
        });
    };
    BoletinComponent.prototype.cargaBoletines = function (anio, idBoletin) {
        this.anioSel = anio;
        this.cargaTorneos(9, true, anio, idBoletin);
    };
    BoletinComponent.prototype.cargaTorneos = function (op, refresca, anio, idboletin) {
        var _this = this;
        this.buscando = true;
        this.detalleCamp = [];
        this.http.boletinesxAnioxNumero(op, this.anioSel, idboletin).subscribe(function (data) {
            _this.buscando = false;
            _this.detalleCamp = data;
        }, function (erro) {
            alert('error cargando boletines');
            // Do stuff whith your error
        }, function () {
            // alert('despues que termino');
            // Do stuff after completion
        });
    };
    BoletinComponent.prototype.irDetallePartidos = function (url, divi, tor, zona, fecha, bole, idaVer) {
        // (click)="irDetallePartidos('/partido', item.divi, item.id, item.zona, item.fecha, item.Boletin, item.id)"
        if (this.muestraDetalle !== idaVer) {
            this.muestraDetalle = idaVer;
        }
        //  this.listp.ngOnChange();
        /* const myurl =  url + '/' + tor + '/' + divi + '/' + zona + '/' + bole + '/' + bole;
        this.router.navigateByUrl(myurl).then(e => {
          if (e) {
            console.log('Navigation is successful!');
          } else {
            console.log('Navigation has failed!');
          }
        }); */
    };
    BoletinComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    BoletinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boletin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./boletin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/boletin/boletin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./boletin.component.css */ "./src/app/boletin/boletin.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BoletinComponent);
    return BoletinComponent;
}());



/***/ }),

/***/ "./src/app/campeonatos/campeonatos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/campeonatos/campeonatos.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa {\r\n  font-size: 50px;\r\n}\r\n\r\n/*.bg-varones {\r\n\r\n}\r\n\r\n.bg-damas {\r\n  /*background-color: rgb(73, 10, 61) !important;*/\r\n\r\n/*}\r\n\r\n.bg-infvarones {\r\n  /*background-color: rgb(253, 159, 45) !important;*/\r\n\r\n/*}*/\r\n\r\n/*.bg-infdamas {\r\n  /*background-color: rgb(189, 21, 80) !important;*/\r\n\r\n/*}*/\r\n\r\n#iconDamas {\r\n  font-size: 26px;\r\n  color: #ff0097;\r\n\r\n\r\n  font-weight: 100px;\r\n}\r\n\r\n#iconVarones {\r\n  font-size: 26px;\r\n  color: midnightblue;\r\n\r\n\r\n  font-weight: 100px;\r\n}\r\n\r\n#iconInfDamas {\r\n  font-size: 30px;\r\n  color: mediumorchid;\r\n\r\n\r\n  font-weight: 100px\r\n}\r\n\r\n#iconInfVarones {\r\n  font-size: 30px;\r\n  color: rgb(248, 95, 6);\r\n\r\n\r\n  font-weight: 100px\r\n}\r\n\r\n#iconQr{\r\n  font-size: 26px;\r\n\r\n}\r\n\r\n.btn-link:hover {\r\n  text-decoration: none!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGVvbmF0b3MvY2FtcGVvbmF0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7Ozs7O2tEQUtrRDs7QUFFbEQ7OztvREFHb0Q7O0FBRXBELElBQUk7O0FBRUo7bURBQ21EOztBQUVuRCxJQUFJOztBQUVKO0VBQ0UsZUFBZTtFQUNmLGNBQWM7OztFQUdkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7OztFQUduQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1COzs7RUFHbkI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7OztFQUd0QjtBQUNGOztBQUNBO0VBQ0UsZUFBZTs7QUFFakI7O0FBQ0E7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jYW1wZW9uYXRvcy9jYW1wZW9uYXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi8qLmJnLXZhcm9uZXMge1xyXG5cclxufVxyXG5cclxuLmJnLWRhbWFzIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYig3MywgMTAsIDYxKSAhaW1wb3J0YW50OyovXHJcblxyXG4vKn1cclxuXHJcbi5iZy1pbmZ2YXJvbmVzIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDE1OSwgNDUpICFpbXBvcnRhbnQ7Ki9cclxuXHJcbi8qfSovXHJcblxyXG4vKi5iZy1pbmZkYW1hcyB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAyMSwgODApICFpbXBvcnRhbnQ7Ki9cclxuXHJcbi8qfSovXHJcblxyXG4jaWNvbkRhbWFzIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgY29sb3I6ICNmZjAwOTc7XHJcblxyXG5cclxuICBmb250LXdlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbiNpY29uVmFyb25lcyB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGNvbG9yOiBtaWRuaWdodGJsdWU7XHJcblxyXG5cclxuICBmb250LXdlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbiNpY29uSW5mRGFtYXMge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogbWVkaXVtb3JjaGlkO1xyXG5cclxuXHJcbiAgZm9udC13ZWlnaHQ6IDEwMHB4XHJcbn1cclxuXHJcbiNpY29uSW5mVmFyb25lcyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjQ4LCA5NSwgNik7XHJcblxyXG5cclxuICBmb250LXdlaWdodDogMTAwcHhcclxufVxyXG4jaWNvblFye1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuXHJcbn1cclxuLmJ0bi1saW5rOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/campeonatos/campeonatos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/campeonatos/campeonatos.component.ts ***!
  \******************************************************/
/*! exports provided: CampeonatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampeonatosComponent", function() { return CampeonatosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CampeonatosComponent = /** @class */ (function () {
    function CampeonatosComponent(http, _route) {
        this.http = http;
        this._route = _route;
        this.muestra = 0;
        this.muestra = 0;
        var a = new Date();
        this.anioSel = a.getFullYear();
    }
    CampeonatosComponent.prototype.cargaAnio = function (anio) {
        this.anioSel = anio;
        this.cargaTorneos(1, true, 13, 'A');
    };
    CampeonatosComponent.prototype.cargaTorneos = function (op, refresca, div, zona) {
        var _this = this;
        // alert(op);
        if ((this.muestra !== div) || (refresca = true)) {
            this.muestra = div;
            this.buscando = true;
            this.detalleCamp = [];
            this.http.campeonatosxAnioxDivi(op, this.anioSel, div, zona).subscribe(function (data) {
                _this.buscando = false;
                switch (div) {
                    case 4:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 5:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 6:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 7:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 8:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 9:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 10:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 11:
                        _this.detalleCampInfVarones = data;
                        break;
                    case 12:
                        _this.detalleCamp = data;
                        break;
                    case 13:
                        _this.detalleCamp = data;
                        break;
                    case 14:
                        _this.detalleCampInfDamas = data;
                        break;
                    case 15:
                        _this.detalleCampInfDamas = data;
                        break;
                    case 16:
                        _this.detalleCampInfDamas = data;
                        break;
                    case 17:
                        _this.detalleCampInfDamas = data;
                        break;
                    case 18:
                        _this.detalleCampDamas = data;
                        break;
                    case 21:
                        _this.detalleCampDamas = data;
                        break;
                }
            });
        }
    };
    CampeonatosComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CampeonatosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campeonatos',
            template: __importDefault(__webpack_require__(/*! raw-loader!./campeonatos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/campeonatos/campeonatos.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./campeonatos.component.css */ "./src/app/campeonatos/campeonatos.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CampeonatosComponent);
    return CampeonatosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/utiles/botonlink/botonlink.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/utiles/botonlink/botonlink.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3V0aWxlcy9ib3RvbmxpbmsvYm90b25saW5rLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/utiles/botonlink/botonlink.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componentes/utiles/botonlink/botonlink.component.ts ***!
  \*********************************************************************/
/*! exports provided: BotonlinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonlinkComponent", function() { return BotonlinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BotonlinkComponent = /** @class */ (function () {
    function BotonlinkComponent() {
        this.nombreBoton = 'link';
        this.linkBoton = '#';
    }
    BotonlinkComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotonlinkComponent.prototype, "nombreBoton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BotonlinkComponent.prototype, "linkBoton", void 0);
    BotonlinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-botonlink',
            template: __importDefault(__webpack_require__(/*! raw-loader!./botonlink.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/botonlink/botonlink.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./botonlink.component.css */ "./src/app/componentes/utiles/botonlink/botonlink.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BotonlinkComponent);
    return BotonlinkComponent;
}());



/***/ }),

/***/ "./src/app/componentes/utiles/botonvolver/botonvolver.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/utiles/botonvolver/botonvolver.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3V0aWxlcy9ib3RvbnZvbHZlci9ib3RvbnZvbHZlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/utiles/botonvolver/botonvolver.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/utiles/botonvolver/botonvolver.component.ts ***!
  \*************************************************************************/
/*! exports provided: BotonvolverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonvolverComponent", function() { return BotonvolverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BotonvolverComponent = /** @class */ (function () {
    function BotonvolverComponent() {
    }
    BotonvolverComponent.prototype.ngOnInit = function () {
    };
    BotonvolverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-botonvolver',
            template: __importDefault(__webpack_require__(/*! raw-loader!./botonvolver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/botonvolver/botonvolver.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./botonvolver.component.css */ "./src/app/componentes/utiles/botonvolver/botonvolver.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BotonvolverComponent);
    return BotonvolverComponent;
}());



/***/ }),

/***/ "./src/app/componentes/utiles/loader/loader.component.css":
/*!****************************************************************!*\
  !*** ./src/app/componentes/utiles/loader/loader.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  .loader {\r\n    background: #a8b0b791;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    z-index: 1;\r\n    margin: -75px 0 0 -75px;\r\n    border-top: 5px solid midnightblue;\r\n    border-right: 5px solid rgb(255, 98, 191);\r\n    border-bottom: 5px solid rgb(222, 149, 241);\r\n    border-left: 5px solid rgb(249, 193, 161);\r\n    border-radius: 50%;\r\n    width: 150px;\r\n    height: 150px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  .spinner {\r\n    position: relative;\r\n    left: 50%;\r\n    top: 50%;\r\n    z-index: 1;\r\n    margin: -75px 0 0 -75px;\r\n    /* border: 5px solid #f3f3f3;\r\n    border-top: 5px solid dodgerblue;\r\n    border-right: 5px solid deepskyblue;\r\n    border-bottom: 5px solid lightblue;\r\n    border-left: 5px solid lightcyan; */\r\n    border-radius: 50%;\r\n    width: 150px;\r\n    height: 150px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n  }\r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); }\r\n  }\r\n  @keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXRpbGVzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMseUNBQXlDO0lBQ3pDLDJDQUEyQztJQUMzQyx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qjs7Ozt1Q0FJbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztFQUVBO0lBQ0UsS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0VBQzVDO0VBRUE7SUFDRSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8seUJBQXlCLEVBQUU7RUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy91dGlsZXMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmxvYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYThiMGI3OTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBtaWRuaWdodGJsdWU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCByZ2IoMjU1LCA5OCwgMTkxKTtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMjIyLCAxNDksIDI0MSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYigyNDksIDE5MywgMTYxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICAuc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICAgIC8qIGJvcmRlcjogNXB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIGRlZXBza3libHVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgbGlnaHRjeWFuOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/componentes/utiles/loader/loader.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentes/utiles/loader/loader.component.ts ***!
  \***************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __importDefault(__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/loader/loader.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./loader.component.css */ "./src/app/componentes/utiles/loader/loader.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/componentes/utiles/loaderchico/loaderchico.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/utiles/loaderchico/loaderchico.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  z-index: 1;\r\n  /* margin: -75px 0 0 -75px; */\r\n  border-top: 2px solid #1c1592;\r\n  border-right: 2px solid #ff0097;\r\n  border-bottom: 2px solid rgb(248, 95, 6);\r\n  border-left: 2px solid #fdf7f7;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n  background: black;\r\n  padding: 4px;\r\n}\r\n\r\n.spinner {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  margin: -75px 0 0 -75px;\r\n  /* border: 5px solid #f3f3f3;\r\n    border-top: 5px solid dodgerblue;\r\n    border-right: 5px solid deepskyblue;\r\n    border-bottom: 5px solid lightblue;\r\n    border-left: 5px solid lightcyan; */\r\n  border-radius: 50%;\r\n  width: 150px;\r\n  height: 150px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdXRpbGVzL2xvYWRlcmNoaWNvL2xvYWRlcmNoaWNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0Isd0NBQXdDO0VBQ3hDLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCOzs7O3VDQUlxQztFQUNyQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvdXRpbGVzL2xvYWRlcmNoaWNvL2xvYWRlcmNoaWNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLyogbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7ICovXHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxYzE1OTI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmMDA5NztcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0OCwgOTUsIDYpO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZkZjdmNztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcclxuICAvKiBib3JkZXI6IDVweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBkZWVwc2t5Ymx1ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGxpZ2h0Y3lhbjsgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/componentes/utiles/loaderchico/loaderchico.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/utiles/loaderchico/loaderchico.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoaderchicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderchicoComponent", function() { return LoaderchicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoaderchicoComponent = /** @class */ (function () {
    function LoaderchicoComponent() {
    }
    LoaderchicoComponent.prototype.ngOnInit = function () {
    };
    LoaderchicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loaderchico',
            template: __importDefault(__webpack_require__(/*! raw-loader!./loaderchico.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/loaderchico/loaderchico.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./loaderchico.component.css */ "./src/app/componentes/utiles/loaderchico/loaderchico.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderchicoComponent);
    return LoaderchicoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/utiles/modal/modal.component.css":
/*!**************************************************************!*\
  !*** ./src/app/componentes/utiles/modal/modal.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3V0aWxlcy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/utiles/modal/modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentes/utiles/modal/modal.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "tituloModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "bodyModal", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/utiles/modal/modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./modal.component.css */ "./src/app/componentes/utiles/modal/modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body{\r\n  height: 100%!important;\r\n  background: rebeccapurple;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiByZWJlY2NhcHVycGxlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _models_usuarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var _servicios_serviciosams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/serviciosams.service */ "./src/app/servicios/serviciosams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _router, _userService, http) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.http = http;
        this.titulo = 'Asociación Médica Sarmiento';
        this.tituloEstatus = '';
        this.estatus = false;
        this.bloquear = false;
        this.colorLetraLogin = 'colorLetraLogin';
        this.colorFondoLogin = 'colorFondoLogin';
        this.colorInputLogin = 'colorInputLogin';
        this.colorLabelsLogin = 'colorLabelsLogin';
        this.user = new _models_usuarios__WEBPACK_IMPORTED_MODULE_3__["Usuarios"]('', '', 0);
        this.bloquear = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // console.log('identidad ' + this._userService.getIdentity());
        // console.log(localStorage.getItem('identity'));
        // console.log(localStorage.getItem('tocken'));
    };
    LoginComponent.prototype.ngSubmit = function () {
        var _this = this;
        this.bloquear = true;
        this.http.LoginGet(9, this.user).subscribe(function (data) {
            _this.bloquear = false;
            if (data[0] === undefined) {
                _this.estatus = true;
                _this.tituloEstatus = 'No dispone de conexion a internet o los datos ingresados son incorrectos!';
            }
            else {
                _this.listado = data;
                _this.http.setearNombreUsuario(_this.listado[0].nombre);
                _this._router.navigate(['/menu']);
            }
        }, function (error) {
            _this.bloquear = false;
            _this.estatus = true;
            _this.tituloEstatus = 'No dispone de conexion a internet o los datos ingresados son incorrectos!';
            console.log(error);
        });
    };
    LoginComponent.prototype.ngSubmitPost = function () {
        var _this = this;
        this.bloquear = true;
        this.status = null;
        this.mesagge = '';
        this._userService.LogIn_user(this.user).subscribe(function (result) {
            if (result.code !== 200) {
                console.log(result);
            }
            else {
                _this.user = result.data;
            }
        }, function (error) {
            alert('No dispone de conexion a internet!');
            console.log(error);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _servicios_serviciosams_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosamsService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _servicios_serviciosams_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosamsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.nav-link:active {\r\n  color: white!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2LWxpbms6YWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _servicios_serviciosams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/serviciosams.service */ "./src/app/servicios/serviciosams.service.ts");
/* harmony import */ var _models_seccion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/seccion */ "./src/app/models/seccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(http, _route, router) {
        this.http = http;
        this._route = _route;
        this.router = router;
        this.colorMenu = 'colorMenu';
        this.colorFuenteMenu = 'colorFuenteMenu';
        this.colorIconoMenu = 'colorIconoMenu';
        this.colorFondoIconoMenu = 'colorFondoIconoMenu';
        this.paddingFondoIconoMenu = 'paddingFondoIconoMenu';
        this.title = 'AMS';
        this.colorFondo = 'bg-white';
        this.colorBarra = 'colorBarra';
        this.colorLetraBarra = 'colorLetraBarra';
        this.logo = 'logoams.png';
        this.tipoNav = 'navbar-light';
        this.logueado = false;
        this.secc = new _models_seccion__WEBPACK_IMPORTED_MODULE_3__["Seccion"](0, 'Debe estar logueado', '', '', '', 0, '', 0, '', 0, 0, 0, '', '');
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.logueado = this.http.isLogged();
        if (this.logueado) {
            this.cargaMenu(1, 2);
        }
        else {
            this.router.navigateByUrl('/');
        }
        this.cantidadObrasSociales();
    };
    MenuComponent.prototype.cargaMenu = function (op, level) {
        var _this = this;
        this.http.cargaSecciones(1, level).subscribe(function (data) {
            _this.detalleMenu = data;
        });
    };
    MenuComponent.prototype.cantidadObrasSociales = function () {
        var _this = this;
        this.http.cantidadTabla(11, 'obra_social', 'id_os').subscribe(function (data) {
            // console.log(data[0].total);
            _this.http.TotaldeObrasSociales(data[0].total);
        });
    };
    MenuComponent.prototype.cantidadPadron = function () {
        var _this = this;
        this.http.cantidadTabla(11, 'padron_socios', 'id_padron').subscribe(function (data) {
            // console.log(data[0].total);
            _this.http.TotaldePadron(data[0].total);
        });
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _servicios_serviciosams_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosamsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_serviciosams_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosamsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/seccion.ts":
/*!***********************************!*\
  !*** ./src/app/models/seccion.ts ***!
  \***********************************/
/*! exports provided: Seccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seccion", function() { return Seccion; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Seccion = /** @class */ (function () {
    function Seccion(id, nombre, path, path_img, descripcion, actualizacion, menu, activa, foto, orden, cnt, resumen_articulo, comp, resumen) {
        this.id = id;
        this.nombre = nombre;
        this.path = path;
        this.path_img = path_img;
        this.descripcion = descripcion;
        this.actualizacion = actualizacion;
        this.menu = menu;
        this.activa = activa;
        this.foto = foto;
        this.orden = orden;
        this.cnt = cnt;
        this.resumen_articulo = resumen_articulo;
        this.comp = comp;
        this.resumen = resumen;
    }
    return Seccion;
}());



/***/ }),

/***/ "./src/app/models/usuarios.ts":
/*!************************************!*\
  !*** ./src/app/models/usuarios.ts ***!
  \************************************/
/*! exports provided: Usuarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuarios", function() { return Usuarios; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Usuarios = /** @class */ (function () {
    function Usuarios(nombre, clave, nivel) {
        this.nombre = nombre;
        this.clave = clave;
        this.nivel = nivel;
    }
    return Usuarios;
}());



/***/ }),

/***/ "./src/app/pagina/pagina.component.css":
/*!*********************************************!*\
  !*** ./src/app/pagina/pagina.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS9wYWdpbmEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pagina/pagina.component.ts":
/*!********************************************!*\
  !*** ./src/app/pagina/pagina.component.ts ***!
  \********************************************/
/*! exports provided: PaginaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaComponent", function() { return PaginaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PaginaComponent = /** @class */ (function () {
    function PaginaComponent() {
    }
    PaginaComponent.prototype.ngOnInit = function () {
    };
    PaginaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagina',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pagina.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagina/pagina.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pagina.component.css */ "./src/app/pagina/pagina.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PaginaComponent);
    return PaginaComponent;
}());



/***/ }),

/***/ "./src/app/partido/partido.component.css":
/*!***********************************************!*\
  !*** ./src/app/partido/partido.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpZG8vcGFydGlkby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/partido/partido.component.ts":
/*!**********************************************!*\
  !*** ./src/app/partido/partido.component.ts ***!
  \**********************************************/
/*! exports provided: PartidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidoComponent", function() { return PartidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PartidoComponent = /** @class */ (function () {
    function PartidoComponent(_http, _route) {
        this._http = _http;
        this._route = _route;
        this.buscando = false;
        this.idPartido = 0;
    }
    PartidoComponent.prototype.ngOnInit = function () {
        this.idPartido = this._route.snapshot.params.idPartido;
        this.cargarPartidos(81, this.idPartido);
    };
    PartidoComponent.prototype.cargarPartidos = function (op, partido) {
        var _this = this;
        var thisc = this;
        this.buscando = false;
        this.t = [];
        this._http.partido(op, partido).subscribe(function (data) {
            thisc.t = data[0];
            thisc.buscando = true;
            if (data.length <= 0) {
                console.log('no encontro nada');
            }
            else {
                _this.nomCampeonato = data[0].Campeonato;
                // this.idCamp = data[0].Campeonato;
                // alert (this.nomCampeonato);
            }
        });
    };
    PartidoComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PartidoComponent.prototype, "t", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PartidoComponent.prototype, "nomCampeonato", void 0);
    PartidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partido',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partido.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partido/partido.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./partido.component.css */ "./src/app/partido/partido.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PartidoComponent);
    return PartidoComponent;
}());



/***/ }),

/***/ "./src/app/partidodetalle/partidodetalle.component.css":
/*!*************************************************************!*\
  !*** ./src/app/partidodetalle/partidodetalle.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpZG9kZXRhbGxlL3BhcnRpZG9kZXRhbGxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/partidodetalle/partidodetalle.component.ts":
/*!************************************************************!*\
  !*** ./src/app/partidodetalle/partidodetalle.component.ts ***!
  \************************************************************/
/*! exports provided: PartidodetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidodetalleComponent", function() { return PartidodetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PartidodetalleComponent = /** @class */ (function () {
    function PartidodetalleComponent(_http, _route) {
        this._http = _http;
        this._route = _route;
        this.buscando = false;
        this.idPartido = 0;
        this.eventoimg = '';
    }
    PartidodetalleComponent.prototype.ngOnInit = function () {
        this.idPartido = this._route.snapshot.params.idPartido;
        this.cargarPartidos(82, this.idPartido);
    };
    PartidodetalleComponent.prototype.cargarPartidos = function (op, partido) {
        var _this = this;
        // alert(op);
        var thisc = this;
        this.buscando = false;
        this.detallePartido = [];
        this._http.partido(op, partido).subscribe(function (data) {
            thisc.detallePartido = data;
            thisc.buscando = true;
            if (data.length <= 0) {
                console.log('no encontro nada');
            }
            else {
                _this.nomCampeonato = data[0].Campeonato;
                // alert (this.nomCampeonato);
            }
        });
    };
    PartidodetalleComponent.prototype.determinaEvento = function (e) {
        var thisce = this;
        if (e === 1) {
            thisce.eventoimg = 'gol.png';
        }
        if (e === 2) {
            thisce.eventoimg = 'amarilla.jpg';
        }
        if (e === 3) {
            this.eventoimg = 'azul.png';
        }
        if (e === 4) {
            this.eventoimg = 'roja.png';
        }
        return true;
    };
    PartidodetalleComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PartidodetalleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partidodetalle',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partidodetalle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidodetalle/partidodetalle.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./partidodetalle.component.css */ "./src/app/partidodetalle/partidodetalle.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PartidodetalleComponent);
    return PartidodetalleComponent;
}());



/***/ }),

/***/ "./src/app/partidoeventos/partidoeventos.component.css":
/*!*************************************************************!*\
  !*** ./src/app/partidoeventos/partidoeventos.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpZG9ldmVudG9zL3BhcnRpZG9ldmVudG9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/partidoeventos/partidoeventos.component.ts":
/*!************************************************************!*\
  !*** ./src/app/partidoeventos/partidoeventos.component.ts ***!
  \************************************************************/
/*! exports provided: PartidoeventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidoeventosComponent", function() { return PartidoeventosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PartidoeventosComponent = /** @class */ (function () {
    function PartidoeventosComponent(_http, _route) {
        this._http = _http;
        this._route = _route;
        this.eventoband = '';
    }
    PartidoeventosComponent.prototype.ngOnInit = function () {
        this.idCamp = this._route.snapshot.params.idcamp;
        this.idDiv = this._route.snapshot.params.iddiv;
        this.idEve = this._route.snapshot.params.idevento;
        this.cargarEventos(12, this.idCamp, this.idDiv, this.idEve);
    };
    PartidoeventosComponent.prototype.cargarEventos = function (op, tor, div, tipoe) {
        var _this = this;
        // alert(op);
        this.buscando = false;
        this.detalleEventos = [];
        this._http.listadoEventos(op, div, tor, tipoe).subscribe(function (data) {
            _this.detalleEventos = data;
            _this.buscando = true;
            if (data.length <= 0) {
                console.log('no encontro nada');
            }
            else {
                // this.nomCampeonato = data[0].Nombre;
                // alert (this.nomCampeonato);
            }
        });
    };
    PartidoeventosComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoeventosComponent.prototype, "idCamp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoeventosComponent.prototype, "nCamp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoeventosComponent.prototype, "idDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoeventosComponent.prototype, "idEve", void 0);
    PartidoeventosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partidoeventos',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partidoeventos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidoeventos/partidoeventos.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./partidoeventos.component.css */ "./src/app/partidoeventos/partidoeventos.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PartidoeventosComponent);
    return PartidoeventosComponent;
}());



/***/ }),

/***/ "./src/app/partidos/partidos.component.css":
/*!*************************************************!*\
  !*** ./src/app/partidos/partidos.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpZG9zL3BhcnRpZG9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/partidos/partidos.component.ts":
/*!************************************************!*\
  !*** ./src/app/partidos/partidos.component.ts ***!
  \************************************************/
/*! exports provided: PartidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidosComponent", function() { return PartidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PartidosComponent = /** @class */ (function () {
    function PartidosComponent(_http, _route) {
        this._http = _http;
        this._route = _route;
        this.ganador = '';
    }
    PartidosComponent.prototype.ngOnInit = function () {
        this.idCampeonato = this._route.snapshot.params.idcamp;
        this.idDivision = this._route.snapshot.params.iddiv;
        this.idZona = this._route.snapshot.params.idzona;
        this.idFecha = this._route.snapshot.params.idFecha;
        this.idInst = this._route.snapshot.params.idInst;
        this.cargarPartidos(8, this.idCampeonato, this.idDivision, this.idZona, this.idFecha, this.idInst);
    };
    PartidosComponent.prototype.cargarPartidos = function (op, tor, div, zona, fecha, inst) {
        var _this = this;
        // alert(op);
        this.buscando = false;
        this.detalleTabla = [];
        this._http.partidosxFecxCampxZoxInst(op, div, tor, zona, fecha, inst).subscribe(function (data) {
            _this.detalleTabla = data;
            _this.buscando = true;
            if (data.length <= 0) {
                console.log('no encontro nada');
            }
            else {
                _this.nomCampeonato = data[0].Nombre;
                // alert (this.nomCampeonato);
            }
        });
    };
    PartidosComponent.prototype.determinaGanador = function (idc, tl, tv) {
        if (tl === tv) {
            this.ganador = 'btn btn-info';
        }
        if (tl > tv) {
            this.ganador = 'btn btn-success';
        }
        if (tl < tv) {
            this.ganador = 'btn btn-warning';
        }
        return true;
    };
    PartidosComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    PartidosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partidos',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partidos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidos/partidos.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./partidos.component.css */ "./src/app/partidos/partidos.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_2__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PartidosComponent);
    return PartidosComponent;
}());



/***/ }),

/***/ "./src/app/partidoslist/partidoslist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/partidoslist/partidoslist.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\r\n  font-size: 11px!important;\r\n  padding: 4px;\r\n}\r\ntd {\r\n  font-size: 11px!important;\r\n  padding: 4px;\r\n}\r\n.table-bordered td, .table-bordered th {\r\n  border: 0px;\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n.table thead th {\r\n  border-bottom: none;\r\n}\r\n.table td, .table th {\r\n  border-top: none;\r\n}\r\n@media (min-width: 768px)\r\n{\r\n  .padd-r-2 {\r\n    padding-right: 2px!important;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlkb3NsaXN0L3BhcnRpZG9zbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRTtJQUNFLDRCQUE0QjtBQUNoQztBQUNBIiwiZmlsZSI6InNyYy9hcHAvcGFydGlkb3NsaXN0L3BhcnRpZG9zbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xyXG4gIGZvbnQtc2l6ZTogMTFweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbnRkIHtcclxuICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgdGQsIC50YWJsZS1ib3JkZXJlZCB0aCB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcclxue1xyXG4gIC5wYWRkLXItMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHghaW1wb3J0YW50O1xyXG59XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/partidoslist/partidoslist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/partidoslist/partidoslist.component.ts ***!
  \********************************************************/
/*! exports provided: PartidoslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartidoslistComponent", function() { return PartidoslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// import { detectChanges } from '@angular/core/src/render3';
var PartidoslistComponent = /** @class */ (function () {
    function PartidoslistComponent(_http, _route) {
        this._http = _http;
        this._route = _route;
        this.ganaloc = '';
        this.pierdeloc = '';
        this.ganavis = '';
        this.pierdevis = '';
    }
    PartidoslistComponent.prototype.ngOnInit = function () {
        this.cargarPartidos(8, this.idCamp, this.idDiv, this.idZon, this.idFec, this.idIns);
    };
    PartidoslistComponent.prototype.cargarPartidos = function (op, tor, div, zona, fecha, inst) {
        var _this = this;
        // alert(op);
        this.buscando = false;
        this.detalleTabla = [];
        this._http.partidosxFecxCampxZoxInst(op, div, tor, zona, fecha, inst).subscribe(function (data) {
            _this.detalleTabla = data;
            _this.buscando = true;
            if (data.length <= 0) {
                console.log('no encontro nada');
            }
            else {
                _this.nomCampeonato = data[0].Nombre;
                // alert (this.nomCampeonato);
            }
        });
    };
    PartidoslistComponent.prototype.determinaGanador = function (equipo, idc, tl, tv) {
        if (equipo === 'loc') {
            if (tl === tv) {
                this.ganaloc = 'bg-white pr-1 pl-1';
                this.ganavis = 'bg-white pr-1 pl-1';
            }
            if (tl > tv) {
                this.ganaloc = 'bg-success pr-1 pl-1';
            }
            else {
                this.ganaloc = 'bg-white pr-1 pl-1';
            }
        }
        else {
            if (tl < tv) {
                this.ganavis = 'bg-warning pr-1 pl-1';
            }
            else {
                this.ganavis = 'bg-white pr-1 pl-1';
            }
        }
        return true;
    };
    PartidoslistComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoslistComponent.prototype, "idCamp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoslistComponent.prototype, "nCamp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoslistComponent.prototype, "idDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PartidoslistComponent.prototype, "idZon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoslistComponent.prototype, "idFec", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoslistComponent.prototype, "idIns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartidoslistComponent.prototype, "idBol", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PartidoslistComponent.prototype, "nCat", void 0);
    PartidoslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partidoslist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partidoslist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partidoslist/partidoslist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./partidoslist.component.css */ "./src/app/partidoslist/partidoslist.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PartidoslistComponent);
    return PartidoslistComponent;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var GLOBAL = {
    sitio: 'https://fspatin.com/paginas/partidos',
    urlPatente: 'http://sanjuan.gob.ar/ol/?or=27AF0711232C47079084C16C07BBC528&Consulta=',
    urlLicencia: 'http://sanjuan.gob.ar/ol/?or=D5420D3894004911887964B67DB95A8E&',
    urlRedmain: 'http://www.sanjuan.gov.ar/ol/?or=EB558D13851A4875A2402BD9F4A5B971&',
    urlNoticias: 'http://sanjuan.gob.ar/ol/?or=DDE0F3582AE248E9A6F7C2FE131F67AE',
    urlLoguin: '/api/',
    urlPregFrec: 'http://sanjuan.gob.ar/ol/?or=C84D296D5ECC4FDFA9DD763485F159CE',
    urlPublica: 'http://201.181.1.10',
    ultNotCargada: 0,
    año: 2019,
    idUsuario: '',
    NomUsuario: 'Test',
    cantPadron: 0,
    cantObrasSociales: 0,
    cantPaginador: 10
};
/*
fichero de definicion de la url de nuestra api
y lo podemos importar desde cualquier lado
incluso puedo gardar configuraciones de colores, etc
*/


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this._apiUrl = _global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].sitio + _global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlLoguin;
    }
    UserService.prototype.LogIn_user = function (user) {
        var json = JSON.stringify(user);
        var params = 'json=' + json;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this._apiUrl + '/apppostams.php?', json, { headers: headers });
        /*return this.http.post<Usuarios>(this._apiUrl + '/apppostams.php?', user, httpOptions).pipe(
          tap((usuarios: Usuarios) => this.log('usuario  w/ nombre=${usuario.nombre}')),
        catchError(this.handleError<Usuarios>('addCluster'))*/
    };
    UserService.prototype.log = function (message) {
        console.log(message);
    };
    UserService.prototype.getIdentity = function () {
        // console.log(localStorage.getItem('identity'));
        if (localStorage.getItem('identity') != null) {
            var identity = JSON.parse(localStorage.getItem('identity'));
            if (identity !== 'undefined') {
                this.identity = identity;
            }
            else {
                this.identity = null;
            }
            return identity;
        }
        else {
            return null;
        }
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/servicios/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/servicios/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: CanActivateViaAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateViaAuthGuard", function() { return CanActivateViaAuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _serviciosams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviciosams.service */ "./src/app/servicios/serviciosams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CanActivateViaAuthGuard = /** @class */ (function () {
    function CanActivateViaAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.isLogged()) {
            console.log('No estás logueado');
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    CanActivateViaAuthGuard.ctorParameters = function () { return [
        { type: _serviciosams_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosamsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }
    ]; };
    CanActivateViaAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_serviciosams_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosamsService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], CanActivateViaAuthGuard);
    return CanActivateViaAuthGuard;
}());



/***/ }),

/***/ "./src/app/servicios/push.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/push.service.ts ***!
  \*******************************************/
/*! exports provided: PushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushService", function() { return PushService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PushService = /** @class */ (function () {
    function PushService() {
        this.cordova = window['cordova'] || navigator['cordova'];
        this.NotificationGlobal = window['Notification'];
        if (this.NotificationGlobal && this.NotificationGlobal.permission !== 'granted') {
            this.NotificationGlobal.requestPermission();
        }
        this.NotificationGlobalChat = window['Notification'];
        if (this.NotificationGlobalChat && this.NotificationGlobalChat.permission !== 'granted') {
            this.NotificationGlobalChat.requestPermission();
        }
    }
    PushService.prototype.NotificarInfo = function (notificacion) {
        console.log(notificacion);
        if (this.cordova
            && this.cordova.plugins
            && this.cordova.plugins.notification
            && this.cordova.plugins.notification.local) {
            try {
                this.cordova.plugins.notification.local.schedule(notificacion);
            }
            catch (ex) {
                console.log(ex);
            }
        }
        else {
            if (this.NotificationGlobal) {
                var data = {
                    type: 'basic',
                    title: notificacion.title,
                    state: 'success',
                    body: notificacion.text,
                    icon: './assets/logoams.png',
                    // items: [], //[{title: "Item1", message: "This is item 1."},
                    // {title: "Item2", message: "This is item 2."},
                    // {title: "Item3", message: "This is item 3."}],
                    // acc1_func: undefined,
                    // acc2_func: undefined,
                    callback: function (btn) {
                        console.log();
                    }
                };
                this.NotificationPlugin = new window['Notification'](data.title, data);
            }
            else {
            }
        }
    };
    PushService.prototype.NotificarChat = function (notificacionChat) {
        console.log(notificacionChat);
        if (this.cordova
            && this.cordova.plugins
            && this.cordova.plugins.notification
            && this.cordova.plugins.notification.local) {
            try {
                this.cordova.plugins.notification.local.schedule(notificacionChat);
            }
            catch (ex) {
                console.log(ex);
            }
        }
        else {
            if (this.NotificationGlobalChat) {
                var data = {
                    type: 'list',
                    title: notificacionChat.title,
                    state: 'success',
                    body: notificacionChat.text,
                    icon: './assets/logoams.png',
                    items: [
                        { title: 'Item1', message: 'This is item 1.' },
                        { title: 'Item2', message: 'This is item 2.' },
                        { title: 'Item3', message: 'This is item 3.' }
                    ],
                    acc1_func: undefined,
                    acc2_func: undefined,
                    callback: function (btn) {
                        console.log();
                    }
                };
                this.NotificationPluginChat = new window['Notification'](data.title, data);
            }
            else {
            }
        }
    };
    PushService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PushService);
    return PushService;
}());



/***/ }),

/***/ "./src/app/servicios/servicio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/servicio.service.ts ***!
  \***********************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ServicioService = /** @class */ (function () {
    function ServicioService(http) {
        this.http = http;
        this.prod = true;
        this.loc = 'http://localhost/partidos2018/api';
        this.int = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].sitio + '/api';
        this.anio = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].año;
        this.xurl = '';
        if (this.prod) {
            this.xurl = this.int;
        }
        else {
            this.xurl = this.loc;
        }
        // console.log('el servicio esta andando');
    }
    ServicioService.prototype.obtenerDatos = function () {
        return this.http.get(this.xurl + '/appfsp.php?opcion=1&div=13&anio=' + this.anio);
    };
    ServicioService.prototype.campeonatosxAnioxDivi = function (op, anio, divi, zona) {
        return this.http.get(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&anio=' + anio + '&zona=' + zona);
    };
    ServicioService.prototype.tablaxDivxTor = function (op, divi, tor, zona) {
        return this.http.get(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&tor=' + tor + '&zona=' + zona);
    };
    ServicioService.prototype.partidosxFecxCampxZoxInst = function (op, divi, tor, zona, fecha, inst) {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&tor=' + tor + '&zona=' + zona + '&fecha=' + fecha + '&inst=' + inst);
    };
    ServicioService.prototype.partido = function (op, partido) {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.xurl + '/appfsp.php?opcion=' + op + '&partido=' + partido);
    };
    ServicioService.prototype.boletinesxAnioxNumero = function (op, anio, nro) {
        return this.http.get(this.xurl + '/appfsp.php?opcion=' + op + '&getboletin=' + nro + '&getanio=' + anio);
    };
    ServicioService.prototype.detallePartidosxTorneoxDivxFecxBoletin = function (op, divi, tor, zona, fecha, bole) {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.xurl + '/appfsp.php?opcion=' + op + '&dive=' + divi + '&torne=' + tor + '&zonae=' + zona + '&boletine=' + bole);
    };
    ServicioService.prototype.listadoBoletines = function () {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.xurl + '/appfsp.php?opcion=11');
    };
    ServicioService.prototype.listadoEventos = function (op, divi, tor, tipoe) {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.xurl + '/appfsp.php?opcion=' + op + '&div=' + divi + '&tor=' + tor + '&tipoe=' + tipoe);
    };
    ServicioService.prototype.getNoticias = function (op) {
        var params = 'opcion=' + op;
        return this.http.get(this.xurl + '/appfsp.php?' + params);
    };
    ServicioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ServicioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicioService);
    return ServicioService;
}());



/***/ }),

/***/ "./src/app/servicios/serviciosams.service.ts":
/*!***************************************************!*\
  !*** ./src/app/servicios/serviciosams.service.ts ***!
  \***************************************************/
/*! exports provided: ServiciosamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosamsService", function() { return ServiciosamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var js_sha1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-sha1 */ "./node_modules/js-sha1/src/sha1.js");
/* harmony import */ var js_sha1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_sha1__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ServiciosamsService = /** @class */ (function () {
    function ServiciosamsService(http) {
        this.http = http;
        this.prod = true;
        this.loc = 'http://localhost/partidos2018/api';
        this.int = 'https://fspatin.com/api';
        this.usUrlLoc = 'http://localhost/partidos2018/api';
        this.usUrlInt = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].sitio + 'api';
        this.xurl = '';
        this.usuUrl = '';
        if (this.prod) {
            this.xurl = this.int;
            this.usuUrl = this.usUrlInt;
        }
        else {
            this.xurl = this.loc;
            this.usuUrl = this.usUrlLoc;
        }
        console.log('el servicio esta andando');
    }
    ServiciosamsService.prototype.cargaSecciones = function (op, nivel) {
        return this.http.get(this.xurl + '/appams.php?opcion=' + op + '&nivel=' + nivel);
    };
    ServiciosamsService.prototype.buscaOs = function (op, busca, orden, tipoOrden, ini, fin) {
        var params = 'opcion=' + op + '&busca=' + busca + '&orden=' + orden + '&tipoOrden=' + tipoOrden + '&ini=' + ini + '&fin=' + fin;
        return this.http.get(this.xurl + '/appams.php?' + params);
    };
    // de usuarios
    ServiciosamsService.prototype.setearNombreUsuario = function (nombre) {
        switch (nombre.length) {
            case 1:
                _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario = '00000' + nombre;
                break;
            case 2:
                _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario = '0000' + nombre;
                break;
            case 3:
                _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario = '000' + nombre;
                break;
            case 4:
                _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario = '00' + nombre;
                break;
            case 5:
                _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario = '0' + nombre;
                break;
            case 6:
                _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario = nombre;
                break;
            default:
                _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario = '';
        }
    };
    ServiciosamsService.prototype.isLogged = function () {
        if (this.devolverIdUsuario() === '') {
            return false;
        }
        else {
            return true;
        }
    };
    ServiciosamsService.prototype.devolverIdUsuario = function () {
        return _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].idUsuario;
    };
    ServiciosamsService.prototype.devolverUrlDescarga = function () {
        return _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlPublica;
    };
    ServiciosamsService.prototype.LoginGet = function (op, usuario) {
        var params = 'opcion=' + op + '&nombre=' + usuario.nombre + '&clave=' + js_sha1__WEBPACK_IMPORTED_MODULE_2__(usuario.clave);
        // console.log(params);
        return this.http.get(this.usuUrl + '/appams.php?' + params);
    };
    // de noticias
    ServiciosamsService.prototype.getNoticias = function (op) {
        var params = 'opcion=' + op;
        return this.http.get(this.xurl + '/appfsp.php?' + params);
    };
    ServiciosamsService.prototype.cantidadTabla = function (op, tabla, campo) {
        var params = 'opcion=' + op + '&tabla=' + tabla + '&campo=' + campo;
        return this.http.get(this.xurl + '/appams.php?' + params);
    };
    ServiciosamsService.prototype.TotaldeObrasSociales = function (cant) {
        _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].cantObrasSociales = cant;
    };
    ServiciosamsService.prototype.DevuelveCantdeObrasSociales = function () {
        return _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].cantObrasSociales;
    };
    ServiciosamsService.prototype.TotaldePadron = function (cant) {
        _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].cantPadron = cant;
    };
    ServiciosamsService.prototype.DevuelveCantdePadron = function () {
        return _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].cantPadron;
    };
    // utilidades
    ServiciosamsService.prototype.DevuelveCantdePaginador = function () {
        return _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].cantPaginador;
    };
    ServiciosamsService.prototype.calcularPaginador = function (numero, precision) {
        return Math.round(numero / precision);
    };
    ServiciosamsService.prototype.convertirNumeroEnArreglo = function (numero) {
        return Array(numero).fill(1).map(function (x, i) { return i; }); // [0,1,2,3,4]
    };
    ServiciosamsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ServiciosamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiciosamsService);
    return ServiciosamsService;
}());



/***/ }),

/***/ "./src/app/tabla/tabla.component.css":
/*!*******************************************!*\
  !*** ./src/app/tabla/tabla.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\r\n  font-size: 11px!important;\r\n  padding: 4px!important;\r\n}\r\ntd {\r\n  font-size: 11px!important;\r\n  padding: 4px!important;\r\n}\r\n.table-bordered td, .table-bordered th {\r\n  border: 0px;\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n.table thead th {\r\n  border-bottom: none;\r\n}\r\n.table td, .table th {\r\n  border-top: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGEvdGFibGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGFibGEvdGFibGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcclxuICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDRweCFpbXBvcnRhbnQ7XHJcbn1cclxudGQge1xyXG4gIGZvbnQtc2l6ZTogMTFweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNHB4IWltcG9ydGFudDtcclxufVxyXG4udGFibGUtYm9yZGVyZWQgdGQsIC50YWJsZS1ib3JkZXJlZCB0aCB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tabla/tabla.component.ts":
/*!******************************************!*\
  !*** ./src/app/tabla/tabla.component.ts ***!
  \******************************************/
/*! exports provided: TablaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaComponent", function() { return TablaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var TablaComponent = /** @class */ (function () {
    function TablaComponent(_http, _route, router) {
        this._http = _http;
        this._route = _route;
        this.router = router;
        this.zona = '';
        // alert(this.llamadoDesde);
    }
    TablaComponent.prototype.ngOnInit = function () {
        this.idCampeonato = this._route.snapshot.params.idcamp;
        this.idDivision = this._route.snapshot.params.iddiv;
        this.idZona = this._route.snapshot.params.idzona;
        this.cargaTabla(3, this.idCampeonato, this.idDivision, this.idZona);
    };
    TablaComponent.prototype.cargaTabla = function (op, tor, div, zona) {
        var _this = this;
        // alert(op);
        this.idZona = zona;
        // this._route.snapshot.params.idzona = zona;
        this.buscando = false;
        this.detalleTabla = [];
        this._http.tablaxDivxTor(op, div, tor, zona).subscribe(function (data) {
            _this.detalleTabla = data;
            _this.buscando = true;
            if (data.length <= 0) {
                alert('no encontro nada');
            }
            else {
                _this.nomCampeonato = data[0].Nombre;
                _this.divCampeonato = data[0].Cate;
                // alert (this.nomCampeonato);
            }
        });
    };
    TablaComponent.prototype.cargaUrl = function (op, ruta, tor, div, zona) {
        this.router.navigate(['/' + ruta + '/' + tor + '/' + div + '/' + zona]);
        // this.cargaTabla(op, tor, div, zona);
    };
    TablaComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TablaComponent.prototype, "idCampeonato", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TablaComponent.prototype, "idDivision", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TablaComponent.prototype, "idZona", void 0);
    TablaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabla',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tabla.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabla/tabla.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tabla.component.css */ "./src/app/tabla/tabla.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TablaComponent);
    return TablaComponent;
}());



/***/ }),

/***/ "./src/app/tabladetalle/tabladetalle.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tabladetalle/tabladetalle.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td {\r\n  font-size: 10px!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGFkZXRhbGxlL3RhYmxhZGV0YWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdGFibGFkZXRhbGxlL3RhYmxhZGV0YWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xyXG4gIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/tabladetalle/tabladetalle.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tabladetalle/tabladetalle.component.ts ***!
  \********************************************************/
/*! exports provided: TabladetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabladetalleComponent", function() { return TabladetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/servicio.service */ "./src/app/servicios/servicio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var TabladetalleComponent = /** @class */ (function () {
    function TabladetalleComponent(_http, _route, router) {
        this._http = _http;
        this._route = _route;
        this.router = router;
        this.zona = '';
    }
    TabladetalleComponent.prototype.ngOnInit = function () {
        this.cargaTabla(3, this.idCampeonato, this.idDivision, this.idZona);
    };
    TabladetalleComponent.prototype.cargaTabla = function (op, tor, div, zona) {
        var _this = this;
        // alert(op);
        this.idZona = zona;
        // this._route.snapshot.params.idzona = zona;
        this.buscando = false;
        this.detalleTabla = [];
        this._http.tablaxDivxTor(op, div, tor, zona).subscribe(function (data) {
            _this.detalleTabla = data;
            _this.buscando = true;
            if (data.length <= 0) {
                alert('no encontro nada');
            }
            else {
                _this.nomCampeonato = data[0].Nombre;
                // alert (this.nomCampeonato);
            }
        });
    };
    TabladetalleComponent.prototype.cargaUrl = function (op, tor, div, zona) {
        this.router.navigate(['/tabla/' + tor + '/' + div + '/' + zona]);
        this.cargaTabla(3, tor, div, zona);
    };
    TabladetalleComponent.ctorParameters = function () { return [
        { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabladetalleComponent.prototype, "idCampeonato", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabladetalleComponent.prototype, "idDivision", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabladetalleComponent.prototype, "idZona", void 0);
    TabladetalleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabladetalle',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tabladetalle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabladetalle/tabladetalle.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tabladetalle.component.css */ "./src/app/tabladetalle/tabladetalle.component.css")).default]
        }),
        __metadata("design:paramtypes", [_servicios_servicio_service__WEBPACK_IMPORTED_MODULE_1__["ServicioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TabladetalleComponent);
    return TabladetalleComponent;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.component.css":
/*!***********************************************!*\
  !*** ./src/app/usuario/usuario.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/usuario/usuario.component.ts":
/*!**********************************************!*\
  !*** ./src/app/usuario/usuario.component.ts ***!
  \**********************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent() {
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UsuarioComponent.prototype, "userName", void 0);
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __importDefault(__webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./usuario.component.css */ "./src/app/usuario/usuario.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    urlbase: 'http://localhost/partidos2018/api/torneos.php?'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
if (document['deviceready'] === undefined) {
    document['deviceready'] = setTimeout(onDeviceReady, 0);
}
else {
    document.addEventListener('deviceready', onDeviceReady, false);
}
function onDeviceReady() {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp\www\appfsp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map