import { FocusCardsDemo } from "@/component/FocusDemo/FocusDemo";
import Footer from "@/component/footer/Footer";
import { ContainerScroll } from "@/component/ui/motions/container-scroll-animation";
import React from "react";

function page() {
  return (
    <div className="pt-[6.8rem]">
      <div>
        <h1>This is the Admission</h1>
      </div>

      <div>
        <FocusCardsDemo />
      </div>
      <div>
        <ContainerScroll titleComponent={<h2>Title Here</h2>}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos tenetur ipsa dolore, et quas voluptatibus vel doloribus eligendi porro veniam officiis tempore quibusdam ad, amet iure? Iusto quibusdam dolorum saepe minus sed aut illo deleniti possimus eos quisquam dignissimos velit quia temporibus itaque, ipsa laborum assumenda eaque molestiae tenetur iste repellendus a quo. Facere maxime suscipit recusandae rerum deserunt adipisci itaque libero in alias dolorum error eligendi et animi dolorem ipsum fugiat quibusdam earum numquam, quisquam culpa quidem qui soluta omnis? Repellat, provident consequatur? Beatae tempore inventore debitis asperiores nostrum tenetur, dolore itaque. Eaque, voluptatibus eveniet architecto accusamus quod quasi dolores sed veritatis totam quisquam consectetur, placeat saepe error iure beatae perspiciatis nihil deleniti! Assumenda voluptatum exercitationem commodi asperiores beatae magnam saepe tenetur autem facilis pariatur quas possimus doloremque deleniti, sed incidunt nam odit quia, soluta hic similique aliquid sunt repellat veritatis! Minima, quasi nobis saepe placeat corporis dolore!</p>
        </ContainerScroll>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default page;
