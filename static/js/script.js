$(document).ready(function () {
  // NAVBAR
  $(window).on("scroll", function () {
    const navbar = $("header");
    // jika scroll lebih dari 5 pixel
    if ($(this).scrollTop() > 5) {
      navbar.css("opacity", "0.9"); // ubah opacity
    } else {
      navbar.css("opacity", "1"); // kembalikan opacity
    }
  });

  // FORM
  $(".needs-validation").on("submit", function (event) {
    // cek validasi apakah semua input dalam form valid sesuai aturan HTML
    if (!this.checkValidity()) {
      // mencegah tindakan default dari event listener submit
      event.stopPropagation(); // stop propagation untuk menghindari event lebih lanjut
      event.preventDefault();
    }
    // class dari bootstrap untuk menampilkan elemen validasi
    $(this).addClass("was-validated");
  });

  // SCROLL TO TOP
  // menampilkan tombol ketika scroll ke bawah
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $("#scrollToTop").removeClass("d-none"); // tampilkan tombol
    } else {
      $("#scrollToTop").addClass("d-none"); // sembunyikan tombol
    }
  });

  // scroll ke atas saat tombol diklik
  $("#scrollToTop").click(function () {
    $("html, body").scrollTop(0); // scroll ke atas
    return false; // mencegah form dikirim secara default
  });

  // FAQ
  // ambil semua pertanyaan dengan class faq-item
  $(".faq-item").each(function () {
    const $q = $(this); // simpan referensi
    const $answer = $q.find(".faq-answer");
    const $icon = $q.find(".faq-question i");

    // event listener ketika faq-item diklik
    $q.on("click", function () {
      // cek apakah display === none
      if ($answer.css("display") === "none") {
        $answer.slideDown(); // tampilkan jawaban + transisi
        $icon.removeClass("bi-plus").addClass("bi-dash"); // ganti ikon
      } else {
        $answer.slideUp(); // sembunyikan jawaban + transisi
        $icon.removeClass("bi-dash").addClass("bi-plus");
      }
    });
  });
});
