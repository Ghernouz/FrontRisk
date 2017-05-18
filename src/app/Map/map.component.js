"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var MapComponent = MapComponent_1 = (function () {
    function MapComponent(renderer) {
        this.renderer = renderer;
        this.country = "";
        this.orderList = [];
        this.mode = 'transfer';
        this.playerinit = 'Asia';
        this.iainit = 'Africa';
        this.havebeenclicked = false;
        this.rangemodified = false;
        this.soldiersend = "";
        this.countryList = [];
        this.renfort = 5;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countries = this.el.nativeElement.querySelectorAll('.country');
        this.setBorder();
        this.setEvent();
        this.setOwner();
        this.countries = this.el.nativeElement.querySelectorAll('.country');
        this.createList(this.countries);
        console.log(this.countryList);
        this.countries.forEach(function (element) { return _this.displayNumber(element.getAttribute('id')); });
    };
    MapComponent.prototype.createList = function (countries) {
        var This = this;
        countries.forEach(function (element) {
            var id = element.getAttribute('id');
            var soldier = element.getAttribute('soldier');
            This.countryList[id] = soldier;
        });
    };
    MapComponent.prototype.setRenfort = function () {
        this.mode = "renfort";
        this.Cancel();
    };
    MapComponent.prototype.setTransfer = function () {
        this.mode = "transfer";
    };
    MapComponent.prototype.setCommit = function () {
        this.mode = "commit";
    };
    MapComponent.prototype.setBorder = function () {
        this.countries[0].borders = ["Egypt", "Congo", "Madagascar", "South Africa", "North Africa", "Middle East"];
        this.countries[1].borders = ["East Africa", "North Africa", "Middle East", "Southern Europe"];
        this.countries[2].borders = ["South Africa", "North Africa", "East Africa"];
        this.countries[3].borders = ["South Africa", "East Africa"];
        this.countries[4].borders = ["Madagascar", "East Africa", "Congo"];
        this.countries[5].borders = ["East Africa", "Egypt", "Western Europe", "Southern Europe", "Brazil", "Congo"];
        this.countries[6].borders = ["Middle East", "China", "India", "Ural", "Ukraine"];
        this.countries[7].borders = ["Middle East", "Afghanistan", "China", "Siam"];
        this.countries[8].borders = ["Mongolia", "Siberia", "Kamchatka", "Yakutsk"];
        this.countries[9].borders = ["Japan", "Alaska", "Irkutsk", "Yakutsk", "Mongolia"];
        this.countries[10].borders = ["Egypt", "Ukraine", "Afghanistan", "East Africa", "India", "Southern Europe"];
        this.countries[11].borders = ["Japan", "Siberia", "Kamchatka", "Irkutsk", "China"];
        this.countries[12].borders = ["Indonesia", "India", "China"];
        this.countries[13].borders = ["Siberia", "Ural", "Afghanistan", "India", "Siam", "Mongolia"];
        this.countries[14].borders = ["Kamchatka", "Mongolia"];
        this.countries[15].borders = ["Yakutsk", "Ural", "Irkutsk", "China", "Mongolia"];
        this.countries[16].borders = ["Siberia", "Afghanistan", "China", "Ukraine"];
        this.countries[17].borders = ["Kamchatka", "Irkutsk", "Siberia"];
        this.countries[18].borders = ["Western Austrailia", "New Guniea"];
        this.countries[19].borders = ["Indonesia", "Eastern Austrailia"];
        this.countries[20].borders = ["Indonesia", "Eastern Austrailia", "New Guniea"];
        this.countries[21].borders = ["Siam", "Western Austrailia", "New Guniea"];
        this.countries[22].borders = ["Western Europe", "Northern Europe", "Scandinavia", "Iceland"];
        this.countries[23].borders = ["Greenland", "Great Britain", "Scandinavia"];
        this.countries[24].borders = ["Ukraine", "Southern Europe", "Western Europe", "Great Britain", "Scandinavia"];
        this.countries[25].borders = ["Ukraine", "Northern Europe", "Great Britain", "Iceland"];
        this.countries[26].borders = ["North Africa", "Northern Europe", "Middle East", "Ukraine", "Western Europe", "Egypt"];
        this.countries[27].borders = ["Ural", "Northern Europe", "Middle East", "Scandinavia", "Southern Europe", "Afghanistan"];
        this.countries[28].borders = ["Northern Europe", "Southern Europe", "Great Britain", "North Africa"];
        this.countries[29].borders = ["Kamchatka", "Northwest Territory", "Alberta"];
        this.countries[30].borders = ["Western United States", "Alaska", "Northwest Territory", "Ontario"];
        this.countries[31].borders = ["Venezuela", "Eastern United States", "Western United States"];
        this.countries[32].borders = ["Western United States", "Central America", "Quebec", "Ontario"];
        this.countries[33].borders = ["Northwest Territory", "Quebec", "Iceland"];
        this.countries[34].borders = ["Alberta", "Alaska", "Greenland", "Quebec", "Ontario"];
        this.countries[35].borders = ["Northwest Territory", "Quebec", "Eastern United States", "Western United States", "Alberta", "Greenland"];
        this.countries[36].borders = ["Central America", "Eastern United States", "Ontario", "Alberta"];
        this.countries[37].borders = ["Greenland", "Northwest Territory", "Ontario", "Eastern United States"];
        this.countries[38].borders = ["Brazil", "Peru"];
        this.countries[39].borders = ["Argentina", "Peru", "Venezuela", "North Africa"];
        this.countries[40].borders = ["Argentina", "Brazil", "Venezuela"];
        this.countries[41].borders = ["Brazil", "Peru", "Central America"];
        this.setBorderDom();
    };
    MapComponent.prototype.setBorderDom = function () {
        var _this = this;
        this.countries.forEach(function (element) {
            return _this.renderer.setAttribute(element, "borders", element.borders);
        });
    };
    MapComponent.prototype.setEvent = function () {
        var _this = this;
        var This = this;
        this.countries.forEach(function (element) { return _this.renderer.listen(element, 'mouseover', function (event) { return _this.MouseOver(event); }); });
        this.countries.forEach(function (element) { return _this.renderer.listen(element, 'mouseout', function (event) { return _this.MouseOut(event); }); });
        this.countries.forEach(function (element) { return _this.renderer.listen(element, 'click', function (event) { return _this.OnClick(event); }); });
        this.renderer.listen(document.getElementById('Movemouseoveracountry'), 'click', function (event) { if (_this.havebeenclicked == true)
            $('line').remove(); _this.havebeenclicked = false; });
    };
    MapComponent.prototype.drawArrow = function (country, neighbour) {
    };
    MapComponent.prototype.setOwner = function () {
        this.el.nativeElement.querySelectorAll('.country').forEach(function (element) {
            element.setAttribute('player', 0);
            element.setAttribute('soldier', 2);
        });
        var g = this.el.nativeElement.getElementById(this.playerinit).childNodes.forEach(function (element) {
            if (element.setAttribute) {
                element.setAttribute('player', 1);
                element.setAttribute('soldier', 1);
            }
        });
        var g = this.el.nativeElement.getElementById(this.iainit).childNodes.forEach(function (element) {
            if (element.setAttribute) {
                element.setAttribute('player', 2);
                element.setAttribute('soldier', 0);
            }
        });
    };
    MapComponent.prototype.onSubmit = function (form) {
        event.preventDefault();
        var formobject = form.value;
        if (this.rangemodified == false) {
            formobject.soldierrange = this.soldier;
            this.soldiersend = this.soldier;
            this.rangemodified = true;
        }
        if (formobject.soldierrange != 0) {
            if (this.currentColor == 'red') {
                var order = { type: 'Attaque', country: this.countryName, destination: this.countryNameD, number: formobject.soldierrange };
            }
            else {
                var order = { type: 'Déplacement', country: this.countryName, destination: this.countryNameD, number: formobject.soldierrange };
            }
            this.countryList[this.countryName] -= formobject.soldierrange;
            this.orderList.push(order);
        }
        console.log(formobject.soldierrange);
        console.log(this.countryName + ' -> ' + this.countryNameD);
        console.log(JSON.stringify(order));
        console.log(JSON.stringify(this.orderList));
        this.rangemodified = false;
        this.confirm = false;
    };
    MapComponent.prototype.displayNumber = function (country) {
        var _this = this;
        var elem = document.querySelector("path[id='" + country + "']");
        var xy = MapComponent_1.getCenter(elem.getBBox());
        var myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        console.log('elem');
        myCircle.setAttributeNS(null, "cx", '' + xy.x);
        myCircle.setAttributeNS(null, "cy", '' + xy.y);
        myCircle.setAttributeNS(null, "r", '15');
        myCircle.setAttributeNS(null, "fill", "white");
        myCircle.setAttribute('id', country + '/circle');
        myCircle.addEventListener('click', function (event) { return _this.deployclick(event); });
        this.el.nativeElement.appendChild(myCircle);
        var elem = document.querySelector("circle[id='" + country + "/circle" + "']");
        var xy2 = elem.getBBox();
        var newlabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        newlabel.setAttribute("transform", "translate(" + (xy2.x - 6 + xy2.width / 2) + " " + (xy2.y + 4 + xy2.height / 2) + ")");
        newlabel.setAttribute('font-family', 'Verdana');
        newlabel.setAttribute('font-size', '14');
        newlabel.setAttribute('fill', 'black');
        newlabel.setAttribute('id', country + '/label');
        newlabel.textContent = this.countryList[country];
        newlabel.addEventListener('click', function (event) { return _this.deployclick(event); });
        this.el.nativeElement.appendChild(newlabel);
    };
    MapComponent.prototype.MouseOver = function (evt) {
        var _this = this;
        evt.target.setAttribute("fill", "red");
        var a = evt.target.getAttribute("borders");
        this.country = evt.target.getAttribute("id");
        var neighbour = a.split(",");
        neighbour.forEach(function (neighbour) { return _this.el.nativeElement.getElementById(neighbour).setAttribute("fill", "green"); });
    };
    MapComponent.prototype.MouseOut = function (evt) {
        var _this = this;
        evt.target.setAttribute("fill", "white");
        this.country = "";
        var a = evt.target.getAttribute("borders");
        var neighbour = a.split(",");
        neighbour.forEach(function (neighbour) { return _this.el.nativeElement.getElementById(neighbour).setAttribute("fill", "white"); });
    };
    MapComponent.prototype.Cancel = function () {
        $('line').remove();
        this.confirm = false;
        this.rangemodified = false;
        this.havebeenclicked = false;
    };
    MapComponent.prototype.deployclick = function (e) {
        var a = e.target.getAttribute('id');
        var b = a.split('/');
        var evt = Event;
        evt.target = document.querySelector("path[id='" + b[0] + "'");
        this.OnClick(evt);
    };
    MapComponent.prototype.OnClick = function (evt) {
        var _this = this;
        console.log(evt);
        $('line').remove();
        if (this.mode == 'transfer') {
            this.target = evt.target;
            if (this.havebeenclicked == true) {
                if (this.neighbour.indexOf(evt.target.getAttribute('id')) != -1) {
                    console.log('ordercreate');
                    this.displayTransit(this.lasttarget, this.target);
                }
                else {
                    console.log('destroyyy');
                    this.countryName = '';
                    this.countryNameD = '';
                    this.confirm = false;
                }
                this.havebeenclicked = false;
            }
            else {
                if (this.target.getAttribute('player') == 1 && this.countryList[this.target.getAttribute('id')] != "0") {
                    this.havebeenclicked = true;
                    this.lasttarget = this.target;
                    var rectTarget = this.target.getBBox();
                    if (this.target.getAttribute('id') == "Kamchatka" || this.target.getAttribute('id') == "Alaska") {
                        if (this.target.getAttribute('id') == "Kamchatka") {
                            var a = evt.target.getAttribute("borders");
                            this.neighbour = a.split(",");
                            this.neighbour.forEach(function (neighbour) {
                                if (document.getElementById(neighbour).getAttribute('player') === '1') {
                                    var color = 'green';
                                }
                                else {
                                    var color = 'red';
                                }
                                if (neighbour == "Alaska") {
                                    var b = document.
                                        createElementNS('http://www.w3.org/2000/svg', 'line');
                                    b.setAttribute('x1', '' + MapComponent_1.getCenter(rectTarget).x);
                                    b.setAttribute('y1', '' + MapComponent_1.getCenter(rectTarget).y);
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x2', '' + MapComponent_1.getCenter(rectTarget).x * 1.10);
                                    b.setAttribute('y2', '' + MapComponent_1.getCenter(rectTarget).y);
                                    b.setAttribute('stroke', color);
                                    b.setAttribute('stroke-width', '3');
                                    _this.el.nativeElement.appendChild(b);
                                    var b = document.
                                        createElementNS('http://www.w3.org/2000/svg', 'line');
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x1', '' + (MapComponent_1.getCenter(n.getBBox()).x * 0.1));
                                    b.setAttribute('y1', '' + MapComponent_1.getCenter(n.getBBox()).y);
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x2', '' + MapComponent_1.getCenter(n.getBBox()).x);
                                    b.setAttribute('y2', '' + MapComponent_1.getCenter(n.getBBox()).y);
                                    b.setAttribute('stroke', color);
                                    b.setAttribute('stroke-width', '3');
                                    _this.el.nativeElement.appendChild(b);
                                }
                                else {
                                    var b = document.
                                        createElementNS('http://www.w3.org/2000/svg', 'line');
                                    b.setAttribute('x1', '' + MapComponent_1.getCenter(rectTarget).x);
                                    b.setAttribute('y1', '' + MapComponent_1.getCenter(rectTarget).y);
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x2', '' + MapComponent_1.getCenter(n.getBBox()).x);
                                    b.setAttribute('y2', '' + MapComponent_1.getCenter(n.getBBox()).y);
                                    b.setAttribute('stroke', color);
                                    b.setAttribute('stroke-width', '3');
                                    _this.el.nativeElement.appendChild(b);
                                }
                            });
                        }
                        else {
                            var a = evt.target.getAttribute("borders");
                            this.neighbour = a.split(",");
                            this.neighbour.forEach(function (neighbour) {
                                if (neighbour == "Kamchatka") {
                                    if (document.getElementById(neighbour).getAttribute('player') === '1') {
                                        var color = 'green';
                                    }
                                    else {
                                        var color = 'red';
                                    }
                                    var b = document.
                                        createElementNS('http://www.w3.org/2000/svg', 'line');
                                    b.setAttribute('x1', '' + MapComponent_1.getCenter(rectTarget).x);
                                    b.setAttribute('y1', '' + MapComponent_1.getCenter(rectTarget).y);
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x2', '' + MapComponent_1.getCenter(rectTarget).x * 0.1);
                                    b.setAttribute('y2', '' + MapComponent_1.getCenter(rectTarget).y);
                                    b.setAttribute('stroke', color);
                                    b.setAttribute('stroke-width', '3');
                                    _this.el.nativeElement.appendChild(b);
                                    var b = document.
                                        createElementNS('http://www.w3.org/2000/svg', 'line');
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x1', '' + (MapComponent_1.getCenter(n.getBBox()).x * 1.1));
                                    b.setAttribute('y1', '' + MapComponent_1.getCenter(n.getBBox()).y);
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x2', '' + MapComponent_1.getCenter(n.getBBox()).x);
                                    b.setAttribute('y2', '' + MapComponent_1.getCenter(n.getBBox()).y);
                                    b.setAttribute('stroke', color);
                                    b.setAttribute('stroke-width', '3');
                                    _this.el.nativeElement.appendChild(b);
                                }
                                else {
                                    if (document.getElementById(neighbour).getAttribute('player') === '1') {
                                        var color = 'green';
                                    }
                                    else {
                                        var color = 'red';
                                    }
                                    var b = document.
                                        createElementNS('http://www.w3.org/2000/svg', 'line');
                                    b.setAttribute('x1', '' + MapComponent_1.getCenter(rectTarget).x);
                                    b.setAttribute('y1', '' + MapComponent_1.getCenter(rectTarget).y);
                                    var n = document.querySelector("path[id='" + neighbour + "']");
                                    b.setAttribute('x2', '' + MapComponent_1.getCenter(n.getBBox()).x);
                                    b.setAttribute('y2', '' + MapComponent_1.getCenter(n.getBBox()).y);
                                    b.setAttribute('stroke', color);
                                    b.setAttribute('stroke-width', '3');
                                    _this.el.nativeElement.appendChild(b);
                                }
                            });
                        }
                    }
                    else {
                        var a = evt.target.getAttribute("borders");
                        this.neighbour = a.split(",");
                        this.neighbour.forEach(function (neighbour) {
                            if (document.getElementById(neighbour).getAttribute('player') === '1') {
                                var color = 'green';
                            }
                            else {
                                var color = 'red';
                            }
                            var b = document.
                                createElementNS('http://www.w3.org/2000/svg', 'line');
                            b.setAttribute('x1', '' + MapComponent_1.getCenter(rectTarget).x);
                            b.setAttribute('y1', '' + MapComponent_1.getCenter(rectTarget).y);
                            var n = document.querySelector("path[id='" + neighbour + "']");
                            // if (n.getAttribute())
                            b.setAttribute('x2', '' + MapComponent_1.getCenter(n.getBBox()).x);
                            b.setAttribute('y2', '' + MapComponent_1.getCenter(n.getBBox()).y);
                            b.setAttribute('stroke', color);
                            b.setAttribute('stroke-width', '3');
                            b.setAttribute("stroke-opacity", '0.3');
                            _this.el.nativeElement.appendChild(b);
                        });
                    }
                }
            }
        }
        else {
            if (evt.target.getAttribute("player") == "1") {
                if (this.renfort > 0) {
                    this.target = evt.target;
                    var country = evt.target.getAttribute("id");
                    this.countryList[country] = Number(this.countryList[country]) + 1;
                    this.renfort--;
                    document.querySelector("text[id='" + country + "/label" + "']").textContent = this.countryList[country];
                    var order = { type: 'Renfort', country: country, destination: country, number: 1 };
                    this.orderList.push(order);
                }
            }
        }
    };
    MapComponent.getCenter = function (rect) {
        var x = rect.x + (rect.width / 2);
        var y = rect.y + (rect.height / 2);
        return { x: x, y: y };
    };
    MapComponent.prototype.displayTransit = function (source, destination) {
        this.soldier = this.countryList[source.getAttribute('id')];
        if (this.soldier % 2 == 0) {
            var a = Number(this.soldier) / 2;
        }
        else {
            var a = Math.trunc(Number(this.soldier) / 2) + 1;
        }
        this.soldiersend = String(a);
        this.countryNameD = destination.getAttribute('id');
        this.countryName = source.getAttribute('id');
        if (destination.getAttribute('player') == '1') {
            this.currentColor = 'green';
        }
        else {
            this.currentColor = 'red';
        }
        this.confirm = true;
    };
    MapComponent.prototype.bidouille = function (value) {
        this.rangemodified = true;
        this.soldiersend = $('input[name=soldierrange]').val();
    };
    MapComponent.prototype.getCurrentColor = function () {
        return this.currentColor;
    };
    return MapComponent;
}());
__decorate([
    core_3.ViewChild('mysvg'),
    __metadata("design:type", core_2.ElementRef)
], MapComponent.prototype, "el", void 0);
MapComponent = MapComponent_1 = __decorate([
    core_1.Component({
        selector: 'my-map',
        moduleId: module.id,
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.css']
    }),
    __metadata("design:paramtypes", [core_2.Renderer2])
], MapComponent);
exports.MapComponent = MapComponent;
var Country = (function () {
    function Country(soldier, continent, neighbour) {
        soldier = this.soldier;
        continent = this.continent;
        neighbour = this.neighbour;
    }
    return Country;
}());
exports.Country = Country;
var MapComponent_1;
//# sourceMappingURL=map.component.js.map