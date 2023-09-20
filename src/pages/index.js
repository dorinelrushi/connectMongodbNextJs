import { useTheme } from "next-themes";
export default function Home() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div>
      <h2 className="text-center mt-[20px] font-bold text-[40px]">
        Add Next-themes to your Next.js app in 3 min🚀
      </h2>
      <button
        className="flex items-center justify-center mt-[50px] bg-[orange] p-[30px] rounded-[8px] cursor-pointer  m-auto "
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      >
        Click Here to change the background Color
      </button>
    </div>
  );
}
