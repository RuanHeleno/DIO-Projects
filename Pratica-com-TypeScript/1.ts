// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

// Resposta

const employee: {nome: string, code: number} = {
    nome: "John",
    code: 10
}

console.log(`O nome é ${employee.nome} e o tempo de trabalho é ${employee.code}`);