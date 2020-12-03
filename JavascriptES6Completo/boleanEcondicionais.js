let corFavorita = prompt('Digite uma das cores abaixo\n 1- Azul\n 2- Vermelho\n 3- Amarelo');

switch (corFavorita) {
  case 'Azul' && 'azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho' && 'vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo' && 'amarelho':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Essa cor nao tem na lista');
}

