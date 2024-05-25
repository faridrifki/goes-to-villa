const tanggalTujuan = new Date("2024-06-22T00:00:00Z").getTime();
const waktuHabis = document.querySelector('div.container');

const realtimer = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const h = document.getElementById("hari");
  h.innerHTML = hari;
  const j = document.getElementById("jam");
  j.innerHTML = jam;
  const m = document.getElementById("menit");
  m.innerHTML = menit;
  const d = document.getElementById("detik");
  d.innerHTML = detik;

  if (selisih < 0) {
    clearInterval(realtimer);
    waktuHabis.innerHTML = 'time out'
  }
}, 1000);
