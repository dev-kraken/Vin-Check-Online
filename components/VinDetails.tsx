import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  vinData: Array<CarProps>;
}

const CarDetails = ({ isOpen, closeModal, vinData }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-blue-200 rounded-full"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="mt-3 flex flex-wrap gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-t-md text-white text-3xl text-start font-semibold w-full">
                      {vinData[10].Value} {vinData[7].Value}{" "}
                      {vinData[9].Value}
                    </div>
                    <table className="border-collapse w-full border border-[#BFDCE5]  bg-white text-sm shadow-sm">
                      <tbody>
                        <tr className="grid">
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            VIN <br />
                            <span className="text-xl text-slate-800">
                              {/* {vinData.SearchCriteria.slice(4)} */}
                            </span>
                          </td>
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Make <br />
                            <span className="text-xl text-slate-800">
                              {vinData[7].Value}
                            </span>
                          </td>
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Model <br />
                            <span className="text-xl text-slate-800">
                              {vinData[9].Value}
                            </span>
                          </td>
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Year <br />
                            <span className="text-xl text-slate-800">
                              {vinData[10].Value}
                            </span>
                          </td>
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Drive Type <br />
                            <span className="text-xl text-slate-800">
                              {vinData[51].Value}
                            </span>
                          </td>
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Engine <br />
                            <span className="text-xl text-slate-800">
                              {vinData[73].Value}L
                            </span>
                          </td>
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Fuel Type <br />
                            <span className="text-xl text-slate-800">
                              {vinData[77].Value}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="border-collapse table-auto w-full border border-[#BFDCE5]  bg-white text-sm shadow-sm">
                      <tbody>
                        <tr className="sm:grid">
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Style/Body <br />
                            <span className="text-lg text-slate-800">
                              {vinData[109].Value}
                            </span>
                          </td>
                          <td className="border border-[#BFDCE5]  p-2 text-[#3E54AC] ">
                            Manufactured in
                            <br />
                            <span className="text-xl text-slate-800">
                              {vinData[11].Value} {vinData[17].Value}{" "}
                              {vinData[15].Value}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="border-collapse table-fixed w-full text-sm border">
                      <tbody className="bg-white">
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Manufactured By
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[8].Value}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Plant Company Name
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[16].Value !== null
                              ? vinData[16].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Vehicle Type
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[14].Value !== null
                              ? vinData[14].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Series
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[23].Value !== null
                              ? vinData[23].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Doors
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[24].Value !== null
                              ? vinData[24].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Front Airbag Location
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[95].Value !== null
                              ? vinData[95].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Front Airbag Location
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[95].Value !== null
                              ? vinData[95].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Seat Belt Type
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[91].Value !== null
                              ? vinData[91].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Engine Displacement (CI)
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[72].Value !== null
                              ? vinData[72].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Engine Displacement (CC)
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[71].Value !== null
                              ? vinData[71].Value
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                            Engine Number of Cylinders
                          </td>
                          <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                            {vinData[70].Value !== null
                              ? vinData[70].Value
                              : "-"}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-t-md text-white text-3xl text-start font-semibold w-full">
                      Additional Vehicle Info
                    </div>
                    <table className="border-collapse table-fixed w-full text-sm border">
                      <tbody className="bg-white">
                        {vinData?.map((item, idx) => {
                          if (item.Value) {
                            if (
                              item.Variable == "Error Code" ||
                              item.Variable == "Error Text"
                            ) {
                              return;
                            }
                            return (
                              <tr key={item.VariableId}>
                                <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                                  {item.Variable}
                                </td>
                                <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                                  {item.Value}
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;
