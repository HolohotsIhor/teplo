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


/*********** ШАГ 1 **********/
    //Почистить переменную выхода дымохода
    function vihodNaKrishuTypeDeleted(){
      var vihodNaKrishuType = 0;
    }

    //Очистка интерфейса вывода
    function interfaceVivodDeleted(){
      $(".zont-select-box .type-select-box img").css("display", "none");
    }

    //Очитска зонта 
    function zontDeleted() {
      $(".zont-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fourth-type-svihodom fiveth-type-svihodom sixth-type-svihodom");
      $(".zont-stage-type-hover").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type fourth-type-svihodom fiveth-type-svihodom sixth-type-svihodom");
    }

    //Очистка выдиления с элемента
    function selectDeleted() {
      $(".first-stage .type-select-box img").removeClass("selectedItem");
    }

    // Удаление классов вывода на крышу
    function vivodDeleted() {
      $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
    }

    // Функция удаления всех типов дымоходов для первого этажа
    function typeDimohodDeleted() {
      $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type third-type fourth-type fifth-type sixth-type");
    }

    // Функция вычисления количество этажей
    function stageNumbers() {
      stage = $('#exampleFormControlSelect1 option:selected').val();
      return stage;
    }

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
      }

      if (stage == "2") {
        $(".main-layer").removeClass("one-stage three-stage");
        $(".main-layer").addClass("two-stage");
        $(".first-stage-type").addClass("two-stage-build");
        $(".first-stage-type-hover").addClass("two-stage-build");
        $(".first-stage .type-select-box img:nth-child(1)").css("display", "none");
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
        interfaceVivodDeleted();
        $(".first-stage .type-select-box img:nth-child(1)").addClass("selectedItem");
        $(".krisha-select-box img").css("display", "none");

        if (stage == "1") {
          $(".krisha-select-box").css("display", "none");
          $(".calculator-final-look .main-layer .first-stage-type").addClass("first-type");
          $(".constract .text-box .tab-pane .stage-builder-wrapeer .zont-select-box").css("display", "block");
          $(".zont-select-box").css("display", "block");
          $(".zont-select-box img:nth-child(1), .zont-select-box img:nth-child(2), .zont-select-box img:nth-child(3)").css("display", "unset");
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
      interfaceVivodDeleted();
      zontDeleted();
      vihodNaKrishuType = 0;
      $(".first-stage .type-select-box img:nth-child(2)").addClass("selectedItem");
      $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
      $(".krisha-select-box img").css("display", "none");

      /* Этаж 1 */
      if (stage == "1") {
        $(".krisha-select-box").css("display", "none");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("second-type");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .zont-select-box").css("display", "block");
        $(".zont-select-box img").css("display", "none");
        $(".zont-select-box img:nth-child(4), .zont-select-box img:nth-child(5), .zont-select-box img:nth-child(6)").css("display", "unset");
      }
      /* Этаж 2 */
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type").addClass("first-type");
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

    // Типдымохода 3
    $(".first-stage .type-select-box img:nth-child(3)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      interfaceVivodDeleted();
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

      /* Этаж 2 */
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type").addClass("second-type");
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

    // Типдымохода 4
    $(".first-stage .type-select-box img:nth-child(4)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      interfaceVivodDeleted();
      $(".first-stage .type-select-box img:nth-child(4)").addClass("selectedItem");
      $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
      $(".krisha-select-box img").css("display", "none");

      /* Этаж 1 */
      if (stage == "1") {
        $(".zont-select-box").css("display", "none");
        $(".krisha-select-box img:nth-child(1), .krisha-select-box img:nth-child(2), .krisha-select-box img:nth-child(3)").css("display", "unset");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("fourth-type");
      }

      /* Этаж 2 */
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type").addClass("third-type");
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

    // Типдымохода 5
    $(".first-stage .type-select-box img:nth-child(5)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      interfaceVivodDeleted();
      $(".first-stage .type-select-box img:nth-child(5)").addClass("selectedItem");
      $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
      $(".krisha-select-box img").css("display", "none");

      /* Этаж 1 */
      if (stage == "1") {
        $(".zont-select-box").css("display", "none");
        $(".krisha-select-box img:nth-child(1), .krisha-select-box img:nth-child(2), .krisha-select-box img:nth-child(3)").css("display", "unset");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("fifth-type");
      }

      /* Этаж 2 */
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type").addClass("fourth-type");
      }
    });

    $(".first-stage .type-select-box img:nth-child(5)").mouseover(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fifth-type");
      }
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fourth-type");
      }
    })
    .mouseout(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fifth-type");
      }
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fourth-type");
      }

    });

    // Типдымохода 6
    $(".first-stage .type-select-box img:nth-child(6)").click(function() {
      typeDimohodDeleted();
      vivodDeleted();
      zontDeleted();
      selectDeleted();
      interfaceVivodDeleted();
      $(".first-stage .type-select-box img:nth-child(6)").addClass("selectedItem");
      $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
      $(".krisha-select-box img").css("display", "none");

      /* Этаж 1 */
      if (stage == "1") {
        $(".zont-select-box").css("display", "none");
        $(".krisha-select-box img:nth-child(4)").css("display", "unset");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("sixth-type");
      }

      /* Этаж 2 */
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type").addClass("fifth-type");
      }
    });

    $(".first-stage .type-select-box img:nth-child(6)").mouseover(function() {
      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("sixth-type");
      }
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fifth-type");
      }
    })
    .mouseout(function() {

      if (stage == "1") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("sixth-type");
      }
      if (stage == "2") {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fifth-type");
      }
    });
//////////////////////////////////////////////////////////////////////////////

// Вывод на крышу 1 
$(".krisha-select-box .type-select-box img:nth-child(1)").click(function() {
  vivodDeleted();
  zontDeleted();
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

// Зонт 1 
$(".zont-select-box .type-select-box img:nth-child(1)").click(function() {
  vivodDeleted();
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(1)").addClass("selectedItem");
  $(".zont-stage-type").addClass("first-type");
});

$(".zont-select-box .type-select-box img:nth-child(1)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("first-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("first-type");
});
//////////////////////////////////////////////////////////////////////////////

// Зонт 2
$(".zont-select-box .type-select-box img:nth-child(2)").click(function() {
  vivodDeleted();
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(2)").addClass("selectedItem");
  $(".zont-stage-type").addClass("second-type");
});

$(".zont-select-box .type-select-box img:nth-child(2)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("second-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("second-type");
});
//////////////////////////////////////////////////////////////////////////////

// Зонт 3
$(".zont-select-box .type-select-box img:nth-child(3)").click(function() {
  vivodDeleted();
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(3)").addClass("selectedItem");
  $(".zont-stage-type").addClass("third-type");
});

$(".zont-select-box .type-select-box img:nth-child(3)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("third-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("third-type");
});
//////////////////////////////////////////////////////////////////////////////

// Зонт 4
$(".zont-select-box .type-select-box img:nth-child(4)").click(function() {
  // vivodDeleted();
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(4)").addClass("selectedItem");
  $(".zont-stage-type").addClass("fourth-type");

  if(vihodNaKrishuType == "1"){
    $(".zont-stage-type").removeClass("fourth-type");
    $(".zont-stage-type").addClass("fourth-type-svihodom");
  }
});

$(".zont-select-box .type-select-box img:nth-child(4)").mouseover(function() {
    $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-type");  

    if(vihodNaKrishuType == "1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fourth-type-svihodom"); 
    }
})
.mouseout(function() {
    $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-type");

    if(vihodNaKrishuType == "1"){
      $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fourth-type-svihodom"); 
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
});

$(".zont-select-box .type-select-box img:nth-child(5)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("fiveth-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("fiveth-type");
});
//////////////////////////////////////////////////////////////////////////////

// Зонт 6
$(".zont-select-box .type-select-box img:nth-child(6)").click(function() {
  // vivodDeleted();
  zontDeleted();
  $(".zont-select-box .type-select-box img").removeClass("selectedItem");
  $(".zont-select-box .type-select-box img:nth-child(6)").addClass("selectedItem");
  $(".zont-stage-type").addClass("sixth-type");
});

$(".zont-select-box .type-select-box img:nth-child(6)").mouseover(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").addClass("sixth-type");
})
.mouseout(function() {
  $(".calculator-final-look .main-layer .zont-stage-type-hover").removeClass("sixth-type");
});
});