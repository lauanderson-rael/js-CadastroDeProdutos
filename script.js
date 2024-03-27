const formCadastro = document.getElementById('formCadastro');
const tabelaProdutos = document.getElementById('tabelaProdutos');
formCadastro.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const disponivelParaVenda = document.getElementById('disponivel_para_venda').value;

    const novoProduto = {
        nome: nome,
        valor: valor
    };

    const row = tabelaProdutos.insertRow();
    const cellNome = row.insertCell(0);
    const cellValor = row.insertCell(1);
    cellNome.innerText = novoProduto.nome;
    cellValor.innerText = `R$ ${novoProduto.valor.toFixed(2)}`;

    formCadastro.reset(); // resetar todos os campos apos o cadastro
});
