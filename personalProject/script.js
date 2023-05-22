class Atendimento {

    constructor() {
        this.id = 1;
        this.arrayAtendimentos = [];
    }

    adicionar() {
       let atendimento = this.lerDados();
    //    console.log(atendimento);
        this.Salvar(atendimento);
        this.Listar(this.arrayAtendimentos);
        this.cancelar()
    }

    lerDados() {
        let atendimento = {}

        atendimento.id = this.id;
        atendimento.idCliente = document.getElementById('idcliente').value;
        atendimento.nomecliente = document.getElementById('nome').value;
        atendimento.idAtendimento = document.getElementById('idatend').value;
        atendimento.dataAtendimento = document.getElementById('dataAtend').value;
        atendimento.statusAtendimento = document.getElementById('status').value;
        atendimento.pagamentoCliente = document.getElementById('pagamento').value;
        atendimento.valorReal = document.getElementById('valorReal').value;
        atendimento.valorRen = document.getElementById('valorRen').value;
        atendimento.valorDesconto = (atendimento.valorReal-atendimento.valorRen);
        atendimento.dataVencimento = document.getElementById('dateVenc').value;
        atendimento.observacoes = document.getElementById('obs').value;

        return atendimento;
    }

    Salvar(atendimento) {
        this.arrayAtendimentos.push(atendimento);
        this.id++;
    }
    cancelar() {

        document.getElementById('idcliente').value = ""
        document.getElementById('nome').value = ""
        document.getElementById('idatend').value = ""
        document.getElementById('dataAtend').value = ""
        document.getElementById('status').value = ""
        document.getElementById('pagamento').value = ""
        document.getElementById('valorReal').value = ""
        document.getElementById('valorRen').value = ""
        document.getElementById('dateVenc').value = ""
        document.getElementById('obs').value = ""
    }

    Listar() {

        let tbody = document.getElementById('tbody');
        tbody.innerText = "";

        for (let i = 0; i < this.arrayAtendimentos.length; i++) {
            // criar linhas no tbody toda vez que o loop rodar
            let tr = tbody.insertRow();

            // inserire celular no tbody (coluna)
            // td - coluna 
            // tr - linha
            let td_id = tr.insertCell();
            let td_idCliente = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_idAtend = tr.insertCell();
            let td_dataAtendimento = tr.insertCell();
            let td_statusAtendimento = tr.insertCell();
            let td_pagamento = tr.insertCell();
            let td_valorReal = tr.insertCell();
            let td_valorRen = tr.insertCell();
            let td_ValorDesconto = tr.insertCell();
            let td_dataVencimento = tr.insertCell();
            let td_acoes = tr.insertCell();


             // inseri as informações nas celulas
            td_id.innerText = this.arrayAtendimentos[i].id;
            td_idCliente.innerText = this.arrayAtendimentos[i].idCliente;
            td_nome.innerText = this.arrayAtendimentos[i].nomecliente;
            td_idAtend.innerText = this.arrayAtendimentos[i].idAtendimento;
            td_dataAtendimento.innerText = this.arrayAtendimentos[i].dataAtendimento;
            td_statusAtendimento.innerText = this.arrayAtendimentos[i].statusAtendimento;
            td_pagamento.innerText = this.arrayAtendimentos[i].pagamentoCliente;
            td_valorReal.innerText = this.arrayAtendimentos[i].valorReal;
            td_valorRen.innerText = this.arrayAtendimentos[i].valorRen;
            td_ValorDesconto.innerText = this.arrayAtendimentos[i].valorDesconto;
            td_dataVencimento.innerText = this.arrayAtendimentos[i].dataVencimento;
            // td_obs.innerText = this.arrayAtendimentos[i].observacoes; em processo ainda!!!!!!

            td_id.classList.add('center');

            // criando o elemento imagem 
            let imgEdit = document.createElement('img');
            //declaram o caminho pra achar a imagem
            imgEdit.src ='img/edit.svg';
            //inserindo na celula ações
            td_acoes.appendChild(imgEdit);

            // criando o elemento imagem 
            let imgDelete = document.createElement('img');
            //declaram o caminho pra achar a imagem
            imgDelete.src = 'img/lixeira.svg'
            //inserindo na celula ações
            td_acoes.appendChild(imgDelete);

        }

    }

}

const atendimento = new Atendimento();

//  function adicionar() {

//     let nome = document.getElementById('nome').value

//     console.log(nome);
//     alert(nome)
//  }
