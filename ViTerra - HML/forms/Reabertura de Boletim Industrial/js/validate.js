var beforeSendValidate = function (numState, nextState) {
  function setHistorico(state) {
    var picture = $("#login_user").val();

    const states = [
      {
        id: "inicio",
        fotoUser: picture,
        state: [9, 0, 10],
        idObs: "#txt_observacoes_solic",
        name: "#hd_nomeUser",
        role: "#hd_funcaoUser",
      },
      {
        id: "aprovacao",
        fotoUser: picture,
        state: [14, 16, 18, 20, 35, 37, 39, 41, 56, 58, 60, 62, 77, 79, 81, 83],
        idObs: "#txt_observacoes",
        name: "#hd_nomeUser",
        role: "#hd_funcaoUser",
      },
      {
        id: "confirmar",
        fotoUser: picture,
        state: 95,
        idObs: "#txt_observacoes",
        name: "#hd_nomeUser",
        role: "#hd_funcaoUser",
      },
    ];

    states.forEach((s) => {
      if (
        Array.isArray(s.state) ? s.state.includes(state) : s.state === state
      ) {
        if (s.idObs.trim() != "") {
          let id = wdkAddChild("tbChat");
          let src = `/social/api/rest/social/image/profile/${s.fotoUser}/X_SMALL_PICTURE`;
          let date = new Date();
          date =
            (date.getDay() < 10 ? ("0" + date.getDay()) : date.getDay()) +
            "/" +
            (date.getMonth() < 10 ? ("0" + date.getMonth()) : date.getMonth()) +
            "/" +
            date.getFullYear() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes();

          //seta valores nos campos (alguns são hiddens pois não são gravados no banco então estou usando hiddens para guardar as informações)
          $(`#srcFoto___${id}`).val(src);
          $(`#txt_chat___${id}`).val($(s.idObs).val());
          $(`#valueTitleNome___${id}`).val($(s.name).val());
          $(`#valueSpanDate___${id}`).val(date)
          $(`#valueSpanFuncao___${id}`).val($(s.role).val());
        }
      }
    });
  }

  
  setHistorico(numState);
};
