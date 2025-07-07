import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function Contact() {
  const [status, setStatus] = useState(null); // add this inside the component

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 2000); // 2 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date();
    const formData = new FormData(form.current);
    formData.append("date", now.toLocaleDateString());
    formData.append("time", now.toLocaleTimeString());

    const dataObject = Object.fromEntries(formData);

    // 1️⃣ Send message to yourself
    emailjs
      .send(
        "service_a76fhde",
        "template_n06du2e",
        dataObject,
        "LuCEKSvxmFf9CBaMd"
      )
      .then((result) => {
        // 2️⃣ Then send auto-reply to user
        emailjs
          .send(
            "service_a76fhde",
            "template_umj8h1o",
            dataObject,
            "LuCEKSvxmFf9CBaMd"
          )
          .then(() => {
            setStatus("success");
            form.current.reset();
          })
          .catch((error) => {
            setStatus("error");
            console.error("Auto-reply failed:", error.text);
          });
      })
      .catch((error) => {
        setStatus("error");
        console.error("Message failed:", error.text);
      });
  };
  const array = [
    {
      id: 1,
      name: "Email",
      subname: "balacy002@rmkcet.ac.in",
      icon: Mail,
    },
    {
      id: 2,
      name: "Phone",
      subname: "+91 9123587980",
      icon: Phone,
    },
    {
      id: 3,
      name: "Location",
      subname: "Chennai, TamilNadu, India.",
      icon: MapPin,
    },
  ];
  return (
    <>
      {status === "success" && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 mt-4 p-4 rounded-lg bg-green-100 text-green-800 border border-green-300 shadow-lg transition-all duration-300">
          ✅ Message sent successfully!
        </div>
      )}

      {status === "error" && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 mt-4 p-4 rounded-lg bg-red-100 text-red-800 border border-red-300 shadow-lg transition-all duration-300">
          ❌ Something went wrong. Please try again.
        </div>
      )}

      <div
        id="contact"
        className="sm:h-210 relative   md:max-w-6xl md:mx-auto gap-x-5 flex md:flex-row  flex-col mx-3 py-10 md:pt-30"
      >
        <div className="justify-between flex space-y-10 flex-col w-full h-full  md:w-[30%]">
          {array.map((arr, index) => (
            <div
              key={index}
              className="box1 group h-full w-full overflow-hidden md:py-0 py-5 rounded-3xl border-emerald-400/10 border-b-emerald-600 shadow-2xs bg-emerald-950/10 shadow-emerald-600 border"
            >
              <div className="flex relative  justify-between h-full w-[80%] mx-auto items-center">
                <div
                  className="absolute z-10 -top-3 left-5 rounded-full h-[2px] w-[2px] bg-green-400"
                  style={{
                    animationName: "floatDown",
                    animationDuration: "1.5s",
                    animationDelay: "0.5s",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></div>
                <div
                  className="absolute z-10 -top-3 left-2 rounded-full h-[2px] w-[2px] bg-green-400"
                  style={{
                    animationName: "floatDown",
                    animationDuration: "2s",
                    animationDelay: "3s",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></div>
                <div
                  className="absolute z-10 -top-1 left-10 rounded-full h-[2px] w-[2px] bg-green-400"
                  style={{
                    animationName: "floatDown",
                    animationDuration: "2.5s",
                    animationDelay: "",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></div>

                <div
                  className="absolute z-10 -top-5 left-6 rounded-full h-[2px] w-[2px] bg-green-400"
                  style={{
                    animationName: "floatDown",
                    animationDuration: "2s",
                    animationDelay: "",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></div>
                <div
                  className="absolute z-10 -top-4 left-14 rounded-full h-[2px] w-[2px] bg-green-400"
                  style={{
                    animationName: "floatDown",
                    animationDuration: "2s",
                    animationDelay: "",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></div>

                <div className="absolute z-10 -left-1 rounded-full h-25 w-17 bg-gradient-to-b -top-7 from-emerald-500/80 via-emerald-500/10 blur to-emerald-300/5"></div>

                <div className="flex flex-col h-full space-y-5 w-full justify-center items-start">
                  <div className="flex items-center space-x-5">
                    <div className="box w-15 text-white flex items-center justify-center rounded-2xl h-15 border border-white/15">
                      <arr.icon className="size-9" />
                    </div>
                    <div className="text-2xl text-gray-400">{arr.name}</div>
                  </div>
                  <div className="email text-white/50 text-sm">
                    {arr.subname}
                  </div>
                </div>
                <div className="flex md:hidden lg:flex items-center justify-end h-full w-full">
                  <div className=" w-13 h-13  text-white flex justify-center items-center rounded-full border border-emerald-300">
                    <ArrowUpRight className="size-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl md:overflow-hidden relative border flex flex-col border-emerald-500 w-full md:w-[70%] bg-gradient-to-br from-emerald-950/20 via-emerald-900/10 to-emerald-800/10 backdrop-blur-sm mt-10 md:mt-0">
          <div
            className="absolute z-10 -top-3 left-[5%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "15s",
              animationDelay: "0.5s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-3 left-[12%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "10s",
              animationDelay: "3s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-1 left-[16%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "25s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>

          <div
            className="absolute z-10 -top-5 left-[26%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "17s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-4 left-[34%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "13s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-3 left-[45%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "15s",
              animationDelay: "0.5s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-3 left-[52%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "12s",
              animationDelay: "3s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-1 left-[85%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "20s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>

          <div
            className="absolute z-10 -top-5 left-[65%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "21s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-4 left-[74%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "22s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-3 left-[95%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "15s",
              animationDelay: "0.5s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-3 left-[28%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "22s",
              animationDelay: "3s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-1 left-[61%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "20s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>

          <div
            className="absolute z-10 -top-5 left-[10%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "2s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-4 left-[90%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "20s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-3 left-[50%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "15s",
              animationDelay: "0.5s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-3 left-[20%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "20s",
              animationDelay: "3s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-1 left-[10%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "25s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>

          <div
            className="absolute z-10 -top-5 left-[60%] rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "15s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>
          <div
            className="absolute z-10 -top-4 left-40 rounded-full h-[2px] w-[2px] bg-green-400"
            style={{
              animationName: "floatDown1",
              animationDuration: "20s",
              animationDelay: "",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          ></div>

          <div className="absolute -z-10 h-full w-full bg-gradient-to-b  from-emerald-500/40 animate-pulse via-emerald-500/10 blur to-emerald-300/5"></div>

          <div className="p-8 md:p-6 h-full flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let's Connect
              </h2>
              <p className="text-gray-400 text-lg">
                Have a question or want to work together? I'd love to hear from
                you.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col space-y-6 flex-grow">
                <div className="space-y-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-all duration-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </div>
                    <input
                      type="text"
                      name="user_email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none placeholder-gray-500 transition-all duration-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </div>
                    <textarea
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500  focus:outline-none placeholder-gray-500  transition-all duration-500 "
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex-grow xl:mt-10 flex items-end">
                <button
                  type="submit"
                  className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
