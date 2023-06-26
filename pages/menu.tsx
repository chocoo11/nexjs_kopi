import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import axios from 'axios';
import Image from 'next/image';
import dots from '../assets/dots.png';
import PopUpHapus from './PopUpHapus';
import EditPopUp from './EditPopUp';
import Modal from './Modal';
import AddPopUp from './AddPopUp';
import Navbar from './Navbar';
import TextTruncate from './texttruncate';

const Menucoffe = () => {
  const [menuCoffes, setMenuCoffes] = useState(null);
  const [showAdd, setShowAdd] = useState(false)
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

  const handleSubmitAdd = (formData) => {
    koneksiMenuCoffes
      .post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        setShowAdd(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <Navbar />
      <div className="max-w-screen-xl flex flex-wrap mx-auto py-6">
        <div className="flex justify-between w-full items-center px-4">
          <div className="flex">
            <div className="text-2xl font-bold">Coffe</div>
          </div>
          <button
          onClick={() => setShowAdd(true)}
            type="button"
            className="text-white bg-[#fbbf24] hover:bg-[#d97706] focus:ring-4 focus:ring-red-500 font-medium rounded-lg px-6 py-2 focus:outline-none"
          >
            Add Menu
          </button>
        </div>
        <div className="flex flex-wrap py-6">
          {menuCoffes.map((menuCoffe) => (
            <div
              key={menuCoffe.nim}
              className="w-full lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg" src={menuCoffe.foto} alt="" />
                <div className="p-2.5">
                  <div className="flex justify-between mb-2">
                    <div className="text-base font-bold tracking-tight text-gray-900">
                      {menuCoffe.Nama}
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button>
                          <Image
                            className="object-contain"
                            width={16}
                            height={16}
                            src={dots}
                            alt="Dots"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                onClick={() => handleEdit(menuCoffe.nim)}
                                  className={`${
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700'
                                  } flex justify-between px-4 py-1 text-xs`}
                                >
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    setDeleteNim(menuCoffe.nim); // Set the nim value when delete button is clicked
                                    setShowDelete(true);
                                  }}
                                  value={menuCoffe.nim}
                                  className={`${
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700'
                                  } flex justify-between px-4 py-1 text-xs`}
                                >
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <p className="mb-3 text-justify text-sm text-gray-700">
                    <TextTruncate text={menuCoffe.alamat} maxLength={15} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        title="New menu"
        open={showAdd}
        onClose={() => setShowAdd(false)}      >
        <AddPopUp
          handleSubmitAdd={handleSubmitAdd}
          onClose={() => setShowAdd(false)}
        />
      </Modal>
      <Modal
        title="Edit menu"
        open={showEdit}
        onClose={() => {
          setShowEdit(false);
                 }}
      >
        <EditPopUp
        editData={editData}
          handleSubmitEdit={handleSubmitEdit}
          onClose={() => {
            setShowEdit(false);

          }}
        />
      </Modal>

      <Modal
        title="Delete Data"
        open={showDelete}
        onClose={() => {
          setShowDelete(false);
          setDeleteNim(null); // Reset deleteNim when the modal is closed
        }}
      >
        <PopUpHapus
          handleDelete={handleDelete}
          onClose={() => {
            setShowDelete(false);
            setDeleteNim(null);
          }}
        />
      </Modal>

    </>
  );
};

export default Menucoffe;
