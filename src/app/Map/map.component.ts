import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ElementRef, Renderer2, Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'my-map',
  moduleId: module.id,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('mysvg') el: ElementRef;

  countries: any;
  country: any = "";
  neighbour: string[];
  orderList: Order[] = [];
  mode: String = 'transfer';
  target: any;
  playerinit: string = 'Asia';
  iainit: string = 'Africa';
  havebeenclicked: boolean = false;
  lasttarget: any;
  confirm: any;
  soldier: any;
  countryName: any;
  rangemodified: any = false;
  soldiersend: string = "";
  countryNameD: string;
  currentColor: any;
  countryList: any = [];
  renfort: number = 5;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.countries = this.el.nativeElement.querySelectorAll('.country');
    this.setBorder();
    this.setEvent();
    this.setOwner();
    this.countries = this.el.nativeElement.querySelectorAll('.country');
    this.createList(this.countries);
    console.log(this.countryList);
    this.countries.forEach((element: any) => this.displayNumber(element.getAttribute('id')));
  }

  private createList(countries: any) {
    let This = this;
    countries.forEach((element: any) => {
      var id = element.getAttribute('id');
      var soldier : number = element.getAttribute('soldier');
      This.countryList[id] = soldier;
    }
    );
  }
  private setRenfort() {
    this.mode = "renfort";
    this.Cancel();
  }
  private setTransfer() {
    this.mode = "transfer";
  }
  private setCommit() {
    this.mode = "commit";

  }
  private setBorder(): void {
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
    this.countries[35].borders = ["Northwest Territory", "Quebec", "Eastern United States", "Western United States", "Alberta", "Greenland"]
    this.countries[36].borders = ["Central America", "Eastern United States", "Ontario", "Alberta"]
    this.countries[37].borders = ["Greenland", "Northwest Territory", "Ontario", "Eastern United States"]
    this.countries[38].borders = ["Brazil", "Peru"];
    this.countries[39].borders = ["Argentina", "Peru", "Venezuela", "North Africa"];
    this.countries[40].borders = ["Argentina", "Brazil", "Venezuela"];
    this.countries[41].borders = ["Brazil", "Peru", "Central America"];
    this.setBorderDom();

  }
  private setBorderDom() {
    this.countries.forEach((element: any) =>
      this.renderer.setAttribute(element, "borders", element.borders));
  }
  private setEvent() {
    var This = this;
    this.countries.forEach((element: Node) => this.renderer.listen(element, 'mouseover', (event) => this.MouseOver(event)));
    this.countries.forEach((element: Node) => this.renderer.listen(element, 'mouseout', (event) => this.MouseOut(event)));
    this.countries.forEach((element: Node) => this.renderer.listen(element, 'click', (event) => this.OnClick(event)));
    this.renderer.listen(document.getElementById('Movemouseoveracountry'), 'click', (event) => { if (this.havebeenclicked == true) $('line').remove(); this.havebeenclicked = false; });
  }

  private drawArrow(country: Node, neighbour: any) {

  }

  private setOwner() {
    this.el.nativeElement.querySelectorAll('.country').forEach((element: any) => {
      element.setAttribute('player', 0);
      element.setAttribute('soldier', 2);
    });

    var g = this.el.nativeElement.getElementById(this.playerinit).childNodes.forEach((element: any) => {
      if (element.setAttribute) {
        element.setAttribute('player', 1);
        element.setAttribute('soldier', 1);
      }

    });

    var g = this.el.nativeElement.getElementById(this.iainit).childNodes.forEach((element: any) => {
      if (element.setAttribute) {
        element.setAttribute('player', 2);
        element.setAttribute('soldier', 0);
      }

    });
  }

  public onSubmit(form: NgForm) {
    event.preventDefault();
    var formobject = form.value;
    if (this.rangemodified == false) {
      formobject.soldierrange = this.soldier;
      this.soldiersend = this.soldier;
      this.rangemodified = true;
    }
    if (formobject.soldierrange != 0) {
      if (this.currentColor == 'red') {
        var order: Order = { type: 'Attaque', country: this.countryName, destination: this.countryNameD, number: formobject.soldierrange };
      }
      else {
        var order: Order = { type: 'Déplacement', country: this.countryName, destination: this.countryNameD, number: formobject.soldierrange };
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
  }
  public displayNumber(country: string) {
    var elem: any = document.querySelector("path[id='" + country + "']");

    var xy = MapComponent.getCenter(elem.getBBox());
    var myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    console.log('elem');

    myCircle.setAttributeNS(null, "cx", '' + xy.x);

    myCircle.setAttributeNS(null, "cy", '' + xy.y)
    myCircle.setAttributeNS(null, "r", '15');
    myCircle.setAttributeNS(null, "fill", "white");
    myCircle.setAttribute('id', country + '/circle');
    myCircle.addEventListener('click', (event) => this.deployclick(event));
    this.el.nativeElement.appendChild(myCircle);

    var elem: any = document.querySelector("circle[id='" + country + `/circle` + "']");
    var xy2 = elem.getBBox();

    var newlabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    newlabel.setAttribute("transform", "translate(" + (xy2.x - 6 + xy2.width / 2) + " " + (xy2.y + 4 + xy2.height / 2) + ")");
    newlabel.setAttribute('font-family', 'Verdana');
    newlabel.setAttribute('font-size', '14');
    newlabel.setAttribute('fill', 'black');
    newlabel.setAttribute('id', country + '/label');
    newlabel.textContent = this.countryList[country];
    newlabel.addEventListener('click', (event) => this.deployclick(event));
    this.el.nativeElement.appendChild(newlabel);
  }

  public MouseOver(evt: any) {
    evt.target.setAttribute("fill", "red");
    var a = evt.target.getAttribute("borders");
    this.country = evt.target.getAttribute("id");
    var neighbour = a.split(",");
    neighbour.forEach((neighbour: any) => this.el.nativeElement.getElementById(neighbour).setAttribute("fill", "green"));
  }
  public MouseOut(evt: any) {
    evt.target.setAttribute("fill", "white");
    this.country = "";
    var a = evt.target.getAttribute("borders");
    var neighbour = a.split(",");
    neighbour.forEach((neighbour: any) => this.el.nativeElement.getElementById(neighbour).setAttribute("fill", "white"));
  }

  public Cancel() {
    $('line').remove();
    this.confirm = false;
    this.rangemodified = false;
    this.havebeenclicked = false;
  }
  public deployclick(e: any) {
    var a = e.target.getAttribute('id');
    var b = a.split('/');
    let evt: any= Event;
    evt.target = document.querySelector("path[id='" + b[0] + "'");
    this.OnClick(evt);
  }
  public OnClick(evt: any) {
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
        if (this.target.getAttribute('player') == 1 && this.countryList[this.target.getAttribute('id')] != "0") { //owner
          this.havebeenclicked = true;
          this.lasttarget = this.target;
          var rectTarget = this.target.getBBox();
          if (this.target.getAttribute('id') == "Kamchatka" || this.target.getAttribute('id') == "Alaska") {
            if (this.target.getAttribute('id') == "Kamchatka") {
              var a = evt.target.getAttribute("borders");
              this.neighbour = a.split(",");
              this.neighbour.forEach((neighbour: any) => {
                if (document.getElementById(neighbour).getAttribute('player') === '1') {
                  var color = 'green';
                }
                else {
                  var color = 'red';
                }
                if (neighbour == "Alaska") {

                  var b: SVGLineElement = document.
                    createElementNS('http://www.w3.org/2000/svg', 'line');
                  b.setAttribute('x1', '' + MapComponent.getCenter(rectTarget).x);
                  b.setAttribute('y1', '' + MapComponent.getCenter(rectTarget).y);
                  var n: any = document.querySelector("path[id='" + neighbour + "']");
                  b.setAttribute('x2', '' + MapComponent.getCenter(rectTarget).x * 1.10);
                  b.setAttribute('y2', '' + MapComponent.getCenter(rectTarget).y);
                  b.setAttribute('stroke', color);
                  b.setAttribute('stroke-width', '3');
                  this.el.nativeElement.appendChild(b);
                  var b: SVGLineElement = document.
                    createElementNS('http://www.w3.org/2000/svg', 'line');
                  var n: any = document.querySelector("path[id='" + neighbour + "']");
                  b.setAttribute('x1', '' + (MapComponent.getCenter(n.getBBox()).x * 0.1));
                  b.setAttribute('y1', '' + MapComponent.getCenter(n.getBBox()).y);
                  var n: any = document.querySelector("path[id='" + neighbour + "']");
                  b.setAttribute('x2', '' + MapComponent.getCenter(n.getBBox()).x);
                  b.setAttribute('y2', '' + MapComponent.getCenter(n.getBBox()).y);
                  b.setAttribute('stroke', color);
                  b.setAttribute('stroke-width', '3');
                  this.el.nativeElement.appendChild(b);
                } else {
                  var b: SVGLineElement = document.
                    createElementNS('http://www.w3.org/2000/svg', 'line');
                  b.setAttribute('x1', '' + MapComponent.getCenter(rectTarget).x)
                  b.setAttribute('y1', '' + MapComponent.getCenter(rectTarget).y);
                  var n: any = document.querySelector("path[id='" + neighbour + "']");
                  b.setAttribute('x2', '' + MapComponent.getCenter(n.getBBox()).x);
                  b.setAttribute('y2', '' + MapComponent.getCenter(n.getBBox()).y);
                  b.setAttribute('stroke', color);
                  b.setAttribute('stroke-width', '3');
                  this.el.nativeElement.appendChild(b);
                }
              });
            }
            else {

              var a = evt.target.getAttribute("borders");
              this.neighbour = a.split(",");

              this.neighbour.forEach((neighbour: any) => {
                if (neighbour == "Kamchatka") {
                  if (document.getElementById(neighbour).getAttribute('player') === '1') {
                    var color = 'green';
                  }
                  else {
                    var color = 'red';
                  }
                  var b: SVGLineElement = document.
                    createElementNS('http://www.w3.org/2000/svg', 'line');
                  b.setAttribute('x1', '' + MapComponent.getCenter(rectTarget).x);
                  b.setAttribute('y1', '' + MapComponent.getCenter(rectTarget).y);
                  var n: any = document.querySelector("path[id='" + neighbour + "']");
                  b.setAttribute('x2', '' + MapComponent.getCenter(rectTarget).x * 0.1);
                  b.setAttribute('y2', '' + MapComponent.getCenter(rectTarget).y);
                  b.setAttribute('stroke', color);
                  b.setAttribute('stroke-width', '3');
                  this.el.nativeElement.appendChild(b);
                  var b: SVGLineElement = document.
                    createElementNS('http://www.w3.org/2000/svg', 'line');
                  var n: any = document.querySelector("path[id='" + neighbour + "']");
                  b.setAttribute('x1', '' + (MapComponent.getCenter(n.getBBox()).x * 1.1));
                  b.setAttribute('y1', '' + MapComponent.getCenter(n.getBBox()).y);
                  var n: any = document.querySelector("path[id='" + neighbour + "']");

                  b.setAttribute('x2', '' + MapComponent.getCenter(n.getBBox()).x);
                  b.setAttribute('y2', '' + MapComponent.getCenter(n.getBBox()).y);
                  b.setAttribute('stroke', color);
                  b.setAttribute('stroke-width', '3');
                  this.el.nativeElement.appendChild(b);
                } else {
                  if (document.getElementById(neighbour).getAttribute('player') === '1') {
                    var color = 'green';
                  }
                  else {
                    var color = 'red';
                  }
                  var b: SVGLineElement = document.
                    createElementNS('http://www.w3.org/2000/svg', 'line');
                  b.setAttribute('x1', '' + MapComponent.getCenter(rectTarget).x)
                  b.setAttribute('y1', '' + MapComponent.getCenter(rectTarget).y);
                  var n: any = document.querySelector("path[id='" + neighbour + "']");
                  b.setAttribute('x2', '' + MapComponent.getCenter(n.getBBox()).x);
                  b.setAttribute('y2', '' + MapComponent.getCenter(n.getBBox()).y);
                  b.setAttribute('stroke', color);
                  b.setAttribute('stroke-width', '3');
                  this.el.nativeElement.appendChild(b);
                }
              });

            }
          }
          else {
            var a = evt.target.getAttribute("borders");
            this.neighbour = a.split(",");
            this.neighbour.forEach((neighbour: any) => {
              if (document.getElementById(neighbour).getAttribute('player') === '1') {
                var color = 'green';
              }
              else {
                var color = 'red';
              }
              var b: SVGLineElement = document.
                createElementNS('http://www.w3.org/2000/svg', 'line');
              b.setAttribute('x1', '' + MapComponent.getCenter(rectTarget).x)
              b.setAttribute('y1', '' + MapComponent.getCenter(rectTarget).y);
              var n: any = document.querySelector("path[id='" + neighbour + "']");
              // if (n.getAttribute())
              b.setAttribute('x2', '' + MapComponent.getCenter(n.getBBox()).x);
              b.setAttribute('y2', '' + MapComponent.getCenter(n.getBBox()).y);
              b.setAttribute('stroke', color);
              b.setAttribute('stroke-width', '3');
              b.setAttribute("stroke-opacity", '0.3')
              this.el.nativeElement.appendChild(b);
            });
          }
        }
      }
    }
    else {
      if (evt.target.getAttribute("player") == "1") {
        if(this.renfort>0){
        this.target=evt.target;
        let country = evt.target.getAttribute("id");
        this.countryList[country]=Number(this.countryList[country])+1;
        this.renfort--;
        document.querySelector("text[id='"+country+"/label"+"']").textContent=this.countryList[country];
        var order: Order = { type: 'Renfort', country: country, destination: country, number: 1};
        this.orderList.push(order);
        }
      }
    }
  }

  static getCenter(rect: SVGRect) {
    var x: number = rect.x + (rect.width / 2);
    var y: Number = rect.y + (rect.height / 2);
    return { x: x, y: y };
  }
  
  public displayTransit(source: any, destination: any) {
    this.soldier = this.countryList[source.getAttribute('id')];
    if(this.soldier%2==0){
        var a = Number(this.soldier)/2;
    }
    else{
      var a = Math.trunc(Number(this.soldier)/2)+1;
    }
    this.soldiersend = String(a);

    this.countryNameD = destination.getAttribute('id');
    this.countryName = source.getAttribute('id');
    if (destination.getAttribute('player') == '1') {
      this.currentColor = 'green';
    } else {
      this.currentColor = 'red';
    }
    this.confirm = true;
  }
  public bidouille(value: any) {
    this.rangemodified = true;
    this.soldiersend = $('input[name=soldierrange]').val();


  }
  public getCurrentColor() {
    return this.currentColor;
  }

}

export interface Order {
  type: string;
  country: string;
  destination: string;
  number: number;
}
export class Country {
  player: number;
  soldier: number;
  continent: string;
  neighbour: string[];
  constructor(soldier: number, continent: string, neighbour: string[]) {
    soldier = this.soldier;
    continent = this.continent;
    neighbour = this.neighbour;
  }
}

