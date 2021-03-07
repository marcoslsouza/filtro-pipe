# filtro-pipe

Foi criado um component:
ng g c components/posts

# Implementacao posts.component.html:
<input type="text" class="form-control" placeholder="Pesquisar..." name="filterPost" [(ngModel)]="filterPost">

<tr *ngFor="let post of posts | filter:filterPost">

# Implementacao posts.component.ts
filterPost = '';
  posts = [
    {
      'id': 1,
      'title': 'Post One',
      'date': '02/04/2019'
    },
    {
      'id': 2,
      'title': 'Post Two',
      'date': '11/04/2019'
    },
    {
      'id': 3,
      'title': 'Post Three',
      'date': '30/01/2019'
    },
    {
      'id': 4,
      'title': 'Post Four',
      'date': '30/05/2019'
    },
    {
      'id': 5,
      'title': 'Post Five',
      'date': '30/04/2019'
    }
  ];

# Foi criado um filter:
ng g pipe pipes/filter

# Implementacao filter/pipe:
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