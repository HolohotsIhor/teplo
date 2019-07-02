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


/*********** ШАГ 1 **********/
    //Почистить переменную выхода дымохода
    function vihodNaKrishuTypeDeleted(){
      var vihodNaKrishuType = 0;
    }

    //Очистка интерфейса вывода
    function interfaceVivodDeleted(){
      $(".zont-select-box").css("display", "none");
      $(".zont-select-box .type-select-box img").css("display", "none");
    }

    //Удаление классов зонта 
    function zontDeleted() {
      $(".zont-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fourth-type-svihodom fiveth-type-svihodom sixth-type-svihodom fourth-zont-2-svihodom fiveth-zont-2-svihodom sixth-zont-2-svihodom seventh-zont-3-svihodom eighth-zont-3-svihodom nineth-zont-3-svihodom fourth-zont-4-svihodom fiveth-zont-4-svihodom sixth-zont-4-svihodom nineth-stage-2-zont-3-svihodom eighth-stage-2-zont-3-svihodom seventh-stage-2-zont-3-svihodom first-2-stage-type second-2-stage-type third-2-stage-type fourth-type-2-stage fiveth-type-2-stage sixth-type-2-stage eighth-type-2-stage fourth-2-stage-zont-4-svihodom fiveth-2-stage-zont-4-svihodom sixth-2-stage-zont-4-svihodom fourth-2-stage-zont-5-svihodom fiveth-zont-5-svihodom sixth-zont-5-svihodom");
      $(".zont-stage-type-hover").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fourth-type-svihodom fiveth-type-svihodom sixth-type-svihodom fourth-zont-2-svihodom fiveth-zont-2-svihodom sixth-zont-2-svihodom seventh-zont-3-svihodom eighth-zont-3-svihodom nineth-zont-3-svihodom fourth-zont-4-svihodom fiveth-zont-4-svihodom sixth-zont-4-svihodom nineth-stage-2-zont-3-svihodom eighth-stage-2-zont-3-svihodom seventh-stage-2-zont-3-svihodom first-2-stage-type second-2-stage-type third-2-stage-type fourth-type-2-stage fiveth-type-2-stage sixth-type-2-stage eighth-type-2-stage");
    }

    //Удаление классов вывода на крышу
    function vivodDeleted() {
      $(".krisha-stage-type-hover").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fiveth-2-stage-type");
      $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fiveth-2-stage-type");
    }

    //Очистка выдиления с элемента
    function selectDeleted() {
      $(".krisha-select-box .type-select-box img.selectedItem").removeClass("selectedItem");
    }

    //Очистка выдиления вывода на крышу
    function selectVivodDeleted() {
      $(".first-stage .type-select-box img.selectedItem").removeClass("selectedItem");
    }

    //Очистка выдиления зонта
    function selectZontDeleted() {
      $(".zont-select-box .type-select-box img.selectedItem").removeClass("selectedItem");
    }

    //Удаление классов второго этажа
    function secondStageDeleted() {
      $(".second-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type third-type-2-stage third-type-2-stage-special");
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
        $(".first-stage-type").removeClass("two-stage-build");
        $(".first-stage-type-hover").removeClass("two-stage-build");
        $(".main-layer").removeClass("two-stage three-stage");
        $(".main-layer").addClass("one-stage");
        $(".first-stage .type-select-box img:nth-child(7), .first-stage .type-select-box img:nth-child(8)").css("display", "none");
        $(".first-stage .type-select-box img:nth-child(1), .first-stage .type-select-box img:nth-child(2), .first-stage .type-select-box img:nth-child(3), .first-stage .type-select-box img:nth-child(4), .first-stage .type-select-box img:nth-child(5), .first-stage .type-select-box img:nth-child(6)").css("display", "unset");
      }

      if (stage == "2") {
        selectDeleted();
        selectVivodDeleted();
        selectZontDeleted();
        zontDeleted();
        $(".krisha-select-box").css("display", "none");
        $(".zont-select-box").css("display", "none");
        $(".main-layer").removeClass("one-stage three-stage");
        $(".main-layer").addClass("two-stage");
        $(".first-stage-type, .krisha-stage-type, .krisha-stage-type-hover, .zont-stage-type, .zont-stage-type-hover").addClass("two-stage-build");
        $(".first-stage-type-hover").addClass("two-stage-build");
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

    // Построить схему
    $(".shema").click(function() {
      $("#nav-tab a.nav-item:nth-child(1)").removeClass("active");
      $("#nav-tab a.nav-item:nth-child(2)").addClass("active");
      $("#nav-tabContent .tab-pane:nth-child(1)").removeClass("show active");
      $("#nav-tabContent .tab-pane:nth-child(2)").addClass("show active");
    });


    /********** ШАГ 2 **********/

    ///////////////// Типдымохода 1 /////////////////
    $(".first-stage .type-select-box img:nth-child(1)").click(function() {
        // Этаж 1
        vivodDeleted();
        zontDeleted();
        typeDimohodDeleted();
        selectDeleted();
        selectVivodDeleted();
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

        if (stage == "2"){
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
      typeDimohodDeleted();
      vivodDeleted();
      selectDeleted();
      selectVivodDeleted();
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

      if (stage == "2"){
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
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      selectVivodDeleted();
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
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      selectVivodDeleted();
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

      if (stage == "2"){
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

    })
    .mouseout(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fourth-type");
      }
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("third-type");
      }

    });

    ///////////////// Тип дымохода 5 /////////////////
    $(".first-stage .type-select-box img:nth-child(5)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      selectVivodDeleted();
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
    });

    $(".first-stage .type-select-box img:nth-child(5)").mouseover(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fifth-type");
      }
      if (stage == "2") {
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

    });

    ///////////////// Тип дымохода 6 /////////////////
    $(".first-stage .type-select-box img:nth-child(6)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      selectVivodDeleted();
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
    });

    $(".first-stage .type-select-box img:nth-child(6)").mouseover(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("sixth-type");
      }
      if (stage == "2") {
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
    });

    ///////////////// Тип дымохода 7 /////////////////
    $(".first-stage .type-select-box img:nth-child(7)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      selectVivodDeleted();
      selectZontDeleted();
      interfaceVivodDeleted();
      secondStageDeleted();
      secondStageSelectDeleted();
      $(".second-stage img").css("display", "none");
      $(".first-stage .type-select-box img:nth-child(7)").addClass("selectedItem");
      $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
      $(".krisha-select-box img").css("display", "none");

      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type").addClass("seventh-type");
        $(".second-stage").css("display","block");
        $(".second-stage img:nth-child(1), .second-stage img:nth-child(2)").css("display", "unset");
        $(".krisha-select-box").css("display", "none");
      }
    });

    $(".first-stage .type-select-box img:nth-child(7)").mouseover(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("seventh-type");
      }
      if (stage == "2") {
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
    });

     ///////////////// Тип дымохода 8 /////////////////
     $(".first-stage .type-select-box img:nth-child(8)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      selectVivodDeleted();
      selectZontDeleted();
      interfaceVivodDeleted();
      secondStageDeleted();
      secondStageSelectDeleted();
      $(".second-stage img").css("display", "none");
      $(".first-stage .type-select-box img:nth-child(8)").addClass("selectedItem");
      $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
      $(".krisha-select-box img").css("display", "none");

      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type").addClass("eighth-type");
        $(".second-stage").css("display","block");
        $(".second-stage img:nth-child(1), .second-stage img:nth-child(2)").css("display", "unset");
        $(".krisha-select-box").css("display", "none");
      }
    });

     $(".first-stage .type-select-box img:nth-child(8)").mouseover(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("eighth-type");
      }
      if (stage == "2") {
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

  if(stage == "1"){
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

  if(stage == "1"){
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

  if(stage == "1"){
    $(".zont-select-box").css("display", "block");
    $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");
  }
});

$(".krisha-select-box .type-select-box img:nth-child(3)").mouseover(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("third-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("third-type");
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

  if(stage == "1"){
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

  if(stage == "1"){
    $(".zont-select-box").css("display", "block");
    $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
  }

  if(stage == "2"){
    $(".zont-select-box").css("display", "block");
    $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");

    if(partSecondStage == "3"){
      $(".krisha-stage-type").addClass("fiveth-2-stage-type");
    }

    if(partSecondStage == "4"){
      secondVihodDeleted();
      $(".krisha-stage-type").addClass("fiveth-type");
    }

    if(partFirstStage == "4" || partFirstStage == "5"){
      vivodDeleted();
      $(".krisha-stage-type").addClass("fiveth-type");
    }
  }
});

$(".krisha-select-box .type-select-box img:nth-child(5)").mouseover(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fiveth-type");

  if(stage == "2"){

    if(partSecondStage == "3"){
      $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-type");
      $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fiveth-2-stage-type");
    }

    if(partSecondStage == "4"){
      secondVihodDeleted();
      $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-2-stage-type");
      $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fiveth-type");
    }

    if(partFirstStage == "4" || partFirstStage == "5"){
      $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-2-stage-type");
      $(".krisha-stage-type-hover").addClass("fiveth-type");
    }
  }
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-type");

  if(stage == "2"){
    if(partSecondStage == "3"){
      $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-2-stage-type");
    }

    if(partSecondStage == "4"){
      $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-type");
    }


    if(partFirstStage == "4" || partFirstStage == "5"){
      $(".krisha-stage-type-hover").removeClass("fiveth-type");
    }
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

  if(stage == "1"){
    $(".zont-select-box").css("display", "block");
    $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");
  }

  if(stage == "2"){
    $(".zont-select-box").css("display", "block");
    $(".zont-select-box .type-select-box img:nth-child(4), .zont-select-box .type-select-box img:nth-child(5), .zont-select-box .type-select-box img:nth-child(6)").css("display", "unset");

    if(partSecondStage == "3"){
      $(".krisha-stage-type").removeClass("sixth-type");
      $(".krisha-stage-type").addClass("sixth-type");
    }
  }
});

$(".krisha-select-box .type-select-box img:nth-child(6)").mouseover(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("sixth-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("sixth-type");
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

  if(stage == "2"){
    $(".zont-select-box").css("display", "block");
    $(".zont-select-box .type-select-box img:nth-child(7), .zont-select-box .type-select-box img:nth-child(8), .zont-select-box .type-select-box img:nth-child(9)").css("display", "unset");
  }
});

$(".krisha-select-box .type-select-box img:nth-child(7)").mouseover(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("seventh-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("seventh-type");
});
//////////////////////////////////////////////////////////////////////////////

// Вывод на крышу 2 
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

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".zont-stage-type").removeClass("first-type");
      $(".zont-stage-type").addClass("first-2-stage-type");
    }
  }
});

$(".zont-select-box .type-select-box img:nth-child(1)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("first-type");

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-type");
      $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("first-2-stage-type");
    }
  }
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-type");

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-2-stage-type");
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

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".zont-stage-type").removeClass("second-type");
      $(".zont-stage-type").addClass("second-2-stage-type");
    }
  }
});

$(".zont-select-box .type-select-box img:nth-child(2)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("second-type");

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type");
      $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("second-2-stage-type");
    }
  }
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type");

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type");
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-2-stage-type");
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

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".zont-stage-type").removeClass("second-type");
      $(".zont-stage-type").addClass("third-2-stage-type");
    }
  }
});

$(".zont-select-box .type-select-box img:nth-child(3)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("third-type");

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-type");
      $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("third-2-stage-type");
    }
  }
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-type");

  if(stage == "2"){

    if(partSecondStage=="1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-2-stage-type");
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

  if(vihodNaKrishuType == "1"){
    zontDeleted();
    $(".zont-stage-type").addClass("fourth-type-svihodom");
  }

  if(vihodNaKrishuType == "2"){
    zontDeleted();
    $(".zont-stage-type").addClass("fourth-zont-2-svihodom");
  }

  if(vihodNaKrishuType == "4"){
    zontDeleted();
    $(".zont-stage-type").addClass("fourth-zont-4-svihodom");
  }

  if(vihodNaKrishuType == "5"){
    zontDeleted();
    $(".zont-stage-type").addClass("fourth-2-stage-zont-5-svihodom");

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".zont-stage-type").addClass("fourth-2-stage-zont-5-2svihodom");
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    zontDeleted();
    $(".zont-stage-type").addClass("fourth-2-stage-zont-4-svihodom");
  }

  if(vihodNaKrishuType == "8"){
    $(".zont-stage-type").addClass("eighth-type-2-stage");
  }
});


$(".zont-select-box .type-select-box img:nth-child(4)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-type");  

  if(vihodNaKrishuType == "1"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-type-svihodom"); 
  }

  if(vihodNaKrishuType == "2"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-zont-2-svihodom"); 
  }

  if(vihodNaKrishuType == "4"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "5"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-2-stage-zont-5-svihodom"); 

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-2-stage-zont-5-2svihodom"); 
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-2-stage-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "8"){
    zontDeleted();
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-type-2-stage"); 
  }

  
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-type");

  if(vihodNaKrishuType == "1"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-type-svihodom"); 
  }

  if(vihodNaKrishuType == "2"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-zont-2-svihodom"); 
  }

  if(vihodNaKrishuType == "4"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "5"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-2-stage-zont-5-svihodom"); 

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-2-stage-zont-5-2svihodom");  
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-2-stage-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "8"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-type-2-stage"); 
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

  if(vihodNaKrishuType == "1"){
    zontDeleted();
    $(".zont-stage-type").addClass("fiveth-type-svihodom");
  }

  if(vihodNaKrishuType == "2"){
    zontDeleted();
    $(".zont-stage-type").addClass("fiveth-zont-2-svihodom");
  }

  if(vihodNaKrishuType == "4"){
    zontDeleted();
    $(".zont-stage-type").addClass("fiveth-zont-4-svihodom");
  }

  if(vihodNaKrishuType == "5"){
    zontDeleted();
    $(".zont-stage-type").addClass("fiveth-zont-5-svihodom");

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".zont-stage-type").addClass("fiveth-zont-5-2svihodom");
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    zontDeleted();
    $(".zont-stage-type").addClass("fiveth-2-stage-zont-4-svihodom");
  }

  if(vihodNaKrishuType == "8"){
    zontDeleted();
    $(".zont-stage-type").addClass("fiveth-type-2-stage");
  }
});

$(".zont-select-box .type-select-box img:nth-child(5)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type");

  if(vihodNaKrishuType == "1"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type-svihodom"); 
  }

  if(vihodNaKrishuType == "2"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-2-svihodom"); 
  }

  if(vihodNaKrishuType == "4"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "5"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-5-svihodom"); 

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-zont-5-2svihodom"); 
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-2-stage-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "8"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type-2-stage"); 
  }
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-type");

  if(vihodNaKrishuType == "1"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-type-svihodom"); 
  }

  if(vihodNaKrishuType == "2"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-2-svihodom"); 
  }

  if(vihodNaKrishuType == "4"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "5"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-5-svihodom"); 

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-zont-5-2svihodom"); 
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-2-stage-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "8"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-type-2-stage"); 
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

  if(vihodNaKrishuType == "1"){
    zontDeleted();
    $(".zont-stage-type").addClass("sixth-type-svihodom");
  }

  if(vihodNaKrishuType == "2"){
    zontDeleted();
    $(".zont-stage-type").addClass("sixth-zont-2-svihodom");
  }

  if(vihodNaKrishuType == "4"){
    zontDeleted();
    $(".zont-stage-type").addClass("sixth-zont-4-svihodom");
  }

  if(vihodNaKrishuType == "5"){
    zontDeleted();
    $(".zont-stage-type").addClass("sixth-zont-5-svihodom");

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".zont-stage-type").addClass("sixth-zont-5-2svihodom"); 
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    zontDeleted();
    $(".zont-stage-type").addClass("sixth-2-stage-zont-4-svihodom");
  }

  if(vihodNaKrishuType == "8"){
    zontDeleted();
    $(".zont-stage-type").addClass("sixth-type-2-stage");
  }
});

$(".zont-select-box .type-select-box img:nth-child(6)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type");

  if(vihodNaKrishuType == "1"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type-svihodom"); 
  }

  if(vihodNaKrishuType == "2"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-2-svihodom"); 
  }

  if(vihodNaKrishuType == "4"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "5"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-5-svihodom"); 

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-zont-5-2svihodom"); 
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-2-stage-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "8"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type-2-stage"); 
  }
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-type");

  if(vihodNaKrishuType == "1"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-type-svihodom"); 
  }

  if(vihodNaKrishuType == "2"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-2-svihodom"); 
  }

  if(vihodNaKrishuType == "4"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-4-svihodom"); 
  }

  if(vihodNaKrishuType == "5"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-5-svihodom"); 

    if(partFirstStage == "6"){

      if(partSecondStage == "3"){
        $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-zont-5-2svihodom"); 
      }
    }
  }

  if(vihodNaKrishuType == "6"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-2-stage-zont-4-svihodom"); 
  }


  if(vihodNaKrishuType == "8"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-type-2-stage"); 
  }
  
});
//////////////////////////////////////////////////////////////////////////////

// Зонт 7
$(".zont-select-box .type-select-box img:nth-child(7)").click(function() {
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(7)").addClass("selectedItem");

  if(vihodNaKrishuType == "3"){
    zontDeleted();
    $(".zont-stage-type").addClass("seventh-zont-3-svihodom");
  }

  if(vihodNaKrishuType == "7"){
    zontDeleted();
    $(".zont-stage-type").addClass("seventh-stage-2-zont-3-svihodom");
  }
});

$(".zont-select-box .type-select-box img:nth-child(7)").mouseover(function() {

  if(vihodNaKrishuType == "3"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("seventh-zont-3-svihodom"); 
  }
  if(vihodNaKrishuType == "7"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("seventh-stage-2-zont-3-svihodom"); 
  }
})
.mouseout(function() {

  if(vihodNaKrishuType == "3"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("seventh-zont-3-svihodom"); 
  }
  if(vihodNaKrishuType == "7"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("seventh-stage-2-zont-3-svihodom"); 
  }
});

//////////////////////////////////////////////////////////////////////////////

// Зонт 8
$(".zont-select-box .type-select-box img:nth-child(8)").click(function() {
  // vivodDeleted();
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(8)").addClass("selectedItem");

  if(vihodNaKrishuType == "3"){
    zontDeleted();
    $(".zont-stage-type").addClass("eighth-zont-3-svihodom");
  }
  if(vihodNaKrishuType == "7"){
    zontDeleted();
    $(".zont-stage-type").addClass("eighth-stage-2-zont-3-svihodom");
  }
});

$(".zont-select-box .type-select-box img:nth-child(8)").mouseover(function() {

  if(vihodNaKrishuType == "3"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-zont-3-svihodom"); 
  }
  if(vihodNaKrishuType == "7"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("eighth-stage-2-zont-3-svihodom"); 
  }
})
.mouseout(function() {

  if(vihodNaKrishuType == "3"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-zont-3-svihodom"); 
  }
  if(vihodNaKrishuType == "7"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("eighth-stage-2-zont-3-svihodom"); 
  }
});

//////////////////////////////////////////////////////////////////////////////

// Зонт 9
$(".zont-select-box .type-select-box img:nth-child(9)").click(function() {
  // vivodDeleted();
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(9)").addClass("selectedItem");

  if(vihodNaKrishuType == "3"){
    zontDeleted();
    $(".zont-stage-type").addClass("nineth-zont-3-svihodom");
  }

  if(vihodNaKrishuType == "7"){
    zontDeleted();
    $(".zont-stage-type").addClass("nineth-stage-2-zont-3-svihodom");
  }
});

$(".zont-select-box .type-select-box img:nth-child(9)").mouseover(function() {

  if(vihodNaKrishuType == "3"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("nineth-zont-3-svihodom"); 
  }

  if(vihodNaKrishuType == "7"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("nineth-stage-2-zont-3-svihodom"); 
  }
})
.mouseout(function() {

  if(vihodNaKrishuType == "3"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("nineth-zont-3-svihodom"); 
  }

  if(vihodNaKrishuType == "7"){
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("nineth-stage-2-zont-3-svihodom"); 
  }
});
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Второй этаж 1 
$(".second-stage .type-select-box img:nth-child(1)").click(function() {
  vivodDeleted();
  zontDeleted();
  selectZontDeleted();
  interfaceVivodDeleted();
  secondStageDeleted();
  partSecondStage = 1;

  $(".second-stage .type-select-box img").removeClass("selectedItem");
  $(".second-stage .type-select-box img:nth-child(1)").addClass("selectedItem");
  $(".second-stage-type").addClass("first-type");

  if (stage == "2"){
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
  vivodDeleted();
  zontDeleted();
  selectZontDeleted();
  interfaceVivodDeleted();
  secondStageDeleted();
  partSecondStage = 2;
  $(".second-stage .type-select-box img").removeClass("selectedItem");
  $(".second-stage .type-select-box img:nth-child(2)").addClass("selectedItem");
  $(".second-stage-type").addClass("second-type");
  $(".krisha-select-box").css("display","block");
  $(".krisha-select-box .type-select-box img:nth-child(8)").css("display","block");
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
  vivodDeleted();
  zontDeleted();
  selectZontDeleted();
  interfaceVivodDeleted();
  secondStageDeleted();
  partSecondStage = 3;

  $(".second-stage .type-select-box img").removeClass("selectedItem");
  $(".second-stage .type-select-box img:nth-child(3)").addClass("selectedItem");

  if(stage=="1"){
    $(".second-stage-type").addClass("third-type");
  }

  if(stage=="2"){
    $(".krisha-select-box img:nth-child(5), .krisha-select-box img:nth-child(6), .krisha-select-box img:nth-child(7)").css("display", "unset");
    $(".krisha-select-box").css("display", "block");
    $(".second-stage-type").addClass("third-type-2-stage");


    if (partFirstStage == "4" || partFirstStage == "5"){
      $(".second-stage-type").addClass("third-type-2-stage-special");
    }

    if(partFirstStage == "6"){
      $(".krisha-select-box .type-select-box img:nth-child(6), .krisha-select-box .type-select-box img:nth-child(7)").css("display", "none");
    }

  }
});

$(".second-stage .type-select-box img:nth-child(3)").mouseover(function() {
  if(stage=="1"){$(".calculator-final-look .main-layer .second-stage-type-hover").addClass("third-type");}
  if(stage=="2"){$(".calculator-final-look .main-layer .second-stage-type-hover").addClass("third-type-2-stage");

  if (partFirstStage == "4" || partFirstStage == "5"){
    $(".second-stage-type-hover").addClass("third-type-2-stage-special");
  }
}

})
.mouseout(function() {
 if(stage=="1"){$(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("third-type");}
 if(stage=="2"){$(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("third-type-2-stage");

 if (partFirstStage == "4" || partFirstStage == "5"){
  $(".second-stage-type-hover").removeClass("third-type-2-stage-special");
}
}
});
//////////////////////////////////////////////////////////////////////////////

// Второй этаж 4
$(".second-stage .type-select-box img:nth-child(4)").click(function() {
  vivodDeleted();
  secondVihodDeleted();
  selectDeleted();
  selectVivodDeleted();
  zontDeleted();
  selectZontDeleted();
  interfaceVivodDeleted();
  secondStageDeleted();
  partSecondStage = 4;

  $(".second-stage .type-select-box img").removeClass("selectedItem");
  $(".second-stage .type-select-box img:nth-child(4)").addClass("selectedItem");
  $(".second-stage-type").addClass("fourth-type");
  $(".krisha-select-box").css("display", "block");
  $(".krisha-select-box .type-select-box img:nth-child(5), .krisha-select-box .type-select-box img:nth-child(6), .krisha-select-box .type-select-box img:nth-child(7)").css("display", "unset");
});

$(".second-stage .type-select-box img:nth-child(4)").mouseover(function() {
  $(".calculator-final-look .main-layer .second-stage-type-hover").addClass("fourth-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .second-stage-type-hover").removeClass("fourth-type");
});







});