
let radiologia = [
    {
        horaAtencion: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rutPaciente: "9878782-1",
        prevision: "FONASA"
    },
    {
        horaAtencion: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rutPaciente: "15345241-3",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rutPaciente: "16445345-9",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "15:30",
        especialista: "IANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rutPaciente: "17666419-0",
        prevision: "FONASA"
    },
    {
        horaAtencion: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rutPaciente: "14989389-K",
        prevision: "FONASA"
    }
];

let traumatologia = [
    {
        horaAtencion: "08:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rutPaciente: "15554774-5",
        prevision: "FONASA"
    },
    {
        horaAtencion: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rutPaciente: "15444147-9",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rutPaciente: "17879423-9",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rutPaciente: "1547423-6",
        prevision: "ISAPRE"
    }, {
        horaAtencion: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rutPaciente: "16554741-K",
        prevision: "FONASA"
    },
    {
        horaAtencion: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rutPaciente: "9747535-8",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rutPaciente: "11254785-5",
        prevision: "ISAPRE"
    }
];
let dental = [
    {
        horaAtencion: "08:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rutPaciente: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rutPaciente: "9878789-2",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rutPaciente: "7998789-5",
        prevision: "FONASA"
    },
    {
        horaAtencion: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rutPaciente: "18887662-K",
        prevision: "FONASA"
    },
    {
        horaAtencion: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rutPaciente: "17665461-4",
        prevision: "FONASA"
    },
    {
        horaAtencion: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rutPaciente: "14441281-0",
        prevision: "ISAPRE"
    }
];

/* agregar más pacientes con sus respectivos datos en Traumatologia*/

traumatologia.push(
    {
        horaAtencion: "09:00",
        especialista: "RENÉ POBLETE",
        paciente: "ANA GELLONA",
        rutPaciente: "13123329-7",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "09:30",
        especialista: "MARIA SOLAR",
        paciente: "RAMIRO ANDRADE",
        rutPaciente: "12221451-K",
        prevision: "FONASA"
    },
    {
        horaAtencion: "10:00",
        especialista: "RAUL LOYOLA ",
        paciente: "CARMEN ISLA ",
        rutPaciente: "10112348-3",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "10:30",
        especialista: "ANTONIO LARENAS",
        paciente: "PABLO LOAYZA",
        rutPaciente: "13453234-1",
        prevision: "ISAPRE"
    },
    {
        horaAtencion: "12:00",
        especialista: "MATIAS ARAVENA",
        paciente: "SUSANA POBLETE",
        rutPaciente: "14345656-6",
        prevision: "FONASA"
    }
)

/* eliminación del primero y el ultimo en radiologia */
radiologia.pop();
radiologia.shift();

/* filtrar los pacientes con isapre en "listado Isapre Dental"*/

const isapreDental = dental.filter(function (isapre) {
    return isapre.prevision === "ISAPRE";
});

/* filtrar los pacientes con fonasa en "listado Fonasa Traumatologia"*/
const fonasaTraumatologia = traumatologia.filter(function (fonasa) {
    return fonasa.prevision === "FONASA";
});


let textoRadiología = "<tr><th> Hora de Atencion </th><th> Especialista </th><th> Paciente </th><th> Rut Paciente </th><th> Previsión </th></tr>";

let textoTraumatologia = "<tr><th> Hora de Atencion </th><th> Especialista </th><th> Paciente </th><th> Rut Paciente </th><th> Previsión </th></tr>";

let textoDental = "<tr><th> Hora de Atencion </th><th> Especialista </th><th> Paciente </th><th> Rut Paciente </th><th> Previsión </th></tr>";

let listaDental = "<p> HORA DE ATENCIÓN - ESPECIALISTA - PACIENTE - RUT PACIENTE - PREVISIÓN </p>";

let listaPacientes = "<p> PACIENTE </p>";

let listaIsapre = "<p> PACIENTE - PREVISIÓN </p>";

let listaFonasa = "<p> PACIENTE - PREVISIÓN </p>";


for (let i = 0; i < radiologia.length; i++) {

    textoRadiología = textoRadiología + `<tr>
                        <td>${radiologia[i].horaAtencion}</td>
                        <td>${radiologia[i].especialista}</td>
                        <td>${radiologia[i].paciente}</td>
                        <td>${radiologia[i].rutPaciente}</td>
                        <td>${radiologia[i].prevision}</td>
                     </tr>`;
    if (i === (radiologia.length - 1)) {
        let textoPrimeraAtencion = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision}`;
        let textoUltimaAtencion = `Última atención: ${radiologia[i].paciente} - ${radiologia[i].prevision}`;
        document.getElementById("info1").innerHTML = textoPrimeraAtencion + " | " + textoUltimaAtencion;
    }
}

for (let i = 0; i < traumatologia.length; i++) {

    textoTraumatologia = textoTraumatologia + `<tr>
                        <td>${traumatologia[i].horaAtencion}</td>
                        <td>${traumatologia[i].especialista}</td>
                        <td>${traumatologia[i].paciente}</td>
                        <td>${traumatologia[i].rutPaciente}</td>
                        <td>${traumatologia[i].prevision}</td>
                     </tr>`;

    if (i === (radiologia.length - 1)) {
        let textoPrimeraAtencion = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision}`;
        let textoUltimaAtencion = `Última atención: ${traumatologia[i].paciente} - ${traumatologia[i].prevision}`;
        document.getElementById("info2").innerHTML = textoPrimeraAtencion + " | " + textoUltimaAtencion;
    }

}


for (let i = 0; i < dental.length; i++) {

    textoDental = textoDental + `<tr>
                        <td>${dental[i].horaAtencion}</td>
                        <td>${dental[i].especialista}</td>
                        <td>${dental[i].paciente}</td>
                        <td>${dental[i].rutPaciente}</td>
                        <td>${dental[i].prevision}</td>
                     </tr>`;

    if (i === (dental.length - 1)) {
        let textoPrimeraAtencion = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision}`;
        let textoUltimaAtencion = `Última atención: ${dental[i].paciente} - ${dental[i].prevision}`;
        document.getElementById("info3").innerHTML = textoPrimeraAtencion + " | " + textoUltimaAtencion;
    }

}

/* recorrer y devolver los datos en "listado Dental" */
for (let i = 0; i < dental.length; i++) {
    listaDental = listaDental + `<br><p>${dental[i].horaAtencion} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rutPaciente} - ${dental[i].prevision}</p>`;

};

/* concatenar los distintos arreglos en uno solo para posteriormente recorrer y devolver los datos en "lista Total de Pacientes" */
var pacientes = traumatologia.concat(radiologia, dental);
for (let i = 0; i < pacientes.length; i++) {
    listaPacientes = listaPacientes + `<br><p>${pacientes[i].paciente}</p>`;
};

/* recorrer y devolver los datos filtrados en "listado Isapre Dental" */
for (let i = 0; i < isapreDental.length; i++) {
    listaIsapre = listaIsapre + `<br><p>${isapreDental[i].paciente} - ${isapreDental[i].prevision}</p>`;

};

/* recorrer y devolver los datos filtrados en "listado Fonasa traumatologia" */

for (let i = 0; i < fonasaTraumatologia.length; i++) {
    listaFonasa = listaFonasa + `<br><p>${fonasaTraumatologia[i].paciente} - ${fonasaTraumatologia[i].prevision}</p>`;

};

document.getElementById("tabla1").innerHTML = textoRadiología;
document.getElementById("tabla2").innerHTML = textoTraumatologia;
document.getElementById("tabla3").innerHTML = textoDental;
document.getElementById("listaDental").innerHTML = listaDental; /*imprimir en el html el listado de pacientes del arreglo "dental"  con sus respectivos datos*/
document.getElementById("listaPacientes").innerHTML = listaPacientes;  /*imprimir en el html el listado de nombres del total de los pacientes*/
document.getElementById("isapreDental").innerHTML = listaIsapre; /*imprimir en el html el listado de pacientes con isapre en el arreglo "dental"*/
document.getElementById("fonasaTraumatologia").innerHTML = listaFonasa; /*imprimir en el html el listado de pacientes con fonasa en el arreglo "traumatologia" */



