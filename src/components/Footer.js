export default function Footer() {
  return (
    <footer class="position-absolute bottom-0 w-100">
      <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center ">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></a>
          <span>
            {" "}
            <img
              src="https://www.apr.pl/wp-content/uploads/2018/03/WSEI-Krak%C3%B3w-logo.png"
              alt=""
              srcset=""
            />
          </span>
          <span class="mb-3 mb-md-0 text-body-secondary">
            Autor : Filip Stochel <br></br>email: tsquix@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
