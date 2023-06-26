import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import axios from 'axios';
import Image from 'next/image';
import dots from '../assets/dots.png';
import PopUpHapus from './PopUpHapus';
import EditPopUp from './EditPopUp';
import TextTruncate from './texttruncate';

const produk = () => {
  const [menuCoffes, setMenuCoffes] = useState(null);
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [deleteNim, setDeleteNim] = useState(null);
  const [editData, setEditData] = useState({
    nim: '',
    Nama: '',
    alamat: '',
    tanggal_lahir: '',
  });

  
  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }


  const koneksiMenuCoffes = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/mahasiswa',
  });

  const handleEdit = (nim) => {
    const mhsEdit = menuCoffes.filter((menuCoffe) => {
      return menuCoffe.nim === nim;
    });

    if (mhsEdit.length > 0) {
      const editedData = {
        nim: mhsEdit[0].nim,
        Nama: mhsEdit[0].Nama,
        alamat: mhsEdit[0].alamat,
        tanggal_lahir: formatDate(mhsEdit[0].tanggal_lahir),
      };
      setEditData(editedData);
      setShowEdit(true);
    }
  };

  const handleSubmitEdit = (formData) => {
    koneksiMenuCoffes
      .post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        setShowEdit(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    if (deleteNim) {
      koneksiMenuCoffes
        .delete(`/${deleteNim}`)
        .then((response) => {
          console.log('Data berhasil dihapus:', response.data);
          setMenuCoffes(
            menuCoffes.filter((menuCoffe) => menuCoffe.nim !== deleteNim),
          );
          setShowDelete(false);
          setDeleteNim(null); 
        })
        .catch((error) => {
          console.error('Gagal menghapus data:', error);
        });
    }
  };


  useEffect(() => {
    async function getMenuCoffes() {
      try {
        const response = await koneksiMenuCoffes.get('/');
        setMenuCoffes(response.data.data);
      } catch (error) {
        alert('Error from mahasiswa in API mahasiswa: ' + error);
      }
    }
    getMenuCoffes();
  }, []);

  if (menuCoffes === null) {
    return <div>Waiting...</div>;
  }

  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap mx-auto py-6">
        <div className="flex justify-between w-full items-center px-4">
          <div className="flex">
            <div className="text-2xl font-bold">Menu KAVA</div>
          </div>
        </div>
        <div className="flex flex-wrap py-6">
          {menuCoffes.map((menuCoffe) => (
            <div
              key={menuCoffe.nim}
              className="w-full lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <div className="bg-cyan border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg" src={menuCoffe.foto} alt="" />
                <div className="p-2.5">
                  <div className="flex justify-between mb-2">
                    <div className="text-base font-bold tracking-tight text-white">
                      {menuCoffe.Nama}
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-white">
                    <TextTruncate text={menuCoffe.alamat} maxLength={15}  />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default produk;
