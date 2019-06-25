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

  /* Calculator */
  var stage = 1;
  var diametr = "не выбрано";
  var typeOfDymohod = "не выбрано";
  var typeOfPech = "не выбрано";

  /*********** ШАГ 1 **********/
    // Количество этажей
    $('#exampleFormControlSelect1').change(function() {
      $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type third-type fourth-type fifth-type sixth-type");
      $(".calculator-final-look .main-layer .krisha-stage-type").removeClass("first-type second-type third-type fourth-type fifth-type sixth-type");
      stage = $('#exampleFormControlSelect1 option:selected').val();

      if (stage == "1") {
        $(".main-layer").removeClass("two-stage three-stage");
        $(".main-layer").addClass("one-stage");
      }
      if (stage == "2") {
        $(".main-layer").removeClass("one-stage three-stage");
        $(".main-layer").addClass("two-stage");
        $(".second-stage").css("display", "block");
      }
      if (stage == "3") {
        $(".main-layer").removeClass("one-stage two-stage");
        $(".main-layer").addClass("three-stage");
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

    // Этаж 1
    if (stage == "1") {
      // Типдымохода 1
      $(".first-stage .type-select-box img:nth-child(1)").click(function() {
        $(".first-stage .type-select-box img").removeClass("selectedItem");
        $(".first-stage .type-select-box img:nth-child(1)").addClass("selectedItem");
        $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
        $(".calculator-final-look .main-layer .first-stage-type").removeClass("second-type third-type fourth-type fifth-type sixth-type");
        $(".calculator-final-look .main-layer .first-stage-type").addClass("first-type");
        $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
        $(".krisha-select-box img").css("display", "none");
        $(".krisha-select-box img:nth-child(1), .krisha-select-box img:nth-child(2), .krisha-select-box img:nth-child(3)").css("display", "unset");
      });

      $(".first-stage .type-select-box img:nth-child(1)").mouseover(function() {
        $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("first-type");
      })
      .mouseout(function() {
        $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("first-type");
      });

        // Типдымохода 2
        $(".first-stage .type-select-box img:nth-child(2)").click(function() {
          $(".first-stage .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".first-stage .type-select-box img:nth-child(2)").addClass("selectedItem");
          $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type third-type fourth-type fifth-type sixth-type");
          $(".calculator-final-look .main-layer .first-stage-type").addClass("second-type");
          $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
          $(".krisha-select-box img").css("display", "none");
          $(".krisha-select-box img:nth-child(4), .krisha-select-box img:nth-child(5), .krisha-select-box img:nth-child(6)").css("display", "unset");
        });

        $(".first-stage .type-select-box img:nth-child(2)").mouseover(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("second-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("second-type");
        });

        // Типдымохода 3
        $(".first-stage .type-select-box img:nth-child(3)").click(function() {
          $(".first-stage .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".first-stage .type-select-box img:nth-child(3)").addClass("selectedItem");
          $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type fourth-type fifth-type sixth-type");
          $(".calculator-final-look .main-layer .first-stage-type").addClass("third-type");
          $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
          $(".krisha-select-box img").css("display", "none");
          $(".krisha-select-box img:nth-child(4), .krisha-select-box img:nth-child(5), .krisha-select-box img:nth-child(6)").css("display", "unset");
        });

        $(".first-stage .type-select-box img:nth-child(3)").mouseover(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("third-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("third-type");
        });

        // Типдымохода 4
        $(".first-stage .type-select-box img:nth-child(4)").click(function() {
          $(".first-stage .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".first-stage .type-select-box img:nth-child(4)").addClass("selectedItem");
          $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type third-type fifth-type sixth-type");
          $(".calculator-final-look .main-layer .first-stage-type").addClass("fourth-type");
          $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
          $(".krisha-select-box img").css("display", "none");
          $(".krisha-select-box img:nth-child(7), .krisha-select-box img:nth-child(8), .krisha-select-box img:nth-child(9)").css("display", "unset");
        });

        $(".first-stage .type-select-box img:nth-child(4)").mouseover(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fourth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fourth-type");
        });

        // Типдымохода 5
        $(".first-stage .type-select-box img:nth-child(5)").click(function() {
          $(".first-stage .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".first-stage .type-select-box img:nth-child(5)").addClass("selectedItem");
          $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type third-type fourth-type sixth-type");
          $(".calculator-final-look .main-layer .first-stage-type").addClass("fifth-type");
          $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
          $(".krisha-select-box img").css("display", "none");
          $(".krisha-select-box img:nth-child(7), .krisha-select-box img:nth-child(8), .krisha-select-box img:nth-child(9)").css("display", "unset");
        });

        $(".first-stage .type-select-box img:nth-child(5)").mouseover(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("fifth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("fifth-type");
        });

        // Типдымохода 6
        $(".first-stage .type-select-box img:nth-child(6)").click(function() {
          $(".first-stage .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".first-stage .type-select-box img:nth-child(6)").addClass("selectedItem");
          $(".calculator-final-look .main-layer .first-stage-type").removeClass("first-type second-type third-type fourth-type fifth-type");
          $(".calculator-final-look .main-layer .first-stage-type").addClass("sixth-type");
          $(".constract .text-box .tab-pane .stage-builder-wrapeer .krisha-select-box").css("display", "block");
          $(".krisha-select-box img").css("display", "none");
          $(".krisha-select-box img:nth-child(10)").css("display", "unset");
        });

        $(".first-stage .type-select-box img:nth-child(6)").mouseover(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").addClass("sixth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .first-stage-type-hover").removeClass("sixth-type");
        });

        // Вывод на крышу 1 
        $(".krisha-select-box .type-select-box img:nth-child(1)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(1)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("first-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(1)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("first-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("first-type");
        });

        // Вывод на крышу 2 
        $(".krisha-select-box .type-select-box img:nth-child(2)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(2)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("second-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(2)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("second-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("second-type");
        });

        // Вывод на крышу 3 
        $(".krisha-select-box .type-select-box img:nth-child(3)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(3)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("third-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(3)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("third-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("third-type");
        });

        // Вывод на крышу 4 
        $(".krisha-select-box .type-select-box img:nth-child(4)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(4)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("fourth-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(4)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fourth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fourth-type");
        });

        // Вывод на крышу 5 
        $(".krisha-select-box .type-select-box img:nth-child(5)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(5)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("fiveth-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(5)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("fiveth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("fiveth-type");
        });

        // Вывод на крышу 6 
        $(".krisha-select-box .type-select-box img:nth-child(6)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(6)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("sixth-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(6)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("sixth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("sixth-type");
        });

        // Вывод на крышу 7 
        $(".krisha-select-box .type-select-box img:nth-child(7)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(7)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("seventh-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(7)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("seventh-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("seventh-type");
        });

        // Вывод на крышу 8 
        $(".krisha-select-box .type-select-box img:nth-child(8)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(8)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("eighth-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(8)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("eighth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("eighth-type");
        });

        // Вывод на крышу 9 
        $(".krisha-select-box .type-select-box img:nth-child(9)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(9)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("ninth-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(9)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("ninth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("ninth-type");
        });

        // Вывод на крышу 10 
        $(".krisha-select-box .type-select-box img:nth-child(10)").click(function(){
          $(".krisha-select-box .type-select-box img").removeClass("selectedItem");
          $(".krisha-stage-type").removeClass("first-type second-type third-type fourth-type fiveth-type sixth-type seventh-type eighth-type ninth-type tenth-type");
          $(".krisha-select-box .type-select-box img:nth-child(10)").addClass("selectedItem");
          $(".krisha-stage-type").addClass("tenth-type");
        });

        $(".krisha-select-box .type-select-box img:nth-child(10)").mouseover(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").addClass("tenth-type");
        })
        .mouseout(function() {
          $(".calculator-final-look .main-layer .krisha-stage-type-hover").removeClass("tenth-type");
        });


      }

      // Этаж 2
    });