"use client";
import React, { useState } from "react";
import "./globals.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-2">
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/SOne_index_logo.png"
            alt="Logo"
            className="w-70 h-auto"
          />
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
          <div className="flex gap-2">
            <img src="/images/SOne_index_iconthai.jpg" width={25} height={15} />
            <img
              className="hover-img-eng"
              src="/images/SOne_index_iconeng2.jpg"
              width={25}
              height={15}
            />
          </div>

          {/* Search box */}
          <div className="flex items-center gap-2">
            <div className="flex border border-red-500 w-full max-w-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-60 px-2  focus:outline-none text-sm"
              />
              <button className="bg-black px-2">
                <img
                  src="/images/SOne_Mobile_search.png"
                  width={23}
                  height={23}
                  alt="Search"
                />
              </button>
            </div>
          </div>

          {/* Menu Links */}
          <div className="text-sm text-gray-700 flex flex-wrap justify-center md:justify-end gap-2 ">
            <a href="#" className="hover:text-red-600">
              About S-ONE
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">
              Job Opportunity
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">
              Contact Us
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">
              Site Map
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-black text-white rounded-sm">
        {/* Toggle menu button for mobile */}
        <div className="md:hidden p-2 w-full flex justify-between text-center">
          News & Promotions
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col  md:flex-row gap-6 p-2 w-full md:w-auto justify-center md:justify-end items-center`}
        >
          <div className="flex items-center gap-2">
            <img src="/images/SOne_index_menu02.png" width={20} height={20} />
            <a href="#" className="text-red-600">
              Product & Services
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="hover-img-menu"
              src="/images/SOne_index_menu01.png"
              width={20}
              height={20}
            />
            <a href="#" className="hover:text-red-500">
              Promotions
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="hover-img-menu"
              src="/images/SOne_index_menu01.png"
              width={20}
              height={20}
            />
            <a href="#" className="hover:text-red-500">
              News & Events
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="hover-img-menu"
              src="/images/SOne_index_menu01.png"
              width={20}
              height={20}
            />
            <a href="#" className="hover:text-red-500">
              Safety Tips
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="hover-img-menu"
              src="/images/SOne_index_menu01.png"
              width={20}
              height={20}
            />
            <a href="#" className="hover:text-red-500">
              FAQS
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="hover-img-menu"
              src="/images/SOne_index_menu01.png"
              width={20}
              height={20}
            />
            <a href="#" className="hover:text-red-500">
              Location
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex md:flex-row gap-1 p-2 w-full md:w-auto justify-center md:justify-end`}
        >
          <img
            className="hover-img-facebook"
            src="/images/SOne_index_btfacebook.png"
            width={20}
            height={20}
          />
          <img
            className="hover-img-twitter"
            src="/images/SOne_index_bttwitter.png"
            width={20}
            height={20}
          />
          <img
            className="hover-img-youtube"
            src="/images/SOne_index_btyoutube.png"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Banner */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="w-full md:w-1/4 text-white py-1">
          <h2 className="bg-orange-500 text-white p-2">ค้นหายาง</h2>
          <div
            className="p-4 space-y-2 text-sm text-end bg-[url('/images/SOne_index_bg_searchtype.jpg')] bg-cover bg-center"
            style={{ minHeight: "250px" }}
          >
            <div className="grid grid-cols-2 text-start">
              <div className="col-start-3">
                <p className="text-lg ">หน้ายาง</p>
                <p className="text-sm">ความกว้าง (มม.)</p>
                <select className="w-full text-black bg-white border border-red-500">
                  <option>--เลือกหน้ายาง--</option>
                </select>

                <p className="text-lg">ซีรี่ย์</p>
                <p className="text-sm">อัตราส่วนความสูงแก้มยาง (%)</p>
                <select className="w-full text-black bg-white border border-red-500">
                  <option>--เลือกซีรี่ย์--</option>
                </select>

                <p className="text-lg">กระทะล้อ</p>
                <p className="text-sm">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
                <select className="w-full text-black bg-white border border-red-500">
                  <option>--เลือกกระทะล้อ--</option>
                </select>
              </div>
            </div>
            <button className="bg-orange-500 text-white w-25 p-1 rounded">
              ค้นหา
            </button>
          </div>
        </div>

        <div className="py-2 w-full md:w-3/4 ">
          <div
            className="p-4 space-y-2 text-sm text-end bg-[url('/images/SOne_index_banner.jpg')] bg-cover"
            style={{ minHeight: "329px" }}
          >
            <div className="flex flex-col items-center md:items-end">
              <div className="flex flex-col items-center gap-1">
                <a href="#">
                  <img
                    src="/images/SOne_index_arrowup.png"
                    width={28}
                    height={15}
                  />
                </a>
                <img
                  className="border border-red-500 mb-2"
                  src="/images/SOne_index_pic01.jpg"
                  width={140}
                />
                <img
                  className="border border-red-500 mb-2"
                  src="/images/SOne_index_pic02.jpg"
                  width={140}
                />
                <img
                  className="border border-red-500"
                  src="/images/SOne_index_pic02.jpg"
                  width={140}
                />
                <a href="#">
                  <img
                    src="/images/SOne_index_arrowdown.png"
                    width={28}
                    height={15}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
        <a href="#" className="hover-img-tire">
          <img src="/images/SOne_index_bt-tire.jpg" alt="" />
        </a>
        <a href="#" className="hover-img-break">
          <img src="/images/SOne_index_bt-break.jpg" alt="" />
        </a>
        <a href="#" className="hover-img-battery">
          <img src="/images/SOne_index_bt-battery.jpg" alt="" />
        </a>
        <a href="#" className="hover-img-chokeup">
          <img src="/images/SOne_index_bt-chokeup.jpg" alt="" />
        </a>
        <a href="#" className="hover-img-oil">
          <img src="/images/SOne_index_bt-oil.jpg" alt="" />
        </a>
        <a href="#" className="hover-img-guarantee ">
          <img src="/images/SOne_index_bt-guarantee.jpg" alt="" />
        </a>
      </div>

      {/* service */}

      <div className="flex flex-col md:flex-row justify-between items-center py-1">
        <div className="w-full md:w-1/4 text-white py-2">
          <h2 className="bg-orange-500 text-white p-2">
            ค้นหาศูนย์บริการใกล้บ้านคุณ
          </h2>
          <div className="flex flex-col gap-2 items-end py-4 px-2 bg-[#252525]">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full">
                <label className="text-lg font-medium whitespace-nowrap w-32 text-right">
                  จังหวัด
                </label>
                <select className="bg-white text-black border border-red-500 rounded px-3 py-1 text-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-400">
                  <option>เลือกหน้ายาง</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full">
                <label className="text-lg font-medium whitespace-nowrap w-32 text-right">
                  เขต/อำเภอ
                </label>
                <select className="bg-white text-black border border-red-500 rounded px-3 py-1 text-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-400">
                  <option>เลือกหน้ายาง</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full">
                <label className="text-lg font-medium whitespace-nowrap w-32 text-right">
                  ถนน
                </label>
                <select className="bg-white text-black border border-red-500 rounded px-3 py-1 text-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-400">
                  <option>เลือกหน้ายาง</option>
                </select>
              </div>
            </div>

            <div className="w-full text-center">
              <p className="text-sm text-red-500">
                หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
              </p>
            </div>
            <div className="pr-10">
              <button className="bg-orange-500 text-white w-25 p-1 rounded">
                ค้นหา
              </button>
            </div>
          </div>
        </div>

        {/* news */}

        <div className="w-full items-center md:w-1/2 p-2 ">
          <div className="flex items-center justify-between border border-orange-500 p-2">
            <h2 className="text-lg font-semibold">News & Events</h2>
            <div className="flex space-x-1">
              <div className="w-3 h-3">
                <a href="#">
                  <img src="/images/SOne_index_bullet1.png" alt="" />
                </a>
              </div>
              <div className="w-3 h-3 hover-img-dotlink">
                <a href="#">
                  <img src="/images/SOne_index_bullet2.png" alt="" />
                </a>
              </div>
              <div className="w-3 h-3 hover-img-dotlink">
                <a href="#">
                  <img src="/images/SOne_index_bullet2.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 border border-orange-500 p-2 space-y-4 md:space-y-0">
            <div className="py-4 relative w-full md:w-1/3">
              <div className="relative">
                <img
                  src="images/SOne_index_pic3.jpg"
                  alt="news"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-xs text-center p-1">
                  <div>19</div>
                  <div>NOV</div>
                  <div>2014</div>
                </div>
              </div>
              <p className="text-sm mt-4 font-semibold leading-snug">
                ข่าวใหม่!!
                ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม
              </p>
            </div>

            {/* เส้นคั่นแนวตั้ง */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="w-px h-40 bg-orange-500" />
            </div>

            <div className="py-4 relative w-full md:w-1/3">
              <div className="relative">
                <img
                  src="images/SOne_index_pic3.jpg"
                  alt="news"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-xs text-center p-1">
                  <div>19</div>
                  <div>NOV</div>
                  <div>2014</div>
                </div>
              </div>
              <p className="text-sm mt-4 font-semibold leading-snug">
                ข่าวใหม่!!
                ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม
              </p>
            </div>

            {/* เส้นคั่นแนวตั้ง */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="w-px h-40 bg-orange-500" />
            </div>

            <div className="py-4 relative w-full md:w-1/3">
              <div className="relative">
                <img
                  src="images/SOne_index_pic3.jpg"
                  alt="news"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 bg-black text-white text-xs text-center p-1">
                  <div>19</div>
                  <div>NOV</div>
                  <div>2014</div>
                </div>
              </div>
              <p className="text-sm mt-4 font-semibold leading-snug">
                ข่าวใหม่!!
                ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม
              </p>
            </div>
          </div>
        </div>

        {/* safety trip */}

        <div className="w-full md:w-1/4 text-white py-1">
          <div className="flex items-center rounded-lg">
            <div className="w-full md:w-1/2">
              {" "}
              <img
                src="/images/SOne_index_tips1.png"
                alt="Safety Tips"
                className="h-39.5"
              />
            </div>

            <div className="w-full md:w-1/2 text-xs bg-[#252525] h-37 px-1 py-5 -mt-2.5 border border-red-500 border-l-0">
              <div className="flex flex-col items-center text-center">
                <p className="text-xl font-semibold text-red-500 pb-2">
                  Safety Tips
                </p>
              </div>
              <div className="flex justify-start">
                <img src="/images/SOne_index_pic66.png" className="w-5" />
              </div>
              <div className="flex flex-col items-center text-center">
                <p>ควรเติมน้ำมันตอนเช้า</p>
                <p>ขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่</p>
              </div>
              <div className="flex justify-end py-1">
                <img src="/images/SOne_index_pic99.png" className="w-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-black">
            <label className="text-ทก font-medium whitespace-nowrap text-right w-1/3">
              สมัครรับข่าวสาร
            </label>
            <div className="flex border border-red-h00  overflow-hidden w-full">
              <input
                type="text"
                placeholder="กรุณาใส่อีเมล์"
                className="w-full px-4 focus:outline-none text-sm  "
              />
              <button className="bg-black p-2 hover:bg-gray-800 ">
                <img
                  src="/images/SOne_index_btgo.jpg"
                  width={23}
                  height={23}
                  alt="Search"
                />
              </button>
            </div>
          </div>
          <p className="text-center text-red-500">
            -----------------------------------------------
          </p>
          <div className="flex justify-center">
            <img src="/images/SOne_index_call.png" width={250} />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col md:flex-row items-center gap-4 pb-2">
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/SOne_index_logo.png"
            alt="Logo"
            className="w-40 h-auto"
          />
        </div>
        {/* Menu Links */}
        <div className="text-sm text-white flex flex-wrap bg-[#252525] p-2 w-full rounded-md items-center">
          Copyright © 2014
        </div>
      </div>
    </div>
  );
}

export default Home;
