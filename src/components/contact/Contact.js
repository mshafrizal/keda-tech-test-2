import chatLogo from '../../assets/undraw_chat_re_re1u.svg';
import scheduleLogo from '../../assets/undraw_calendar_re_ki49.svg';
import callLogo from '../../assets/undraw_phone_call_re_hx6a.svg';
export default function Contact() {
  return (
    <section id="contact" className="flex flex-col px-5 container mx-auto mb-20">
      <h1 className="text-5xl text-center my-20 font-bold">Discuss your business need with us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded border border-sky-100 shadow-md shadow-sky-100 hover:shadow-sky-200 flex flex-col justify-end cursor-pointer">
          <img src={chatLogo} className="mb-4"></img>
          <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
          <p className="text-md">Consult with our agent via live chat</p>
        </div>
        <div className="p-5 rounded border border-sky-100 shadow-md shadow-sky-100 hover:shadow-sky-200 flex flex-col justify-end cursor-pointer">
          <img src={callLogo} className="mb-4"></img>
          <h3 className="text-2xl font-bold mb-2">Phone Call</h3>
          <p className="text-md">Consult your business need. Office hours: 09:00 - 17:00</p>
        </div>
        <div className="p-5 rounded border border-sky-100 shadow-md shadow-sky-100 hover:shadow-sky-200 flex flex-col justify-end cursor-pointer">
          <img src={scheduleLogo} className="mb-4"></img>
          <h3 className="text-2xl font-bold mb-2">Schedule a Meeting</h3>
          <p className="text-md">Pick your time for a live demo with our team</p>
        </div>
      </div>
    </section>
  );
}
