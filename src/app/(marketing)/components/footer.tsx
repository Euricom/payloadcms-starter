export default function Footer() {
    return (
      <footer className=" bg-primary rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-secondary sm:text-center">
            © 2024{" "}
            <a
              href="https://www.euri.com"
              className="hover:underline"
            >
              Euricom
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  }
  