//função consultar cep
function consultaEndereco(){
    let cep = document.getElementById('cep').value;
    
     //valida a quantidade de numeros no cep
     if (cep.length === 0) {
         alert("Preencha o campo cep");
         return;
     }
    if (cep.length !== 8) {
     alert("CEP Invalido!");
     return;
    }
 
    try {
     //solicitaçã para api
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
     response.json().then(function(data){
         console.log(data);
         mostrarEndereco(data);
     })
    });  
    } catch (error) {
     alert(error);
     return;
    }
  
 }
   //função mostrar dados no input do endereco
 function mostrarEndereco(dados){
     let cidade = document.getElementById('cidade');
     let bairro = document.getElementById('bairro');
     let logradouro = document.getElementById('logradouro');
 
     if (dados.erro) {
         cidade.value = "Endereço não encontrado!"
     }else{
 
         cidade.value = dados.localidade +"-"+dados.uf;
         bairro.value = dados.bairro;
         logradouro.value = dados.logradouro;
     }
 }

 
    //função da máscara do cpf
function mascara(i) {
    const v = i.value;

    if (isNaN(v[v.length - 1])) {
        // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

function formataCPF(i) {
    let cpf = i.value;
    cpf = cpf.replace(/[^\d]/g, "");

    i.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
