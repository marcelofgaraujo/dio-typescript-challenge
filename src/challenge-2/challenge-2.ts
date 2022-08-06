interface Person {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao {
    atriz,
    padeiro
}

let pessoa1 = {} as Person;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.atriz

let pessoa2 = {} as Person;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.padeiro

let pessoa3: Person = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz
};

let pessoa4: Person = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.padeiro
}