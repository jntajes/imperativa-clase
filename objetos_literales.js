//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!


  let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
        for (let i = 0; i < this.clientes.length; i++){
            if (this.clientes[i].titularCuenta == titular) {
                return this.clientes[i]
            }
        }
    },
    deposito: function (titular, dinero_depositar) {
        let clienteEncontrado = this.consultarCliente(titular);
        clienteEncontrado.saldoEnPesos += dinero_depositar;
        return console.log(`Depósito realizado, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`)
    },
    extraccion: function (titular, dinero_extraer) {
        let clienteEncontrado = this.consultarCliente(titular);
        if (clienteEncontrado.saldoEnPesos - dinero_extraer < 0) {
            return console.log("Fondos insuficientes.")
        } else {
            clienteEncontrado.saldoEnPesos -= dinero_extraer;
            return console.log(`Extracción realizada correctamente, su nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`)
        }

    }
  }

  let cliente_Encontrado = banco.extraccion("Ramon Connell", 20000);


// console.log(cliente_Encontrado)

// EXTRA

const propiedadUnica = function (array, string) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
      res.push({[string]: array[i][string]});
    }
    return res;
  };
  
  let array = [
    { nombre: "Lean", edad: 27 },
    { nombre: "Eze", edad: 49 },
  ];
  
  let resultado = propiedadUnica(array, "nombre");
  console.log(resultado)
