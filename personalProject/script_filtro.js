const input_filtro = document.getElementById("input-filtro");
const tabela_filtro = document.getElementById("filtro-tabela");

input_filtro.addEventListener('keyup', ()=>
{
    let expressao = input_filtro.value.toLocaleUpperCase();

    let linhas = tabela_filtro.getElementsByTagName("tr");

    for (let posicao in linhas) 
    {
        if(true === isNaN(posicao)) 
        {
            continue;
        }

        let conteudolinhas = linhas[posicao].innerHTML.toLocaleUpperCase();
        
        if (true === conteudolinhas.includes(expressao)) 
            {
                linhas[posicao].style.display = '';
            }
        else
            {
                linhas[posicao].style.display= 'none';
            }   
    }
});

function filtrarTabela() 
    {
        var input_Name = document.getElementById("name-filtro").value.toUpperCase();
        var input_Status = document.getElementById("status_filtro").value.toUpperCase();
        var input_Idatend = document.getElementById('idatend_filtro').value.toUpperCase();
        var input_Pagamento = document.getElementById('pagamento_filtro').value.toUpperCase();
        var linhas = tabela_filtro.getElementsByTagName("tr");

        for(let i = 0; i < linhas.length; i++) 
            {
                var coluna_name = linhas[i].getElementsByTagName("td")[2];
                var coluna_idatend = linhas[i].getElementsByTagName("td")[3];
                var coluna_status = linhas[i].getElementsByTagName("td")[5];
                var coluna_pagamento = linhas[i].getElementsByTagName("td")[6];           

                if(coluna_name && coluna_idatend && coluna_status && coluna_pagamento )
                    {
                        var nome = coluna_name.textContent || coluna_name.innerText;
                        var idatend = coluna_idatend.textContent || coluna_idatend.innerText;
                        var status = coluna_status.textContent || coluna_status.innerText;
                        var pagamento = coluna_pagamento.textContent || coluna_pagamento.innerText;                       

                        var filtroname = nome.toUpperCase().indexOf(input_Name) > -1;
                        var filtroatend = idatend.toUpperCase().indexOf(input_Idatend) > -1;
                        var filtrostatus = status.toUpperCase().indexOf(input_Status) > -1;
                        var filtropagamento = pagamento.toUpperCase().indexOf(input_Pagamento) > -1;

                        if (filtroname && filtroatend && filtrostatus && filtropagamento) 
                            {
                                linhas[i].style.display = '';
                            } 
                        else 
                            {
                                linhas[i].style.display = 'none';
                            }
                    }
            }   
    }
     



