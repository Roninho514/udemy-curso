import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ComponenteFilhoComponent } from '../componente-filho/componente-filho.component';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.scss']
})
export class ComponentePaiComponent {

  @ViewChild(ComponenteFilhoComponent) filhoComponente!: ComponenteFilhoComponent;
  @ViewChildren(ComponenteFilhoComponent) listFilhoComponent !: QueryList<ComponenteFilhoComponent>;
  eventoAcionado() {
    alert("Esse evento ele foi acionado!");
  }

  acionaEventoViewChildren(){
    this.listFilhoComponent.forEach(child => {
      child.eventoAcionadoPorViewChildren();
    })
  }

}
