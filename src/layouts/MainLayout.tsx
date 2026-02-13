import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
// export default function MainLayout({ children }) {
//   return (
//     <>
//       <Navbar />
//       <main style={{ paddingTop: "80px" }}>
//         {children}
//       </main>
//     </>
//   );
// }
