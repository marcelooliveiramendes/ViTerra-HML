let numAtividade = $("#num_atividade").val();
var mySimpleCalendar = FLUIGC.calendar("#txt_datareversao_solicitacao");

$(document).ready(function () {
  loadingChat(parseInt(numAtividade));

  $("#solic-heading").click(function (event) {
    $("#solic-content").slideToggle();
  });
  $("#detalhes-solic-heading").click(function (event) {
    $("#detalhes-solic-content").slideToggle();
  });
  $("#observacao-heading").click(function (event) {
    $("#observacao-content").slideToggle();
  });
  $("#observador-heading").click(function (event) {
    $("#observador-content").slideToggle();
  });

  $("#txt_datareversao_solicitacao").on("change", function () {
    let mesReversao = parseInt(
      $("#txt_datareversao_solicitacao").val().split("/")[1]
    );

    let mouth = new Date();
    mouth = mouth.getMonth() + 1;

    let niveisAprovacao = Math.abs(mesReversao - mouth);

    if (mesReversao[1] == mouth) {
      msg = "nao";
    } else {
      msg = "sim";
    }
    if (niveisAprovacao == 1) {
      $("#niveisAprovacao").val(1);
      if (niveisAprovacao == 2) {
        $("#niveisAprovacao").val(2);
        if (niveisAprovacao == 3) {
          $("#niveisAprovacao").val(3);
          if (niveisAprovacao >= 4) {
            $("#niveisAprovacao").val(4);
          }
        }
      }
    }

    $("#data_reversao_res").val(msg);
  });
});

function loadingChat(state) {
  const states = [
    { id: "inicio", state: [5, 0, 10] },
    {
      id: "aprovacao",
      state: [14, 16, 18, 20, 35, 37, 39, 41, 56, 58, 60, 62, 77, 79, 81, 83],
    },
    { id: "confirmar", state: 95 },
  ];

  states.forEach((s) => {
    if (Array.isArray(s.state) ? s.state.includes(state) : s.state === state) {
      let tr = $("#tbChat tbody tr");
      tr.toArray().forEach((line, index) => {
        if (index > 0) {
          let id = line.children[0].children[0].children[1].id.split("___")[1];
          let src = $(line.children[0].children[0].children[1]).val();
          let name = $(`#valueTitleNome___${id}`).val();
          let spanRole = $(line.children[0].children[1].children[3]).val();
          let spanDate = $(line.children[1].children[2]).val();

          $($(`#srcFoto___${id}`).siblings()[0]).attr("src", src);
          $($(`#valueTitleNome___${id}`).siblings()[0]).text(name);
          $($(`#valueSpanFuncao___${id}`).siblings()[2]).text(spanRole);
          $($(`#valueSpanDate___${id}`).siblings()[0]).text(spanDate);
        }
      });
    }
  });
}

$("#aprovacao").hide();
$("#fim").hide();

//adiciona as divs na progress bar
let states = [
  { id: "inicio", divs: ["inicio"], state: ["9", "0"] },
  {
    id: "aprovacao",
    divs: ["inicio", "aprovacao"],
    state: [
      "14",
      "16",
      "18",
      "20",
      "35",
      "37",
      "39",
      "41",
      "56",
      "58",
      "60",
      "62",
      "77",
      "79",
      "81",
      "83",
    ],
  },
  { id: "fim", divs: ["inicio", "aprovacao", "fim"], state: "11" },
  {
    id: "fim",
    divs: [],
    state: ["13", "26", "31"],
    label: "REPROVADA",
    danger: true,
  },
];

states.forEach((s) => {
  if (
    Array.isArray(s.state)
      ? s.state.includes(numAtividade)
      : s.state === numAtividade
  ) {
    s.divs.forEach((element) => {
      $(`#${element}`).show();
    });
  }
});

//limpa os campos 'hidden' que capturam se o usuario aprovou ou não a reabertura do boletim
switch (numAtividade) {
  case "35":
    $("#aprovacao_1").val("");
    break;
  case "37":
    $("#aprovacao_2").val("");
    break;
  case "39":
    $("#aprovacao_3").val("");
    break;
  case "41":
    $("#aprovacao_4").val("");
    break;
  case "56":
    $("#aprovacao_1").val("");
    break;
  case "58":
    $("#aprovacao_2").val("");
    break;
  case "60":
    $("#aprovacao_3").val("");
    break;
  case "62":
    $("#aprovacao_4").val("");
    break;
  case "77":
    $("#aprovacao_1").val("");
    break;
  case "79":
    $("#aprovacao_2").val("");
    break;
  case "81":
    $("#aprovacao_3").val("");
    break;
  case "83":
    $("#aprovacao_4").val("");
    break;
  default:
    console.log("Atividade não encontrada");
    break;
}

//adiciona o valor nos campos 'hidden' que capturam se o usuario aprovou ou não a reabertura do boletim
function aprovacao(resposta) {
  console.log(resposta);

  if (resposta == "sim") {
    FLUIGC.toast({
      title: "Reabertura aprovada!",
      message: "A reabertura do boletim foi aprovada!",
      type: "success",
      timeout: 2000,
    });
  } else {
    FLUIGC.toast({
      title: "Reabertura reprovada!",
      message: "A reabertura do boletim foi reprovada!",
      type: "danger",
      timeout: 2000,
    });
  }

  switch (numAtividade) {
    case "14":
      $("#aprovacao_1").val(resposta);
      break;
    case "16":
      $("#aprovacao_2").val(resposta);
      break;
    case "18":
      $("#aprovacao_3").val(resposta);
      break;
    case "20":
      $("#aprovacao_4").val(resposta);
      break;
    case "35":
      $("#aprovacao_1").val(resposta);
      break;
    case "37":
      $("#aprovacao_2").val(resposta);
      break;
    case "39":
      $("#aprovacao_3").val(resposta);
      break;
    case "41":
      $("#aprovacao_4").val(resposta);
      break;
    case "56":
      $("#aprovacao_1").val(resposta);
      break;
    case "58":
      $("#aprovacao_2").val(resposta);
      break;
    case "60":
      $("#aprovacao_3").val(resposta);
      break;
    case "62":
      $("#aprovacao_4").val(resposta);
      break;
    case "77":
      $("#aprovacao_1").val(resposta);
      break;
    case "79":
      $("#aprovacao_2").val(resposta);
      break;
    case "81":
      $("#aprovacao_3").val(resposta);
      break;
    case "83":
      $("#aprovacao_4").val(resposta);
      break;
    default:
      console.log("Atividade não encontrada");
      break;
  }
}
