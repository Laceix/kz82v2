startup();
//koala clicker//

let clicks = 0;
function koalaClicker() {
  let clicksNum = Number($("#rng1").val());
  clicks = clicks + clicksNum;
  $("#p2").html("you've clicked the koala " + clicks + " times");
  if (clicks == 69) {
    alert("hahaha 69 funnzy number");
  }
  if (clicks == 420) {
    alert("ANOTHER FUNNY NUMBER :3");
  }
  if (clicks == 1000) {
    alert("YOU REACHED 1000 CLICKS WHICH MEANS YOU UNLOCKED GOD KOALA");
    $("#p2").text("GOD KOALA UNLOCKED :3");
    $("#img1").attr("src", "media/megakoala.jpg");
  }
}
//koala clicker
//koala clicker menu
function rngDiv1() {
  rating = $("#rng1").val();
  rating = Number(rating);
  $("#rngd1").html(rating);
}

function friends() {
  if ($("#chb1").prop("checked")) {
    $("#img2").attr("src", "media/fr1.jpg");
  }
  if ($("#chb2").prop("checked")) {
    $("#img3").attr("src", "media/fr2.jpg");
  }
  if ($("#chb3").prop("checked")) {
    $("#img4").attr("src", "media/fr3.jpg");
  }
  if ($("#rdo1").prop("checked")) {
    $("#img1").attr("src", "media/kw1.jpg");
  } else if ($("#rdo2").prop("checked")) {
    $("#img1").attr("src", "media/kw2.jpg");
  } else if ($("#rdo3").prop("checked")) {
    $("#img1").attr("src", "media/kw3.jpg");
  }
}

function reset() {
  $("#chb1").prop("checked", false);
  $("#chb2").prop("checked", false);
  $("#chb3").prop("checked", false);
  $("#rdo1").prop("checked", false);
  $("#rdo2").prop("checked", false);
  $("#rdo3").prop("checked", false);
  $("#img1").attr("src", "media/koala.jpg");
  let cps = 1;
  let kwSize = 250;
  $("#rng1").val(cps);
  $("#rngd1").html("1");
  $("#img2").attr("src", "media/ph1.png");
  $("#img3").attr("src", "media/ph1.png");
  $("#img4").attr("src", "media/ph1.png");
}
//koala clicker menu
function startup() {
  $("#btn1").click(friends);
  $("#btn2").click(reset);
  $("#rng1").change(rngDiv1);
}
