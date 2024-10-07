let alunos = []; // cria array vazio

        function createAluno() {
            if (alunos.length < 3) {
                let nome = document.getElementById("nome").value;
                let dataNasc = new Date(document.getElementById("dataNasc").value + "T00:00:00");
                let curso = document.getElementById("curso").value;

                let aluno = {
                    nome: nome,
                    dataNasc: dataNasc,
                    curso: curso
                };

                
                alunos.push(aluno);
                document.getElementById("msg").innerText = "Aluno cadastrado com sucesso!";
            } else {
                document.getElementById("cadastrarAluno").disabled = true;
                document.getElementById("msg").innerText = "Turma lotada!";
            }
        }

        function readAlunos() {
            const tabela = document.getElementById("tabelaAlunos");
            const tbody = tabela.querySelector('tbody');
            
            tbody.innerHTML = "";
            
            if (alunos.length > 0) {
                tabela.style.display = "table";
            } else {
                tabela.style.display = "none";
            }
            
            alunos.forEach(aluno => {
                let dataFormatada = aluno.dataNasc.toLocaleDateString('pt-BR');

                let linha = `<tr>
                                <td>${aluno.nome}</td>
                                <td>${dataFormatada}</td>
                                <td>${aluno.curso}</td>
                            </tr>`;
                
                tbody.innerHTML += linha;
            });
        }