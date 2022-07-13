import innovationLogo from '../../assets/undraw_ideation_re_8i2h.svg';
export default function About() {
  return (
    <section id="about" className="flex flex-col px-5 container mx-auto relative mb-20">
      <h1 className="text-5xl text-center my-20 font-bold">About Keda ERP</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl mb-7 font-bold">Keep innovating to support growth</h3>
          <p className="text-lg mb-5 text-slate-500">
            We believe that every business should have an equal opportunity to grow. Adhering to
            these guidelines, we continue to innovate to encourage the development of various
            businesses in Indonesia through the use of technology.
          </p>
          <p className="text-lg text-slate-500">
            Keda ERP is here as the most complete and integrated cloud-based ERP solution to improve
            efficiency and productivity of various business operations.
          </p>
        </div>
        <div className="justify-center hidden md:flex">
          <img className="w-96" src={innovationLogo}></img>
        </div>
      </div>
    </section>
  );
}
