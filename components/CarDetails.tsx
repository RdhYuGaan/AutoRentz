"use client";
import React, { Fragment } from "react";
import { CarProps } from "@/types";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails: React.FC<CarDetailsProps> = ({ isOpen, closeModal, car }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* Overlay */}
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

        {/* Modal Content */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform
                rounded-2xl bg-white p-8 text-left shadow-xl transition-all flex flex-col gap-5"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                {/* Car Images */}
                <div className="flex-1 flex flex-col gap-3">
                  <div
                    className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg"
                  >
                    <Image
                      src={generateCarImageUrl(car, "28")}
                      alt="car model"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <div className="flex gap-3">
                    {["33", "13", "angle"].map((angle) => (
                      <div
                        key={angle}
                        className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg"
                      >
                        <Image
                          src={generateCarImageUrl(car, angle)}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Car Details */}
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="text-gray capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="font-semibold text-black">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
