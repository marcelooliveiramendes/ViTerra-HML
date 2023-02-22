function displayFields(form, customHTML) {
    var numAtividade = parseInt(getValue("WKNumState"));
    form.setValue('login_user', getValue("WKUser"));
    form.setValue('num_atividade', numAtividade);


    if (form.getFormMode() == "ADD" || numAtividade == 1 ) {
        form.setVisibleById("historico-content", false);
        form.setVisibleById("obs-aprovador-content", false);
    }

    if (numAtividade !== 0 ){
        form.setVisibleById("obs-content", false);
    } else {
        form.setVisibleById("obs-content", true);
    }
}