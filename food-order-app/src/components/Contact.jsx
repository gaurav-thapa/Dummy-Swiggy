export default function Contact() {
  return (
    <div className="container mx-auto">
      <h1 className=" text-2xl text-center mt-14 mb-5">Contact Us</h1>
      <form className="mb-20 sm:w-1/2 md:w-1/3 mx-auto p-5 shadow-xl rounded">
        <div className="flex flex-col mb-5">
          <label>Name</label>
          <input className="border-2 p-2"></input>
        </div>
        <div className="flex flex-col mb-5">
          <label>Message</label>
          <textarea className="border-2"></textarea>
        </div>
        <div className="text-center">
          <button className="p-2 bg-green-600 text-white rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
