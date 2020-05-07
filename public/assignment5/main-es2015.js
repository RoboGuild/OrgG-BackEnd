(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- app.component.html -->\n<app-nav></app-nav>\n<div class=\"white-border\"></div>\n<app-content></app-content>\n<div class=\"white-border\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/content/content.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-detail/employee-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-detail/employee-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n    *ngIf=\"employee\" \n    class=\"center\">\n    <h2>Employee: {{employee.FirstName}} {{employee.LastName}}</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n  </div>\n  <div \n    *ngIf=\"employee\" \n    class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-md-12\">\n    <form #f=\"ngForm\" (ngSubmit) = \"onSubmit(f)\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': fName.errors}\">\n            <label for=\"FirstName\" class=\"control-label\">First Name:</label>\n            <input #fName=\"ngModel\" class=\"form-control\" id=\"FirstName\" type=\"text\"  name=\"FirstName\" [(ngModel)] =\"employee.FirstName\" required />\n            <span *ngIf=\"fName.errors\" class=\"help-block\">First Name is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': lName.errors}\">\n            <label for=\"LastName\"class=\"control-label\">Last Name:</label>\n            <input #lName=\"ngModel\" class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" [(ngModel)] =\"employee.LastName\" required />\n            <span *ngIf=\"lName.errors\" class=\"help-block\">Last Name is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"Position\" class=\"control-label\">Position:</label>\n            <select class=\"form-control\" id=\"Position\"  name=\"Position\">\n              <option *ngFor=\"let pos of positions\" value=\"pos._id\" [selected]=\"pos._id == employee.Position\">{{pos.PositionName}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': bonus.errors}\">\n            <label for=\"SalaryBonus\" class=\"control-label\">Salary Bonus:</label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">$</span>\n              <input #bonus=\"ngModel\" class=\"form-control\" id=\"SalaryBonus\" type=\"number\" name=\"SalaryBonus\"  [(ngModel)] =\"employee.SalaryBonus\" required />             \n            </div>\n            <span *ngIf=\"bonus.errors\" class=\"help-block\">Number is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': aStreet.errors}\">\n            <label for=\"AddressStreet\" class=\"control-label\">Address (Street):</label>\n            <input #aStreet=\"ngModel\" class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" [(ngModel)] =\"employee.AddressStreet\" required />\n            <span *ngIf=\"aStreet.errors\" class=\"help-block\">Street Address is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': aCity.errors}\">\n            <label for=\"AddressCity\" class=\"control-label\">Address (City):</label>\n            <input #aCity=\"ngModel\" class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" [(ngModel)] =\"employee.AddressCity\" required />\n            <span *ngIf=\"aCity.errors\" class=\"help-block\">City is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': aState.errors}\">\n            <label for=\"AddressState\" class=\"control-label\">Address (State):</label>\n            <input #aState=\"ngModel\" class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" [(ngModel)] =\"employee.AddressState\" required />\n            <span *ngIf=\"aState.errors\" class=\"help-block\">State is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': aZip.errors}\">\n            <label for=\"AddressZip\" class=\"control-label\">Address (Zip Code):</label>\n            <input #aZip=\"ngModel\" class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" [(ngModel)] =\"employee.AddressZip\" required/>\n            <span *ngIf=\"aZip.errors\" class=\"help-block\">Zipcode is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\"\n           [ngClass] = \"{'has-error': phone.errors}\">\n            <label for=\"PhoneNum\" class=\"control-label\">Phone Number:</label>\n            <input #phone=\"ngModel\" class=\"form-control\" [class.has-error]=\"phone.errors\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" [(ngModel)] =\"employee.PhoneNum\" \n             pattern=\"^[1][-][(][1-9][0-9][0-9][)][1-9][0-9][0-9][-][0-9][0-9][0-9][0-9]$\" required />\n             <span *ngIf=\"phone.errors\" class=\"help-block\">A Correct Phone Number is Required 1-(###)-(###)-(####)</span>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\"\n            [ngClass] = \"{'has-error': ext.errors}\">\n            <label for=\"Extension\" class=\"control-label\">Extension:</label>\n            <input #ext=\"ngModel\" class=\"form-control\" id=\"Extension\" type=\"number\" name=\"Extension\" [(ngModel)] =\"employee.Extension\" required />\n            <span *ngIf=\"ext.errors\" class=\"help-block\">Number for Extension is Required</span>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"Date\" class=\"control-label\">Hire Date:</label>\n            <input #hired class=\"form-control\" id=\"Date\" name=\"Date\" type=\"text\" value = \"{{hireDate | date: 'longDate'}}\"   readonly />\n          </div>\n        </div>\n      </div>\n      <hr />\n      <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n      <input [disabled] = \"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" />\n      <br />\n      <br />\n    </form>\n  </div>\n  </div>\n  <br />\n  <div *ngIf=\"successMessage\" class=\"alert alert-success\">\n    <strong>Success!</strong> First Name Last Name's information was successfully saved.\n  </div>\n  <div *ngIf=\"failMessage\" class=\"alert alert-danger\">\n    <strong>Error!</strong> First Name Last Name's information could not be saved.\n  </div>\n  </div>\n  <br /><br />\n  <!-- value=\"{{ hireDate | date: 'longDate'}}\" -->\n  <!-- [(ngModel)] =\"employee.HireDate\" -->\n  <!-- \"\\+?[]*[1-9]?[]*\\-?[]*\\(?[]*[1-9][]*(\\d[]*){2}\\)?[]*\\-?[]*(\\d[]*){3}-[]*(\\d[]*){4}\" -->\n  <!-- ^[1][-][(][1-9][0-9][0-9][)][1-9][0-9][0-9][-][0-9][0-9][0-9][0-9]$ -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employees</h2>\n  <p class=\"lead\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed\n    eros tristique bibendum. Nunc quis semper sem.<br />\n    Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.\n  </p>    \n</div> \n\n  \n  \n  <mat-form-field>    \n    <input \n      matInput \n      placeholder=\"Filter\"\n      (keyup)=\"applyFilter($event.target.value)\" >\n  </mat-form-field>\n\n  <table \n      mat-table \n      [dataSource]=\"final\" \n      matSort \n      class=\"mat-elevation-z8\" \n      (matSortChange)=\"sortData($event)\"\n      >\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n      \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"FullName\">\n          <th mat-header-cell mat-sort-header  *matHeaderCellDef > Full Name </th>\n          <td \n            mat-cell *matCellDef=\"let employee\"\n            (click)=\"routeToEmployeeDetails(employee._id)\"\n          > {{ employee.FirstName }} {{ employee.LastName }} </td>\n        </ng-container>\n      \n        <!-- Address Column -->\n        <ng-container matColumnDef=\"AddressStreet\">\n          <th mat-header-cell mat-sort-header *matHeaderCellDef > Address </th>\n          <td \n            mat-cell *matCellDef=\"let employee\"\n            (click)=\"routeToEmployeeDetails(employee._id)\">\n             {{ employee.AddressStreet }}, {{ employee.AddressCity }},\n              {{ employee.AddressState }}, {{ employee.AddressZip }} </td>\n        </ng-container>\n\n         <!-- Position Column -->\n         <ng-container matColumnDef=\"PositionName\">\n            <th mat-header-cell mat-sort-header *matHeaderCellDef > Position </th>\n            <td \n              mat-cell *matCellDef=\"let employee\"\n              (click)=\"routeToEmployeeDetails(employee._id)\">\n               {{ employee.Position.PositionName }} </td>\n          </ng-container>\n      \n        <!-- Phone Column -->\n        <ng-container matColumnDef=\"PhoneNum\">\n          <th mat-header-cell mat-sort-header *matHeaderCellDef> Phone Number </th>\n          <td \n            mat-cell *matCellDef=\"let employee\"\n            (click)=\"routeToEmployeeDetails(employee._id)\">\n            {{employee.PhoneNum}} </td>\n        </ng-container>\n      \n        <!-- Hire Date Column -->\n        <ng-container matColumnDef=\"HireDate\">\n          <th mat-header-cell mat-sort-header *matHeaderCellDef> Hire Date </th>\n          <td \n          mat-cell *matCellDef=\"let employee\"\n          (click)=\"routeToEmployeeDetails(employee._id)\"> \n            {{employee.HireDate | date: \"longDate\"}} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n      </table>\n\n      <mat-paginator [length]=\"numEmployees\"\n              [pageSize]=\"sizeChunk\"\n              [pageSizeOptions]=\"[5, 10, 25, 50, 100]\"\n              (page)=\"pageChanged($event)\"\n              >\n\n      </mat-paginator>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n      <a href=\"https://aniapienio.com\">\n        <div class=\"rowImage\">\n          <img src=\"https://aniapienio.com/assets/quote/1.png\" />\n        </div>\n        <div class=\"rowLink\"> aniapienio.com </div>\n      </a>\n  </div>\n</footer>\n<!--/#footer-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div\n        class=\"item active\"style=\"background-image: url(/assets/images/slider/bg1.jpg)\">\n        <div id=\"car-content\" class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1 id=\"cloud\">\n                  Welcome to RoboGuild                 \n                </h1>\n                <div class=\"robo-icon\"><img src=\"../../assets/images/logo/ROBOG-FAV.png\" alt=\"\"></div>\n                <h2 id=\"cloud\">\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed\n                  diam nonummy nibh euismod tincidunt laoreet\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg2.jpg)\">\n        <div  id=\"car-content\" class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div  class=\"carousel-content\">\n                <h1 id=\"cloud\">Typi non habent claritatem insitam</h1>\n                <h2 id=\"cloud\">\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed\n                  diam nonummy nibh euismod tincidunt laoreet\n                </h2>\n                <!-- <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg3.jpg)\">\n        <div id=\"car-content\" class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1 id=\"cloud\">Mirum est notare quam littera gothica</h1>\n                <h2 id=\"cloud\">\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed\n                  diam nonummy nibh euismod tincidunt laoreet\n                </h2>\n                <!-- <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n    </div>\n    <!--/.carousel-inner-->\n  </div>\n  <!--/.carousel-->\n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\">\n    <i class=\"fa fa-chevron-left\"></i>\n  </a>\n  <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\">\n    <i class=\"fa fa-chevron-right\"></i>\n  </a>\n</section>\n<!--/#main-slider-->\n\n<div class=\"white-border\"></div>\n<section id=\"feature\">\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Featured Services</h2>\n      <p class=\"lead\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio\n        sed eros tristique bibendum. Nunc quis semper sem.<br />\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\">\n            <i class=\"fa fa-desktop\"></i>\n            <h2><a class=\"employee\" mat-button isRoundButton=\"true\" routerLink=\"/employees\">Employees</a></h2>\n            <h3>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non\n              odio sed eros tristique.\n            </h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\">\n            <i class=\"fa fa-cogs\"></i>\n            <h2><a class=\"position\" mat-button isRoundButton=\"true\" routerLink=\"/positions\">Positions</a></h2>\n            <h3>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non\n              odio sed eros tristique.\n            </h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n\n        <!-- <div class=\"col-md-4 col-sm-6\">\n                <div class=\"feature-wrap\"> <i class=\"fa fa-rocket\"></i>\n                  <h2>Brand &amp; Identity</h2>\n                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n                </div>\n              </div> -->\n        <!--/.col-md-4-->\n      </div>\n      <!--/.services-->\n    </div>\n    <!--/.row-->\n  </div>\n  <!--/.container-->\n</section>\n<!--/#feature-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button\n          type=\"button\"\n          class=\"navbar-toggle\"\n          data-toggle=\"collapse\"\n          data-target=\".navbar-collapse\"\n        >\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"index.html\">\n          <button class=\"home\" mat-icon-button>   \n            <img src=\"../../assets/images/logo/ROBOG-M2.png\" alt=\"RoboGuild\">                           \n          </button>         \n        </a>\n      </div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <!-- <a mat-stroked-button routerlink=\"/home\">Home</a>       -->\n          <li routerLinkActive=\"active\"><a class=\"home\" mat-stroked-button isRoundButton=\"true\" routerLink=\"/home\">Home</a></li>\n          <!-- <a routerLink=\"/home\">Home</a> -->\n          <li routerLinkActive=\"active\">\n            <a class=\"employee\" mat-stroked-button isRoundButton=\"true\" routerLink=\"/employees\">Employees</a>\n            <!-- <a routerLink=\"/employees\">Employees</a> -->\n          </li>\n          <li routerLinkActive=\"active\">\n            <a class=\"position\" mat-stroked-button isRoundButton=\"true\" routerLink=\"/positions\">Positions</a>\n            <!-- <a routerLink=\"/positions\">Positions</a> -->\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container-->\n  </nav>\n  <!--/nav-->\n</header>\n<!--/header-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      Not Found\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/position-detail/position-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/position-detail/position-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  *ngIf=\"position\" \n    class=\"center\">\n    <h2>Position: {{position.PositionName}}</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n  </div>\n  <div \n    *ngIf=\"position\" \n    class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form #fp=\"ngForm\" (ngSubmit) = \"onSubmit(fp)\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\"\n                [ngClass] = \"{'has-error': name.errors}\">\n                <label  for=\"PositionName\" class=\"control-label\">Position Name:</label>\n                <input #name=\"ngModel\" class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" [(ngModel)] = \"position.PositionName\" required/>\n                <span *ngIf=\"name.errors\" class=\"help-block\">Position Name is Required</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\"\n              [ngClass] = \"{'has-error': description.errors}\">\n                <label for=\"PositionDescription\" class=\"control-label\">Description:</label>\n                <textarea  #description=\"ngModel\" class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" [(ngModel)] = \"position. PositionDescription\" required></textarea>\n                <span *ngIf=\"description.errors\" class=\"help-block\">Description is Required</span>\n              </div>\n            </div>\n          </div>\n          <hr />\n          <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n          <input [disabled] = \"!fp.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" />\n          <br />\n          <br />\n        </form>\n      </div>\n    </div>\n  <br />\n  <div *ngIf=\"successMessage\" class=\"alert alert-success\">\n    <strong>Success!</strong> Position: \"Position Name\" was successfully saved.\n  </div>\n  <div *ngIf=\"failMessage\" class=\"alert alert-danger\">\n    <strong>Error!</strong> Position: \"Position Name\" could not be saved.\n  </div>\n  </div>\n  <br /><br />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/positions/positions.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/positions/positions.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Positions</h2>\n  <p class=\"lead\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed\n    eros tristique bibendum. Nunc quis semper sem.<br />\n    Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.\n  </p>\n</div>\n\n<table mat-table [dataSource]=\"positions\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Title </th>\n    <td \n      mat-cell *matCellDef=\"let pos\"\n      (click)=\"routeToPosition(pos._id)\"> \n      {{ pos.PositionName }} </td>\n  </ng-container>\n\n  <!-- Address Column -->\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef> Description </th>\n    <td \n    mat-cell *matCellDef=\"let pos\"\n    (click)=\"routeToPosition(pos._id)\"> \n    {{ pos.PositionDescription }} </td>\n  </ng-container>\n\n  <!-- Phone Column -->\n  <ng-container matColumnDef=\"salary\">\n    <th mat-header-cell *matHeaderCellDef> Salary </th>\n    <td \n      mat-cell *matCellDef=\"let pos\"\n      (click)=\"routeToPosition(pos._id)\"> \n     ${{ pos.PositionBaseSalary | number: \"5.2\" }} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n<mat-paginator [length]=\"positions.length\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee-detail/employee-detail.component.ts");
/* harmony import */ var _position_detail_position_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position-detail/position-detail.component */ "./src/app/position-detail/position-detail.component.ts");









const routes = [
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"] },
    { path: 'positions', component: _positions_positions_component__WEBPACK_IMPORTED_MODULE_5__["PositionsComponent"] },
    { path: 'employee/:id', component: _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeDetailComponent"] },
    { path: 'position/:pid', component: _position_detail_position_detail_component__WEBPACK_IMPORTED_MODULE_8__["PositionDetailComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myButton {\r\n  height: 50px;\r\n  font-size: 40px;\r\n}\r\n\r\n.white-border {\r\n  height: 1em;\r\n  background-color: rgb(253, 252, 252);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLndoaXRlLWJvcmRlciB7XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUyLCAyNTIpO1xyXG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'assignment5';
        let path = localStorage.getItem('path');
        if (path) {
            localStorage.removeItem('path');
            this.router.navigate([path]);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position.service */ "./src/app/position.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee-detail/employee-detail.component.ts");
/* harmony import */ var _position_detail_position_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./position-detail/position-detail.component */ "./src/app/position-detail/position-detail.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");


















// Material







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _employees_employees_component__WEBPACK_IMPORTED_MODULE_11__["EmployeesComponent"],
            _positions_positions_component__WEBPACK_IMPORTED_MODULE_12__["PositionsComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
            _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_16__["EmployeeDetailComponent"],
            _position_detail_position_detail_component__WEBPACK_IMPORTED_MODULE_17__["PositionDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"]
        ],
        providers: [_position_service__WEBPACK_IMPORTED_MODULE_14__["PositionService"], _employee_service__WEBPACK_IMPORTED_MODULE_15__["EmployeeService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/content/content.component.html"),
        styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/employee-detail/employee-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-detail/employee-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center { margin-top: 40px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZGV0YWlsL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1kZXRhaWwvZW1wbG95ZWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHsgbWFyZ2luLXRvcDogNDBweDt9Il19 */"

/***/ }),

/***/ "./src/app/employee-detail/employee-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-detail/employee-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../position.service */ "./src/app/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






let EmployeeDetailComponent = class EmployeeDetailComponent {
    constructor(emp_m, pos_m, rm) {
        this.emp_m = emp_m;
        this.pos_m = pos_m;
        this.rm = rm;
        // error state
        this.successMessage = false;
        this.failMessage = false;
    }
    ngOnInit() {
        // [1.] subscribe to [id] parameter
        this.paramSub = this.rm.params.subscribe((params) => {
            this.id = params['id'];
        }); // end of subscription
        // [2.] subscribe to getEmployee(id)
        this.employeeSub = this.emp_m.getEmployee(this.id).subscribe((emp) => {
            this.employee = emp[0];
            this.hireDate = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.employee.HireDate);
        }); // end of subscribe
        // [3.] subscribe to getPositions() 
        this.getPositionsSub = this.pos_m.getPositions().subscribe((pos) => {
            this.positions = pos;
        }); // end of subscription
    } // end of onInit
    onSubmit(f) {
        // [4.] subscribe to saveEmployee(employee)
        this.saveEmployeeSub = this.emp_m.saveEmployee(this.employee).subscribe(() => {
            this.successMessage = true;
            setTimeout(() => {
                this.successMessage = false;
            }, 2500);
        }, (err) => {
            if (err) {
                this.failMessage = true;
            }
            setTimeout(() => {
                this.failMessage = false;
            }, 2500);
        }); // end of subscription 
    } // end of onSubmit
    ngOnDestroy() {
        if (this.paramSub) {
            this.paramSub.unsubscribe();
        }
        if (this.employeeSub) {
            this.employeeSub.unsubscribe();
        }
        if (this.saveEmployeeSub) {
            this.saveEmployeeSub.unsubscribe();
        }
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
    }
}; // end of EmployeeDetail
EmployeeDetailComponent.ctorParameters = () => [
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EmployeeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-detail',
        template: __webpack_require__(/*! raw-loader!./employee-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-detail/employee-detail.component.html"),
        styles: [__webpack_require__(/*! ./employee-detail.component.css */ "./src/app/employee-detail/employee-detail.component.css")]
    })
], EmployeeDetailComponent);



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.url = "https://teams-new-api.herokuapp.com";
    }
    getEmployees() {
        return this.http.get(`${this.url}/employees`);
    }
    saveEmployee(employee) {
        return this.http.put(`${this.url}/employee/` + employee._id, employee);
    }
    getEmployee(id) {
        return this.http.get(`${this.url}/employee-raw/` + id);
    }
}; // end of service
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  margin-top: 40px;\r\n}\r\n.table-responsive {\r\n  margin-bottom: 60px;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n.mat-form-field {\r\n  padding: 1em;\r\n  padding-left: 7em;\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\ntd:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgcGFkZGluZy1sZWZ0OiA3ZW07XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let EmployeesComponent = class EmployeesComponent {
    constructor(m, rt) {
        this.m = m;
        this.rt = rt;
        // data
        this.employees = [];
        this.filtered = [];
        this.final = [];
        this.curChunk = 1;
        this.sizeChunk = 10;
        this.numEmployees = 0;
        // error state
        this.loadingError = false;
        this.loading = false;
        // material
        this.columnsToDisplay = ['FullName', 'AddressStreet', 'PositionName', 'PhoneNum', 'HireDate'];
    }
    routeToEmployeeDetails(id) {
        this.rt.navigate(['/employee', id]);
    }
    sortData(sort) {
        const data = this.employees.slice();
        if (!sort.active || sort.direction === '') {
            this.filtered = data;
            return;
        }
        this.filtered = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'FullName': return compare(a.FirstName, b.FirstName, isAsc);
                case 'AddressStreet': return compare(a.AddressStreet, b.AddressStreet, isAsc);
                case 'PhoneNum': return compare(a.PhoneNum, b.PhoneNum, isAsc);
                case 'HireDate': return compare(a.HireDate, b.HireDate, isAsc);
                default: return 0;
            }
        });
        this.showFinal(this.filtered);
    }
    applyFilter(filterValue) {
        this.filtered = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](this.employees, (emp) => {
            let pattern = new RegExp(filterValue, 'i');
            return (pattern.test(emp.FirstName) || pattern.test(emp.LastName) || pattern.test(emp.Position.PositionName));
        });
        this.curChunk = 1;
        this.numEmployees = this.filtered.length;
        this.showFinal(this.filtered);
    }
    pageChanged(event) {
        // going forward
        if (event.pageIndex > (this.curChunk - 1)) {
            this.curChunk++;
            // going backward  
        }
        else if (event.pageIndex < (this.curChunk - 1)) {
            this.curChunk--;
        }
        else {
            // this.curChunk => event.pageIndex;
        }
        this.sizeChunk = event.pageSize;
        this.showFinal(this.filtered);
        console.log(event);
    }
    showFinal(list) {
        let arry = lodash__WEBPACK_IMPORTED_MODULE_4__["chunk"](list, this.sizeChunk);
        console.log("chunked employees: ");
        console.log(arry);
        console.log("Now Serving: ");
        console.log(this.curChunk - 1);
        this.final = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](arry[this.curChunk - 1]);
    }
    ngOnInit() {
        // [1.] subscribe to getEmployees()   
        this.getEmployeesSub = this.m.getEmployees().subscribe((employees) => {
            this.employees = employees;
            this.filtered = employees;
            this.numEmployees = employees.length;
            this.showFinal(this.filtered);
        }, (error) => {
            if (error) {
                this.loadingError = true;
                console.log(error);
            }
        });
    } // end of onInit
    ngOnDestroy() {
        if (this.getEmployeesSub) {
            this.getEmployeesSub.unsubscribe();
        }
    } // end of onDestroy
}; // end of Component
EmployeesComponent.ctorParameters = () => [
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html"),
        styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
    })
], EmployeesComponent);

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n    height: 120px;\r\n    padding: 1%;\r\n}\r\n\r\n#footer .container {\r\n    width: 100%;\r\n}\r\n\r\na {\r\n    margin: 0 auto;\r\n    width: 200px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    align-content: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n\r\n}\r\n\r\n.rowImage {\r\n    width: 80px;\r\n}\r\n\r\n.rowLink {\r\n    text-align: center;\r\n}\r\n\r\n.rowImage {\r\n    align-self: center;\r\n}\r\n\r\n.rowImage img {\r\n    width: 100%;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    -o-object-position: center;\r\n       object-position: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHdCQUF1QjtZQUF2Qix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFtQjtPQUFuQixtQkFBbUI7SUFDbkIsMEJBQXVCO09BQXZCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4jZm9vdGVyIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnJvd0ltYWdlIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ucm93TGluayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3dJbWFnZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3dJbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n  padding: 70px 0;\r\n}\r\n\r\n.no-margin {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.white-border {\r\n  height: 2em;\r\n  background-color: rgb(231, 229, 229);\r\n}\r\n\r\n.position,\r\n.employee {\r\n  font-size: 1em;\r\n}\r\n\r\n#cloud {\r\n  color: white !important;\r\n}\r\n\r\n#car-content{\r\n  background-color: rgba(0, 0, 0, 0.473);\r\n  height: 100%;\r\n}\r\n\r\n.robo-icon {\r\n  width: 200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.robo-icon img {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcGFkZGluZzogNzBweCAwO1xyXG59XHJcblxyXG4ubm8tbWFyZ2luIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLndoaXRlLWJvcmRlciB7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjI5LCAyMjkpO1xyXG59XHJcblxyXG4ucG9zaXRpb24sXHJcbi5lbXBsb3llZSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbiNjbG91ZCB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjYXItY29udGVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDczKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5yb2JvLWljb24ge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ucm9iby1pY29uIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\r\n    font-size: 1.2em !important; \r\n    color: rgb(120, 160, 170) !important;\r\n}\r\n.employee {\r\n    color: rgb(120, 160, 170) !important;\r\n    font-size: 1.2em;\r\n}\r\nbutton.home {\r\n    width: 200px;\r\n    height: 130px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n}\r\nbutton.home img {\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: -30px;\r\n}\r\n.position {\r\n    color:  rgb(120, 160, 170) !important;\r\n    font-size: 1.2em;\r\n}\r\n.mat-icon{\r\n    font-size: 1.3em !important;\r\n}\r\n.navbar-inverse {\r\n    background-color: white;\r\n    box-shadow: 5px 0px 8px 5px #888888;\r\n}\r\n.navbar-nav {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n}\r\n.navbar-nav > li {\r\n    padding: 0;\r\n}\r\n.navbar.navbar-inverse .navbar-toggle .icon-bar {\r\n    background-color: black;\r\n    height: 5px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n}\r\n.navbar.navbar-inverse .navbar-toggle:focus .icon-bar {\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix1QkFBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBR0E7SUFDSSxzQkFBbUI7T0FBbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQ0FBbUM7QUFDdkM7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBSUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDsgXHJcbiAgICBjb2xvcjogcmdiKDEyMCwgMTYwLCAxNzApICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVtcGxveWVlIHtcclxuICAgIGNvbG9yOiByZ2IoMTIwLCAxNjAsIDE3MCkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbmJ1dHRvbi5ob21lIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbi5ob21lIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcbi5wb3NpdGlvbiB7XHJcbiAgICBjb2xvcjogIHJnYigxMjAsIDE2MCwgMTcwKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLm1hdC1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWludmVyc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDhweCA1cHggIzg4ODg4ODtcclxufVxyXG5cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2YmFyLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi5uYXZiYXIubmF2YmFyLWludmVyc2UgLm5hdmJhci10b2dnbGU6Zm9jdXMgLmljb24tYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/position-detail/position-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/position-detail/position-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center { margin-top: 40px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24tZGV0YWlsL3Bvc2l0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9wb3NpdGlvbi1kZXRhaWwvcG9zaXRpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHsgbWFyZ2luLXRvcDogNDBweDt9Il19 */"

/***/ }),

/***/ "./src/app/position-detail/position-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/position-detail/position-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: PositionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionDetailComponent", function() { return PositionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../position.service */ "./src/app/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PositionDetailComponent = class PositionDetailComponent {
    constructor(pos_m, rm) {
        this.pos_m = pos_m;
        this.rm = rm;
        // error state
        this.successMessage = false;
        this.failMessage = false;
    }
    ngOnInit() {
        // [1.] subscribe to [pid] parameter
        this.paramSub = this.rm.params.subscribe((params) => {
            this.pid = params['pid'];
        }); // end of subscribe
        // [2.] subscribe to getPosition(id)
        this.positionSub = this.pos_m.getPosition(this.pid).subscribe((pos) => {
            this.position = pos[0];
        }); // end of subcribe
    } // end of onInit
    onSubmit(fp) {
        console.log(this.position);
        // [4.] subscribe to savePosition(position)
        this.savePositionSub = this.pos_m.savePosition(this.position).subscribe(() => {
            this.successMessage = true;
            setTimeout(() => {
                this.successMessage = false;
            }, 2500);
        }, (err) => {
            if (err) {
                this.failMessage = true;
            }
            setTimeout(() => {
                this.failMessage = false;
            }, 2500);
        }); // end of subscription 
    } // end of onSubmit
    ngOnDestroy() {
        if (this.paramSub) {
            this.paramSub.unsubscribe();
        }
        if (this.positionSub) {
            this.positionSub.unsubscribe();
        }
        if (this.savePositionSub) {
            this.savePositionSub.unsubscribe();
        }
    } // end of onDestroy
};
PositionDetailComponent.ctorParameters = () => [
    { type: _position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PositionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-position-detail',
        template: __webpack_require__(/*! raw-loader!./position-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/position-detail/position-detail.component.html"),
        styles: [__webpack_require__(/*! ./position-detail.component.css */ "./src/app/position-detail/position-detail.component.css")]
    })
], PositionDetailComponent);



/***/ }),

/***/ "./src/app/position.service.ts":
/*!*************************************!*\
  !*** ./src/app/position.service.ts ***!
  \*************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PositionService = class PositionService {
    constructor(http) {
        this.http = http;
        this.url = "https://teams-new-api.herokuapp.com";
    }
    getPositions() {
        return this.http.get(`${this.url}/positions`);
    }
    savePosition(position) {
        return this.http.put(`${this.url}/position/` + position._id, position);
    }
    // returns an array but with ONE matching Position
    getPosition(pid) {
        return this.http.get(`${this.url}/position/` + pid);
    }
}; // end of service
PositionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PositionService);



/***/ }),

/***/ "./src/app/positions/positions.component.css":
/*!***************************************************!*\
  !*** ./src/app/positions/positions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  margin-top: 40px;\r\n}\r\n.table-responsive {\r\n  margin-bottom: 60px;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\n.spacer {\r\n  height: 7em;\r\n}\r\ntd:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zL3Bvc2l0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcG9zaXRpb25zL3Bvc2l0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBoZWlnaHQ6IDdlbTtcclxufVxyXG5cclxudGQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/positions/positions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/positions/positions.component.ts ***!
  \**************************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../position.service */ "./src/app/position.service.ts");




let PositionsComponent = class PositionsComponent {
    constructor(m, rt) {
        this.m = m;
        this.rt = rt;
        // data
        this.positions = [];
        // error state
        this.loadingError = false;
        // material
        this.columnsToDisplay = ['title', 'description', 'salary'];
    }
    routeToPosition(pid) {
        this.rt.navigate(['/position', pid]);
    }
    ngOnInit() {
        // [1.] subscribe to getPositions()
        this.getPositionSub = this.m.getPositions().subscribe((pos) => {
            this.positions = pos;
        });
    } // end of onInit
    ngOnDestroy() {
        if (this.getPositionSub) {
            this.getPositionSub.unsubscribe();
        }
    } // end of onDestroy
};
PositionsComponent.ctorParameters = () => [
    { type: _position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-positions',
        template: __webpack_require__(/*! raw-loader!./positions.component.html */ "./node_modules/raw-loader/index.js!./src/app/positions/positions.component.html"),
        styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/positions/positions.component.css")]
    })
], PositionsComponent);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aniap\OneDrive\Desktop\Projects\RoboGuild\OrgG\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map