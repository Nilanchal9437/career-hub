import Link from "next/link";

function Card({
  icon,
  link,
  title,
  description,
  lable,
  bgcolor,
  btncolor,
  btncolorHover,
}: {
  icon: React.ReactElement;
  link: string;
  title: string;
  description: string;
  lable: string;
  bgcolor: string;
  btncolor: string;
  btncolorHover: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px] flex flex-col items-center">
      <div className={`${bgcolor} rounded-full p-3 mb-3`}>
        <span className="text-blue-500 text-2xl">{icon}</span>
      </div>
      <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 text-center">{description}</p>
      <Link
        href={link}
        className={`${btncolor} hover:${btncolorHover} text-white px-4 py-2 mt-auto rounded-md text-sm font-semibold transition w-full text-center`}
      >
        {lable}
      </Link>
    </div>
  );
}

export default Card;
