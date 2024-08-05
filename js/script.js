function validasi() {
  var konfirmasi = confirm('Apakah akan dilanjutkan untuk mengirim pesan?');

  if (konfirmasi == true) {
      var nama = document.forms["formku"]["nama"].value;
      var nisn = document.forms["formku"]["nisn"].value;
      var alamat = document.forms["formku"]["alamat"].value;
      var tgl_lahir = document.forms["formku"]["tgl_lahir"].value;
      var tgl_lahir = document.forms["formku"]["tgl_lahir"].value;
      console.log(nama);
      console.log(nisn);
      console.log(alamat);
      console.log(tgl_lahir);

      if (nama == '') {
          alert('nama harus dimasukan');
      }
      if (nisn == '') {
          alert('nisn harus dimasukan');
      }
      if (alamat == '') {
          alert('alamat harus dimasukan');
      }
      if (tgl_lahir == '') {
          alert('tanggal lahir harus dimasukan');
      }
  } else {
      alert('kirim pesan dibatalkan');
  }
}