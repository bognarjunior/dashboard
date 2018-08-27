import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

	readonly dados = [
        ['Janeiro', 33],
        ['Fevereiro', 68],
        ['Março', 49],
        ['Abril', 15],
        ['Maio', 80],
        ['Junho', 27],
        ['Julho', 76],
        ['Agosto', 12],
        ['Setembro', 104],
        ['Outubro', 99],
        ['Novembro', 27],
        ['Desembro', 35],
    ]

	constructor() {}

	/**
	 * Retorna um observable contendo os dados a serem
	 * exibidos no gráfico.
	 *
	 * @return Observable<any>
	 */
	obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}
}
