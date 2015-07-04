$(function() {
    $(".inputmask").inputmask("dd/mm/yyyy",{ "placeholder": "dd/mm/aaaa" });
});

$(function() {
    $(".inputmask_altura").inputmask('numeric', {
        allowPlus: false,
        allowMinus: false,
        digits: 2,
        integerDigits: 1,
        radixPoint: ','});
});

$(function() {
    $(".inputmask_peso").inputmask('numeric', {
        allowPlus: false,
        allowMinus: false,
        digits: 2,
        integerDigits: 3,
        radixPoint: ','});
});

$(function() {
    $(".inputmask_resultado").inputmask('numeric', {
        allowPlus: false,
        allowMinus: false,
        digits: 2,
        integerDigits: 8,
        radixPoint: ','});
});

$(function() {
    $(".datepicker").datepicker({
        showOn: "button",
        showOtherMonths: true,
        changeMonth: true,
        changeYear: true,
        selectOtherMonths: true,
        dayNamesMin: ['Do','Seg','Ter','Qua','Qui','Sex','Sáb'],
        buttonText: "<i class='fa fa-calendar fa-lg'></i>"
    });
});
