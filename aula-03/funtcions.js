const pets = require('./pets.json');

const darBanho = pet => {
    pet.servicos.push({ 
        nome:'banho',
        data: new Date()
    });
    console.log(`Dando banho em ${pet.nome}`);
    return pet;
};

const darVacina = pet => {
    if(!pet.vacinado) {
        pet.servicos.push({ 
            nome:'vacina',
            data: new Date()
        });
        console.log(`Vacinando ${pet.nome}`);
        pet.vacinado = !pet.vacinado;
        
    } else {
        console.log(`${pet.nome} já está vacinado!!`);
    }
    return pet;
}

const tosar = pet => {
    pet.servicos.push({ 
        nome:'tosa',
        data: new Date()
        // .toLocaleString('pt-BR') 
    });
    console.log(`O ${pet.nome} está sendo tosado!`);
    return pet;
}

const consultar = pet => {
    // pet.servicos.push('consulta');
    pet.servicos.push({ 
        nome:'consulta',
        data: new Date()
    });
    console.log(`O ${pet.nome} está na consulta`);
    return pet;
}

const mostrarServicos = pet => {
    for(let servico of pet.servicos) {
        if(servico.data){
            console.log(
            `${servico.nome} : ${servico.data.toLocaleDateString('de-DE')}`
            )
        } else {
            console.log(
                `${servico} : DATA INDEFINIDA}`
            )
        }
    }
}



// const aplicarServico = (pet, cb) => cb(pet);

const aplicarServicos = (pet, ...servicos) => {
    for(const servico of servicos) {
        servico(pet);
    }
    return pet;
};

console.log(aplicarServicos(pets[0], tosar, darBanho, darVacina));
