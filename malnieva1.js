function importar(marca) {

    const fs = require('node:fs');
    const path = require('node:path');

    let pathFigus = '';
    let archivo = '';
    switch (marca) {
        case 'Hot Toys':
            archivo = 'figuras1.json';
            break;
        case 'Bandai':
            archivo = 'figuras2.json';
            break;
        case 'Star Wars':
            archivo = 'figuras3.json';
            break;
        default:
            console.log('Ingrese una marca valida');
    }
    pathFigus = path.join(__dirname, 'datos', archivo);
    let dato = fs.readFileSync(pathFigus, 'utf-8');

    const datosObtenidos = JSON.parse(dato);
    return datosObtenidos;
}

let unifiedCollectibles = [...importar('Hot Toys'), ...importar('Bandai'), ...importar('Star Wars')];

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        //Con for..in
        /*for (figura in this.figuras) {
            console.table(this.figuras[figura]);
        }*/
        //Con forEach
        return this.figuras.forEach(figura => console.log(figura.nombre));

        //Con for..of
        /*for (figura of this.figuras) {
            console.log(figura);
        }*/
    },
    figuresByBrand: function (marca) {
        return this.figuras.filter((figura) => figura.marca == marca);
    }
}
//collectibles.figuresByBrand('Bandai');

module.exports = {
    verPorMarcaX: importar,
    listadoTodas: collectibles.figuras,
    listadoNombreFiguras: collectibles.listFigures,
    listadoPorMarca: collectibles.figuresByBrand
}
