$(document).ready(function() {

    /* Counter */
    $('.number-box').counterUp({
        delay: 10,
        time: 1000
    });

    /* Resize */
    function heightDetect() {
        $("header").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    /* Menu animate */
    $(".horizontal .sub-menu").addClass("fadeInLeft animated");

    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    /* Carousel */
    $('.carousel').carousel({
        interval: 8000
    })

    /*Scrool animation*/
    $(window).scroll(function() {

        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeIn animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-left').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInLeft animated');
                $(this).css('opacity', '1');
            }
        });

        $('.mov-right').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('fadeInRight animated');
                $(this).css('opacity', '1');
            }
        });
    });


    ////////////////////////////////////////////////////////////////////////////////////////
    /* Calculator controllers */
    var stage = 1;
    var diametr = "не выбрано";
    var typeOfDymohod = "не выбрано";
    var typeOfPech = "не выбрано";
    var vihodNaKrishuType = 0;
    var partSecondStage = 0;
    var partFirstStage = 0;
    var partThirdStage = 0;


    /*********** ШАГ 1 **********/
    //Почистить переменную выхода дымохода
    function vihodNaKrishuTypeDeleted() {
        var vihodNaKrishuType = 0;
    }

    // Удаление интерфейса 3-го этажа
    function deleteThirdStageInterface() {
        $(".stage-builder-wrapeer .third-stage").css("display", "none");
    }

    // Удаление классов 3-го этажа
    function deleteClassThirStage() {
        $(".third-stage-type, .third-stage-type-hover").removeClass("first-type second-type third-type fourth-type third-type-special third-type-special third-type-two");
    }

    //Очистка выделения 3-го этажа
    function deleteSelectThirdStage() {
        $(".third-stage .type-select-box img").removeClass("selectedItem");
    }

    //Очистка интерфейса вывода
    function interfaceVivodDeleted() {
        $(".zont-select-box").css("display", "none");
        $(".zont-select-box .type-select-box img").css("display", "none");
    }

    //Удаление классов зонта 
    function zontDeleted() {
        $(".zont-stage-type, .zont-stage-type-hover").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fourth-type-svihodom fiveth-type-svihodom sixth-type-svihodom fourth-zont-2-svihodom fiveth-zont-2-svihodom sixth-zont-2-svihodom seventh-zont-3-svihodom eighth-zont-3-svihodom nineth-zont-3-svihodom fourth-zont-4-svihodom fiveth-zont-4-svihodom sixth-zont-4-svihodom nineth-stage-2-zont-3-svihodom eighth-stage-2-zont-3-svihodom seventh-stage-2-zont-3-svihodom first-2-stage-type second-2-stage-type third-2-stage-type fourth-type-2-stage fiveth-type-2-stage sixth-type-2-stage eighth-type-2-stage fourth-2-stage-zont-4-svihodom fiveth-2-stage-zont-4-svihodom sixth-2-stage-zont-4-svihodom fourth-2-stage-zont-5-svihodom fiveth-zont-5-svihodom sixth-zont-5-svihodom nineth-3-stage eighth-3-stage seventh-3-stage fourth-3-stage fiveth-3-stage sixth-3-stage sixth-3-stage-final fiveth-3-stage-final fourth-3-stage-final first-type-3-stage third-type-3-stage second-type-3-stage fourth-3-stage-last fiveth-3-stage-last sixth-3-stage-last sixth-3-stage-main fiveth-3-stage-main fourth-3-stage-main fourth-2-stage-zont-4-svihodom fourth-3-stage-final fourth-2-stage-zont-5-2svihodom fiveth-zont-5-2svihodom sixth-zont-5-2svihodom sixth-zont-5-svihodom 1-stage-krisha-4-type-1look-1full 1-stage-krisha-1-type-1look-full 1-stage-krisha-2-type-1look-full 1-stage-krisha-5-typefull-1look 1-stage-krisha-full-6-type-1look");
    }

    //Удаление классов зонта HOVER 
    function zontHoverDeleted() {
        $(".zont-stage-type-hover").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fourth-type-svihodom fiveth-type-svihodom sixth-type-svihodom fourth-zont-2-svihodom fiveth-zont-2-svihodom sixth-zont-2-svihodom seventh-zont-3-svihodom eighth-zont-3-svihodom nineth-zont-3-svihodom fourth-zont-4-svihodom fiveth-zont-4-svihodom sixth-zont-4-svihodom nineth-stage-2-zont-3-svihodom eighth-stage-2-zont-3-svihodom seventh-stage-2-zont-3-svihodom first-2-stage-type second-2-stage-type third-2-stage-type fourth-type-2-stage fiveth-type-2-stage sixth-type-2-stage eighth-type-2-stage fourth-2-stage-zont-4-svihodom fiveth-2-stage-zont-4-svihodom sixth-2-stage-zont-4-svihodom fourth-2-stage-zont-5-svihodom fiveth-zont-5-svihodom sixth-zont-5-svihodom nineth-3-stage eighth-3-stage seventh-3-stage fourth-3-stage fiveth-3-stage sixth-3-stage sixth-3-stage-final fiveth-3-stage-final fourth-3-stage-final first-type-3-stage third-type-3-stage second-type-3-stage fourth-3-stage-last fiveth-3-stage-last sixth-3-stage-last sixth-3-stage-main fiveth-3-stage-main fourth-3-stage-main fourth-2-stage-zont-5-2svihodom fiveth-zont-5-2svihodom sixth-zont-5-2svihodom sixth-zont-5-svihodom 1-stage-krisha-1-type-1look-full 1-stage-krisha-2-type-1look-full 1-stage-krisha-5-typefull-1look 1-stage-krisha-full-6-type-1look");
    }

    //Удаление классов вывода на крышу
    function vivodDeleted() {
        $(".krisha-stage-type-hover").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fiveth-2-stage-type first-type-3-stage second-type-3-stage third-type third-type-3-stage last-type sixth-type-3-stage sixth-type-3-stage-special seventh-type-3-stage last-type-special");
        $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fiveth-2-stage-type first-type-3-stage second-type-3-stage third-type third-type-3-stage last-type sixth-type-3-stage sixth-type-3-stage-special seventh-type-3-stage last-type-special");
    }

    //Очистка выдиления с элемента
    function selectDeleted() {
        $(".krisha-select-box .type-select-box img.selectedItem").removeClass("selectedItem");
    }

    //Очистка выдиления первого этажа
    function selectFirstStageDeleted() {
        $(".first-stage .type-select-box img.selectedItem").removeClass("selectedItem");
    }

    //Очистка выдиления зонта
    function selectZontDeleted() {
        $(".zont-select-box .type-select-box img.selectedItem").removeClass("selectedItem");
    }

    //Удаление классов второго этажа
    function secondStageDeleted() {
        $(".second-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type third-type-2-stage third-type-2-stage-special third-type-3-stage-special third-type-3-stage fourth-type-3-stage third-type-2-stage third-type-2-stage-special");
    }

    //Удаление классов выхода
    function secondVihodDeleted() {
        $(".krisha-stage-type").removeClass("fiveth-2-stage-type");
    }

    //Очистка выдиления с элемента 2-го этажа
    function secondStageSelectDeleted() {
        $(".second-stage img").removeClass("selectedItem");
    }

    //Функция удаления всех типов дымоходов для первого этажа
    function typeDimohodDeleted() {
        $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type third-type fourth-type fifth-type sixth-type seventh-type eighth-type");
    }

    //Функция удаления всех типов дымоходов для Hovera первого этажа
    function typeDimohodHoverDeleted() {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("first-type second-type third-type fourth-type fifth-type sixth-type seventh-type eighth-type");
    }

    // Функция вычисления количество этажей
    function stageNumbers() {
        stage = $('#exampleFormControlSelect1 option:selected').val();
        return stage;
    }
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
    // Изминения начальных данных для ввода пользователем
    $('#exampleFormControlSelect1').change(function() {
        $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type third-type fourth-type fifth-type sixth-type");
        $(".calculator-final-look .main-layer .krisha-stage-type").removeClass("first-type second-type third-type fourth-type fifth-type sixth-type");
        stage = stageNumbers();

        if (stage == "1") {
            deleteThirdStageInterface();
            deleteSelectThirdStage();
            selectDeleted();
            selectFirstStageDeleted();
            selectZontDeleted();
            zontDeleted();
            vivodDeleted();
            secondStageDeleted();
            deleteClassThirStage();
            typeDimohodDeleted();
            typeDimohodHoverDeleted();
            vihodNaKrishuType = 0;
            partSecondStage = 0;
            partFirstStage = 0;
            partThirdStage = 0;

            $(".second-stage").css("display", "none");
            $(".second-stage").css("third-stage", "none");
            $(".second-stage").css("krisha-select-box", "none");
            $(".second-stage").css("zont-select-box", "none");

            $(".stage-builder-wrapeer .third-stage, .stage-builder-wrapeer .third-stage img").css("display", "none");
            $(".main-layer").removeClass("two-stage three-stage");
            $(".main-layer").addClass("one-stage");
            $(".first-stage-type-hover, .first-stage-type, .krisha-stage-type, .second-stage-type, .second-stage-type-hover, .krisha-stage-type-hover, .zont-stage-type, .zont-stage-type-hover, .third-stage-type, .third-stage-type-hover").removeClass("three-stage-build");
            $(".first-stage-type-hover, .first-stage-type, .krisha-stage-type, .second-stage-type, .second-stage-type-hover, .krisha-stage-type-hover, .zont-stage-type, .zont-stage-type-hover, .third-stage-type, .third-stage-type-hover").removeClass("two-stage-build");
            $(".first-stage .type-select-box img:nth-child(7), .first-stage .type-select-box img:nth-child(8)").css("display", "none");
            $(".first-stage .type-select-box img:nth-child(1), .first-stage .type-select-box img:nth-child(2), .first-stage .type-select-box img:nth-child(3), .first-stage .type-select-box img:nth-child(4), .first-stage .type-select-box img:nth-child(5), .first-stage .type-select-box img:nth-child(6)").css("display", "unset");
        }

        if (stage == "2") {
            deleteThirdStageInterface();
            deleteSelectThirdStage();
            selectDeleted();
            selectFirstStageDeleted();
            selectZontDeleted();
            zontDeleted();
            vivodDeleted();
            secondStageDeleted();
            deleteClassThirStage();
            typeDimohodDeleted();
            typeDimohodHoverDeleted();
            vihodNaKrishuType = 0;
            partSecondStage = 0;
            partFirstStage = 0;
            partThirdStage = 0;
            $(".second-stage").css("display", "none");
            $(".second-stage").css("third-stage", "none");
            $(".second-stage").css("krisha-select-box", "none");
            $(".second-stage").css("zont-select-box", "none");

            $(".stage-builder-wrapeer .third-stage, .stage-builder-wrapeer .third-stage img").css("display", "none");
            $(".krisha-select-box").css("display", "none");
            $(".zont-select-box").css("display", "none");
            $(".main-layer").removeClass("one-stage three-stage");
            $(".main-layer").addClass("two-stage");
            $(".first-stage-type-hover, .first-stage-type, .second-stage-type, .second-stage-type-hover, .krisha-stage-type, .krisha-stage-type-hover, .zont-stage-type, .zont-stage-type-hover, .third-stage-type, .third-stage-type-hover").removeClass("three-stage-build");
            $(".first-stage-type-hover, .first-stage-type, .second-stage-type, .second-stage-type-hover, .krisha-stage-type, .krisha-stage-type-hover, .zont-stage-type, .zont-stage-type-hover, .third-stage-type, .third-stage-type-hover").addClass("two-stage-build");
            $(".first-stage .type-select-box img:nth-child(1), .first-stage .type-select-box img:nth-child(2), .first-stage .type-select-box img:nth-child(3)").css("display", "none");
            $(".first-stage .type-select-box img:nth-child(7), .first-stage .type-select-box img:nth-child(8)").css("display", "unset");
        }

        if (stage == "3") {
            deleteThirdStageInterface();
            deleteSelectThirdStage();
            selectDeleted();
            selectFirstStageDeleted();
            selectZontDeleted();
            zontDeleted();
            vivodDeleted();
            secondStageDeleted();
            deleteClassThirStage();
            typeDimohodDeleted();
            typeDimohodHoverDeleted();
            vihodNaKrishuType = 0;
            partSecondStage = 0;
            partFirstStage = 0;
            partThirdStage = 0;
            $(".second-stage").css("display", "none");
            $(".second-stage").css("third-stage", "none");
            $(".second-stage").css("krisha-select-box", "none");
            $(".second-stage").css("zont-select-box", "none");

            $(".second-stage").css("display", "none");
            $(".krisha-select-box").css("display", "none");
            $(".zont-select-box").css("display", "none");
            $(".main-layer").removeClass("two-stage one-stage");
            $(".main-layer").addClass("three-stage");
            $(".first-stage-type-hover, .first-stage-type, .krisha-stage-type, .krisha-stage-type-hover, .zont-stage-type, .zont-stage-type-hover, .second-stage-type, .second-stage-type-hover, .third-stage-type, .third-stage-type-hover").removeClass("two-stage-build");
            $(".first-stage-type-hover, .first-stage-type, .krisha-stage-type, .krisha-stage-type-hover, .zont-stage-type, .zont-stage-type-hover, .second-stage-type, .second-stage-type-hover, .third-stage-type, .third-stage-type-hover").addClass("three-stage-build");
            $(".first-stage .type-select-box img:nth-child(1), .first-stage .type-select-box img:nth-child(2), .first-stage .type-select-box img:nth-child(3)").css("display", "none");
            $(".first-stage .type-select-box img:nth-child(7), .first-stage .type-select-box img:nth-child(8)").css("display", "unset");
        }
    });

    // Диаметр трубы (мм)
    $('#exampleFormControlSelect2').change(function() {
        diametr = $('#exampleFormControlSelect2 option:selected').val();
    });

    // Тип дымохода
    $('#exampleFormControlSelect3').change(function() {
        typeOfDymohod = $('#exampleFormControlSelect3 option:selected').val();
    });

    // Тип печи
    $('#exampleFormControlSelect4').change(function() {
        typeOfPech = $('#exampleFormControlSelect4 option:selected').val();
    });


    /********** ШАГ 2 **********/

    /************************ Кнопки **************************/
    ///////////////// Кнопка назад к шагу 1 /////////////////
    // Контроллер табов TAB 1
    $(".nav-tabs a:nth-child(1)").click(function() {
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");
        $(".mobile-buttons ._button_push:nth-child(1)").css("display", "inline-block");
    });

    // Контроллер табов TAB 2
    $(".nav-tabs a:nth-child(2)").click(function() {
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");
        $(".mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4)").css("display", "inline-block");
    });

    // Контроллер табов TAB 3
    $(".nav-tabs a:nth-child(3)").click(function() {
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");
        $(".mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "inline-block");

        $(".for-one-stage-build, .for-two-stage-build, .for-three-stage-build").css("display", "none");

        if (stage == "1") {
            $(".for-one-stage-build").css("display", "block");
        }

        if (stage == "2") {
            $(".for-two-stage-build").css("display", "block");
        }

        if (stage == "3") {
            $(".for-three-stage-build").css("display", "block");
        }
    });

    // Контроллер табов TAB 3
    $(".nav-tabs a:nth-child(4)").click(function() {

        $(".class-form-one-stage, .class-form-two-stage, .class-form-tree-stage").css("display", "none");

        if (stage == "1") {
            $(".class-form-one-stage").css("display", "block");
        }

        if (stage == "2") {
            $(".class-form-two-stage").css("display", "block");
        }

        if (stage == "3") {
            $(".class-form-three-stage").css("display", "block");
        }
    });

    ///////////////// Сброс /////////////////
    $("#resetButton").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        vivodDeleted();
        zontDeleted();
        typeDimohodDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        $(".second-stage").css("display", "none");
        $(".third-stage").css("display", "none");
        $(".krisha-select-box").css("display", "none");
        $(".zont-select-box").css("display", "none");
    });

    ///////////////// Сброс МОБИЛЬНАЯ версия /////////////////
    $("#resetMobile").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        vivodDeleted();
        zontDeleted();
        typeDimohodDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        $(".second-stage").css("display", "none");
        $(".third-stage").css("display", "none");
        $(".krisha-select-box").css("display", "none");
        $(".zont-select-box").css("display", "none");
    });


    // Построить схему МОБИЛЬНАЯ версия
    $("#firstButtonNav").click(function() {
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");
        $(".mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4)").css("display", "inline-block");
    });

    // Назад к шагу 1 МОБИЛЬНАЯ версия
    $("#secondButtonNav").click(function() {
        $(".nav-tabs a:nth-child(1)").addClass("active");
        $(".tab-content #step-1").addClass("active show");
        $(".nav-tabs a:nth-child(2)").removeClass("active");
        $(".tab-content #step-2").removeClass("active show");
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");
        $(".mobile-buttons ._button_push:nth-child(1)").css("display", "inline-block");
    });

    // Построить схему
    $(".shema").click(function() {
        $("#nav-tab a.nav-item:nth-child(1)").removeClass("active");
        $("#nav-tab a.nav-item:nth-child(2)").addClass("active");
        $("#nav-tabContent .tab-pane:nth-child(1)").removeClass("show active");
        $("#nav-tabContent .tab-pane:nth-child(2)").addClass("show active");
    });

    $("#backToStep1").click(function() {
        $(".nav-tabs a:nth-child(1)").addClass("active");
        $(".tab-content #step-1").addClass("active show");
        $(".nav-tabs a:nth-child(2)").removeClass("active");
        $(".tab-content #step-2").removeClass("active show");
    });

    ///////////////// Кнопка назад к шагу 2 /////////////////
    $("#backTwoStep").click(function() {
        $(".nav-tabs a:nth-child(2)").addClass("active");
        $(".tab-content #step-2").addClass("active show");
        $(".nav-tabs a:nth-child(3)").removeClass("active");
        $(".tab-content #step-3").removeClass("active show");
    });

    ///////////////// Кнопка назад к шагу 2 Мобильная версия /////////////////
    $("#fivethButtonNav").click(function() {
        $(".nav-tabs a:nth-child(2)").addClass("active");
        $(".tab-content #step-2").addClass("active show");
        $(".nav-tabs a:nth-child(3)").removeClass("active");
        $(".tab-content #step-3").removeClass("active show");
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");
        $(".mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4)").css("display", "inline-block");
    });

    ///////////////// Кнопка вперёд к шагу 3 /////////////////
    $("#nextToStep3").click(function() {
        $(".nav-tabs a:nth-child(3)").addClass("active");
        $(".tab-content #step-3").addClass("active show");
        $(".nav-tabs a:nth-child(2)").removeClass("active");
        $(".tab-content #step-2").removeClass("active show");

        $(".for-one-stage-build, .for-two-stage-build, .for-three-stage-build").css("display", "none");

        if (stage == "1") {
            $(".for-one-stage-build").css("display", "block");
        }

        if (stage == "2") {
            $(".for-two-stage-build").css("display", "block");
        }

        if (stage == "3") {
            $(".for-three-stage-build").css("display", "block");
        }
    });

    ///////////////// Кнопка вперёд к шагу 3 МОБИЛЬНАЯ версия /////////////////
    $("#fourthButtonNav").click(function() {
        $(".nav-tabs a:nth-child(3)").addClass("active");
        $(".tab-content #step-3").addClass("active show");
        $(".nav-tabs a:nth-child(2)").removeClass("active");
        $(".tab-content #step-2").removeClass("active show");
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");
        $(".mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "inline-block");
    });

    ///////////////// Кнопка вперёд к шагу 4 /////////////////
    $("#nextFourthStep").click(function() {
        $(".nav-tabs a:nth-child(4)").addClass("active");
        $(".tab-content #step-4").addClass("active show");
        $(".nav-tabs a:nth-child(3)").removeClass("active");
        $(".tab-content #step-3").removeClass("active show");
        $(".nav-tabs a:nth-child(2)").removeClass("active");
        $(".tab-content #step-2").removeClass("active show");

        $(".class-form-one-stage, .class-form-two-stage, .class-form-tree-stage").css("display", "none");

        if (stage == "1") {
            $(".class-form-one-stage").css("display", "block");
        }

        if (stage == "2") {
            $(".class-form-two-stage").css("display", "block");
        }

        if (stage == "3") {
            $(".class-form-three-stage").css("display", "block");
        }
    });

    ///////////////// Кнопка вперёд к шагу 4 МОБИЛЬНАЯ версия /////////////////
    $("#sixthButtonNav").click(function() {
        $(".nav-tabs a:nth-child(4)").addClass("active");
        $(".tab-content #step-4").addClass("active show");
        $(".nav-tabs a:nth-child(3)").removeClass("active");
        $(".tab-content #step-3").removeClass("active show");
        $(".nav-tabs a:nth-child(2)").removeClass("active");
        $(".tab-content #step-2").removeClass("active show");
        $(".mobile-buttons ._button_push:nth-child(1), .mobile-buttons ._button_push:nth-child(2), .mobile-buttons ._button_push:nth-child(3), .mobile-buttons ._button_push:nth-child(4), .mobile-buttons ._button_push:nth-child(5), .mobile-buttons ._button_push:nth-child(6)").css("display", "none");

        $(".class-form-one-stage, .class-form-two-stage, .class-form-tree-stage").css("display", "none");

        if (stage == "1") {
            $(".class-form-one-stage").css("display", "block");
        }

        if (stage == "2") {
            $(".class-form-two-stage").css("display", "block");
        }

        if (stage == "3") {
            $(".class-form-three-stage").css("display", "block");
        }
    });

    ///////////////// Типдымохода 1 /////////////////
    $(".first-stage .type-select-box img:nth-child(1)").click(function() {
        // Этаж 1
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        vivodDeleted();
        zontDeleted();
        typeDimohodDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        partFirstStage = 1;
        $(".first-stage .type-select-box img:nth-child(1)").addClass("selectedItem");
        $(".krisha-select-box img").css("display", "none");
        $(".krisha-select-box").css("display", "none");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("first-type");

        if (stage == "1") {
            $(".constract .text-box .tab-pane .stage-builder-wrapeer .zont-select-box").css("display", "block");
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box img:nth-child(1), .zont-select-box img:nth-child(2), .zont-select-box img:nth-child(3)").css("display", "unset");
        }

        if (stage == "2") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(1), .second-stage img:nth-child(2)").css("display", "unset");
        }
    });

    $(".first-stage .type-select-box img:nth-child(1)").mouseover(function() {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("first-type");
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("first-type");
    });

    ///////////////// Тип дымохода 2 /////////////////
    $(".first-stage .type-select-box img:nth-child(2)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        typeDimohodDeleted();
        vivodDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        zontDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        vihodNaKrishuType = 0;
        partFirstStage = 2;
        $(".first-stage .type-select-box img:nth-child(2)").addClass("selectedItem");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("second-type");
        $(".zont-select-box img").css("display", "none");
        $(".krisha-select-box").css("display", "none");

        if (stage == "1") {
            $(".constract .text-box .tab-pane .stage-builder-wrapeer .zont-select-box").css("display", "block");
            $(".zont-select-box img:nth-child(4), .zont-select-box img:nth-child(5), .zont-select-box img:nth-child(6)").css("display", "unset");
        }

        if (stage == "2") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(1), .second-stage img:nth-child(2)").css("display", "unset");
        }
    });

    $(".first-stage .type-select-box img:nth-child(2)").mouseover(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("second-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("first-type");
        }
    })
    .mouseout(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("second-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("first-type");
        }

    });

    ///////////////// Тип дымохода 3 /////////////////
    $(".first-stage .type-select-box img:nth-child(3)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        typeDimohodDeleted();
        vivodDeleted();
        zontDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        partFirstStage = 3;
        $(".first-stage .type-select-box img:nth-child(3)").addClass("selectedItem");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");

        /* Этаж 1 */
        if (stage == "1") {
            $(".krisha-select-box").css("display", "none");
            $(".calculator-final-look .main-layer .first-stage-type").addClass("third-type");
            $(".constract .text-box .tab-pane .stage-builder-wrapeer .zont-select-box").css("display", "block");
            $(".zont-select-box img").css("display", "none");
            $(".zont-select-box img:nth-child(4), .zont-select-box img:nth-child(5), .zont-select-box img:nth-child(6)").css("display", "unset");
        }
    });

    $(".first-stage .type-select-box img:nth-child(3)").mouseover(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("third-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("second-type");
        }
    })
    .mouseout(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("third-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("second-type");
        }
    });

    ///////////////// Тип дымохода 4 /////////////////
    $(".first-stage .type-select-box img:nth-child(4)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        typeDimohodDeleted();
        vivodDeleted();
        zontDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        partFirstStage = 4;
        $(".second-stage img").css("display", "none");
        $(".first-stage .type-select-box img:nth-child(4)").addClass("selectedItem");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("fourth-type");

        if (stage == "1") {
            $(".zont-select-box").css("display", "none");
            $(".krisha-select-box img:nth-child(1), .krisha-select-box img:nth-child(2), .krisha-select-box img:nth-child(3)").css("display", "unset");
        }

        if (stage == "2") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(3)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
        }

        if (stage == "3") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(3)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
        }
    });

    $(".first-stage .type-select-box img:nth-child(4)").mouseover(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fourth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("third-type");
        }
        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fourth-type");
        }
    })
    .mouseout(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fourth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("third-type");
        }
        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fourth-type");
        }
    });

    ///////////////// Тип дымохода 5 /////////////////
    $(".first-stage .type-select-box img:nth-child(5)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        typeDimohodDeleted();
        vivodDeleted();
        zontDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        partFirstStage = 5;

        $(".second-stage img").css("display", "none");
        $(".first-stage .type-select-box img:nth-child(5)").addClass("selectedItem");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");

        if (stage == "1") {
            $(".zont-select-box").css("display", "none");
            $(".krisha-select-box img:nth-child(1), .krisha-select-box img:nth-child(2), .krisha-select-box img:nth-child(3)").css("display", "unset");
            $(".calculator-final-look .main-layer .first-stage-type").addClass("fifth-type");
        }

        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type").addClass("fifth-type");
            $(".second-stage img:nth-child(3)").css("display", "unset");
            $(".second-stage").css("display", "block");
            $(".krisha-select-box").css("display", "none");
        }

        if (stage == "3") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(3)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
            $(".calculator-final-look .main-layer .first-stage-type").addClass("fifth-type");
        }
    });

    $(".first-stage .type-select-box img:nth-child(5)").mouseover(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fifth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fifth-type");
        }

        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fifth-type");
        }
    })
    .mouseout(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fifth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fifth-type");
        }
        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fifth-type");
        }
    });

    ///////////////// Тип дымохода 6 /////////////////
    $(".first-stage .type-select-box img:nth-child(6)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        typeDimohodDeleted();
        vivodDeleted();
        zontDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        partFirstStage = 6;
        $(".second-stage img").css("display", "none");
        $(".first-stage .type-select-box img:nth-child(6)").addClass("selectedItem");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");

        if (stage == "1") {
            $(".zont-select-box").css("display", "none");
            $(".krisha-select-box img:nth-child(4)").css("display", "unset");
            $(".calculator-final-look .main-layer .first-stage-type").addClass("sixth-type");
        }

        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type").addClass("sixth-type");
            $(".second-stage").css("display", "block");
            $(".second-stage img:nth-child(3), .second-stage img:nth-child(4)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
        }

        if (stage == "3") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(3), .second-stage img:nth-child(4)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
            $(".calculator-final-look .main-layer .first-stage-type").addClass("sixth-type");
        }
    });

    $(".first-stage .type-select-box img:nth-child(6)").mouseover(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("sixth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("sixth-type");
        }

        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("sixth-type");
        }
    })
    .mouseout(function() {

        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("sixth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("sixth-type");
        }
        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("sixth-type");
        }
    });

    ///////////////// Тип дымохода 7 /////////////////
    $(".first-stage .type-select-box img:nth-child(7)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        typeDimohodDeleted();
        vivodDeleted();
        zontDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        partFirstStage = 7;
        $(".second-stage img").css("display", "none");
        $(".first-stage .type-select-box img:nth-child(7)").addClass("selectedItem");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");

        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type").addClass("seventh-type");
            $(".second-stage").css("display", "block");
            $(".second-stage img:nth-child(1), .second-stage img:nth-child(2)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
        }

        if (stage == "3") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(2)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
            $(".calculator-final-look .main-layer .first-stage-type").addClass("seventh-type");
        }
    });

    $(".first-stage .type-select-box img:nth-child(7)").mouseover(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("seventh-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("seventh-type");
        }
        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("seventh-type");
        }
    })

    .mouseout(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("seventh-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("seventh-type");
        }

        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("seventh-type");
        }
    });

    ///////////////// Тип дымохода 8 /////////////////
    $(".first-stage .type-select-box img:nth-child(8)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        typeDimohodDeleted();
        vivodDeleted();
        zontDeleted();
        selectDeleted();
        selectFirstStageDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        secondStageSelectDeleted();
        partFirstStage = 7;

        $(".second-stage img").css("display", "none");
        $(".first-stage .type-select-box img:nth-child(8)").addClass("selectedItem");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");

        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type").addClass("eighth-type");
            $(".second-stage").css("display", "block");
            $(".second-stage img:nth-child(1), .second-stage img:nth-child(2)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
        }

        if (stage == "3") {
            $(".second-stage").css("display", "block");
            $(".second-stage img").css("display", "none");
            $(".second-stage img:nth-child(2)").css("display", "unset");
            $(".krisha-select-box").css("display", "none");
            $(".calculator-final-look .main-layer .first-stage-type").addClass("eighth-type");
        }
    });

    $(".first-stage .type-select-box img:nth-child(8)").mouseover(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("eighth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("eighth-type");
        }

        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("eighth-type");
        }
    })

    .mouseout(function() {
        if (stage == "1") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("eighth-type");
        }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("eighth-type");
        }
        if (stage == "3") {
            $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("eighth-type");
        }
    });
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 1 
    $(".krisha-select-box .type-select-box img:nth-child(1)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 1;

        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(1)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("first-type");

        if (stage == "1") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }

    });

    $(".krisha-select-box .type-select-box img:nth-child(1)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("first-type");


    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("first-type");

    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 2 
    $(".krisha-select-box .type-select-box img:nth-child(2)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 2;
        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(2)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("second-type");

        if (stage == "1") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }
    });

    $(".krisha-select-box .type-select-box img:nth-child(2)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("second-type");
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("second-type");
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 3 
    $(".krisha-select-box .type-select-box img:nth-child(3)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 3;
        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(3)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("third-type");

        if (stage == "1") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");
        }

        if (partThirdStage == "3") {
            $(".krisha-stage-type").addClass("third-type-3-stage");
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");
        }
    });

    $(".krisha-select-box .type-select-box img:nth-child(3)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("third-type");

        if (partThirdStage == "3") {
            $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("third-type-3-stage");
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("third-type");

        if (partThirdStage == "3") {
            $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("third-type-3-stage");
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 4 
    $(".krisha-select-box .type-select-box img:nth-child(4)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 4;
        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(4)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("fourth-type");

        if (stage == "1") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }
    });

    $(".krisha-select-box .type-select-box img:nth-child(4)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fourth-type");
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fourth-type");
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 5 
    $(".krisha-select-box .type-select-box img:nth-child(5)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 5;
        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(5)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("fiveth-type");

        if (stage == "1") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }

        if (stage == "2") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");

            if (partSecondStage == "3") {
                $(".krisha-stage-type").addClass("fiveth-2-stage-type");
            }

            if (partSecondStage == "4") {
                secondVihodDeleted();
                $(".krisha-stage-type").addClass("fiveth-type");
            }

            if (partFirstStage == "4" || partFirstStage == "5") {
                vivodDeleted();
                $(".krisha-stage-type").addClass("fiveth-type");
            }
        }

        if (partThirdStage == "3") {
            $(".krisha-stage-type").addClass("first-type-3-stage");
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }
    });

    $(".krisha-select-box .type-select-box img:nth-child(5)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fiveth-type");

        if (stage == "2") {

            if (partSecondStage == "3") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-type");
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fiveth-2-stage-type");
            }

            if (partSecondStage == "4") {
                secondVihodDeleted();
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-2-stage-type");
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fiveth-type");
            }

            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-2-stage-type");
                $(".krisha-stage-type-hover").addClass("fiveth-type");
            }
        }

        if (partThirdStage == "3") {
            $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("first-type-3-stage");
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-type");

        if (stage == "2") {
            if (partSecondStage == "3") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-2-stage-type");
            }

            if (partSecondStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-type");
            }


            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".krisha-stage-type-hover").removeClass("fiveth-type");
            }
        }

        if (partThirdStage == "3") {
            $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("first-type-3-stage");
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 6 
    $(".krisha-select-box .type-select-box img:nth-child(6)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 6;

        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(6)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("sixth-type");

        if (stage == "1") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }

        if (stage == "2") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");

            if (partSecondStage == "3") {
                $(".krisha-stage-type").removeClass("sixth-type");
                $(".krisha-stage-type").addClass("sixth-type");
            }
        }

        if (stage == "3") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");

            if (partThirdStage == "4") {
                $(".krisha-stage-type").addClass("sixth-type-3-stage-special");
            }

            if (partThirdStage == "3") {
                $(".krisha-stage-type").addClass("second-type-3-stage");
                $(".krisha-stage-type").addClass("first-type-3-stage");
                $(".zont-select-box").css("display", "block");
                $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".krisha-stage-type").addClass("sixth-type-3-stage-special");
            }

            if (partThirdStage == "4" && partSecondStage == "3") {
                $(".zont-select-box").css("display", "block");
                $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
            }
        }

    });

    $(".krisha-select-box .type-select-box img:nth-child(6)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("sixth-type");

        if (stage == "3") {

            if (partThirdStage == "3") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("second-type-3-stage");
            }

            if (partThirdStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("sixth-type");
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("sixth-type-3-stage-special");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("sixth-type");
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("sixth-type-3-stage-special");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("sixth-type");

        if (stage == "3") {

            if (partThirdStage == "3") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("second-type-3-stage");
            }

            if (partThirdStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("sixth-type-3-stage-special");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("sixth-type-3-stage-special");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 7
    $(".krisha-select-box .type-select-box img:nth-child(7)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 7;

        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(7)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("seventh-type");

        if (stage == "2") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");
        }

        if (stage == "3") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");

            if (partThirdStage == "4") {
                $(".krisha-stage-type").addClass("seventh-type-3-stage");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".krisha-stage-type").addClass("seventh-type-3-stage");
            }

            if (partThirdStage == "3") {
                $(".zont-select-box").css("display", "block");
                $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");
            }

            if (partThirdStage == "4" && partSecondStage == "3") {
                $(".zont-select-box").css("display", "block");
                $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");
            }
        }
    });

    $(".krisha-select-box .type-select-box img:nth-child(7)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("seventh-type");

        if (stage == "3") {

            if (partThirdStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("seventh-type");
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("seventh-type-3-stage");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("seventh-type");
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("seventh-type-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("seventh-type");

        if (stage == "3") {

            if (partThirdStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("seventh-type-3-stage");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("seventh-type-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 9
    $(".krisha-select-box .type-select-box img:nth-child(9)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 9;
        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(9)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("last-type");


        if (partThirdStage == "3") {
            $(".krisha-stage-type").addClass("first-type-3-stage");
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }
    });

    $(".krisha-select-box .type-select-box img:nth-child(9)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("last-type");
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("last-type");
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 10
    $(".krisha-select-box .type-select-box img:nth-child(10)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 10;
        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(10)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("last-type");

        if (stage == "3") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");

            if (partThirdStage == "4") {
                $(".krisha-stage-type").addClass("sixth-type-3-stage");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".krisha-stage-type").addClass("sixth-type-3-stage");
            }

            if (partThirdStage == "3") {
                $(".zont-select-box").css("display", "block");
                $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
            }

            if (partThirdStage == "4" && partSecondStage == "3") {
                $(".zont-select-box").css("display", "block");
                $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
            }
        }
    });

    $(".krisha-select-box .type-select-box img:nth-child(10)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("last-type");

        if (stage == "3") {

            if (partThirdStage == "4") {
                $(".krisha-stage-type-hover").addClass("sixth-type-3-stage");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".krisha-stage-type-hover").addClass("sixth-type-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("last-type");


        if (stage == "3") {

            if (partThirdStage == "4") {
                $(".krisha-stage-type-hover").removeClass("sixth-type-3-stage");
            }

            if (partThirdStage == "3" && partSecondStage == "4") {
                $(".krisha-stage-type-hover").removeClass("sixth-type-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Вывод на крышу 8
    $(".krisha-select-box .type-select-box img:nth-child(8)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        vihodNaKrishuType = 8;
        $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
        $(".krisha-select-box .type-select-box img:nth-child(8)").addClass("selectedItem");
        $(".krisha-stage-type").addClass("eighth-type");
        $(".zont-select-box").css("display", "block");
        $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
    });

    $(".krisha-select-box .type-select-box img:nth-child(8)").mouseover(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("eighth-type");
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("eighth-type");
    });

    //////////////////////////////////////////////////////////////////////////////

    // Зонт 1 
    $(".zont-select-box .type-select-box img:nth-child(1)").click(function() {
        vivodDeleted();
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(1)").addClass("selectedItem");
        $(".zont-stage-type").addClass("first-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".zont-stage-type").removeClass("first-type");
                $(".zont-stage-type").addClass("first-2-stage-type");
            }
        }

        if (stage == "3") {
            zontDeleted();

            if (partThirdStage == "1") {
                $(".zont-stage-type").addClass("first-type-3-stage");
            }
        }
    });

    $(".zont-select-box .type-select-box img:nth-child(1)").mouseover(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("first-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-type");
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("first-2-stage-type");
            }
        }

        if (stage == "3") {

            if (partThirdStage == "1") {
                zontHoverDeleted();
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("first-type-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-2-stage-type");
            }
        }

        if (stage == "3") {

            if (partThirdStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-type-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Зонт 2
    $(".zont-select-box .type-select-box img:nth-child(2)").click(function() {
        vivodDeleted();
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(2)").addClass("selectedItem");
        $(".zont-stage-type").addClass("second-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".zont-stage-type").removeClass("second-type");
                $(".zont-stage-type").addClass("second-2-stage-type");
            }
        }


        if (stage == "3") {
            zontDeleted();

            if (partThirdStage == "1") {
                $(".zont-stage-type").addClass("second-type-3-stage");
            }
        }
    });

    $(".zont-select-box .type-select-box img:nth-child(2)").mouseover(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("second-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type");
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("second-2-stage-type");
            }
        }

        if (stage == "3") {

            if (partThirdStage == "1") {
                zontHoverDeleted();
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("second-type-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type");
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-2-stage-type");

                if (stage == "3") {

                    if (partThirdStage == "1") {
                        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type-3-stage");
                    }
                }
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Зонт 3
    $(".zont-select-box .type-select-box img:nth-child(3)").click(function() {
        vivodDeleted();
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(3)").addClass("selectedItem");
        $(".zont-stage-type").addClass("third-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".zont-stage-type").removeClass("second-type");
                $(".zont-stage-type").addClass("third-2-stage-type");
            }
        }

        if (stage == "3") {
            zontDeleted();

            if (partThirdStage == "1") {
                $(".zont-stage-type").addClass("third-type-3-stage");
            }
        }
    });

    $(".zont-select-box .type-select-box img:nth-child(3)").mouseover(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("third-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-type");
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("third-2-stage-type");
            }
        }

        if (stage == "3") {

            if (partThirdStage == "1") {
                zontHoverDeleted();
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("third-type-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-type");

        if (stage == "2") {

            if (partSecondStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-2-stage-type");
            }
        }

        if (stage == "3") {

            if (partThirdStage == "1") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-type-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Зонт 4
    $(".zont-select-box .type-select-box img:nth-child(4)").click(function() {
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(4)").addClass("selectedItem");
        $(".zont-stage-type").addClass("fourth-type");

        if (vihodNaKrishuType == "1") {
            zontDeleted();
            $(".zont-stage-type").addClass("fourth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            zontDeleted();
            $(".zont-stage-type").addClass("fourth-zont-2-svihodom");
        }

        if (vihodNaKrishuType == "4") {
            zontDeleted();
            $(".zont-stage-type").addClass("fourth-zont-4-svihodom");
        }

        if (stage == "1" && partFirstStage == "3") {
            zontDeleted();
            $(".zont-stage-type").addClass("fourth-type");
        }

        if (vihodNaKrishuType == "5") {
            zontDeleted();
            $(".zont-stage-type").addClass("fourth-2-stage-zont-5-svihodom");

            if (partFirstStage == "6") {


                if (partSecondStage == "3") {
                    zontHoverDeleted();
                    $(".zont-stage-type").addClass("fourth-2-stage-zont-5-2svihodom");
                }
            }
        }
        if (vihodNaKrishuType == "6") {
            zontDeleted();
            $(".zont-stage-type").addClass("fourth-2-stage-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "8") {
            $(".zont-stage-type").addClass("eighth-type-2-stage");
        }

        if (partThirdStage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "5") {
                $(".zont-stage-type").addClass("fourth-3-stage");
            }
        }

        if (stage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "6") {

                if (partSecondStage == "4") {
                    $(".zont-stage-type").addClass("fourth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".zont-stage-type").addClass("fourth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".zont-stage-type").addClass("fourth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".zont-stage-type").addClass("fourth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".zont-stage-type").addClass("fourth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".zont-stage-type").addClass("fourth-3-stage");
            }
        }
    });
    $(".zont-select-box .type-select-box img:nth-child(4)").mouseover(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-type");

        if (vihodNaKrishuType == "1") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-type-svihodom");
        }

        if (stage == "1" && partFirstStage == "3") {
            zontHoverDeleted();
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-type");
        }

        if (vihodNaKrishuType == "2") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-zont-2-svihodom");
        }

        if (vihodNaKrishuType == "4") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "5") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-2-stage-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    zontHoverDeleted();
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-2-stage-zont-5-2svihodom");
                }
            }
        }

        if (vihodNaKrishuType == "6") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-2-stage-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "8") {
            zontHoverDeleted();
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-type-2-stage");
        }

        if (partThirdStage == "3") {
            zontHoverDeleted();

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-3-stage");
            }
        }

        if (stage == "3") {

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-type");

        if (vihodNaKrishuType == "1") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-zont-2-svihodom");
        }

        if (vihodNaKrishuType == "4") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "5") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-2-stage-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-2-stage-zont-5-2svihodom");
                }
            }
        }
        if (vihodNaKrishuType == "6") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-2-stage-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "8") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-type-2-stage");
        }

        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-3-stage");
            }
        }

        if (stage == "3") {

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Зонт 5 
    $(".zont-select-box .type-select-box img:nth-child(5)").click(function() {
        // vivodDeleted();
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(5)").addClass("selectedItem");
        $(".zont-stage-type").addClass("fiveth-type");

        if (vihodNaKrishuType == "1") {
            zontDeleted();
            $(".zont-stage-type").addClass("fiveth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            zontDeleted();
            $(".zont-stage-type").addClass("fiveth-zont-2-svihodom");
        }

        if (vihodNaKrishuType == "4") {
            zontDeleted();
            $(".zont-stage-type").addClass("fiveth-zont-4-svihodom");
        }

        if (stage == "1" && partFirstStage == "3") {
            zontDeleted();
            $(".zont-stage-type").addClass("fiveth-type");
        }

        if (vihodNaKrishuType == "5") {
            zontDeleted();
            $(".zont-stage-type").addClass("fiveth-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    $(".zont-stage-type").addClass("fiveth-zont-5-2svihodom");
                }
            }
        }
        if (vihodNaKrishuType == "6") {
            zontDeleted();
            $(".zont-stage-type").addClass("fiveth-2-stage-zont-4-svihodom");
        }
        if (vihodNaKrishuType == "8") {
            zontDeleted();
            $(".zont-stage-type").addClass("fiveth-type-2-stage");
        }
        if (partThirdStage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "5") {
                $(".zont-stage-type").addClass("fiveth-3-stage");
            }
        }

        if (stage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".zont-stage-type").addClass("fiveth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type").addClass("fiveth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".zont-stage-type").addClass("fiveth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".zont-stage-type").addClass("fiveth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".zont-stage-type").addClass("fiveth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".zont-stage-type").addClass("fiveth-3-stage");
            }
        }
    });
    $(".zont-select-box .type-select-box img:nth-child(5)").mouseover(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type");

        if (vihodNaKrishuType == "1") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-2-svihodom");
        }

        if (stage == "1" && partFirstStage == "3") {
            zontHoverDeleted();
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type");
        }

        if (vihodNaKrishuType == "4") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-4-svihodom");
        }
        if (vihodNaKrishuType == "5") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-5-2svihodom");
                }
            }
        }
        if (vihodNaKrishuType == "6") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-2-stage-zont-4-svihodom");
        }
        if (vihodNaKrishuType == "8") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type-2-stage");
        }
        if (partThirdStage == "3") {
            zontHoverDeleted();

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-3-stage");
            }
        }

        if (stage == "3") {

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-type");

        if (vihodNaKrishuType == "1") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-2-svihodom");
        }

        if (vihodNaKrishuType == "4") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "5") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-5-2svihodom");
                }
            }
        }
        if (vihodNaKrishuType == "6") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-2-stage-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "8") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-type-2-stage");
        }
        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-3-stage");
            }
        }
        if (stage == "3") {

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Зонт 6
    $(".zont-select-box .type-select-box img:nth-child(6)").click(function() {
        // vivodDeleted();
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(6)").addClass("selectedItem");
        $(".zont-stage-type").addClass("sixth-type");

        if (vihodNaKrishuType == "1") {
            zontDeleted();
            $(".zont-stage-type").addClass("sixth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            zontDeleted();
            $(".zont-stage-type").addClass("sixth-zont-2-svihodom");
        }

        if (stage == "1" && partFirstStage == "3") {
            zontDeleted();
            $(".zont-stage-type").addClass("sixth-type");
        }

        if (vihodNaKrishuType == "4") {
            zontDeleted();
            $(".zont-stage-type").addClass("sixth-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "5") {
            zontDeleted();
            $(".zont-stage-type").addClass("sixth-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    $(".zont-stage-type").addClass("sixth-zont-5-2svihodom");
                }
            }
        }

        if (vihodNaKrishuType == "6") {
            zontDeleted();
            $(".zont-stage-type").addClass("sixth-2-stage-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "8") {
            zontDeleted();
            $(".zont-stage-type").addClass("sixth-type-2-stage");
        }

        if (partThirdStage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "5") {
                $(".zont-stage-type").addClass("sixth-3-stage");
            }
        }

        if (stage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".calculator-final-look .main-layer .zont-stage-type").addClass("sixth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type").addClass("sixth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".zont-stage-type").addClass("sixth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".zont-stage-type").addClass("sixth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".zont-stage-type").addClass("sixth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".zont-stage-type").addClass("sixth-3-stage");
            }
        }
    });
    $(".zont-select-box .type-select-box img:nth-child(6)").mouseover(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type");

        if (vihodNaKrishuType == "1") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-2-svihodom");
        }

        if (stage == "1" && partFirstStage == "3") {
            zontHoverDeleted();
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type");
        }

        if (vihodNaKrishuType == "4") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "5") {
            zontHoverDeleted();
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-5-2svihodom");
                }
            }
        }
        if (vihodNaKrishuType == "6") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-2-stage-zont-4-svihodom");
        }
        if (vihodNaKrishuType == "8") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type-2-stage");
        }
        if (partThirdStage == "3") {
            zontHoverDeleted();

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-3-stage");
            }
        }

        if (stage == "3") {

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-type");

        if (vihodNaKrishuType == "1") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-type-svihodom");
        }

        if (vihodNaKrishuType == "2") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-2-svihodom");
        }

        if (vihodNaKrishuType == "4") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-4-svihodom");
        }

        if (vihodNaKrishuType == "5") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-5-svihodom");

            if (partFirstStage == "6") {

                if (partSecondStage == "3") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-5-2svihodom");
                }
            }
        }
        if (vihodNaKrishuType == "6") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-2-stage-zont-4-svihodom");
        }
        if (vihodNaKrishuType == "8") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-type-2-stage");
        }
        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-3-stage");
            }
        }
        if (stage == "3") {

            if (vihodNaKrishuType == "6") {

                if (partSecondStage = "4") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-3-stage-final");
                }

                if (partFirstStage == "4" || partFirstStage == "5") {
                    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-3-stage-final");
                }
            }

            if (partSecondStage == "4" && vihodNaKrishuType == "10") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-3-stage");
            }

            if (partThirdStage == "3" && partFirstStage == "7" || partThirdStage == "3" && partFirstStage == "8") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-3-stage-last");
            }

            if (vihodNaKrishuType == "9" && partThirdStage == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-3-stage-main");
            }

            if (vihodNaKrishuType == "5") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Зонт 7
    $(".zont-select-box .type-select-box img:nth-child(7)").click(function() {
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(7)").addClass("selectedItem");

        if (vihodNaKrishuType == "3") {
            zontDeleted();
            $(".zont-stage-type").addClass("seventh-zont-3-svihodom");
        }

        if (vihodNaKrishuType == "7") {
            zontDeleted();
            $(".zont-stage-type").addClass("seventh-stage-2-zont-3-svihodom");
        }

        if (partThirdStage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "3") {
                $(".zont-stage-type").addClass("seventh-3-stage");
            }
        }

        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".zont-stage-type").addClass("seventh-3-stage");
            }
        }
    });

    $(".zont-select-box .type-select-box img:nth-child(7)").mouseover(function() {

        if (vihodNaKrishuType == "3") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("seventh-zont-3-svihodom");
        }
        if (vihodNaKrishuType == "7") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("seventh-stage-2-zont-3-svihodom");
        }

        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("seventh-3-stage");
            }
        }

        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("seventh-3-stage");
            }
        }
    })
    .mouseout(function() {

        if (vihodNaKrishuType == "3") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("seventh-zont-3-svihodom");
        }
        if (vihodNaKrishuType == "7") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("seventh-stage-2-zont-3-svihodom");
        }
        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("seventh-3-stage");
            }
        }

        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("seventh-3-stage");
            }
        }
    });

    //////////////////////////////////////////////////////////////////////////////

    // Зонт 8
    $(".zont-select-box .type-select-box img:nth-child(8)").click(function() {
        // vivodDeleted();
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(8)").addClass("selectedItem");

        if (vihodNaKrishuType == "3") {
            zontDeleted();
            $(".zont-stage-type").addClass("eighth-zont-3-svihodom");
        }
        if (vihodNaKrishuType == "7") {
            zontDeleted();
            $(".zont-stage-type").addClass("eighth-stage-2-zont-3-svihodom");
        }
        if (partThirdStage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "3") {
                $(".zont-stage-type").addClass("eighth-3-stage");
            }
        }

        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".zont-stage-type").addClass("eighth-3-stage");
            }
        }
    });

    $(".zont-select-box .type-select-box img:nth-child(8)").mouseover(function() {

        if (vihodNaKrishuType == "3") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-zont-3-svihodom");
        }
        if (vihodNaKrishuType == "7") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-stage-2-zont-3-svihodom");
        }
        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-3-stage");
            }
        }
        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-3-stage");
            }
        }
    })
    .mouseout(function() {

        if (vihodNaKrishuType == "3") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-zont-3-svihodom");
        }
        if (vihodNaKrishuType == "7") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-stage-2-zont-3-svihodom");
        }
        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-3-stage");
            }
        }
        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-3-stage");
            }
        }
    });

    //////////////////////////////////////////////////////////////////////////////

    // Зонт 9
    $(".zont-select-box .type-select-box img:nth-child(9)").click(function() {
        // vivodDeleted();
        zontDeleted();
        $(".zont-select-box .type-select-box img").removeClass("selectedItem");
        $(".zont-select-box .type-select-box img:nth-child(9)").addClass("selectedItem");

        if (vihodNaKrishuType == "3") {
            zontDeleted();
            $(".zont-stage-type").addClass("nineth-zont-3-svihodom");
        }

        if (vihodNaKrishuType == "7") {
            zontDeleted();
            $(".zont-stage-type").addClass("nineth-stage-2-zont-3-svihodom");
        }

        if (partThirdStage == "3") {
            zontDeleted();

            if (vihodNaKrishuType == "3") {
                $(".zont-stage-type").addClass("nineth-3-stage");
            }
        }

        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".zont-stage-type").addClass("nineth-3-stage");
            }
        }
    });

    $(".zont-select-box .type-select-box img:nth-child(9)").mouseover(function() {

        if (vihodNaKrishuType == "3") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("nineth-zont-3-svihodom");
        }

        if (vihodNaKrishuType == "7") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("nineth-stage-2-zont-3-svihodom");
        }

        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("nineth-3-stage");
            }
        }

        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("nineth-3-stage");
            }
        }
    })
    .mouseout(function() {

        if (vihodNaKrishuType == "3") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("nineth-zont-3-svihodom");
        }

        if (vihodNaKrishuType == "7") {
            $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("nineth-stage-2-zont-3-svihodom");
        }

        if (partThirdStage == "3") {

            if (vihodNaKrishuType == "3") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("nineth-3-stage");
            }
        }

        if (stage == "3") {

            if (partSecondStage = "4") {
                $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("nineth-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    // Второй этаж 1 
    $(".second-stage .type-select-box img:nth-child(1)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        partSecondStage = 1;

        $(".krisha-select-box").css("display", "none");
        $(".third-stage").css("display", "none");
        $(".third-stage img").css("display", "none");
        $(".second-stage .type-select-box img").removeClass("selectedItem");
        $(".second-stage .type-select-box img:nth-child(1)").addClass("selectedItem");
        $(".second-stage-type").addClass("first-type");

        if (stage == "2") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(1), .zont-select-box .type-select-box img:nth-child(2), .zont-select-box .type-select-box img:nth-child(3)").css("display", "unset");
        }
    });

    $(".second-stage .type-select-box img:nth-child(1)").mouseover(function() {
        $(".calculator-final-look .main-layer .second-stage-type-hover").addClass("first-type");
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("first-type");
    });
    //////////////////////////////////////////////////////////////////////////////

    // Второй этаж 2 
    $(".second-stage .type-select-box img:nth-child(2)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        partSecondStage = 2;

        $(".third-stage").css("display", "none");
        $(".third-stage img").css("display", "none");
        $(".second-stage .type-select-box img").removeClass("selectedItem");
        $(".second-stage .type-select-box img:nth-child(2)").addClass("selectedItem");
        $(".second-stage-type").addClass("second-type");
        $(".krisha-select-box").css("display", "block");
        $(".krisha-select-box .type-select-box img:nth-child(8)").css("display", "unset");

        if (stage == "3") {
            $(".krisha-select-box").css("display", "none");
            $(".third-stage").css("display", "block");
            $(".third-stage .type-select-box img:nth-child(1), .third-stage .type-select-box img:nth-child(3)").css("display", "unset");
        }
    });

    $(".second-stage .type-select-box img:nth-child(2)").mouseover(function() {
        $(".calculator-final-look .main-layer .second-stage-type-hover").addClass("second-type");
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("second-type");

    });
    //////////////////////////////////////////////////////////////////////////////

    // Второй этаж 3
    $(".second-stage .type-select-box img:nth-child(3)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        partSecondStage = 3;

        $(".third-stage").css("display", "none");
        $(".third-stage img").css("display", "none");
        $(".second-stage .type-select-box img").removeClass("selectedItem");
        $(".second-stage .type-select-box img:nth-child(3)").addClass("selectedItem");

        if (stage == "1") {
            $(".second-stage-type").addClass("third-type");
        }

        if (stage == "2") {
            $(".krisha-select-box img:nth-child(5), .krisha-select-box img:nth-child(6), .krisha-select-box img:nth-child(7)").css("display", "unset");
            $(".krisha-select-box").css("display", "block");
            $(".second-stage-type").addClass("third-type-2-stage");


            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".second-stage-type").addClass("third-type-2-stage-special");
            }

            if (partFirstStage == "6") {
                $(".krisha-select-box .type-select-box img:nth-child(6), .krisha-select-box .type-select-box img:nth-child(7)").css("display", "none");
            }
        }

        if (stage == "3") {

            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".second-stage-type").addClass("third-type-3-stage");
                $(".third-stage").css("display", "block");
                $(".third-stage .type-select-box img:nth-child(3)").css("display", "unset");
            }

            if (partFirstStage == "6") {
                $(".second-stage-type").addClass("third-type-3-stage-special");
                $(".third-stage").css("display", "block");
                $(".third-stage .type-select-box img:nth-child(3), .third-stage .type-select-box img:nth-child(4)").css("display", "unset");
            }
        }
    });

    $(".second-stage .type-select-box img:nth-child(3)").mouseover(function() {
        if (stage == "1") { $(".calculator-final-look .main-layer .second-stage-type-hover").addClass("third-type"); }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .second-stage-type-hover").addClass("third-type-2-stage");

            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".second-stage-type-hover").addClass("third-type-2-stage-special");
            }
        }
        if (stage == "3") {

            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".second-stage-type-hover").addClass("third-type-3-stage");
            }

            if (partFirstStage == "6") {
                $(".second-stage-type-hover").addClass("third-type-3-stage-special");
            }
        }
    })
    .mouseout(function() {
        if (stage == "1") { $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("third-type"); }
        if (stage == "2") {
            $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("third-type-2-stage");

            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".second-stage-type-hover").removeClass("third-type-2-stage-special");
            }
        }

        if (stage == "3") {

            if (partFirstStage == "4" || partFirstStage == "5") {
                $(".second-stage-type-hover").removeClass("third-type-3-stage");
            }

            if (partFirstStage == "6") {
                $(".second-stage-type-hover").removeClass("third-type-3-stage-special");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Второй этаж 4
    $(".second-stage .type-select-box img:nth-child(4)").click(function() {
        deleteThirdStageInterface();
        deleteClassThirStage();
        deleteSelectThirdStage();
        vivodDeleted();
        secondVihodDeleted();
        selectDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        secondStageDeleted();
        partSecondStage = 4;

        $(".third-stage").css("display", "none");
        $(".third-stage img").css("display", "none");
        $(".second-stage .type-select-box img").removeClass("selectedItem");
        $(".second-stage .type-select-box img:nth-child(4)").addClass("selectedItem");
        $(".second-stage-type").addClass("fourth-type");
        $(".krisha-select-box").css("display", "block");
        $(".krisha-select-box .type-select-box img:nth-child(5), .krisha-select-box .type-select-box img:nth-child(6), .krisha-select-box .type-select-box img:nth-child(7)").css("display", "unset");

        if (stage == "3") {

            if (partFirstStage == "6") {
                $(".second-stage-type").addClass("fourth-type-3-stage");
                $(".krisha-select-box").css("display", "none");
                $(".third-stage").css("display", "block");
                $(".third-stage .type-select-box img:nth-child(3)").css("display", "unset");
            }
        }
    });

    $(".second-stage .type-select-box img:nth-child(4)").mouseover(function() {
        $(".calculator-final-look .main-layer .second-stage-type-hover").addClass("fourth-type");
        if (stage == "3") {

            if (partFirstStage == "6") {
                $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("fourth-type");
                $(".calculator-final-look .main-layer .second-stage-type-hover").addClass("fourth-type-3-stage");
            }
        }
    })
    .mouseout(function() {
        $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("fourth-type");

        if (stage == "3") {

            if (partFirstStage == "6") {

                $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("fourth-type-3-stage");
            }
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Третий этаж 1
    $(".third-stage .type-select-box img:nth-child(1)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        deleteClassThirStage();
        partThirdStage = 1;

        $(".third-stage .type-select-box img").removeClass("selectedItem");
        $(".third-stage .type-select-box img:nth-child(1)").addClass("selectedItem");
        $(".third-stage-type").addClass("first-type");

        if (partFirstStage == "7" || partFirstStage == "8") {
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(1), .zont-select-box .type-select-box img:nth-child(2), .zont-select-box .type-select-box img:nth-child(3)").css("display", "unset");
        }
    });
    $(".third-stage .type-select-box img:nth-child(1)").mouseover(function() {
        $(".third-stage-type-hover").addClass("first-type");
    })
    .mouseout(function() {
        $(".third-stage-type-hover").removeClass("first-type");
    });
    //////////////////////////////////////////////////////////////////////////////

    // Третий этаж 3
    $(".third-stage .type-select-box img:nth-child(3)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        deleteClassThirStage();
        partThirdStage = 3;

        $(".krisha-select-box .type-select-box img").css("display", "none");
        $(".third-stage .type-select-box img").removeClass("selectedItem");
        $(".third-stage .type-select-box img:nth-child(3)").addClass("selectedItem");
        $(".third-stage-type").addClass("third-type");

        if (partFirstStage == "6") {
            $(".third-stage-type").addClass("third-type-special");

            if (partSecondStage == "4") {
                $(".third-stage-type").removeClass("third-type-special");
                $(".third-stage-type").addClass("third-type");
            }
        }

        if (partFirstStage == "7" || partFirstStage == "8") {
            $(".third-stage-type").removeClass("third-type");
            $(".third-stage-type").addClass("third-type-two");
            $(".zont-select-box").css("display", "block");
            $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
        }

        if (partFirstStage == "4" || partFirstStage == "5") {
            $(".krisha-select-box").css("display", "block");
            $(".krisha-select-box .type-select-box img:nth-child(5), .krisha-select-box .type-select-box img:nth-child(6), .krisha-select-box .type-select-box img:nth-child(3)").css("display", "unset");
        }

        if (partFirstStage == "6") {
            $(".krisha-select-box").css("display", "block");
            $(".krisha-select-box .type-select-box img:nth-child(9)").css("display", "unset");
        }

        if (partSecondStage == "4") {
            $(".krisha-select-box .type-select-box img").css("display", "none");
            $(".krisha-select-box .type-select-box img:nth-child(10), .krisha-select-box .type-select-box img:nth-child(6), .krisha-select-box .type-select-box img:nth-child(7)").css("display", "unset");
        }
    });
    $(".third-stage .type-select-box img:nth-child(3)").mouseover(function() {
        $(".third-stage-type-hover").addClass("third-type");

        if (partFirstStage == "6") {
            $(".third-stage-type-hover").addClass("third-type-special");

            if (partSecondStage == "4") {
                $(".third-stage-type-hover").removeClass("third-type-special");
                $(".third-stage-type-hover").addClass("third-type");
            }
        }

        if (partFirstStage == "7" || partFirstStage == "8") {
            $(".third-stage-type-hover").removeClass("third-type");
            $(".third-stage-type-hover").addClass("third-type-two");
        }
    })
    .mouseout(function() {
        $(".third-stage-type-hover").removeClass("third-type");

        if (partFirstStage == "6") {
            $(".third-stage-type-hover").removeClass("third-type-special");

            if (partSecondStage == "4") {
                $(".third-stage-type-hover").removeClass("third-type");
            }
        }

        if (partFirstStage == "7" || partFirstStage == "8") {
            $(".third-stage-type-hover").removeClass("third-type-two");
        }
    });
    //////////////////////////////////////////////////////////////////////////////

    // Третий этаж 4
    $(".third-stage .type-select-box img:nth-child(4)").click(function() {
        vivodDeleted();
        zontDeleted();
        selectZontDeleted();
        interfaceVivodDeleted();
        deleteClassThirStage();
        partThirdStage = 4;

        $(".third-stage .type-select-box img").removeClass("selectedItem");
        $(".third-stage .type-select-box img:nth-child(4)").addClass("selectedItem");
        $(".third-stage-type").addClass("fourth-type");

        $(".krisha-select-box").css("display", "block");
        $(".krisha-select-box .type-select-box img:nth-child(9)").css("display", "none");
        $(".krisha-select-box .type-select-box img:nth-child(10), .krisha-select-box .type-select-box img:nth-child(6), .krisha-select-box .type-select-box img:nth-child(7)").css("display", "unset");
    });
    $(".third-stage .type-select-box img:nth-child(4)").mouseover(function() {
        $(".third-stage-type-hover").addClass("fourth-type");
    })
    .mouseout(function() {
        $(".third-stage-type-hover").removeClass("fourth-type");
    });



    /***********************************************************************************/
    /*********************************** FORM DATAS ************************************/
    /***********************************************************************************/
    var paramString = "";
    var ckeckBoxStatus = "";

    // Чекбокс "Не знаю размеров..."
    $(".checkbox-sizes").click(function() {
        ckeckBoxStatus = $(".checkbox-sizes").is(':checked');

        if (ckeckBoxStatus == true) {
            $("#for-one-stage-build, #for-two-stage-build, #for-three-stage-build").css("display", "none");
        }
        if (ckeckBoxStatus == false) {
            if (stage == "1") {
                $(".for-one-stage-build").css("display", "block");
            }
            if (stage == "2") {
                $(".for-two-stage-build").css("display", "block");
            }
            if (stage == "3") {
                $(".for-three-stage-build").css("display", "block");
            }
        }
    });


    //******************************* 1 STAGE ************************//
    $('#oneStageBuildParam0').change(function() {
        paramString = $('#oneStageBuildParam0').val();
        $(".text-969 input").val(paramString);
    });
    $('#oneStageBuildParam1').change(function() {
        paramString = $('#oneStageBuildParam1').val();
        $(".text-970 input").val(paramString);
    });
    $('#oneStageBuildParam2').change(function() {
        paramString = $('#oneStageBuildParam2').val();
        $(".text-971 input").val(paramString);
    });
    $('#oneStageBuildParam3').change(function() {
        paramString = $('#oneStageBuildParam3').val();
        $(".text-972 input").val(paramString);
    });
    $('#oneStageBuildParam4').change(function() {
        paramString = $('#oneStageBuildParam4').val();
        $(".text-973 input").val(paramString);
    });
    $('#oneStageBuildParam5').change(function() {
        paramString = $('#oneStageBuildParam5').val();
        $(".text-974 input").val(paramString);
    });
    $('#oneStageBuildParam6').change(function() {
        paramString = $('#oneStageBuildParam6').val();
        $(".text-975 input").val(paramString);
    });
    $('#oneStageBuildParam7').change(function() {
        paramString = $('#oneStageBuildParam7').val();
        $(".text-976 input").val(paramString);
    });
    $('#oneStageBuildParam8').change(function() {
        paramString = $('#oneStageBuildParam8').val();
        $(".text-977 input").val(paramString);
    });
    $('#oneStageBuildParam9').change(function() {
        paramString = $('#oneStageBuildParam9').val();
        $(".text-978 input").val(paramString);
    });
    $('#oneStageBuildParam10').change(function() {
        paramString = $('#oneStageBuildParam10').val();
        $(".text-979 input").val(paramString);
    });
    $('#oneStageBuildParam11').change(function() {
        paramString = $('#oneStageBuildParam11').val();
        $(".text-980 input").val(paramString);
    });
    $('#oneStageBuildParam12').change(function() {
        paramString = $('#oneStageBuildParam12').val();
        $(".text-981 input").val(paramString);
    });
    $('#oneStageBuildParam13').change(function() {
        paramString = $('#oneStageBuildParam13').val();
        $(".text-982 input").val(paramString);
    });
    $('#oneStageBuildParam14').change(function() {
        paramString = $('#oneStageBuildParam14').val();
        $(".text-983 input").val(paramString);
    });


    //******************************* 2 STAGE ************************//
    $('#twoStageBuildParam0').change(function() {
        paramString = $('#twoStageBuildParam0').val();
        $(".text-969 input").val(paramString);
    });
    $('#twoStageBuildParam1').change(function() {
        paramString = $('#twoStageBuildParam1').val();
        $(".text-970 input").val(paramString);
    });
    $('#twoStageBuildParam2').change(function() {
        paramString = $('#twoStageBuildParam2').val();
        $(".text-971 input").val(paramString);
    });
    $('#twoStageBuildParam3').change(function() {
        paramString = $('#twoStageBuildParam3').val();
        $(".text-972 input").val(paramString);
    });
    $('#twoStageBuildParam4').change(function() {
        paramString = $('#twoStageBuildParam4').val();
        $(".text-973 input").val(paramString);
    });
    $('#twoStageBuildParam5').change(function() {
        paramString = $('#twoStageBuildParam5').val();
        $(".text-984 input").val(paramString);
    });
    $('#twoStageBuildParam6').change(function() {
        paramString = $('#twoStageBuildParam6').val();
        $(".text-985 input").val(paramString);
    });
    $('#twoStageBuildParam7').change(function() {
        paramString = $('#twoStageBuildParam7').val();
        $(".text-986 input").val(paramString);
    });
    $('#twoStageBuildParam8').change(function() {
        paramString = $('#twoStageBuildParam8').val();
        $(".text-975 input").val(paramString);
    });
    $('#twoStageBuildParam9').change(function() {
        paramString = $('#twoStageBuildParam9').val();
        $(".text-976 input").val(paramString);
    });
    $('#twoStageBuildParam10').change(function() {
        paramString = $('#twoStageBuildParam10').val();
        $(".text-977 input").val(paramString);
    });
    $('#twoStageBuildParam11').change(function() {
        paramString = $('#twoStageBuildParam11').val();
        $(".text-978 input").val(paramString);
    });
    $('#twoStageBuildParam12').change(function() {
        paramString = $('#twoStageBuildParam12').val();
        $(".text-979 input").val(paramString);
    });
    $('#twoStageBuildParam13').change(function() {
        paramString = $('#twoStageBuildParam13').val();
        $(".text-980 input").val(paramString);
    });
    $('#twoStageBuildParam14').change(function() {
        paramString = $('#twoStageBuildParam14').val();
        $(".text-981 input").val(paramString);
    });
    $('#twoStageBuildParam15').change(function() {
        paramString = $('#twoStageBuildParam15').val();
        $(".text-982 input").val(paramString);
    });
    $('#twoStageBuildParam16').change(function() {
        paramString = $('#twoStageBuildParam16').val();
        $(".text-983 input").val(paramString);
    });

    //******************************* 3 STAGE ************************//
    $('#threeStageBuildParam0').change(function() {
        paramString = $('#threeStageBuildParam0').val();
        $(".text-969 input").val(paramString);
    });
    $('#threeStageBuildParam1').change(function() {
        paramString = $('#threeStageBuildParam1').val();
        $(".text-970 input").val(paramString);
    });
    $('#threeStageBuildParam2').change(function() {
        paramString = $('#threeStageBuildParam2').val();
        $(".text-971 input").val(paramString);
    });
    $('#threeStageBuildParam3').change(function() {
        paramString = $('#threeStageBuildParam3').val();
        $(".text-972 input").val(paramString);
    });
    $('#threeStageBuildParam4').change(function() {
        paramString = $('#threeStageBuildParam4').val();
        $(".text-973 input").val(paramString);
    });
    $('#threeStageBuildParam5').change(function() {
        paramString = $('#threeStageBuildParam5').val();
        $(".text-984 input").val(paramString);
    });
    $('#threeStageBuildParam6').change(function() {
        paramString = $('#threeStageBuildParam6').val();
        $(".text-987 input").val(paramString);
    });
    $('#threeStageBuildParam7').change(function() {
        paramString = $('#threeStageBuildParam7').val();
        $(".text-985 input").val(paramString);
    });
    $('#threeStageBuildParam8').change(function() {
        paramString = $('#threeStageBuildParam8').val();
        $(".text-986 input").val(paramString);
    });
    $('#threeStageBuildParam9').change(function() {
        paramString = $('#threeStageBuildParam9').val();
        $(".text-988 input").val(paramString);
    });
    $('#threeStageBuildParam10').change(function() {
        paramString = $('#threeStageBuildParam10').val();
        $(".text-975 input").val(paramString);
    });
    $('#threeStageBuildParam11').change(function() {
        paramString = $('#threeStageBuildParam11').val();
        $(".text-976 input").val(paramString);
    });
    $('#threeStageBuildParam12').change(function() {
        paramString = $('#threeStageBuildParam12').val();
        $(".text-977 input").val(paramString);
    });
    $('#threeStageBuildParam13').change(function() {
        paramString = $('#threeStageBuildParam13').val();
        $(".text-978 input").val(paramString);
    });
    $('#threeStageBuildParam14').change(function() {
        paramString = $('#threeStageBuildParam14').val();
        $(".text-979 input").val(paramString);
    });
    $('#threeStageBuildParam15').change(function() {
        paramString = $('#threeStageBuildParam15').val();
        $(".text-980 input").val(paramString);
    });
    $('#threeStageBuildParam16').change(function() {
        paramString = $('#threeStageBuildParam16').val();
        $(".text-981 input").val(paramString);
    });
    $('#threeStageBuildParam17').change(function() {
        paramString = $('#threeStageBuildParam17').val();
        $(".text-982 input").val(paramString);
    });
    $('#threeStageBuildParam18').change(function() {
        paramString = $('#threeStageBuildParam18').val();
        $(".text-983 input").val(paramString);
    });


    /********************* Screenshot *************************/

  
});