// Como podemos melhorar o esse código usando TS? 

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

// Resposta (Pessoa2/Profissao2 para não bugar com o app.ts)

interface Pessoa2 {
    nome: string,
    idade: number,
    profissao2: Profissao2
}

enum Profissao2 {
    Atriz,
    Padeiro
}

const pessoa1 : Pessoa2 = { 
    nome: "Maria",
    idade: 29,
    profissao2: Profissao2.Atriz
}

const pessoa2 : Pessoa2 = { 
    nome: "Roberto",
    idade: 19,
    profissao2: Profissao2.Padeiro
}

const pessoa3 : Pessoa2 = { 
    nome: "Laura",
    idade: 32,
    profissao2: Profissao2.Atriz
}

const pessoa4 : Pessoa2 = { 
    nome: "Carlos",
    idade: 19,
    profissao2: Profissao2.Padeiro
}