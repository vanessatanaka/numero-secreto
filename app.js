//ALERT = NOTIFICAÇÃO OU MENSAGEM NA TELA HTML
alert("Seja bem-vindo ao Jogo do Número Secreto");

//LET = CRIAR VARIÁVEL (Instruções: Para números, não usar aspas. Caso contrário, o computador entenderá que é um texto.)
let numeroSecreto = 10;

//CONSOLE.LOG = MOSTRAR INFORMAÇÕES NO CONSOLE, para auxiliar nos testes da execução do código.
//Exemplos: verificar o fluxo do programa, os valores das variáveis e outras informações relevantes
//(Instruções: Mouse direito >> Inspecionar >> Console)
//Após a conclusão do projeto, remover os consoles.
//Para concatenar texto + variável dentro do console, usar vírgula
console.log(numeroSecreto)

//PROMPT = COMANDO ao usuário
let chute = prompt("Digite um número entre 1 e 10");

//IF ELSE = SE SENÃO
if(chute == numeroSecreto){

    //TEMPLANTE STRINGS = CONCATENAR Texto + Variável, usar crase no lugar da aspa + ${}
    //CONCATENAR Texto + Variável. Outra opção é usar o sinal de +
    //Obs.: Para concatenar texto + variável dentro do console, usar vírgula
    alert(`Você digitou: ${numeroSecreto}. Parabéns! Você descobriu o número secreto!`)
}
else{
    //CONCATENAR Texto + Variável. Outra opção é usar o sinal de +
    //TEMPLANTE STRINGS = CONCATENAR Texto + Variável, usar crase no lugar da aspa + ${}
    //Obs.: Para concatenar texto + variável dentro do console, usar vírgula
    alert("Você digitou: " + chute + ". Você errou. Tente novamente.")
}

//LIVE SERVER = EXTENSÃO DO VISUAL STUDIO CODE para atualizar, automaticamente, o HTML com as alterações feitas no código.
//Instruções para instalar: clique no ícone das extensões no menu lateral esquerdo do Visual Studio Code >> Pesquise por Live Server >> Instale a versão criada por Ritwick Dey.
//Instruções para executar: clique no arquivo HTML com mouse direito >> Open with Live Server