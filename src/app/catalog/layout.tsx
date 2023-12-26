import { CatalogNavbar, ProductModal } from "@/components";


export default function CatalogLayout({ children }: { children: React.ReactNode; }) {
  return (
    <main>
      <CatalogNavbar />
      {children}
      <ProductModal />
    </main>
  );
}