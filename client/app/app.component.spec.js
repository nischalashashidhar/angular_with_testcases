"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("../app/app.component");
describe('AppComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance; // AppComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    //   beforeEach( async( () => {
    //   TestBed.configureTestingModule({
    //     declarations: [AppComponent]
    //   })
    //   .compileComponents().then( () => {
    //     fixture = TestBed.createComponent(AppComponent);
    //     comp = fixture.componentInstance;
    //   });
    // }));
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});
//# sourceMappingURL=app.component.spec.js.map