import React, { useState } from "react";
import Layout from "../components/Layout";

const Home = () => {
  const [angka, setAngka] = useState("Silahkan Tekan Tombol SOAL NOMOR 1");
  const [fibo, setFibo] = useState("Silahkan Tekan Tombol SOAL NOMOR 2");
  const [bintang, setBintang] = useState("Silahkan Tekan Tombol SOAL NOMOR 3");
  const [nilaiInput, setInput] = useState();
  const [nilaiHuruf, setHuruf] = useState();
  const [huruf, setString] = useState();

  const perulangan = () => {
    let x;
    let newAngka = [];
    for (x = 50; x <= 300; x += 5) {
      if (x <= 60) {
        newAngka.push(<p>{x}" KURANG "</p>);
      } else if (x < 70) {
        newAngka.push(<p>{x} " CUKUP "</p>);
      } else if (x <= 80) {
        newAngka.push(<p>{x} " BAIK "</p>);
      } else {
        newAngka.push(<p>{x} " LUAR BIASA "</p>);
      }
    }
    setAngka(newAngka);
    return newAngka;
  };

  const fibonacci = () => {
    let numPertama = 0;
    let numKedua = 1;
    let fibo;
    let i;
    let penampung = [];

    for (i = 0; i <= 19; i++) {
      fibo = numPertama + numKedua;
      numPertama = numKedua;
      numKedua = fibo;
      penampung.push(<p> {numPertama}</p>);
    }
    setFibo(penampung);
    return penampung;
  };

  const bintangFunction = (nilaiInput) => {
    let x = nilaiInput;
    let cetakTampung = "";
    let i;
    let penampung = [];
    for (i = 0; i < x; i++) {
      cetakTampung += "* ";
      penampung.push(<p>{cetakTampung}</p>);
    }
    setBintang(penampung);
    return penampung;
  };

  const hanyaAngka = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const sliceHuruf = (nilaiHuruf) => {
    var bilangan = [
      "",
      "Satu",
      "Dua",
      "Tiga",
      "Empat",
      "Lima",
      "Enam",
      "Tujuh",
      "Delapan",
      "Sembilan",
      "Sepuluh",
      "Sebelas",
    ];
    let penampung = [];
    let x = nilaiHuruf;
    if (x < 12) {
      penampung.push(bilangan[x]);
    } else if (x < 20) {
      penampung.push(bilangan[x - 10] + " Belas");
    } else if (x < 100) {
      penampung.push(
        sliceHuruf(Math.floor(x / 10)) + " Puluh " + bilangan[x % 10]
      );
    } else if (x < 200) {
      penampung.push("Seratus " + sliceHuruf(x - 100));
    } else if (x < 1000) {
      penampung.push(Math.floor(x / 100) + " Ratus " + sliceHuruf(x % 100));
    } else if (x < 2000) {
      penampung.push("Seribu " + sliceHuruf(x - 1000));
    } else if (x < 1000000) {
      penampung.push(
        sliceHuruf(Math.floor(x / 1000)) + " Ribu " + sliceHuruf(x % 1000)
      );
    } else {
      penampung.push("Angka terlalu besar");
    }
    console.log(penampung);
    setString(penampung);
    return penampung.join();
  };

  return (
    <>
      <Layout>
        {/* soal nomor 1 */}
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="rounded-lg bg-sky-500/50 p-10">{angka}</div>
          <div>
            <button className="btn bg-usee-blue" onClick={() => perulangan()}>
              Soal nomor 1
            </button>
            <button
              className="btn bg-usee-blue"
              onClick={() => setAngka("sudah terhapus")}
            >
              Hapus
            </button>
          </div>
        </div>
        {/* soal nomor 2 */}
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="rounded-lg bg-sky-500/50 p-10">{fibo}</div>
          <div>
            <button className="btn bg-usee-blue" onClick={() => fibonacci()}>
              Soal nomor 2
            </button>
            <button
              className="btn bg-usee-blue"
              onClick={() => setFibo("sudah terhapus")}
            >
              Hapus
            </button>
          </div>
        </div>
        {/* soal nomor 3 */}
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="rounded-lg bg-sky-500/50 p-10">{bintang}</div>
          <div>
            <input
              type="number"
              className="drop-shadow-xl m-5 bg-slate-200 rounded-lg"
              placeholder="Silahkan isi jumlah bintang"
              onKeyDown={(event) => hanyaAngka(event)}
              onChange={(e) => setInput(e.currentTarget.value)}
            />
            <div>
              <button
                className="btn bg-usee-blue"
                onClick={() => bintangFunction(nilaiInput)}
              >
                Soal nomor 3
              </button>
              <button
                className="btn bg-usee-blue"
                onClick={() => setBintang("sudah terhapus")}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
        {/* soal nomor 4 */}
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="rounded-lg bg-sky-500/50 p-10">{huruf}</div>
          <div>
            <input
              type="number"
              className="drop-shadow-xl m-5 bg-slate-200 rounded-lg"
              placeholder="Silahkan isi jumlah angka"
              onKeyDown={(event) => hanyaAngka(event)}
              onChange={(e) => {
                setHuruf(e.currentTarget.value);
              }}
            />
            <div>
              <button
                className="btn bg-usee-blue"
                onClick={() => sliceHuruf(nilaiHuruf)}
              >
                Soal nomor 4
              </button>
              <button
                className="btn bg-usee-blue"
                onClick={() => setString("sudah terhapus")}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
