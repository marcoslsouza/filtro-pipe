import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // Para verificar se foram digitados no minimo 3 caracteres
    if(arg == '' || arg.length < 3) return value;
    const resultPosts = [];
    for(const post of value) {
      // toLowerCase para transformar as letras digitadas e as existentes na tabela para minusculas, para evitar problemas na comparacao
      if(post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
