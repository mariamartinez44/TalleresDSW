"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
// Crear una función para generar la tabla
function createSeriesTable(series) {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    // Crear la fila de encabezados
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Title', 'Channel', 'Seasons'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    // Crear una fila para cada serie
    series.forEach(serie => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = serie.getId().toString();
        row.appendChild(idCell);
        const titleCell = document.createElement('td');
        titleCell.textContent = serie.getTitle();
        row.appendChild(titleCell);
        const channelCell = document.createElement('td');
        channelCell.textContent = serie.getChannel();
        row.appendChild(channelCell);
        const seasonsCell = document.createElement('td');
        seasonsCell.textContent = serie.getSeasons().toString();
        row.appendChild(seasonsCell);
        row.addEventListener('click', () => showSeriesDetail(serie));
        table.appendChild(row);
    });
    const tableContainer = document.getElementById('table-container');
    if (tableContainer) {
        tableContainer.appendChild(table);
        const totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
        const averageSeasons = (totalSeasons / series.length).toFixed(2);
        const averageText = document.createElement('p');
        averageText.textContent = `Average number of seasons: ${averageSeasons}`;
        tableContainer.appendChild(averageText);
    }
}
// Función para mostrar un Card
function showSeriesDetail(serie) {
    const detailContainer = document.getElementById('series-detail');
    if (!detailContainer)
        return;
    detailContainer.innerHTML = '';
    // Crear el Card con Bootstrap para mostrar los detalles de la serie
    const card = document.createElement('div');
    card.classList.add('card');
    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img-top');
    cardImage.src = serie.getImage();
    cardImage.alt = serie.getTitle();
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = serie.getTitle();
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = serie.getDescription();
    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.href = serie.getLink();
    cardLink.target = '_blank';
    cardLink.textContent = 'Ver más';
    // Añadir elementos al card
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    detailContainer.appendChild(card);
}
createSeriesTable(data_1.series);
