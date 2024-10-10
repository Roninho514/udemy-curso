import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.scss']
})
export class ComponenteFilhoComponent {
    @Input() dadosComponetPai : string = "";
    @Output() clickFilho : EventEmitter<void> = new EventEmitter<void>();

    eventoAcionado(){
      this.clickFilho.emit();
    }

    eventoAcionadoPorViewChildren(){
      console.log("Esse evento foi acionado usando o ViewChildren" + this.dadosComponetPai);
    }
}
