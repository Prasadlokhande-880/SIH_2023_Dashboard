import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import IconUserPlus from "../../components/Icon/IconUserPlus";
import IconListCheck from "../../components/Icon/IconListCheck";
import IconLayoutGrid from "../../components/Icon/IconLayoutGrid";
import IconSearch from "../../components/Icon/IconSearch";
import IconUser from "../../components/Icon/IconUser";
import IconFacebook from "../../components/Icon/IconFacebook";
import IconInstagram from "../../components/Icon/IconInstagram";
import IconLinkedin from "../../components/Icon/IconLinkedin";
import IconTwitter from "../../components/Icon/IconTwitter";
import IconX from "../../components/Icon/IconX";

const todolist2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle("Contacts"));
  });
  const [addContactModal, setAddContactModal] = useState<any>(false);

  const [value, setValue] = useState<any>("list");
  const [defaultParams] = useState({
    id: null,
    name: "",
    caseID: "",
    factDate: "",
    role: "",
    courtID: "",
    plaintiff: "",
    defendant: "",
    status: "",
  });

  const [params, setParams] = useState<any>(
    JSON.parse(JSON.stringify(defaultParams))
  );

  const changeValue = (e: any) => {
    const { value, id } = e.target;
    setParams({ ...params, [id]: value });
  };

  const [search, setSearch] = useState<any>("");
  const [contactList] = useState<any>([
    {
      id: 1,
      path: "profile-35.png",
      name: "Alan Green",
      role: "Web Developer",
      caseID: "DH15",
      courtID: "Boston, USA",
      factDate: "+1 202 555 0197",
      plaintiff: 25,
      defendant: "5K",
      status: 500,
    },
    {
      id: 2,
      path: "profile-35.png",
      name: "Linda Nelson",
      role: "Web Designer",
      caseID: "linda@mail.com",
      courtID: "Sydney, Australia",
      factDate: "15-08-2023",
      plaintiff: 25,
      defendant: "21.5K",
      status: 350,
    },
    {
      id: 3,
      path: "profile-35.png",
      name: "Lila Perry",
      role: "UX/UI Designer",
      caseID: "lila@mail.com",
      courtID: "Miami, USA",
      factDate: "+1 202 555 0105",
      plaintiff: 20,
      defendant: "21.5K",
      status: 350,
    },
    {
      id: 4,
      path: "profile-35.png",
      name: "Andy King",
      role: "Project Lead",
      caseID: "andy@mail.com",
      courtID: "Tokyo, Japan",
      factDate: "+1 202 555 0194",
      plaintiff: 25,
      defendant: "21.5K",
      status: 300,
    },
    {
      id: 5,
      path: "profile-35.png",
      name: "Jesse Cory",
      role: "Web Developer",
      caseID: "jesse@mail.com",
      courtID: "Edinburgh, UK",
      factDate: "+1 202 555 0161",
      plaintiff: 30,
      defendant: "20K",
      status: 350,
    },
    {
      id: 6,
      path: "profile-35.png",
      name: "Xavier",
      role: "UX/UI Designer",
      caseID: "xavier@mail.com",
      courtID: "New York, USA",
      factDate: "+1 202 555 0155",
      plaintiff: 25,
      defendant: "21.5K",
      status: 350,
    },
    {
      id: 7,
      path: "profile-35.png",
      name: "Susan",
      role: "Project Manager",
      caseID: "susan@mail.com",
      courtID: "Miami, USA",
      factDate: "+1 202 555 0118",
      plaintiff: 40,
      defendant: "21.5K",
      status: 350,
    },
    {
      id: 8,
      path: "profile-35.png",
      name: "Raci Lopez",
      role: "Web Developer",
      caseID: "traci@mail.com",
      courtID: "Edinburgh, UK",
      factDate: "+1 202 555 0135",
      plaintiff: 25,
      defendant: "21.5K",
      status: 350,
    },
    {
      id: 9,
      path: "profile-35.png",
      name: "Steven Mendoza",
      role: "HR",
      caseID: "sokol@verizon.net",
      courtID: "Monrovia, US",
      factDate: "+1 202 555 0100",
      plaintiff: 40,
      defendant: "21.8K",
      status: 300,
    },
    {
      id: 10,
      path: "profile-35.png",
      name: "James Cantrell",
      role: "Web Developer",
      caseID: "sravani@comcast.net",
      courtID: "Michigan, US",
      factDate: "+1 202 555 0134",
      plaintiff: 100,
      defendant: "28K",
      status: 520,
    },
    {
      id: 11,
      path: "profile-35.png",
      name: "Reginald Brown",
      role: "Web Designer",
      caseID: "drhyde@gmail.com",
      courtID: "Entrimo, Spain",
      factDate: "+1 202 555 0153",
      plaintiff: 35,
      defendant: "25K",
      status: 500,
    },
    {
      id: 12,
      path: "profile-35.png",
      name: "Stacey Smith",
      role: "Chief technology officer",
      caseID: "maikelnai@optonline.net",
      courtID: "Lublin, Poland",
      factDate: "+1 202 555 0115",
      plaintiff: 21,
      defendant: "5K",
      status: 200,
    },
  ]);

  const [filteredItems, setFilteredItems] = useState<any>(contactList);

  useEffect(() => {
    setFilteredItems(() => {
      return contactList.filter((item: any) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [search, contactList]);

  const saveUser = () => {
    if (!params.name) {
      showMessage("Name is required.", "error");
      return true;
    }
    if (!params.caseID) {
      showMessage("Email is required.", "error");
      return true;
    }
    if (!params.factDate) {
      showMessage("Date Filed is required.", "error");
      return true;
    }
    if (!params.role) {
      showMessage("Occupation is required.", "error");
      return true;
    }

    if (params.id) {
      //update user
      let user: any = filteredItems.find((d: any) => d.id === params.id);
      user.name = params.name;
      user.caseID = params.caseID;
      user.factDate = params.factDate;
      user.role = params.role;
      user.courtID = params.courtID;
    } else {
      //add user
      let maxUserId = filteredItems.length
        ? filteredItems.reduce(
            (max: any, character: any) =>
              character.id > max ? character.id : max,
            filteredItems[0].id
          )
        : 0;

      let user = {
        id: maxUserId + 1,
        path: "profile-35.png",
        name: params.name,
        caseID: params.caseID,
        factDate: params.factDate,
        role: params.role,
        courtID: params.courtID,
        plaintiff: 20,
        defendant: "5K",
        status: 500,
      };
      filteredItems.splice(0, 0, user);
      //   searchContacts();
    }

    showMessage("User has been saved successfully.");
    setAddContactModal(false);
  };

  const editUser = (user: any = null) => {
    const json = JSON.parse(JSON.stringify(defaultParams));
    setParams(json);
    if (user) {
      let json1 = JSON.parse(JSON.stringify(user));
      setParams(json1);
    }
    setAddContactModal(true);
  };

  const deleteUser = (user: any = null) => {
    setFilteredItems(filteredItems.filter((d: any) => d.id !== user.id));
    showMessage("User has been deleted successfully.");
  };

  const showMessage = (msg = "", type = "success") => {
    const toast: any = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      customClass: { container: "toast" },
    });
    toast.fire({
      icon: type,
      title: msg,
      padding: "10px 20px",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-xl">My Filed Cases</h2>
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto"></div>
      </div>
      {value === "list" && (
        <div className="mt-5 panel p-0 border-0 overflow-hidden">
          <div className="table-responsive">
            <table className="table-striped table-hover">
              <thead>
                <tr>
                  {/* <th>Name</th> */}
                  <th>Case ID</th>
                  <th>Court ID</th>
                  <th>Date Filed</th>
                  <th>Plaintiff</th>
                  <th>Defendant</th>
                  <th>Status</th>
                  {/* <th className="!text-center">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((contact: any) => {
                  return (
                    <tr key={contact.id}>
                      {/* <td>
                        <div className="flex items-center w-max">
                          {contact.path && (
                            <div className="w-max">
                              <img
                                src={`/assets/images/${contact.path}`}
                                className="h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2"
                                alt="avatar"
                              />
                            </div>
                          )}
                          {!contact.path && contact.name && (
                            <div className="grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"></div>
                          )}
                          {!contact.path && !contact.name && (
                            <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                              <IconUser className="w-4.5 h-4.5" />
                            </div>
                          )}
                          <div>{contact.name}</div>
                        </div>
                      </td> */}
                      <td>{contact.caseID}</td>
                      <td className="whitespace-nowrap">{contact.courtID}</td>
                      {/* Court ID */}
                      <td className="whitespace-nowrap">{contact.factDate}</td>
                      {/* Date Filed */}
                      <td className="whitespace-nowrap">{contact.plaintiff}</td>
                      <td className="whitespace-nowrap">{contact.defendant}</td>
                      <td className="whitespace-nowrap">{contact.status}</td>
                      {/* <td>
                        <div className="flex gap-4 items-center justify-center">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => editUser(contact)}
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteUser(contact)}
                          >
                            Final Submit
                          </button>
                        </div>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {value === "grid" && (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5 w-full">
          {filteredItems.map((contact: any) => {
            return (
              <div
                className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative"
                key={contact.id}
              >
                <div className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative">
                  <div
                    className="bg-white/40 rounded-t-md bg-center bg-cover p-6 pb-0 bg-"
                    style={{
                      backgroundImage: `url('/assets/images/notification-bg.png')`,
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <img
                      className="object-contain w-4/5 max-h-40 mx-auto"
                      src={`/assets/images/${contact.path}`}
                      alt="contact_image"
                    />
                  </div>
                  <div className="px-6 pb-24 -mt-10 relative">
                    <div className="shadow-md bg-white dark:bg-gray-900 rounded-md px-2 py-4">
                      <div className="text-xl">{contact.name}</div>
                      <div className="text-white-dark">{contact.role}</div>
                      <div className="flex items-center justify-between flex-wrap mt-6 gap-3">
                        <div className="flex-auto">
                          <div className="text-info">{contact.plaintiff}</div>
                          <div>Posts</div>
                        </div>
                        <div className="flex-auto">
                          <div className="text-info">{contact.status}</div>
                          <div>status</div>
                        </div>
                        <div className="flex-auto">
                          <div className="text-info">{contact.defendant}</div>
                          <div>Followers</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <ul className="flex space-x-4 rtl:space-x-reverse items-center justify-center">
                          <li>
                            <button
                              type="button"
                              className="btn btn-outline-primary p-0 h-7 w-7 rounded-full"
                            >
                              <IconFacebook />
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="btn btn-outline-primary p-0 h-7 w-7 rounded-full"
                            >
                              <IconInstagram />
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="btn btn-outline-primary p-0 h-7 w-7 rounded-full"
                            >
                              <IconLinkedin />
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="btn btn-outline-primary p-0 h-7 w-7 rounded-full"
                            >
                              <IconTwitter />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-4 ltr:text-left rtl:text-right">
                      <div className="flex items-center">
                        <div className="flex-none ltr:mr-2 rtl:ml-2">
                          Email :
                        </div>
                        <div className="truncate text-white-dark">
                          {contact.caseID}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-none ltr:mr-2 rtl:ml-2">
                          Date Filed :
                        </div>
                        <div className="text-white-dark">
                          {contact.factDate}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-none ltr:mr-2 rtl:ml-2">
                          Address :
                        </div>
                        <div className="text-white-dark">{contact.courtID}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4 absolute bottom-0 w-full ltr:left-0 rtl:right-0 p-6">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-1/2"
                      onClick={() => editUser(contact)}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger w-1/2"
                      onClick={() => deleteUser(contact)}
                    >
                      Final Submit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Transition appear show={addContactModal} as={Fragment}>
        <Dialog
          as="div"
          open={addContactModal}
          onClose={() => setAddContactModal(false)}
          className="relative z-[51]"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[black]/60" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                  <button
                    type="button"
                    onClick={() => setAddContactModal(false)}
                    className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                  >
                    <IconX />
                  </button>
                  <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                    {params.id ? "Update Contact" : "Add Contact"}
                  </div>
                  <div className="p-5">
                    <form>
                      <div className="mb-5">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter Name"
                          className="form-input"
                          value={params.name}
                          onChange={(e) => changeValue(e)}
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="caseID">Email</label>
                        <input
                          id="caseID"
                          type="caseID"
                          placeholder="Enter Email"
                          className="form-input"
                          value={params.caseID}
                          onChange={(e) => changeValue(e)}
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="number">Date Filed Number</label>
                        <input
                          id="factDate"
                          type="text"
                          placeholder="Enter Date Filed Number"
                          className="form-input"
                          value={params.factDate}
                          onChange={(e) => changeValue(e)}
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="occupation">Occupation</label>
                        <input
                          id="role"
                          type="text"
                          placeholder="Enter Occupation"
                          className="form-input"
                          value={params.role}
                          onChange={(e) => changeValue(e)}
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="address">Address</label>
                        <textarea
                          id="courtID"
                          rows={3}
                          placeholder="Enter Address"
                          className="form-textarea resize-none min-h-[130px]"
                          value={params.courtID}
                          onChange={(e) => changeValue(e)}
                        ></textarea>
                      </div>
                      <div className="flex justify-end items-center mt-8">
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => setAddContactModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary ltr:ml-4 rtl:mr-4"
                          onClick={saveUser}
                        >
                          {params.id ? "Update" : "Add"}
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default todolist2;
