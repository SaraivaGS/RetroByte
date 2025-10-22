function TagsHTML(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function CardJogo(jogo) {
    const tagsHTML = TagsHTML(jogo.tags);
    return `
        <div class="jogo-card">
            <h3>${jogo.titulo}</h3>
            <img src="${jogo.capa}" class="capa-jogo" alt="Capa do jogo ${jogo.titulo} para PlayStation">
            <ul>
                ${tagsHTML}
            </ul>
            <h4>Links para Download</h4>
            <a href="${jogo.linkAnuncio}" class="botao-download anuncio">LINK COM ANÚNCIOS</a>
            <a href="${jogo.linkDireto}" class="botao-download direto">LINK DIRETO</a> 
        </div>
        <hr>
    `;
}

function renderizacao() {
    const containerDeJogos = document.getElementById('lista-jogos');
    
    if (!containerDeJogos) {
        console.error("Não foi possível encontrar o elemento com ID 'lista-jogos'.");
        return;
        }
    const htmlCompleto = JOGOS.map(CardJogo).join('');
    containerDeJogos.innerHTML = htmlCompleto;
}
renderizacao()
