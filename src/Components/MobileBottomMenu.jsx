import { FaPhone, FaCalendar, FaMapMarker, FaFacebook } from "react-icons/fa";
// 電話 預約賞屋, 地圖導航, 臉書粉絲
const menuItems = [
  { icon: <FaPhone />, label: "立即來電", link: "tel:06-2958892" },
  { icon: <FaCalendar />, label: "預約賞屋", link: null },
  {
    icon: <FaMapMarker />,
    label: "地圖導航",
    link: "https://maps.app.goo.gl/k6EsaSCvpFcifUJj6",
  },
  {
    icon: <FaFacebook />,
    label: "臉書粉絲",
    link: "https://www.facebook.com/rainbowcasamelody/",
  },
];

export default function MobileBottomMenu() {
  const handleClick = (item) => {
    if (item.label === "預約賞屋") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full  bg-gradient-to-b from-[#2b0522] to-[#000000]  flex justify-around items-center py-3 z-50 md:hidden">
      {menuItems.map((item, idx) =>
        item.link ? (
          <a
            key={idx}
            href={item.link}
            className="flex flex-col items-center text-white text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mb-1">{item.icon}</span>
            {item.label}
          </a>
        ) : (
          <button
            key={idx}
            className="flex flex-col items-center text-white text-xs focus:outline-none"
            onClick={() => handleClick(item)}
            type="button"
          >
            <span className="mb-1">{item.icon}</span>
            {item.label}
          </button>
        )
      )}
    </div>
  );
}
