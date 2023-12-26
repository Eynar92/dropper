import { CatalogNavbar } from "@/components";


export default function CatalogLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div>
      <CatalogNavbar />
      {children}
    </div>
  );
}