// $(window).scroll(() => {
//   console.log($("#home").outerHeight());

//   if ($(window).scrollTop() > $("#home").outerHeight()) {
//     $(".navbar").css({ backgroundColor: "tomato" });
//   } else {
//     $(".navbar").css({ backgroundColor: "transparent" });
//   }
// });

$(".arrow").click(() => {
  $("html , body").animate({ scrollTop: 0 }, 500);
});

let navLinks = $(".nav-link").not(".dropdown-toggle");

// for (let i = 0; i < navLinks.length; i++) {
//   $(".nav-link")
//     .eq(i)
//     .click(() => {
//       let target = $(".nav-link").eq(i).attr("href");
//       let secOffset = $(target).offset().top;
//       console.log(secOffset);
//       $("html , body").animate({ scrollTop: secOffset }, 500);
//     });
// }

$(navLinks).click((e) => {
  let sectionId = $(e.target).attr("href");
  $("body , html").animate({ scrollTop: $(sectionId).offset().top }, 3000);
});

$(document).ready(() => {
  $(".layer").fadeOut(2000, () => {
    $("body").css({ overflow: "auto" });
  });
});

$(".setting-icon").click(() => {
  console.log($(".options").outerWidth());
  console.log($(".options").css("left"));

  if ($(".options").css("left") == "0px") {
    $(".options").animate({ left: `-${$(".options").outerWidth()}` }, 3000);
    $(".setting-icon").animate({ left: "0px" }, 3000);
  } else {
    $(".options").animate({ left: "0px" }, 3000);
    $(".setting-icon").animate({ left: "100%" }, 3000);
  }
});

$(".options span").click((e) => {
  let bgColor = $(e.target).attr("class");

  $(".navbar").css({ backgroundColor: bgColor });
});

$(".imges img").click((e) => {
  let imgSrc = $(e.target).attr("src");
  $("header").css({ backgroundImage: `url(${imgSrc})` });
});
