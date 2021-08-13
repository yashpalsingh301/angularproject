import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    template: `<p>This is test page</p> Hi {{name}}
    <p>Yashpal Sjing changa</p>`,
    styles:[]
})
export class TestComponent{
    name="Yash";

}