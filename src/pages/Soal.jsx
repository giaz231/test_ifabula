import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Soal = () => {
  const karyawan = [
    { nama: "giyas", umur: "27", status: "Tetap", domisili: "Jakarta" },
    { nama: "adi", umur: "28", status: "Tetap", domisili: "Tanggerang" },
    { nama: "acong", umur: "29", status: "Tetap", domisili: "Bekasi" },
    { nama: "indra", umur: "23", status: "Magang", domisili: "Bandung" },
  ];

  const [label, setLabel] = useState(karyawan);
  const [title, setTitle] = useState([]);

  const getApi = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        console.log(response.data);
        setTitle(response.data);
      })
      .catch((error) => console.error(error));
  };

  const deleteApi = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => {
        const responseDataNew = response.data.map(({ id, title }) => ({
          id,
          title,
        }));
        setTitle(responseDataNew);
      })
      .catch((error) => console.error(error));
  };

  const deleteData = (id) => {
    const dltData = title.filter((item) => item.id !== id);
    setTitle(dltData);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Layout>
        <div></div>
        {/* soal nomor 1 dan 2 */}
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Umur</th>
                  <th>Status</th>
                  <th>Domisili</th>
                </tr>
              </thead>
              <tbody>
                {label.map((item) => {
                  return (
                    <tr>
                      <th>{item.nama}</th>
                      <td>{item.umur}</td>
                      <td>{item.status}</td>
                      <td>{item.domisili}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div>
            <button
              className="btn bg-usee-blue"
              onClick={() =>
                setLabel([
                  { ...karyawan[0], nama: "surao" },
                  ...karyawan.slice(1),
                ])
              }
            >
              Soal nomor 1 dan 2
            </button>
          </div>
        </div>
        {/* soal nomor 3 4 5 6 */}
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="overflow-x-auto w-1/2">
            <table className="table">
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {title.length > 0 &&
                  title.map((item) => {
                    return (
                      <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.title}</th>
                        <td>{item.body}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div>
            <button className="btn btn-disabled text-black">
              Soal nomor 3 dan 4
            </button>
            <button
              className="btn bg-usee-blue"
              onClick={() => {
                deleteData(1);
              }}
            >
              Soal nomor 5
            </button>
            <button
              className="btn bg-usee-blue"
              onClick={() => {
                deleteApi();
              }}
            >
              Soal nomor 6
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Soal;
